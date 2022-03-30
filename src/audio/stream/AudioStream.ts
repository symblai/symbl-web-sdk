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

    protected mediaStreamPromise: any = Promise.resolve();

    private deviceId: string;

    constructor (sourceNode?: MediaStreamAudioSourceNode) {

        super();
        this.logger = new Logger();
        if (sourceNode) {

            this.sourceNode = sourceNode;
            if (sourceNode.context?.state === "running" || sourceNode.context?.state === "suspended") {

                this.audioContext = sourceNode.context as AudioContext;

            }
            this.mediaStream = this.sourceNode.mediaStream;

        } else {
            this.mediaStreamPromise = AudioStream.getMediaStream();
            this.mediaStreamPromise.then(mediaStream => {
                this.mediaStream = mediaStream;
                this.createNewContext(mediaStream);
            });
        }

        this.attachAudioSourceElement = this.attachAudioSourceElement.bind(this);
        this.detachAudioSourceElement = this.detachAudioSourceElement.bind(this);
        this.updateAudioSourceElement = this.updateAudioSourceElement.bind(this);
        this.attachAudioDevice = this.attachAudioDevice.bind(this);
        this.detachAudioDevice = this.detachAudioDevice.bind(this);
        this.updateAudioDevice = this.updateAudioDevice.bind(this);
        this.attachAudioCallback = this.attachAudioCallback.bind(this);
        this.attachAudioProcessor = this.attachAudioProcessor.bind(this);
        this.processAudio = this.processAudio.bind(this);
        this.onProcessedAudio = this.onProcessedAudio.bind(this);

        /*
         * If the `AudioContext` present in the `MediaStreamAudioSourceNode` is `running` or `suspended` then re-use that instance or recreate otherwise.
         * Add function bindings here
         */

    }

    private createNewContext(mediaStream: MediaStream) {
        const sampleRate = mediaStream.getAudioTracks()[0].getSettings().sampleRate;
        this.audioContext = new AudioContext({ sampleRate });
        this.sourceNode = this.audioContext.createMediaStreamSource(mediaStream);
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

    getSampleRate(): number {
        return this.audioContext.sampleRate;
    }

    async suspendAudioContext() {
        if (this.audioContext.state === "running") {
            await this.audioContext.suspend();
        } else {
            this.logger.warn("Audio context is not running.");
        }
    }

    async resumeAudioContext() {
        if (this.audioContext.state === "suspended") {
            await this.audioContext.resume();
        }
    }

    async attachAudioSourceElement (audioSourceDomElement: any): Promise<void> {

        // Const validateElement = element => {

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

            
                await this.attachAudioSourceElement(source);

            }

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
             * console.log(this.audioContext);
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
        this.deviceId = deviceId;
        try {
            // TODO:
            // If can reinitialize audio context with new device, not necessary
            // if (this.audioContext && this.audioContext.state === "running") {
            //     await this.detachAudioDevice();
            //     this.audioContext = new AudioContext();
            // }


            // If a media stream is passed in attach to the AudioStream
            if (mediaStream) {

                this.mediaStream = mediaStream;

            // Else if a media stream is not already attached create a new one.
            } else if (!this.mediaStream) {

                this.mediaStream = await AudioStream.getMediaStream(deviceId);

            }

            // Create the sourceNode, processorNode and gainNode using the Audio Context.
            this.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.processorNode = this.audioContext.createScriptProcessor(
                1024,
                1,
                1
            );
            this.gainNode = this.audioContext.createGain();

            navigator.mediaDevices.ondevicechange = async event => {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const foundDevice = devices.find((dev) => dev.kind === "audioinput" && dev.deviceId === this.deviceId);
                if (!foundDevice) {
                    this.dispatchEvent(new SymblEvent("audio_source_disconnected"));
                }
            }

        } catch (e) {

            throw e;

        }

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

        // Invoke `detachAudioDevice` function
        this.detachAudioDevice();

        // Invoke `attachAudioDevice` function with the new `deviceId` and optional `mediaStream`
        this.attachAudioDevice(
            deviceId,
            mediaStream
        );
    }

    attachAudioCallback (audioCallback: (audioData) => void): void {

        this.audioCallback = audioCallback;

    }

    protected attachAudioProcessor (): void {

        throw new TypeError("Not implemented!");

    }

    protected processAudio (audioEvent: unknown): void {

        throw new TypeError("Not implemented!");

    }

    onProcessedAudio (audioData: unknown): void {

        if (this.audioCallback) {
            this.audioCallback(audioData);

        } else {

            this.logger.warn("No audio callback attached. Audio not being proceessed.");

        }

    }

}
