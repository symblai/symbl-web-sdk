import { InsightType } from "../symbl/index";

type EventTypes =
    "connected" |
    "disconnected" |
    "started_listening" |
    "processing_started" |
    "processing_stopped" |
    "conversation_created" |
    "conversation_completed" |
    "session_modified" |
    "error" |
    "speech_recognition" |
    "message" |
    "topic" |
    "tracker" |
    "action_item" |
    "follow_up" |
    "question" |
    "audio_source_connected" |
    "audio_source_disconnected" |
    "audio_source_changed" |
    "offline"
;

interface RealtimeUser {
    userId: string;
    name: string;
    id: string;
}

interface RawSpeechPayload {
    words: {
        word: string;
        startTime: {
            seconds: string;
            nanos: string;
        };
        endTime: {
            seconds: string;
            nanos: string;
        };
    };
    transcript: string;
    confidence: number;
}

interface RealtimeSpeechData {
    type: string;
    isFinal: boolean;
    payload: {
        raw: {
            alternatives: RawSpeechPayload[];
        };
    };
    punctuated: {
        transcript: string;
    };
    user: RealtimeUser;
}

interface RealtimeMessageData {
    from: RealtimeUser;
    payload: {
        content: string;
        contentType: string;
    };
    id: string;
    channel: {
        id: string;
    };
    metadata: {
        disablePunctuation: boolean;
        timezoneOffset: number;
        originalContent: string;
        words: string;
        originalMessageId: string;
    };
    dismissed: boolean;
    duration: {
        startTime: string;
        endTime: string;
    };
}

interface RealtimeInsightData {
    id: string;
    confidence: number;
    messageReference: {
        id: string;
    };
    hints: {
        key: string;
        value: string;
    }[];
    type: InsightType;
    assignee: RealtimeUser;
    dueBy: {
        value: string;
    };
    tags: {
        type: string;
        text: string;
        beginOffset: number;
        value: {
            value: any;
        };
    }[];
    dismissed: boolean;
    payload: {
        content: string;
        contentType: string;
    };
    from: RealtimeUser;
}


interface RealtimeTopicData {
    id: string;
    messageRefereces: {
        id: string;
        relation: string;
    }[];
    phrases: string;
    rootWords: {
        text: string;
    }[];
    score: number;
    type: "topic";
}

interface RealtimeTrackerData {
    name: string;
    matches: {
        type: string;
        value: string;
        messageRefs: {
            id: string;
            text: string;
            offset: number;
        }[];
        insightRefs: any;
    }[];
}

type SymblData = RealtimeSpeechData | RealtimeMessageData | RealtimeInsightData | RealtimeTopicData

export {
    SymblData,
    RealtimeUser,
    RawSpeechPayload,
    RealtimeSpeechData,
    RealtimeMessageData,
    RealtimeInsightData,
    RealtimeTopicData,
    RealtimeTrackerData,
    EventTypes
}