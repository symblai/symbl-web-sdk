import {DelegatedEventTarget, SymblEvent} from "../../events";
import {InvalidAudioElementError, InvalidAudioInputDeviceError, NoAudioInputDeviceDetectedError} from "../../error";
import Logger from "../../logger";
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

    private recentlyDisconnectedDevice = false;

    /**
     * Used to determine if an audio stream is processing using an input device or DOM element.
     */
    public deviceProcessing = true;

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

    private async mediaStreamResolution (mediaStream: MediaStream) {

        this.mediaStream = mediaStream;
        await this.createNewContext(mediaStream);

    }

    private async createNewContext (mediaStream: MediaStream) {

        const {sampleRate} = mediaStream.getAudioTracks()[0].getSettings();
        this.audioContext = new AudioContext({sampleRate});
        this.sourceNode = this.audioContext.createMediaStreamSource(mediaStream);
        await this.suspendAudioContext();

    }

    /**
     * Accesses MediaStream from device through the browser
     * @param deviceId string
     * @returns MediaStream
     */
    static async getMediaStream (deviceId = "default"): Promise<MediaStream> {

        let stream = await navigator.mediaDevices.getUserMedia({
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

                throw new InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");

            } else if (deviceId === "default") {

                foundDevice = inputDevices.find((dev) => dev.groupId === foundDevice.groupId && dev.deviceId !== deviceId);

            }
            stream = await navigator.mediaDevices.getUserMedia({
                "audio": {
                    "deviceId": {
                        "exact": foundDevice.deviceId
                    }
                },
                "video": false
            });

        } else {

            throw new InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");

        }

        return stream;

    }

    /**
     * Returns the current sample rate of the AudioContext
     * @returns number
     */
    getSampleRate (): number {

        return this.audioContext.sampleRate;

    }

    /**
     * Suspends hardware access of AudioContext if AudioContext is currently running
     */
    async suspendAudioContext (): Promise<void> {

        if (this.audioContext && this.audioContext.state === "running") {

            await this.audioContext.suspend();

        } else {

            this.logger.warn("Audio context is not running.");

        }

    }

    /**
     * Resumes a previously suspended AudioContext
     */
    async resumeAudioContext (): Promise<void> {

        if (this.audioContext && this.audioContext.state === "suspended") {

            await this.audioContext.resume();

        }

    }

    /**
     * Connects a DOM element with an audio source to the websocket stream
     * @param audioSourceDomElement HTMLAudioElement
     */
    async attachAudioSourceElement (audioSourceDomElement: HTMLAudioElement): Promise<void> {

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
        this.deviceProcessing = false;
        const event = new SymblEvent(
            "audio_source_connected",
            this.audioContext.sampleRate
        );
        this.dispatchEvent(event);

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

    /**
     * Disconnects the audio source DOM element from the websocket connection
     */
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
                this.sourceNode = null;

            }
            if (this.processorNode) {

                this.processorNode.disconnect();
                this.processorNode = null;

            }
            this.dispatchEvent(new SymblEvent("audio_source_disconnected"));

        } else {

            this.logger.warn("Your audio context is already closed.");

        }

    }

    /**
     * Detaches from any currently connected DOM Audio element and attaches to provided element
     * @param audioSourceDomElement HTMLAudioElement
     */
    updateAudioSourceElement (audioSourceDomElement: HTMLAudioElement): void {

        await this.detachAudioSourceElement();
        await this.attachAudioSourceElement(audioSourceDomElement);

    }

    /**
     * Attaches audio device either through default browser method creating a MediaStream or via a passed in MediaStream
     * @param deviceId string
     * @param mediaStream MediaStream
     */
    async attachAudioDevice (deviceId = "default", mediaStream?: MediaStream): Promise<void> {

        this.deviceId = deviceId;
        try {

            if (this.audioContext) {

                await this.detachAudioDevice();

            }

            // If a media stream is passed in attach to the AudioStream
            if (mediaStream) {

                this.mediaStream = mediaStream;

                // Else if a media stream is not already attached create a new one.

            } else if (deviceId !== "default") {

                this.mediaStream = await AudioStream.getMediaStream(deviceId);

            } else {

                this.mediaStream = await this.mediaStreamPromise;

            }

            await this.createNewContext(this.mediaStream);

            // Create the sourceNode, processorNode and gainNode using the Audio Context.
            this.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.processorNode = this.audioContext.createScriptProcessor(
                1024,
                1,
                1
            );
            this.gainNode = this.audioContext.createGain();
            await this.resumeAudioContext();
            this.deviceProcessing = true;

            navigator.mediaDevices.ondevicechange = async (event) => {

                if (this.mediaStream) {

                    const devices = await navigator.mediaDevices.enumerateDevices();
                    const tracks = this.mediaStream?.getAudioTracks();
                    if (tracks?.length) {

                        const foundDevice = devices.find((dev) => dev.kind === "audioinput" && dev.deviceId === deviceId && dev.label === tracks[0].label);
                        if (!foundDevice && !this.recentlyDisconnectedDevice) {

                            this.recentlyDisconnectedDevice = true;
                            this.dispatchEvent(new SymblEvent("audio_source_disconnected"));
                            window.setTimeout(
                                () => {

                                    this.recentlyDisconnectedDevice = false;

                                },
                                1000
                            );

                        }

                    }

                }

            };

        } catch (e) {

            throw e;

        }

    }

    async detachAudioDevice (): Promise<void> {

        if (this.audioContext && this.audioContext.state !== "closed") {

            await this.audioContext.close();

            if (this.sourceNode) {

                this.sourceNode.disconnect();
                this.sourceNode = null;

            }
            if (this.gainNode) {

                this.gainNode.disconnect();
                this.gainNode = null;

            }
            if (this.processorNode) {

                this.processorNode.disconnect();
                this.processorNode = null;

            }
            this.mediaStream = null;

            this.dispatchEvent(new SymblEvent("audio_source_disconnected"));

        } else {

            this.logger.warn("Your audio context is already closed.");

        }

    }

    async updateAudioDevice (deviceId: string, mediaStream?: MediaStream): Promise<void> {

        // Invoke `detachAudioDevice` function
        await this.detachAudioDevice();

        // Invoke `attachAudioDevice` function with the new `deviceId` and optional `mediaStream`
        await this.attachAudioDevice(
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
