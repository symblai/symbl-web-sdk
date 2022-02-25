enum SymblConnectionType {
    STREAMING = "streaming",
    SUBSCRIBE = "subscribe"
};

enum ConnectionState {
    CONNECTING,
    CONNECTED,
    DISCONNECTED,
    TERMINATED
};

enum ConnectionProcessingState {
    PROCESSING,
    ATTEMPTING,
    NOT_PROCESSING,
    STOPPING
}