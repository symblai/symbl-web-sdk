import { Stream } from "stream"

interface SymblConfig {
    appId?: string;
    appSecret?: string;
    accessToken?: string;
    basePath?: string;
    logLevel?: string;
}

interface StreamingAPIConnectionConfig {

}

// {
//     "type": "start_request",
//     "otherData": "somethingElse",
//     "optionalArg": true,
// }

type InsightType = "action_item" | "question"
interface StreamingAPIStartRequest {
    type: "start_request" | "stop_request";
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

interface SpeechRecognition {
    encoding?: 'LINEAR16' | 'FLAC' | 'MULAW' | 'Opus';
    sampleRateHertz?: number;
}

interface SymblData {
    
}

export {
    SymblConfig,
    StreamingAPIConnectionConfig,
    StreamingAPIStartRequest,
    SymblData,
}