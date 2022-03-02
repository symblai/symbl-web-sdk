const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

class AudioStream extends EventTarget {
    private sourceNode: MediaStreamAudioSourceNode;
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
    
    static getMediaStream(deviceId?) {
        // If no audio input device is found, throw `NoAudioInputDeviceDetectedError`
        // Return the MediaStream from associated with the default Audio Device if `useDefaultAudioDevice` is `true`
        // If `deviceId` is passed in, then try and select the specific available instance of that Audio Device and return the MediaStream, else throw `InvalidInputDeviceError`
    }
    
    attachAudioSourceElement(audioSourceDomElement) {
        // Validate if the `audioSourceDomElement` is a valid DOM Element granting access to audio data.
        // Failure to do so should be handled and appropriate error should be thrown
        // Check if the `audioContext` already exists and is `running`.
        // If it is, emit `audio_source_disconnected` event and then close the `audioContext`
        // Re-create AudioContext, MediaStream from the active/default audio device if available and invoke `createScriptProcessor` on the `audioContext`
        // Re-assign the class variables
        // Emit `audio_source_connected` event with the updated `sampleRate`
    }
    
    detachAudioSourceElement() {
        // Check if `audioContext`, `sourceNode` and `processorNode` exist.
        // If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
        // Emit `audio_source_disconnected` event
    }
    
    updateAudioSourceElement(audioSourceDomElement) {
        // Invoke `detachAudioSourceElement` function
        // Invoke `attachAudioSourceElement` function with the new `audioSourceDomElement`
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