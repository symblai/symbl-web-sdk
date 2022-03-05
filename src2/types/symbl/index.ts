

export interface SymblConfig {
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

export type InsightType = "action_item" | "question" | "follow_up";

export interface StreamingAPIStopRequest {
    type: "stop_request"
}

export interface StreamingAPIModifyRequest {
    type: "modify_request";
    speechRecognition: {
        sampleRateHertz: number;
    }
}

export interface StreamingAPIStartRequest {
    type: "start_request";
    insightTypes?: InsightType[];
    customVocabulary?: string[];
    config?: Config;
    speaker?: Speaker;
    noConnectionTimeout?: number;
    disconnectOnStopRequest?: boolean;
    disconnectOnStopRequestTimeout?: number;
}

export interface Speaker {
    userId?: string;
    name?: string;
}

export interface Config {
    confidenceThreshold?: number;
    speechRecognition?: SpeechRecognition;
    meetingTitle?: string;
}

export type Encoding = 'LINEAR16' | 'FLAC' | 'MULAW' | 'Opus';
export interface SpeechRecognition {
    encoding?: Encoding;
    sampleRateHertz?: number;
}
