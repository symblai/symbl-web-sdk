import {InvalidAudioElementError, InvalidAudioInputDeviceError, NoAudioInputDeviceDetectedError} from "../../error";
import Logger from "../../logger";
import {SymblEvent, DelegatedEventTarget} from "../../events";
// Import { AudioContext } from "../../utils";

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
export class AudioStream extends DelegatedEventTarget {

    protected logger: Logger;

    public sourceNode: MediaStreamAudioSourceNode | MediaElementAudioSourceNode;

    protected audioCallback: (audioData) => void;

    protected mediaStream: MediaStream;

    public processorNode: ScriptProcessorNode;

    protected audioContext: AudioContext;

    protected gainNode: GainNode;

    protected stream: any;

    constructor (sourceNode?: MediaStreamAudioSourceNode) {

        super();
        this.logger = new Logger();
        if (sourceNode) {

            this.sourceNode = sourceNode;
            if (sourceNode.context?.state === "running" || sourceNode.context?.state === "suspended") {

                this.audioContext = sourceNode.context as AudioContext;

            }
            this.mediaStream = this.sourceNode.mediaStream;

        }
        if (!this.audioContext) {

            this.audioContext = new AudioContext();

        }

        /*
         * If the `AudioContext` present in the `MediaStreamAudioSourceNode` is `running` or `suspended` then re-use that instance or recreate otherwise.
         * Add function bindings here
         */

    }

    static async getMediaStream (deviceId = "default"): Promise<MediaStream> {
        const stream = await navigator.mediaDevices.getUserMedia({
            "audio": true,
            "video": false
        });
        const devices = await navigator.mediaDevices.enumerateDevices();
        const inputDevices = devices.filter((dev) => dev.kind === "audioinput");
        if (inputDevices.length === 0) {

            throw new NoAudioInputDeviceDetectedError("No input devices found.");

        }
        if (deviceId) {
            let foundDevice = inputDevices.find((dev) => dev.deviceId === deviceId);
            if (!foundDevice) {
                if (deviceId === "default" && inputDevices.length) {
                    foundDevice = inputDevices[0];
                } else {
                    throw new InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");
                }

            }
            await stream.getAudioTracks()[0].applyConstraints({
                "deviceId": foundDevice.deviceId
            });

        } else {

            throw new InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");

        }

        return stream;

    }

    async attachAudioSourceElement (audioSourceDomElement: any): Promise<void> {

        // Const validateElement = element => {
        try {

            if (!audioSourceDomElement) {

                throw new InvalidAudioElementError("Element is null. Please pass in a valid audio source dom element.");

            }

            if (![
                "AUDIO",
                "VIDEO",
                "SOURCE"
            ].includes(audioSourceDomElement.nodeName)) {

                throw new InvalidAudioElementError("Please pass in a valid audio source dom element.");

            }

            if (audioSourceDomElement.nodeName === "SOURCE" && (audioSourceDomElement.parentElement && ![
                "AUDIO",
                "VIDEO"
            ].includes(audioSourceDomElement.parentElement.nodeName))) {

                throw new InvalidAudioElementError("Please ensure that audio and video element is the parent element of <source /> element.");

            }

            if (audioSourceDomElement.nodeName === "SOURCE" && !audioSourceDomElement.src) {

                throw new InvalidAudioElementError("Element is missing its `src` property");

            }

         
            if ([
                "AUDIO",
                "VIDEO"
            ].includes(audioSourceDomElement.nodeName)) {

                const source = audioSourceDomElement.firstChild;
                if (source && source.nodeName !== "SOURCE") {
                    throw new InvalidAudioElementError("Child element must be a source element.");

                } else if (source && source.nodeName === "SOURCE") {

                    // if (source && !source.src) {

                    //     console.log("here2");
                    //     throw new InvalidAudioElementError("Element is missing its `src` property");
                    //     console.log("here9");

                    // } else if (source && source.src) {

                    //     console.log("here3");
                    //     audioSourceDomElement = source;

                    // } else {

                    //     console.log("here6");

                    // }
                    this.attachAudioSourceElement(source);

                }
                // console.log("here7");

                // if (!audioSourceDomElement.src) {

                //     console.log("here4");
                //     throw new InvalidAudioElementError("Element is missing its `src` property");
                //     console.log("here5");

                // }

            }

        } catch (e) {

            throw e;

        }

        try {

            // ValidateElement(audioSourceDomElement);
            if (this.audioContext && this.audioContext.state === "running") {

                await this.detachAudioSourceElement();

            }

            const sourceNode = this.audioContext.createMediaElementSource(audioSourceDomElement);
            const processorNode = this.audioContext.createScriptProcessor(
                1024,
                1,
                1
            );
            this.sourceNode = <MediaElementAudioSourceNode>sourceNode;
            this.processorNode = processorNode;
            const event = new SymblEvent(
                "audio_source_connected",
                this.audioContext.sampleRate
            );
            this.dispatchEvent(event);

        } catch (e) {

            throw e;

        }

        /*
         * Validate if the `audioSourceDomElement` is a valid DOM Element granting access to audio data.
         * Failure to do so should be handled and appropriate error should be thrown
         * Check if the `audioContext` already exists and is `running`.
         * If it is, emit `audio_source_disconnected` event and then close the `audioContext`
         * Re-create AudioContext, MediaStream from the active/default audio device if available and invoke `createScriptProcessor` on the `audioContext`
         * Re-assign the class variables
         * Emit `audio_source_connected` event with the updated `sampleRate`
         */

    }

    async detachAudioSourceElement (): Promise<void> {

        if (this.audioContext && this.audioContext.state !== "closed") {

            /*
             * Console.log(this.audioContext);
             * console.log(this.sourceNode);
             * console.log(this.processorNode);
             */
            await this.audioContext.close();
            if (this.sourceNode) {

                this.sourceNode.disconnect();

            }
            if (this.processorNode) {

                this.processorNode.disconnect();

            }
            this.dispatchEvent(new SymblEvent("audio_source_disconnected"));

        } else {

            this.logger.warn("Your audio context is already closed.");

        }

    }

    updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): void {

        this.detachAudioSourceElement();
        this.attachAudioSourceElement(audioSourceDomElement);

    }

    async attachAudioDevice (deviceId: string = "default", mediaStream?: MediaStream): Promise<void> {

        try {

            if (this.audioContext && this.audioContext.state === "running") {
                await this.detachAudioDevice();
                this.audioContext = new AudioContext();
            }

            // const devices: any = await navigator.mediaDevices.enumerateDevices();
            // const device = devices.find((dev) => dev.kind === "audioinput" && dev.deviceId === deviceId);
            // if (!device) {

            //     throw new InvalidAudioInputDeviceError(`Invalid input deviceId: ${deviceId}`);

            // }
            if (mediaStream) {

                this.mediaStream = mediaStream;

            } else if (!this.mediaStream) {

                this.mediaStream = await AudioStream.getMediaStream(deviceId);

            }


            await this.mediaStream.getAudioTracks()[0].applyConstraints({
                "sampleRate": {
                    "ideal": this.audioContext.sampleRate
                }
            });


            this.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.processorNode = this.audioContext.createScriptProcessor(
                1024,
                1,
                1
            );
            this.gainNode = this.audioContext.createGain();

        } catch (e) {

            throw e;

        }

        /*
         * If `mediaStream` is passed in, use it to invoke the `createMediaStreamSource` function later in the flow
         * Else, Validate the `deviceId` passed in corresponds to a valid Audio device and is connected.
         * Failure to do so should result in the `InvalidAudioInputDeviceError`
         * Once the `deviceId` is validated, we get the audio device against the `deviceId` and create the MediaStream
         * If exisiting `audioContext` is active, emit `audio_source_disconnected`
         * Re-create `sourceNode` and `scriptProcessor` and re-assign the class variables
         * Emit `audio_source_connected` event with the new `sampleRate`
         */

    }

    async detachAudioDevice (): Promise<void> {

        if (this.audioContext && this.audioContext.state !== "closed") {

            await this.audioContext.close();

            if (this.sourceNode) {

                // Console.log('this is this.sourceNode.disconnect: ', this.sourceNode.disconnect)
                this.sourceNode.disconnect();

            }
            if (this.gainNode) {

                // Console.log('this is this.gainNode.disconnect: ', this.gainNode.disconnect)
                this.gainNode.disconnect();

            }
            if (this.processorNode) {

                // Console.log('this is this.eprocessorNode.disconnect: ', this.processorNode.disconnect)
                this.processorNode.disconnect();

            }

            this.dispatchEvent(new SymblEvent("audio_source_disconnected"));

        } else {

            this.logger.warn("Your audio context is already closed.");

        }

    }

    updateAudioDevice (deviceId: string, mediaStream?: MediaStream): void {

        this.detachAudioDevice();
        this.attachAudioDevice(
            deviceId,
            mediaStream
        );

        /*
         * Invoke `detachAudioDevice` function
         * Invoke `attachAudioDevice` function with the new `deviceId` and optional `mediaStream`
         */

    }

    attachAudioCallback (audioCallback: (audioData) => void): void {
        this.audioCallback = audioCallback;

    }

    attachStream(stream: any) {
        this.stream = stream;
    }

    protected attachAudioProcessor (): void {

        throw new TypeError("Not implemented!");

    }

    protected processAudio (audioEvent: unknown): void {

        throw new TypeError("Not implemented!");

    }

    onProcessedAudio (audioData: unknown): void {
        if (this.stream) {
            this.stream.sendAudio(audioData);

        } else {

            // this.logger.warn("No audio callback attached. Audio not being proceessed.");

        }

    }

    test (): void {

        // Not implemented

    }

}
