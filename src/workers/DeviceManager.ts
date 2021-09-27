const {NullError, ConnectionError} = require("../core/services/ErrorHandler");

const Logger = require("../core/services/Logger");

const Store = require("../core/services/Storage");

const isBrowser = require("../browser");

export = class DeviceManager {

    logger: typeof Logger;

    store: typeof Store;

    context: AudioContext = null;

    currentStream: MediaStream;

    isClosing = false;

    isConnecting = false;

    constructor (logger: typeof Logger, store: typeof Store) {

        this.logger = logger || new Logger();
        this.store = store || new Store().init();

        this.logger.info(isBrowser());

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

        const localMediaStream = await navigator.mediaDevices.getUserMedia({
            "audio": {
                "sampleRate": {
                    "ideal": 48000
                }
            },
            "video": false
        });

        this.logger.debug(localMediaStream);

        this.logger.debug(localMediaStream.getTracks());

        const devices = await navigator.mediaDevices.enumerateDevices();
        this.logger.debug("All Devices:");
        devices.forEach((device) => {

            this.logger.debug(`${device.kind}: ${device.label} id = ${device.deviceId}`);

        });

        try {

            const defaultDevice = devices.filter((dev) => dev.deviceId === "default" && dev.kind === "audioinput");

            if (defaultDevice.length > 0) {

                this.logger.info(`Symbl: Default device: ${defaultDevice[0]}`);

                const device = devices.filter((dev) => {

                    return dev.deviceId !== "default" &&
                    defaultDevice[0].label.includes(dev.label) &&
                    dev.kind === "audioinput";

                });

                this.logger.info(`Symbl: Default device matches: ${device[0]}`);

                if (device.length > 0) {

                    this.logger.info(`The device to be used for stream: ${device[0]}`);

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

            return localMediaStream;

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /**
     * Connects MediaStream device to Symbl Websocket endpoint
     * @param {object} connection - Symbl Streaming API Websocket connection
     */
    async deviceConnect (connection: SymblRealtimeConnection): Promise<void> {

        if (!this.isConnecting) {

            if (!connection) {

                throw new NullError("Websocket connection is missing.");

            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

            if (!AudioContext) {

                throw new NullError("AudioContext support is missing in this browser.");

            }

            this.isConnecting = true;

            this.logger.info("Symbl: Attempting to send audio stream to Realtime connection");

            const streamSource = await this.getDefaultDevice();
            const context = new AudioContext();
            this.context = context;
            const source = context.createMediaStreamSource(streamSource);
            let gainNode, processor;
            if (!window.AudioContext) {

                processor = context.createJavascriptNode(
                    1024,
                    1,
                    1
                );
                gainNode = context.createGainNode();

            } else {

                processor = context.createScriptProcessor(
                    1024,
                    1,
                    1
                );
                gainNode = context.createGain();

            }
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

            navigator.mediaDevices.ondevicechange = () => {

                this.logger.info("Symbl: Attempting to change device");

                this.deviceDisconnect().then(() => {

                    setTimeout(
                        () => this.deviceConnect(connection),
                        100
                    );

                });

            };

            this.isConnecting = false;

        }

    }

    deviceDisconnect (): Promise<void> {

        return new Promise((resolve) => {

            this.logger.debug("Attempting to close connection.");
            if (!this.isClosing && this.context.state !== "closed") {

                this.logger.debug("Closing connection");
                this.isClosing = true;
                this.context.close().then(() => {


                    this.currentStream.getAudioTracks().forEach((track) => {

                        if (track.readyState === "live") {

                            if (!isBrowser().safari) {

                                track.stop();

                            }
                            track.enabled = false;

                        }

                    });
                    this.logger.debug("Connection closed");
                    this.isClosing = false;
                    resolve();

                });

            }
            this.logger.debug("Connection already closed");
            resolve();

        });

    }

}
