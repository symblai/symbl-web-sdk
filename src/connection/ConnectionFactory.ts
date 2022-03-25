import {
    AudioStream
} from "../audio";
import {
    ConnectionConfig,
    ConnectionProcessingState,
    ConnectionState,
    StreamingAPIConnectionConfig,
    SubscribeAPIConnectionConfig,
    SymblConnectionType
} from "../types";
import {
    StreamingAPIConnection,
    SubscribeAPIConnection
} from "../api";
import {
    InvalidValueError
} from "../error";


const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
export class ConnectionFactory {

    async instantiateConnection (connectionType: SymblConnectionType, sessionId: string, audioStream?: AudioStream): Promise < StreamingAPIConnection | SubscribeAPIConnection > {

        let ConnectionClass, connection;
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        switch (connectionType) {

        case SymblConnectionType.STREAMING:
            try {

                connection = new StreamingAPIConnection(
                    sessionId,
                    audioStream
                );

                // Return the instantiated `Connection` type
                return connection as StreamingAPIConnection;

            } catch (e) {

                throw e;

            }
        case SymblConnectionType.SUBSCRIBE:
            try {

                connection = new SubscribeAPIConnection(sessionId);
                
                // Return the instantiated `Connection` type
                return connection as SubscribeAPIConnection;

            } catch (e) {

                throw e;

            }
        default:
            // If the validation fails for `connectionType`, throw `InvalidValueError`
            throw new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'.");

        }

    }

}
