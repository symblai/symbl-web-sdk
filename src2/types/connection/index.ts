export enum SymblConnectionType {
    STREAMING = "streaming",
    SUBSCRIBE = "subscribe"
};

export enum ConnectionState {
    CONNECTING,
    CONNECTED,
    DISCONNECTING,
    DISCONNECTED,
    TERMINATED
};

export enum ConnectionProcessingState {
    PROCESSING,
    ATTEMPTING,
    NOT_PROCESSING,
    STOPPING
}