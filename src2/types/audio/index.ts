interface OpusConfig {
    numberOfChannels: number;
    encoderSampleRate: number;
    encoderFrameSize: number;
    maxFramesPerPage: number;
    encoderComplexity: number;
    streamPages: boolean;
    sourceNode: MediaStreamAudioSourceNode;
    rawOpus: boolean;
};