interface OpusConfig {
    numberOfChannels?: number;
    encoderSampleRate?: number;
    encoderFrameSize?: number;
    maxFramesPerPage?: number;
    encoderComplexity?: number;
    streamPages?: boolean;
    rawOpus?: boolean;
    sourceNode?: MediaStreamAudioSourceNode;
    bufferLength?: number;
    encoderPath?: string;
    mediaTrackConstraints?: any;
    monitorGain?: number;
    recordingGain?: number;
    encoderApplication?: number;
    encoderBitRate?: number;
    originalSampleRateOverride?: number;
    resampleQuality?: number;
}

export {
    OpusConfig
};
