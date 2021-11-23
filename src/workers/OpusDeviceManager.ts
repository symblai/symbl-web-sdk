import {NullError, ConnectionError} from "../core/services/ErrorHandler";

import Logger from "../core/services/Logger";
import Store from "../core/services/Storage";
import isBrowser from "../browser";
import {Recorder} from "symbl-opus-encdec";


/**
 * Default browser-specific logic.
 */
export default class OpusDeviceManager {

    logger: Logger;

    currentStream: any;

    config: any;

    source: MediaStreamAudioSourceNode;

    constructor(config: any, logger: Logger) {

        this.logger = logger || new Logger();

        this.config = config;

    }

    getContext(): AudioContext {
        if (this.currentStream) {
            return this.currentStream.audioContext;
        }
    }

    async pauseStream(): Promise<void> {
        if (this.currentStream) {
            this.currentStream.pause();
        }
    }

    setGain (value: number): void {
        if (this.currentStream) {
            this.currentStream.setRecordingGain(value);
        }
    }

    async deviceConnect(connection): Promise<AudioContext> {
        this.logger.info("Sybml: Connecting with Opus encoding.");
        if (this.config) {
            this.logger.info("Sybml: Connecting with Opus encoding 2.");
            if (!connection) {

                throw new NullError("Websocket connection is missing.");

            }

            this.currentStream = new Recorder(this.config);

            await this.currentStream.start();

            this.currentStream.ondataavailable = arrayBuffer => {
                connection.sendAudio(arrayBuffer);
            };
        }
        return this.getContext();
    }

    async stopAudioSend(): Promise<void> {

        if (this.currentStream) {
            this.pauseStream();
            this.currentStream.ondataavailable = () => {};
        }
    }

    async deviceDisconnect(): Promise<void> {
        if (this.currentStream) {
            // await this.currentStream.stop();
            await this.currentStream.close();
            this.currentStream = null;
        }
    }
}
