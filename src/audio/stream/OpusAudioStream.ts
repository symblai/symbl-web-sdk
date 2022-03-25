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

        // Validate `config` and throw appropriate error if the validation fails
        this.mediaStreamPromise.then(() => {
            if (config) {
                this.config = config;
            }
            this.config.sourceNode = <MediaStreamAudioSourceNode>this.sourceNode;
            this.opusEncoder = new Recorder(this.config);
        })
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

        if (reInitialise) {

            this.config.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.opusEncoder = new Recorder(this.config);

        }

        if (this.opusEncoder) {

            await this.opusEncoder.start();
            this.opusEncoder.ondataavailable = this.processAudio;

        }

    }

    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        super.attachAudioSourceElement(audioSourceDomElement);
        await this.attachAudioProcessor(true);

    }

    async detachAudioSourceElement (): Promise<void> {

        super.detachAudioSourceElement();

    }

    updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): void {

        super.updateAudioSourceElement(audioSourceDomElement);

    }

    async attachAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        await super.attachAudioDevice(
            deviceId,
            mediaStream
        );
        await this.attachAudioProcessor(true);

    }

    async detachAudioDevice (): Promise<void> {

        super.detachAudioDevice();

    }

    updateAudioDevice (deviceId: string, mediaStream?: MediaStream): void {

        super.updateAudioDevice(
            deviceId,
            mediaStream
        );

    }

    attachAudioCallback (audioCallback: (audioData) => void): void {

        super.attachAudioCallback(audioCallback);

    }

}
