import {AudioStream} from "./AudioStream";
import {SymblEvent} from "../../events";
import {SymblAudioStreamType} from "../../types";

export class LINEAR16AudioStream extends AudioStream {

    public type = SymblAudioStreamType.LINEAR16;

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

        if (!this.deviceProcessing) {

            const outputBuffer = audioEvent.outputBuffer
            const inputBuffer = audioEvent.inputBuffer;

            // Loop through the output channels (in this case there is only one)
            for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
              const input = inputBuffer.getChannelData(channel);
              const output = outputBuffer.getChannelData(channel);

              // Loop through the 4096 samples
              for (let sample = 0; sample < inputBuffer.length; sample++) {
                // make output equal to the same as the input
                output[sample] = input[sample];
              }
            }

        }

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
    private async attachElement (audioSourceDomElement: any): Promise<any> {

        const element = await super.attachElement(audioSourceDomElement);
        this.attachAudioProcessor();
        const event = new SymblEvent(
            "audio_source_connected",
            this.audioContext.sampleRate
        );
        window.setTimeout(
            () => {

                this.dispatchEvent(event);

            },
            1
        );
        return element;

    }

    /**
     * Detaches <audio> DOM element from the audio processor
     */
    private detachElement (): void {

        super.detachElement();

    }

    /**
     * Detaches current DOM element and attaches new <audio> DOM element to audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async updateElement (audioSourceDomElement: any): Promise<any> {

        const newElement = await super.updateElement(audioSourceDomElement);
        this.attachAudioProcessor();
        return newElement;

    }

    /**
     * Attaches <audio> DOM element to the audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async attachAudioSourceElement (audioSourceDomElement: any): Promise<any> {

        const element = await this.attachElement(audioSourceDomElement);
        return element;

    }

    /**
     * Detaches <audio> DOM element from the audio processor
     */
    detachAudioSourceElement (): void {

        this.detachElement();

    }

    /**
     * Detaches current DOM element and attaches new <audio> DOM element to audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async updateAudioSourceElement (audioSourceDomElement: any): Promise<any> {

        const newElement = await super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
        return newElement;

    }

    /**
     * Attaches <audio> DOM element to the audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async attachAudioSourceElement (audioSourceDomElement: any): Promise<any> {

        const element = await super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
        const event = new SymblEvent(
            "audio_source_connected",
            this.audioContext.sampleRate
        );
        window.setTimeout(
            () => {

                this.dispatchEvent(event);

            },
            1
        );
        return element;

    }

    /**
     * Detaches <audio> DOM element from the audio processor
     */
    detachAudioSourceElement (): void {

        super.detachAudioSourceElement();

    }

    /**
     * Detaches current DOM element and attaches new <audio> DOM element to audio processor
     * @param audioSourceDomElement HTMLAudioElement
     */
    async updateAudioSourceElement (audioSourceDomElement: any): Promise<any> {

        const newElement = await super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
        return newElement;

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

        window.setTimeout(
            () => {

                this.dispatchEvent(event);

            },
            1
        );

    }

    /**
     * Detaches audio input device from audio processor
     */
    detachAudioDevice (): void {

        super.detachAudioDevice();

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
