import { ConnectionConfig } from "../connection";

export interface SymblStreamingAPIConnection {

    stop: () => void;

    start: (options: ConnectionConfig) => Promise<any>;

    sendAudio: (audioData: unknown) => void;

    close: () => void;

    connectionId: string;

    conversationId: string;
}

/**
 * stop: async () => {
        try {


            return {};
        } catch (e) {
            throw e;
        }
    },

    start: (options) => {
 

        return new Promise((resolveS, rejectS) => {
            realtimeClient.sendStart(resolveS, rejectS);
        });
    },

    sendAudio: (data) => {
        realtimeClient.sendAudio(data);
    },

    close: () => {
        realtimeClient.webSocket.disconnect();
        this.cache.remove(options.id);
    },

    connectionId: realtimeClient.id,
    conversationId: realtimeClient.conversationId,
 */