import {AudioStream} from "./AudioStream";
import {SymblEvent} from "../../events";

export class LINEAR16AudioStream extends AudioStream {
    constructor(sourceNode?: MediaStreamAudioSourceNode) {
        super(sourceNode);
    }
    
    processAudio(audioEvent) {
        // Conversion logic from Big Endian to Little Endian
        // Send the processed audio by invoking super.onProcessedAudio(convertedAudioData)

        const inputData = audioEvent.inputBuffer.getChannelData(0);
        const targetBuffer = new Int16Array(inputData.length);
        for (let index = inputData.length; index > 0; index -= 1) {

            targetBuffer[index] = 32767 * Math.min(
                1,
                inputData[index]
            );

        }
        try {
            // Send audio stream to websocket.
            super.onProcessedAudio(targetBuffer.buffer);

        } catch (err) {
            throw err;
        }    
    }
    
    attachAudioProcessor() {
        if (this.processorNode) {

            this.sourceNode.disconnect();
            this.gainNode?.disconnect();
            this.processorNode.disconnect();
            this.sourceNode.connect(this.gainNode);

            // Element processing doesn't use gain.
            this.gainNode?.connect(this.processorNode);

            this.processorNode.connect(this.audioContext.destination);
            this.processorNode.onaudioprocess = this.processAudio;

        } else {

            this.logger.warn('Audio processor not attached.');

        }

    }

    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        await super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();

    }

    async detachAudioSourceElement (): Promise<void> {

        await super.detachAudioSourceElement();

    }

    async updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        await super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();

    }

    async attachAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        await super.attachAudioDevice(
            deviceId,
            mediaStream
        );
        this.attachAudioProcessor();
        const event = new SymblEvent(
            "audio_source_connected",
            this.audioContext.sampleRate
        );
        this.dispatchEvent(event);

    }

    async detachAudioDevice (): Promise<void> {

        await super.detachAudioDevice();

    }

    async updateAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        await super.updateAudioDevice(
            deviceId,
            mediaStream
        );

    }

}
