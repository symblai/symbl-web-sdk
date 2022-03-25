interface OpusConfig {
    numberOfChannels: number;
    encoderSampleRate: number;
    encoderFrameSize: number;
    maxFramesPerPage: number;
    encoderComplexity: number;
    streamPages: boolean;
    rawOpus: boolean;
    sourceNode?: MediaStreamAudioSourceNode;
};

export {
    OpusConfig
}