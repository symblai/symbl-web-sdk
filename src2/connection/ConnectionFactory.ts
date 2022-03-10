import { StreamingAPIConnection, SubscribeAPIConnection } from "../api";
import { AudioStream, OpusAudioStream, PCMAudioStream } from "../audio";
import { InvalidValueError } from "../error";

export class ConnectionFactory {
    async instantiateConnection(connectionType: SymblConnectionType, config: ConnectionConfig, audioStream?: AudioStream) {
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        // Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
        // If the validation fails for `connectionType`, throw `InvalidValueError`
        // Validation of the `config` should be done in the respective class ingesting it. Appropriate error should be bubbled in case of failure in validation.
        // Return the instantiated `Connection` type
        let connection;
        switch(connectionType) {
            case "streaming":
                StreamingAPIConnection.validateConfig(config);
                if (!audioStream) {
                    try {
                        const streamSource = await AudioStream.getMediaStream();
                        const context = new AudioContext();
                        const sourceNode = context.createMediaStreamSource(streamSource);
                        switch((<StreamingAPIConnectionConfig>config).config.encoding?.toLowerCase()) {
                            case "opus":
                                audioStream = new OpusAudioStream(sourceNode, {} as OpusConfig);
                                break;
                            case "linear16":
                            default:
                                audioStream = new PCMAudioStream(sourceNode);
                        }
                    } catch(e) {
                        throw e;
                    }
                }
                try {
                    connection = new StreamingAPIConnection(<SubscribeAPIConnectionConfig>config, audioStream);
                } catch(e) {
                    throw e;
                }
                break;
            case "subscribe":
                // SubscribeAPIConnection.validateConfig(config);
                try {
                    connection = new SubscribeAPIConnection(<SubscribeAPIConnectionConfig>config);
                } catch(e) {
                    throw e;
                }
                break;
            default:
                throw new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'.");
                break;
        }
        return connection;
    }
}