import { 
    RealtimeSpeechData,
    RealtimeMessageData,
    RealtimeInsightData,
    RealtimeTopicData,
    SymblData
} from "../event/types";

interface RealtimeHandlers {
    onDataReceived?: (data: SymblData) => void;
}

export {
    RealtimeHandlers
}