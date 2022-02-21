interface RealtimeUser {
    userId: string;
    name: string;
    id: string;
}

interface SymblRealtimeConfig {
    /**
     * Connection ID. Will be a random UUID if not provided.
     */
    id: string;

    /**
     * Types of insights to return. If not provided, no insights will be returned.
     */
    insightTypes?: string[];

    /**
     * Configuration for this request.
     */
    config?: RealtimeOptionsConfig;

    /**
     * Speaker identity to use for audio in this WebSocket connection. If omitted,
     * no speaker identification will be used for process
     */
    speaker?: RealtimeUser;
    handlers?: RealtimeHandlers;
    reconnectOnError?: boolean;

    /**
     * Labs only feature
     *
     * This parameter allows you to set your Streaming API connection in such a way
     * that even when the stop_request is sent. The connection does not drop-off, only
     * the processing is stopped and the conversationId and connection is kept live
     * for 1800 seconds by default. You can always override this value by passing
     * the disconnectOnStopRequest parameter.
     *
     * This allows you to stop and start the Streaming API processing without dropping
     * the WebSocket connection, so that you can stop and resume the processing in the
     * middle of a call and optimize the Streaming API usage costs.
     */
    disconnectOnStopRequest?: boolean;

    /**
     * Labs only feature
     *
     * This parameter allows you to override the idle time out (if a WebSocket connection is idle for 30 minutes).
     * Set this parameter with a value between 0 to 3600 seconds. If the idle connection
     * needs to be kept alive beyond 3600 seconds, you have to restart the connection
     * at 3600 seconds elapsed.
     *
     * If the value is passed as 0, the WebSocket connection is dropped when stop_request
     * is received. The default value is 1800.
     */
    disconnectOnStopRequestTimeout?: number;

    /**
     * Labs only feature
     *
     * When this parameter is set to noConnectionTimeout = 600 secs and if there is no
     * graceful termination using stop_request message sent explicitly when there just
     * one WebSocket connection, the connectionId and conversationId are kept valid
     * for 600 seconds before finalizing the connection, after which connectionId will
     * be not available to subscribe and conversationId will have all the last know
     * information associated with it.
     */
    noConnectionTimeout?: number;

    /**
     * For passing in an external MediaStreamAudioSourceNode object. By default the
     * Web SDK will handle audio context and source nodes on it's own, though if you
     * wish to handle that externally we've provided that option.
     */
    sourceNode: MediaStreamAudioSourceNode;
}

interface RealtimeOptionsConfig {
    /**
     * The name of the meeting.
     */
    meetingTitle?: string;

    /**
     * Minimum confidence score that you can set for an API to consider it as valid insight.
     * The minimum confidence score should be in the range <=0.5 to <=1.0
     * (greater than or equal to 0.5 and less than or equal to 1.0.). Default value is 0.5.
     */
    confidenceThreshold?: number;

    /**
     * Your timezone offset from UTC in minutes
     */
    timezoneOffset?: number;


    languageCode?: string;

    /**
     * The rate of the incoming audio stream.
     */
    sampleRateHertz?: number;

    /**
     * Audio Encoding in which the audio will be sent over the WebSocket.
     */
    encoding?: string;

    speechRecognition?: {
        encoding?: string;
        sampleRateHertz?: number;
    }
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
    type: string;
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
    socre: number;
    type: string;
}

interface RealtimeHandlers {
    onSpeechDetected?: (speechData: RealtimeSpeechData[]) => void;
    onMessageResponse?: (messageData: RealtimeMessageData[]) => void;
    onInsightResponse?: (insightData: RealtimeInsightData[]) => void;
    onTopicResponse?: (topicData: RealtimeTopicData[]) => void;
    onDataReceived?: (data: unknown) => void;
    ondevicechange?: any;
}

interface SymblRealtimeConnection {
    id: string;
    conversationId: string;
    sendAudio: (audioData: unknown) => void;
    stop: () => void;
    start: (options: any) => void;
    close: () => void;
}
