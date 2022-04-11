import {
    Encoding,
    InsightType,
    Speaker,
    StreamingAPIModifyRequest,
    StreamingAPIStartRequest,
    StreamingAPIStopRequest
} from "../symbl";
import {
    RealtimeHandlers
} from "../streaming/handlers";

enum SymblConnectionType {
    STREAMING = "streaming",
    SUBSCRIBE = "subscribe"
}

enum SymblAudioStreamType {
    OPUS = "OPUS",
    LINEAR16 = "LINEAR16",
}

enum ConnectionState {
    CONNECTING,
    CONNECTED,
    DISCONNECTING,
    DISCONNECTED,
    TERMINATED
}

enum ConnectionProcessingState {
    PROCESSING,
    ATTEMPTING,
    NOT_PROCESSING,
    STOPPING
}

interface SymblTrackersConfig {
    name: string;
    vocabulary: string[];
}

interface StreamingAPIConnectionConfig {

    /**
     * Connection ID. Will be a random UUID if not provided.
     */
    id?: string;

    /**
     * Types of insights to return. If not provided, no insights will be returned.
     */
    insightTypes?: string[]

    /**
     * Configuration for this request.
     */
    config?: {
        confidenceThreshold?: number;
        meetingTitle?: string;
        encoding?: string;
        sampleRateHertz?: number;
    };

    /**
     * Speaker identity to use for audio in this WebSocket connection. If omitted,
     * no speaker identification will be used for process
     */
    speaker?: Speaker;
    handlers?: RealtimeHandlers;
    reconnectOnError?: boolean;

    /**
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
     * When this parameter is set to noConnectionTimeout = 600 secs and if there is no
     * graceful termination using stop_request message sent explicitly when there just
     * one WebSocket connection, the connectionId and conversationId are kept valid
     * for 600 seconds before finalizing the connection, after which connectionId will
     * be not available to subscribe and conversationId will have all the last know
     * information associated with it.
     */
    noConnectionTimeout?: number;

    trackers?: SymblTrackersConfig[];
}

interface SubscribeAPIConnectionConfig {
    id?: string;
    sessionId?: string;
}

type ConnectionConfig = StreamingAPIConnectionConfig | SubscribeAPIConnectionConfig | StreamingAPIStartRequest;

export {
    SymblConnectionType,
    SymblAudioStreamType,
    ConnectionState,
    ConnectionProcessingState,
    ConnectionConfig,
    StreamingAPIConnectionConfig,
    SubscribeAPIConnectionConfig
};
