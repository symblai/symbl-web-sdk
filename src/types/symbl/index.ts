

interface SymblConfig {
    appId?: string;
    appSecret?: string;
    accessToken?: string;
    basePath?: string;
    logLevel?: string;
}

type InsightType = "action_item" | "question" | "follow_up";

interface StreamingAPIStopRequest {
    type: "stop_request"
}

interface StreamingAPIModifyRequest {
    type: "modify_request";
    speechRecognition: {
        sampleRateHertz: number;
    }
}

interface StreamingAPIStartRequest {
    type: "start_request";
    insightTypes?: InsightType[];
    customVocabulary?: string[];
    config?: Config;
    speaker?: Speaker;
    noConnectionTimeout?: number;
    disconnectOnStopRequest?: boolean;
    disconnectOnStopRequestTimeout?: number;
}

interface Speaker {
    userId?: string;
    name?: string;
}

interface Config {
    confidenceThreshold?: number;
    speechRecognition?: SpeechRecognition;
    meetingTitle?: string;
}

type Encoding = 'LINEAR16' | 'FLAC' | 'MULAW' | 'Opus';
interface SpeechRecognition {
    encoding?: Encoding;
    sampleRateHertz?: number;
}

export {
    SymblConfig,
    StreamingAPIStopRequest,
    StreamingAPIModifyRequest,
    StreamingAPIStartRequest,
    Speaker,
    Config,
    SpeechRecognition,
    Encoding,
    InsightType
}
