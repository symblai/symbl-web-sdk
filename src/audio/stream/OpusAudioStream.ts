import {AudioStream} from "./AudioStream";
import {OpusConfig} from "../../types";
import {Recorder} from "symbl-opus-encdec";

export class OpusAudioStream extends AudioStream {

    private opusEncoder: Recorder;

    private config: OpusConfig = {
        "encoderComplexity": 6,
        "encoderFrameSize": 20,
        "encoderSampleRate": 48000,
        "maxFramesPerPage": 40,
        "numberOfChannels": 1,
        "rawOpus": true,
        "streamPages": true
    }

    constructor (sourceNode?: MediaStreamAudioSourceNode, config?: OpusConfig) {

        super(sourceNode);

        if (config) {
            this.config = config;
        }

        // Validate `config` and throw appropriate error if the validation fails
        
        this.processAudio = this.processAudio.bind(this);
        this.attachAudioProcessor = this.attachAudioProcessor.bind(this);
        this.attachAudioSourceElement = this.attachAudioSourceElement.bind(this);
        this.attachAudioDevice = this.attachAudioDevice.bind(this);
        this.attachAudioCallback = this.attachAudioCallback.bind(this);

    }

    processAudio (audioData: unknown): void {

        super.onProcessedAudio(audioData);

    }

    async attachAudioProcessor (reInitialise?: boolean): Promise<void> {
        if (reInitialise && this.opusEncoder) {

            this.resetOpusEncoder();

        }

        if (!this.opusEncoder) {

            this.mediaStream = await this.mediaStreamPromise;
            this.config.sourceNode = <MediaStreamAudioSourceNode>this.sourceNode;
            console.log("===== sourceNode ======", this.config.sourceNode);
            this.opusEncoder = new Recorder(this.config);

        }

        await this.opusEncoder.start();
        this.opusEncoder.ondataavailable = this.processAudio;

    }

    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        super.attachAudioSourceElement(audioSourceDomElement);
        await this.attachAudioProcessor(true);

    }

    async detachAudioSourceElement (): Promise<void> {

        await super.detachAudioSourceElement();

    }

    async updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        await super.updateAudioSourceElement(audioSourceDomElement);

    }

    async attachAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        await super.attachAudioDevice(
            deviceId,
            mediaStream
        );
        await this.attachAudioProcessor(true);

    }

    async detachAudioDevice (): Promise<void> {

        await super.detachAudioDevice();
        this.resetOpusEncoder();

    }

    async updateAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        await super.updateAudioDevice(
            deviceId,
            mediaStream
        );

    }

    attachAudioCallback (audioCallback: (audioData) => void): void {

        super.attachAudioCallback(audioCallback);

    }

    private async resetOpusEncoder() {
        if (this.opusEncoder) {
            await this.opusEncoder.pause();
            this.opusEncoder.ondataavailable = () => {};
            await this.opusEncoder.close();
            this.opusEncoder = null;
        }
    }

}
