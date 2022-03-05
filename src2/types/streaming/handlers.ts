import { 
    RealtimeSpeechData,
    RealtimeMessageData,
    RealtimeInsightData,
    RealtimeTopicData
} from "../event/types";

export interface RealtimeHandlers {
    onSpeechDetected?: (speechData: RealtimeSpeechData[]) => void;
    onMessageResponse?: (messageData: RealtimeMessageData[]) => void;
    onInsightResponse?: (insightData: RealtimeInsightData[]) => void;
    onTopicResponse?: (topicData: RealtimeTopicData[]) => void;
    onDataReceived?: (data: SymblData) => void;
}