import {AudioStream} from "./AudioStream";
import {SymblEvent} from "../../events";

export class LINEAR16AudioStream extends AudioStream {

    /**
     * Converts audio data from Big Endian to Little Endian and sends to audio processor
     * @param audioEvent any
     */
    processAudio (audioEvent: any): void {

        /*
         * Conversion logic from Big Endian to Little Endian
         * Send the processed audio by invoking super.onProcessedAudio(convertedAudioData)
         */

        const inputData = audioEvent.inputBuffer.getChannelData(0);
        const targetBuffer = new Int16Array(inputData.length);
        for (let index = inputData.length; index > 0; index -= 1) {

            targetBuffer[index] = 32767 * Math.min(
                1,
                inputData[index]
            );

        }

        // Send audio stream to websocket.
        super.onProcessedAudio(targetBuffer.buffer);

    }

    /**
     * Connects the audio data to the browser audio processor
     */
    attachAudioProcessor (): void {

        if (this.processorNode) {

            this.sourceNode.disconnect();
            this.processorNode.disconnect();
            if (this.gainNode) {
                this.gainNode.disconnect();
                this.sourceNode.connect(this.gainNode);
                this.gainNode.connect(this.processorNode);
            } else {
                this.sourceNode.connect(this.processorNode);
            }

            // Element processing doesn't use gain.

            this.processorNode.connect(this.audioContext.destination);
            this.processorNode.onaudioprocess = this.processAudio;

        } else {

            this.logger.warn("Audio processor not attached.");

        }

    }

    /**
     * Attaches <audio> DOM element to the audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<any> {

        const element = await super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
        return element;

    }

    /**
     * Detaches <audio> DOM element from the audio processor
     */
    async detachAudioSourceElement (): Promise<void> {

        await super.detachAudioSourceElement();

    }

    /**
     * Detaches current DOM element and attaches new <audio> DOM element to audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<any> {

        await super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();

    }

    /**
     * Attaches browser audio input device source to audio processor
     * @param deviceId string
     * @param mediaStream MediaStream
     */
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

    /**
     * Detaches audio input device from audio processor
     */
    async detachAudioDevice (): Promise<void> {

        await super.detachAudioDevice();

    }

    /**
     * Updates the audio device on device change
     * @param deviceId string
     * @param mediaStream MediaStream
     */
    async updateAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        await super.updateAudioDevice(
            deviceId,
            mediaStream
        );

    }

}
