import {AudioStream} from "./AudioStream";

export class PCMAudioStream extends AudioStream {
    constructor(sourceNode: MediaStreamAudioSourceNode) {
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

            this.processorNode.onaudioprocess = this.processAudio;

        }

    }

    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

        super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();

    }

    async detachAudioSourceElement (): Promise<void> {

        super.detachAudioSourceElement();

    }

    updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): void {

        super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();

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

    attachAudioCallback (audioCallback: (audioData) => void): void {

        super.attachAudioCallback(audioCallback);

    }

}
