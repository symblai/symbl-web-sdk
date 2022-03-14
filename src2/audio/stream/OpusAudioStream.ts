import {AudioStream} from "./AudioStream";
import {OpusConfig} from "../../types";
import {Recorder} from "symbl-opus-encdec";

export class OpusAudioStream extends AudioStream {

    private opusEncoder: Recorder;

    private config: OpusConfig

    constructor (sourceNode: MediaStreamAudioSourceNode, config: OpusConfig) {

        super(sourceNode);

        // Validate `config` and throw appropriate error if the validation fails
        this.config = config;

        this.config.sourceNode = <MediaStreamAudioSourceNode>sourceNode;
        this.opusEncoder = new Recorder(this.config);

    }

    processAudio (audioData: unknown): void {

        super.onProcessedAudio(audioData);

    }

    attachAudioProcessor (reInitialise?: boolean): void {

        if (reInitialise) {

            this.config.sourceNode = <MediaStreamAudioSourceNode> this.sourceNode;
            this.opusEncoder = new Recorder(this.config);

        }

        if (this.opusEncoder) {

            this.opusEncoder.start();
            this.opusEncoder.ondataavailable = this.processAudio;

        }

    }

    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor(true);

    }

    async detachAudioSourceElement (): Promise<void> {

        super.detachAudioSourceElement();

    }

    updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): void {

        super.updateAudioSourceElement(audioSourceDomElement);

    }

    async attachAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        super.attachAudioDevice(
            deviceId,
            mediaStream
        );
        this.attachAudioProcessor();

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

    voidattachAudioCallback (audioCallback: (audioData) => void): void {

        super.attachAudioCallback(audioCallback);

    }

}
