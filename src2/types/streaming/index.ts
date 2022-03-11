import { ConnectionConfig } from "../connection";
import { StreamingAPIStartRequest } from "../symbl";

interface SymblStreamingAPIConnection {

    stop: () => void;

    start: (options?: StreamingAPIStartRequest) => Promise<any>;

    sendAudio: (audioData: unknown) => void;

    close: () => void;

    connectionId: string;

    conversationId: string;

}

export {
    SymblStreamingAPIConnection
}