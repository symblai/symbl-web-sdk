import {
    StreamingAPIConnection,
    SubscribeAPIConnection
} from "../api";
import {
    BaseConnection
} from "../connection";
import {
    AudioStream
} from "../audio";
import {
    InvalidValueError
} from "../error";
import {
    SymblConnectionType
} from "../types";


export class ConnectionFactory {

    /**
     * Establishes a connection to a websocket based on connectionType provided and using the provided sessionId
     * @param connectionType SymblConnectionType
     * @param sessionId string
     * @param audioStream AudioStream
     * @returns StreamingAPIConnection or SubscribeAPIConnection
     */
    instantiateConnection (connectionType: SymblConnectionType, sessionId: string, audioStream?: AudioStream) : BaseConnection {

        if (!sessionId) {

            throw new InvalidValueError("`sessionId` is required to create a connection.");

        }

        let connection;
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        switch (connectionType) {

        case SymblConnectionType.STREAMING:
            connection = new StreamingAPIConnection(
                sessionId,
                audioStream
            );

            // Return the instantiated `Connection` type
            return connection;

        case SymblConnectionType.SUBSCRIBE:
            if (audioStream) {

                throw new InvalidValueError(`\`audioStream\` not allowed for type \`${SymblConnectionType.SUBSCRIBE}\`.`);

            }

            connection = new SubscribeAPIConnection(sessionId);

            // Return the instantiated `Connection` type
            return connection;

        default:
            // If the validation fails for `connectionType`, throw `InvalidValueError`
            throw new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'.");

        }

    }

}
