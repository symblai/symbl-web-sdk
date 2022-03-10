// import { ConnectionConfig } from "../connection";

interface SymblStreamingAPIConnection {

    stop: () => void;

    start: (options?: StreamingAPIStartRequest) => Promise<any>;

    sendAudio: (audioData: unknown) => void;

    close: () => void;

    connectionId: string;

    conversationId: string;

}