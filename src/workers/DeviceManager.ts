import {NullError, ConnectionError} from "../core/services/ErrorHandler";

import Logger from "../core/services/Logger";

export default class DeviceManager {

    currentStream: MediaStream;

    logger: Logger = new Logger();

    /**
     * Get and return an audio/visual device to access a MediaStream
     */
    async getDefaultDevice (): Promise<MediaStream> {

        let stream = null;
        this.logger.info("Sybml: Attempting to connect to device");
        try {

            stream = await this.getUserDevices();
            this.currentStream = stream;

            this.logger.info("Symbl: Successfully connected to device");
            return stream;

        } catch (err) {

            throw new ConnectionError(err);
            return stream;

        }

    }

    /**
     * Checks if the MediaDeviceInfo includes labels for Apple devices.
     */
    isAppleMicrophone (device: MediaDeviceInfo): boolean {

        return device.label && (
            device.label.includes("MacBook") ||
            device.label.includes("iPhone") ||
            device.label.includes("iPad"));

    }

    /**
     * Gets all available user devices and connects to the appropriate one.
     */
    async getUserDevices (): Promise<MediaStream> {

        const devices = await navigator.mediaDevices.enumerateDevices();
        this.logger.log(`All Devices: ${devices}`);

        const appleDevice = devices.filter((dev) => this.isAppleMicrophone(dev));

        if (appleDevice.length > 0) {

            this.logger.info(`Symbl: Detected Safari. Using device: ${appleDevice[0]}`);

            return navigator.mediaDevices.getUserMedia({
                "audio": {
                    "deviceId": appleDevice[0].deviceId
                },
                "video": false
            });

        }

        try {

            this.logger.info("Sybml: Safari not detected.");
            const defaultDevice = devices.filter((dev) => dev.deviceId === "default" && dev.kind === "audioinput");
            this.logger.info(`Symbl: Default device: ${defaultDevice}`);

            if (defaultDevice.length > 0) {

                const device = devices.filter((dev) => {

                    return dev.deviceId !== "default" &&
                    defaultDevice[0].label.includes(dev.label) &&
                    dev.kind === "audioinput";

                });

                this.logger.info(`Symbl: Default device matches: ${device}`);

                if (device.length > 0) {

                    this.logger.info(`The device to be used for stream: ${device}`);

                    return navigator.mediaDevices.getUserMedia({
                        "audio": {
                            "deviceId": device[0].deviceId
                        },
                        "video": false
                    });

                }

            }

            return navigator.mediaDevices.getUserMedia({
                "audio": true,
                "video": false
            });

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /**
     * Connects MediaStream device to Symbl Websocket endpoint
     * @param {object} connection - Symbl Streaming API Websocket connection
     */
    async deviceConnect (connection: SymblRealtimeConnection): Promise<void> {

        if (!connection) {

            throw new NullError("Websocket connection is missing");

        }


        this.logger.info("Symbl: Attempting to send audio stream to Realtime connection");

        const streamSource = await this.getDefaultDevice();
        const {AudioContext} = window;
        const context = new AudioContext();
        const source = context.createMediaStreamSource(streamSource);
        const processor = context.createScriptProcessor(
            1024,
            1,
            1
        );
        const gainNode = context.createGain();
        source.connect(gainNode);
        gainNode.connect(processor);
        processor.connect(context.destination);
        processor.onaudioprocess = (event) => {

            // Convert to 16-bit payload
            const inputData = event.inputBuffer.getChannelData(0);
            const targetBuffer = new Int16Array(inputData.length);
            for (let index = inputData.length; index > 0; index -= 1) {

                targetBuffer[index] = 32767 * Math.min(
                    1,
                    inputData[index]
                );

            }
            // Send audio stream to websocket.
            try {

                connection.sendAudio(targetBuffer.buffer);

            } catch (err) {

                this.logger.error(err);
                this.logger.trace(err);

            }

        };

    }

}
