import { StreamingAPIConnection, SubscribeAPIConnection } from "../api";
import { AudioStream, OpusAudioStream, PCMAudioStream } from "../audio";
import { InvalidValueError } from "../error";
import {
    SymblConnectionType,
    ConnectionProcessingState,
    ConnectionState,
    ConnectionConfig,
    StreamingAPIConnectionConfig,
    SubscribeAPIConnectionConfig,
    OpusConfig
} from "../types";


const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
export class ConnectionFactory {
    async instantiateConnection(connectionType: SymblConnectionType, config: ConnectionConfig, audioStream?: AudioStream): Promise<StreamingAPIConnection | SubscribeAPIConnection> {
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        // Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
        // If the validation fails for `connectionType`, throw `InvalidValueError`
        // Validation of the `config` should be done in the respective class ingesting it. Appropriate error should be bubbled in case of failure in validation.
        // Return the instantiated `Connection` type
        let connection, ConnectionClass
        switch(connectionType) {
            case "streaming":
                StreamingAPIConnection.validateConfig(config);
                if (!audioStream) {
                    try {
                        const streamSource = await AudioStream.getMediaStream();
                        const context = new AudioContext();
                        const sourceNode = context.createMediaStreamSource(streamSource);
                        let encoding;
                        let symblConfig = (<StreamingAPIConnectionConfig>config);
                        if (symblConfig.config && symblConfig.config.encoding) {
                            encoding = symblConfig.config.encoding.toLowerCase();
                        } else {
                            encoding = "linear16";
                        }
                        switch(encoding) {
                            case "opus":
                                const opusConfig: any = {
                                    numberOfChannels: 1,
                                    encoderSampleRate: 48000,
                                    encoderFrameSize: 20,
                                    maxFramesPerPage: 40,
                                    encoderComplexity: 6,
                                    streamPages: true,
                                    rawOpus: true
                                };
                                audioStream = new OpusAudioStream(sourceNode, opusConfig);
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
                    return connection as StreamingAPIConnection;
                } catch(e) {
                    throw e;
                }
                break;
            case "subscribe":
                try {
                    connection = new SubscribeAPIConnection(<SubscribeAPIConnectionConfig>config);
                    return connection as SubscribeAPIConnection;
                } catch(e) {
                    throw e;
                }
                break;
            default:
                throw new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'.");
                break;
        }
    }
}