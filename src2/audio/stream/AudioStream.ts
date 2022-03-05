import { SymblEvent } from "../../events/SymblEvent";

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

export class AudioStream extends EventTarget {
    protected sourceNode: MediaStreamAudioSourceNode;
    protected audioCallback: (audioData) => void;
    
    protected mediaStream: MediaStream;
    protected processorNode: ScriptProcessorNode;
    protected audioContext: AudioContext;
    
    constructor(sourceNode: MediaStreamAudioSourceNode) {
        super();
        
        this.sourceNode = sourceNode;
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
            throw NoAudioInputDeviceDetectedError("No input devices found.");
        }
        if (deviceId) {
            const foundDevice = inputDevices.find(dev => dev.deviceId === deviceId);
            if (!foundDevice) {
                throw InvalidInputDeviceError("Invalid deviceId passed as argument.");
            }
            await stream.getAudioTracks()[0].applyConstraints({
                deviceId: foundDevice.deviceId
            })
        } else {
            throw InvalidInputDeviceError("Invalid deviceId passed as argument.");
        }
        return stream;
    }
    
    async attachAudioSourceElement(audioSourceDomElement) {
        const validateElement = element => {
            if (!element) {
                throw new Error(`Element is null. Please pass in a valid audio source dom element.`)
            }
            
            if (!['AUDIO', 'VIDEO', 'SOURCE'].includes(element.nodeName)) {
                throw new Error(`Please pass in a valid audio source dom element.`)
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
        if (this.audioContext && this.sourceNode && this.processorNode) {
            await this.audioContext.close();
            await this.sourceNode.disconnect();
            await this.processorNode.disconnect();
            this.dispatchEvent(new SymblEvent('audio_source_disconnected'));
        }
    }
    
    updateAudioSourceElement(audioSourceDomElement) {
        this.detachAudioSourceElement();
        this.attachAudioSourceElement(audioSourceDomElement);
    }
    
    attachAudioDevice(deviceId, mediaStream?: MediaStream) {
        // If `mediaStream` is passed in, use it to invoke the `createMediaStreamSource` function later in the flow
        // Else, Validate the `deviceId` passed in corresponds to a valid Audio device and is connected.
        // Failure to do so should result in the `InvalidAudioInputDeviceError`
        // Once the `deviceId` is validated, we get the audio device against the `deviceId` and create the MediaStream
        // If exisiting `audioContext` is active, emit `audio_source_disconnected`
        // Re-create `sourceNode` and `scriptProcessor` and re-assign the class variables
        // Emit `audio_source_connected` event with the new `sampleRate`
    }
    
    detachAudioDevice() {
        // Check if `audioContext`, `sourceNode` and `processorNode` exist.
        // If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
        // Emit `audio_source_disconnected` event        
    }
    
    updateAudioDevice(deviceId, mediaStream?: MediaStream) {
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
}