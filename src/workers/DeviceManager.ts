const {
    ConfigError, NullError, ConnectionError
} = require("../core/services/ErrorHandler");

export = class DeviceManager {

    currentStream: any;

    /**
     * Get and return an audio/visual device to access a MediaStream
     * @param {object} deviceConfig - options for MediaStream device
     */
    async getDefaultDevice (deviceConfig: DeviceConfig) {

        if (deviceConfig === null) {

            throw new NullError("Device config is null");

        }
        if (!deviceConfig.audio) {

            throw new ConfigError("`audio` from Device Config not specified");

        }

        let stream = null;
        try {

            stream = await navigator.mediaDevices.getUserMedia(deviceConfig);
            this.currentStream = stream;
            return stream;

        } catch (err) {

            throw new ConnectionError(err);
            return stream;

        }

    }

    /**
     * Connects MediaStream device to Symbl Websocket endpoint
     * @param {object} connection - Symbl Streaming API Websocket connection
     */
    async deviceConnect (connection: any) {

        if (connection === null) {

            throw new NullError("Websocket connection is null");

        }
        if (!connection) {

            throw new ConfigError("Websocket connection is missing");

        }

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

                throw new ConnectionError(err);

            }

        };

    }

}
