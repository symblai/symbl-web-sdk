const {ConfigError, NullError} = require("../core/services/ErrorHandler");

const Logger = require("../core/services/Logger");

export = class DeviceManager {

    currentStream: MediaStream;

    logger: typeof Logger = new Logger();

    /**
     * Get and return an audio/visual device to access a MediaStream
     * @param {object} deviceConfig - options for MediaStream device
     */
    async getDefaultDevice (deviceConfig: MediaStreamConstraints): Promise<MediaStream> {

        if (!deviceConfig) {

            throw new NullError("Device config is missing");

        }
        if (!deviceConfig.audio) {

            throw new ConfigError("`audio` from Device Config not specified");

        }

        let stream = null;
        this.logger.info("Sybml: Attempting to connect to device");
        try {

            stream = await navigator.mediaDevices.getUserMedia(deviceConfig);
            this.currentStream = stream;

            this.logger.info("Symbl: Successfully connected to device");
            return stream;

        } catch (err) {

            this.logger.error(err);
            this.logger.trace(err);
            return stream;

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

        const streamSource = await this.getDefaultDevice({"audio": true,
            "video": false});
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
