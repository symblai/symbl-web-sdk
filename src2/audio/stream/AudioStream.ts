import { SymblEvent } from "../../events/SymblEvent";

import { NoAudioInputDeviceDetectedError, InvalidAudioInputDeviceError } from "../../error";

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

export class AudioStream extends EventTarget {
    protected sourceNode: MediaStreamAudioSourceNode;
    protected audioCallback: (audioData) => void;
    
    protected mediaStream: MediaStream;
    protected processorNode: ScriptProcessorNode;
    protected audioContext: AudioContext;
    protected gainNode: GainNode;
    
    constructor(sourceNode: MediaStreamAudioSourceNode) {
        super();
        if (sourceNode) {
            this.sourceNode = sourceNode;
            if (sourceNode.context?.state === "running" || sourceNode.context?.state === "suspended") {
                this.audioContext = sourceNode.context as AudioContext;
            }
        }
        if (!this.audioContext) {
            this.audioContext = new AudioContext();
        }
        // If the `AudioContext` present in the `MediaStreamAudioSourceNode` is `running` or `suspended` then re-use that instance or recreate otherwise.
        // Add function bindings here
    }
    
    static async getMediaStream(deviceId: string = "default") {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
        const devices = await navigator.mediaDevices.enumerateDevices();
        const inputDevices = devices.filter(dev => dev.kind === "audioinput");
        if (inputDevices.length === 0) {
            throw new NoAudioInputDeviceDetectedError("No input devices found.");
        }
        if (deviceId) {
            const foundDevice = inputDevices.find(dev => dev.deviceId === deviceId);
            if (!foundDevice) {
                throw new InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");
            }
            await stream.getAudioTracks()[0].applyConstraints({
                deviceId: foundDevice.deviceId
            })
        } else {
            throw new InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");
        }
        return stream;
    }
    
    async attachAudioSourceElement(audioSourceDomElement) {
        const validateElement = element => {
            if (!element) {
                throw new Error(`Element is null. Please pass in a valid audio source dom element.`)
            }
            
            if (!element.src) {
                throw new Error(`Please ensure src attribute is supplied.`)                
            }

            if (!['AUDIO', 'VIDEO', 'SOURCE'].includes(element.nodeName)) {
                throw new Error(`Please pass in a valid audio source dom element.`)
            }

            if (element.nodeName === 'SOURCE' && !['AUDIO', 'VIDEO'].includes(element.parentElement.nodeName)) {
                throw new Error(`Please ensure that audio and video element is the parent element of <source /> element.`)
            }
        }

        try {
            validateElement(audioSourceDomElement);

            if (this.audioContext && this.audioContext.state === "running") {
                await this.detachAudioSourceElement();
            }

            const audioContext = new AudioContext();
            const sourceNode = audioContext.createMediaElementSource(audioSourceDomElement);
            const processorNode = audioContext.createScriptProcessor(1024, 1, 1);
            this.audioContext = audioContext;
            this.sourceNode = sourceNode;
            this.processorNode = processorNode;
            const event = new SymblEvent('audio_source_connected', this.audioContext.sampleRate);
            this.dispatchEvent(event);
        } catch (e) {
            throw Error(e);
        }
        
        // Validate if the `audioSourceDomElement` is a valid DOM Element granting access to audio data.
        // Failure to do so should be handled and appropriate error should be thrown
        // Check if the `audioContext` already exists and is `running`.
        // If it is, emit `audio_source_disconnected` event and then close the `audioContext`
        // Re-create AudioContext, MediaStream from the active/default audio device if available and invoke `createScriptProcessor` on the `audioContext`
        // Re-assign the class variables
        // Emit `audio_source_connected` event with the updated `sampleRate`
    }
    
    async detachAudioSourceElement() {
        if (this.audioContext) {
            await this.audioContext.close();
        }
        if (this.sourceNode) {
            await this.sourceNode.disconnect();
        }
        if (this.processorNode) {
            await this.processorNode.disconnect();
        }
        this.dispatchEvent(new SymblEvent('audio_source_disconnected'));
    }
    
    updateAudioSourceElement(audioSourceDomElement) {
        this.detachAudioSourceElement();
        this.attachAudioSourceElement(audioSourceDomElement);
    }
    
    async attachAudioDevice(deviceId, mediaStream?: MediaStream) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.test();
        const device = devices.find(dev => dev.kind === "audioinput" && dev.deviceId === deviceId);

        if (!device) {
            throw new InvalidAudioInputDeviceError(`Invalid input deviceId: ${deviceId}`)
        }
        if (mediaStream) {
            this.mediaStream = mediaStream;
        }
        if (this.audioContext && this.audioContext.state === "running") {
            console.log('detach called ====')
            this.detachAudioDevice();
            this.audioContext = new AudioContext();
        }
        console.log("======== createMediaStreamSource called ======");
        this.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
        // this.processorNode = this.audioContext.createScriptProcessor(1024, 1, 1);
        // const event = new SymblEvent('audio_source_connected', this.audioContext.sampleRate);

        // If `mediaStream` is passed in, use it to invoke the `createMediaStreamSource` function later in the flow
        // Else, Validate the `deviceId` passed in corresponds to a valid Audio device and is connected.
        // Failure to do so should result in the `InvalidAudioInputDeviceError`
        // Once the `deviceId` is validated, we get the audio device against the `deviceId` and create the MediaStream
        // If exisiting `audioContext` is active, emit `audio_source_disconnected`
        // Re-create `sourceNode` and `scriptProcessor` and re-assign the class variables
        // Emit `audio_source_connected` event with the new `sampleRate`
    }
    
    async detachAudioDevice() {
        if (this.audioContext) {
            await this.audioContext.close();
        }
        if (this.sourceNode) {
            await this.sourceNode.disconnect();
        }
        if (this.gainNode) {
            await this.gainNode.disconnect();
        }
        if (this.processorNode) {
            await this.processorNode.disconnect();
        }
        this.dispatchEvent(new SymblEvent('audio_source_disconnected'));
    }
    
    updateAudioDevice(deviceId, mediaStream?: MediaStream) {
        this.detachAudioDevice();
        this.attachAudioDevice(deviceId, mediaStream);
        // Invoke `detachAudioDevice` function
        // Invoke `attachAudioDevice` function with the new `deviceId` and optional `mediaStream`
    }
    
    attachAudioCallback(audioCallback: (audioData) => void) {
        this.audioCallback = audioCallback;
    }
    
    protected attachAudioProcessor() {
        throw new TypeError(`Not implemented!`);
    }
    
    protected processAudio(audioEvent) {
        throw new TypeError(`Not implemented!`);        
    }
    
    onProcessedAudio(audioData) {
        if (this.audioCallback) {
            this.audioCallback(audioData);
        }
    }

    test() {

    }
}