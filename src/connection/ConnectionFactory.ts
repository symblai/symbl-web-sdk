import {
    AudioStream,
    OpusAudioStream,
    PCMAudioStream
} from "../audio";
import {
    ConnectionConfig,
    ConnectionProcessingState,
    ConnectionState,
    OpusConfig,
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

    async instantiateConnection (connectionType: SymblConnectionType, config: ConnectionConfig, audioStream ? : AudioStream): Promise < StreamingAPIConnection | SubscribeAPIConnection > {

        let ConnectionClass, connection;
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        switch (connectionType) {

        case "streaming":
            // Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
            StreamingAPIConnection.validateConfig(config);
            if (!audioStream) {

                try {

                    const streamSource = await AudioStream.getMediaStream();
                    const context = new AudioContext();
                    const sourceNode = context.createMediaStreamSource(streamSource);
                    let encoding;
                    const symblConfig = (< StreamingAPIConnectionConfig > config);
                    if (symblConfig.config && symblConfig.config.encoding) {

                        encoding = symblConfig.config.encoding.toLowerCase();

                    } else {

                        encoding = "linear16";

                    }
                    switch (encoding) {

                    case "opus":
                        const opusConfig: any = {
                            "encoderComplexity": 6,
                            "encoderFrameSize": 20,
                            "encoderSampleRate": 48000,
                            "maxFramesPerPage": 40,
                            "numberOfChannels": 1,
                            "rawOpus": true,
                            "streamPages": true
                        };
                        audioStream = new OpusAudioStream(
                            sourceNode,
                            opusConfig
                        );
                        break;
                    case "linear16":
                    default:
                        audioStream = new PCMAudioStream(sourceNode);

                    }

                } catch (e) {

                    throw e;

                }

            }
            try {

                connection = new StreamingAPIConnection(
<
                        SubscribeAPIConnectionConfig > config,
audioStream
                );

                // Return the instantiated `Connection` type
                return connection as StreamingAPIConnection;

            } catch (e) {

                throw e;

            }
        case "subscribe":
            try {

                connection = new SubscribeAPIConnection(< SubscribeAPIConnectionConfig > config);
                
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
