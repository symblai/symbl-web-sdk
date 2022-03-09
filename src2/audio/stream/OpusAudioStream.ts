import { AudioStream } from "./AudioStream";
import { Recorder } from "symbl-opus-encdec";

export class OpusAudioStream extends AudioStream {
    private opusEncoder: Recorder;
    private config: OpusConfig
    
    constructor(sourceNode: MediaStreamAudioSourceNode, config: OpusConfig) {
        super(sourceNode);
        
        // Validate `config` and throw appropriate error if the validation fails
        this.config = config;
        
        this.config.sourceNode = sourceNode;
        this.opusEncoder = new Recorder(this.config);
    }
    
    processAudio(audioData) {
        super.onProcessedAudio(audioData)
    }
    
    attachAudioProcessor(reInitialise?) {
        if (reInitialise) {
            this.config.sourceNode = super.sourceNode;
            this.opusEncoder = new Recorder(this.config);
        }
        
        if (this.opusEncoder) {
            this.opusEncoder.start();
            this.opusEncoder.ondataavailable = this.processAudio;
        }
    }
    
    async attachAudioSourceElement(audioSourceDomElement) {
        super.attachAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor(true);
    }
    
    async detachAudioSourceElement() {
        super.detachAudioSourceElement();
    }
    
    updateAudioSourceElement(audioSourceDomElement) {
        super.updateAudioSourceElement(audioSourceDomElement);
        this.attachAudioProcessor();
    }
    
    async attachAudioDevice(deviceId, mediaStream?: MediaStream) {
        super.attachAudioDevice(deviceId, mediaStream);
        this.attachAudioProcessor();
    }
    
    async detachAudioDevice() {
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