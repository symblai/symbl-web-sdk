import { ConnectionConfig } from "../connection";

export interface SymblStreamingAPIConnection {

    stop: () => void;

    start: (options: ConnectionConfig) => Promise<any>;

    sendAudio: (audioData: unknown) => void;

    close: () => void;

    connectionId: string;

    conversationId: string;

}