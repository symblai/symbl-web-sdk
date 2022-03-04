import { AudioStream } from "./AudioStream";

export class PCMAudioStream extends AudioStream {
    constructor(sourceNode: MediaStreamAudioSourceNode) {
        super(sourceNode);
    }
    
    processAudio(audioEvent) {
        // Conversion logic from Big Endian to Little Endian
        // Send the processed audio by invoking super.onProcessedAudio(convertedAudioData)
    }
    
    attachAudioProcessor() {
        if (super.processorNode) {
            super.processorNode.onaudioprocess = this.processAudio;
        }
    }
    
    attachAudioSourceElement(audioSourceDomElement) {
        super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
    }
    
    detachAudioSourceElement() {
        super.detachAudioSourceElement();
    }
    
    updateAudioSourceElement(audioSourceDomElement) {
        super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
    }
    
    attachAudioDevice(deviceId, mediaStream?: MediaStream) {
        super.attachAudioDevice(deviceId, mediaStream);
        this.attachAudioProcessor();
    }
    
    detachAudioDevice() {
        super.detachAudioDevice();
    }
    
    updateAudioDevice(deviceId, mediaStream?: MediaStream) {
        super.updateAudioDevice(deviceId, mediaStream);
        this.attachAudioProcessor();
    }
    
    attachAudioCallback(audioCallback: (audioData) => void) {
        super.attachAudioCallback(audioCallback);
    }
}