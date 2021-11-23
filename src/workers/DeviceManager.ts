import {NullError, ConnectionError} from "../core/services/ErrorHandler";

import Logger from "../core/services/Logger";
import Store from "../core/services/Storage";
import isBrowser from "../browser";


/**
 * Default browser-specific logic.
 */
export default class DeviceManager {

    logger: Logger;

    context: AudioContext = null;

    source: MediaStreamAudioSourceNode;

    currentStream: MediaStream;

    isClosing = false;

    isConnecting = false;

    gainNode: GainNode;

    constructor (logger: Logger, source?: MediaStreamAudioSourceNode) {

        this.logger = logger || new Logger();

        this.logger.debug(isBrowser());

        this.source = source;
        if (this.source) {
            this.context = this.source.context as AudioContext;
        }

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
            "audio": true,
            "video": false
        });

        this.logger.debug(localMediaStream);

        this.logger.debug(localMediaStream.getTracks());

        const devices = await navigator.mediaDevices.enumerateDevices();

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

                    await localMediaStream.getAudioTracks()[0].applyConstraints({
                        "deviceId": device[0].deviceId
                    });

                }

            }

            await localMediaStream.getAudioTracks()[0].applyConstraints({
                "sampleRate": {
                    "ideal": this.context.sampleRate
                }
            });

            return localMediaStream;

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    getContext(): AudioContext {
        return this.context;
    }

    setGain (value: number): void {

        if (this.context && this.currentStream && this.gainNode) {

            this.gainNode.gain.value = value;

        } else {

            this.logger.warn("No device connected.");

        }

    }

    /**
     * Connects MediaStream device to Symbl Websocket endpoint
     * @param {object} connection - Symbl Streaming API Websocket connection
     */
    async deviceConnect (connection: SymblRealtimeConnection): Promise<AudioContext> {

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

            if (!this.context || this.context.state !== "running") {
                this.source = null;
                this.logger.debug("Context not predefined.");
                // this.context.resume();
                this.context = new AudioContext();
            }
            if (!this.source) {
                this.logger.debug("Source not predefined.");
                const streamSource = await this.getDefaultDevice();
                this.source = this.context.createMediaStreamSource(streamSource);
            } else {
                this.currentStream = this.source.mediaStream;
            }
            let processor;
            if (!window.AudioContext && (this.context as any).createJavascriptNode !== undefined) {

                processor = (this.context as any).createJavascriptNode(
                    1024,
                    1,
                    1
                );
                this.gainNode = (this.context as any).createGainNode();

            } else {

                processor = this.context.createScriptProcessor(
                    1024,
                    1,
                    1
                );
                this.gainNode = this.context.createGain();

            }
            this.source.connect(this.gainNode);
            this.gainNode.connect(processor);
            processor.connect(this.context.destination);
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

            /*
             * Device change logic needs to be updated once the
             * ability to modify requests is added.
             *
             *navigator.mediaDevices.ondevicechange = () => {
             *
             *    this.logger.info("Symbl: Attempting to change device");
             *
             *    this.deviceDisconnect().then(() => {
             *
             *        setTimeout(
             *            () => this.deviceConnect(connection),
             *            100
             *        );
             *
             *    });
             *
             *};
             */

            this.isConnecting = false;

        }

        return this.context;

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

        });

    }

}
