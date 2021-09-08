const {NullError, ConnectionError} = require("../core/services/ErrorHandler");

const Logger = require("../core/services/Logger");

const Store = require("../core/services/Storage");

export = class DeviceManager {

    logger: typeof Logger = new Logger();

    store: typeof Store;

    context: AudioContext;

    isClosing = false;

    currentStream: MediaStream;

    constructor (store: typeof Store) {

        this.store = store || new Store().init();

    }

    /**
     * Get and return an audio/visual device to access a MediaStream
     */
    async getDefaultDevice (): Promise<MediaStream> {

        let stream = null;
        this.logger.info("Sybml: Attempting to connect to device");
        try {

            stream = await this.getUserDevices();

            this.logger.info("Symbl: Successfully connected to device");
            this.currentStream = stream;
            return stream;

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /**
     * Gets all available user devices and connects to the appropriate one.
     */
    async getUserDevices (): Promise<MediaStream> {

        const devices = await navigator.mediaDevices.enumerateDevices();
        this.logger.log(`All Devices: ${devices}`);

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
                            "deviceId": device[0].deviceId,
                            "sampleRate": {
                                "ideal": 48000
                            }
                        },
                        "video": false
                    });

                }

            }

            return navigator.mediaDevices.getUserMedia({
                "audio": {
                    "sampleRate": {
                        "ideal": 48000
                    }
                },
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
        this.context = context;
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

        navigator.mediaDevices.ondevicechange = async () => {

            this.logger.info("Symbl: Attempting to change device");
            // Disconnect is required but fires an error in Chrome?
            await this.deviceDisconnect();
            await this.deviceConnect(connection);

        };

    }

    deviceDisconnect (): Promise<void> {

        return new Promise((resolve) => {

            this.logger.debug("Attempting to close connection.");
            if (!this.isClosing && this.context.state !== "closed") {

                this.logger.debug("Closing connection");
                this.isClosing = true;
                this.currentStream.getTracks().forEach((track) => {

                    if (track.readyState === "live" && track.kind === "audio") {

                        track.stop();

                    }

                });
                this.context.close().then(() => {

                    this.logger.info("Connection closed");
                    this.isClosing = false;
                    resolve();

                });

            }
            this.logger.debug("Connection already closed");
            resolve();

        });

    }

}
