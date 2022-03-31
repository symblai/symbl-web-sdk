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
    AudioStream
} from "../audio";
import {
    InvalidValueError
} from "../error";


const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
export class ConnectionFactory {

    /**
     * Establishes a connection to a websocket based on connectionType provided and using the provided sessionId
     * @param connectionType SymblConnectionType
     * @param sessionId string
     * @param audioStream AudioStream
     * @returns StreamingAPIConnection | SubscribeAPIConnection
     */
    async instantiateConnection (connectionType: SymblConnectionType, sessionId: string, audioStream?: AudioStream): Promise < StreamingAPIConnection | SubscribeAPIConnection > {

        if (!sessionId) {

            throw new InvalidValueError("`sessionId` is required to create a connection.");

        }

        let ConnectionClass, connection;
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        switch (connectionType) {

        case SymblConnectionType.STREAMING:
            connection = new StreamingAPIConnection(
                sessionId,
                audioStream
            );

            // Return the instantiated `Connection` type
            return connection as StreamingAPIConnection;

        case SymblConnectionType.SUBSCRIBE:
            if (audioStream) {

                throw new InvalidValueError(`\`audioStream\` not allowed for type \`${SymblConnectionType.SUBSCRIBE}\`.`);

            }

            connection = new SubscribeAPIConnection(sessionId);

            // Return the instantiated `Connection` type
            return connection as SubscribeAPIConnection;

        default:
            // If the validation fails for `connectionType`, throw `InvalidValueError`
            throw new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'.");

        }

    }

}
