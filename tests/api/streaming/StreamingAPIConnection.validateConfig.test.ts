import Symbl from "../../../src/symbl";
import { uuid } from "../../../src/utils";
jest.mock("../../../src/utils");
import { PCMAudioStream } from "../../../src/audio";
import { StreamingAPIConnection } from '../../../src/api';
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src/types"
import { InvalidValueError, NotSupportedAudioEncodingError, NotSupportedSampleRateError } from "../../../src/error"
import { VALID_INSIGHT_TYPES, VALID_ENCODING, OPUS_SAMPLE_RATE_HERTZ, LINEAR16_SAMPLE_RATE_HERTZ} from "../../../src/constants";

const validConfig = {
        id: 'valid-id',
        insightTypes: ["action_item", "question"],
        config: {
            confidenceThreshold: 0.9,
            meetingTitle: 'valid-meeting-title',
            encoding: 'LINEAR16',
            sampleRateHertz: 16000,
        },
        speaker: {
            userId: 'valid-user-id',
            name: 'valid-name'
        },
        reconnectOnError: true,
        disconnectOnStopRequest: false,
        disconnectOnStopRequestTimeout: 3600,
        noConnectionTimeout: 3600,
}

describe('streamingAPIConnection.validateConfig', () => {
    // let authConfig, symbl, audioStream;
    // beforeEach(() => {
    //     // authConfig = {
    //     //     appId: APP_ID,
    //     //     appSecret: APP_SECRET
    //     // };
    //     // symbl = new Symbl(authConfig);
    //     const audioContext = new AudioContext();
    //     const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
    //     audioStream = new PCMAudioStream(sourceNode);
    // });

        // Perform validations for received config
        // Explicit validations on required fields to be passed in the `StreamingAPIConnectionConfig`
        // In case any required key/value pair is missing, throw `RequiredParameterAbsentError`
        // In case of any invalid key/value pairs, throw `InvalidValueError`
        // In case the audio encoding is not supported, throw `NotSupportedAudioEncodingError`
        // In case the sample rate is not supported by the AudioEncoding, throw `NotSupportedSampleRateError`
        // If the validation of the `config` is successful, return the validated config


    // config with only id.
    // config with nothing. should generate a uuid
    // config with only id and insightTypes
    // config with only id and config -- all fields filled out
    // config with only id and config -- some optional fields missing
    // config with only id and speaker -- all fields filled out
    // config with only id and speaker -- some optional fields missing
    // config with only id and reconnectOnError
    // config with only id and disconnectOnStopRequest/disconnectOnStopRequestTimeout
    // config with only id and noConnectionTimeout
    // config with all values filled out

    test(
        `Config with only id`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f"
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with nothing. should generate a uuid`,
        async () => {
            const validConnectionConfig = {}
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
            expect(uuid).toBeCalledTimes(1);
        }
    );

    test(
        `config with only id and insightTypes`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                insightTypes: ["action_item", "question"]
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and config -- all fields filled out`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                config: {
                    confidenceThreshold: 0.9,
                    meetingTitle: "My meeting",
                    encoding: "opus",
                    sampleRateHertz: 48000
                }
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and config -- some optional fields missing`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                config: {
                    confidenceThreshold: 0.9,
                    sampleRateHertz: 48000
                }
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and speaker -- all fields filled out`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                speaker: {
                    userId: "123",
                    name: "Adam Voliva"
                }
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and speaker -- some optional fields missing`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                speaker: {
                    name: "Adam Voliva"
                }
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and reconnectOnError`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                reconnectOnError: true
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and disconnectOnStopRequest/disconnectOnStopRequestTimeout`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                disconnectOnStopRequest: false,
                disconnectOnStopRequestTimeout: 1800
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with only id and noConnectionTimeout`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                noConnectionTimeout: 1800
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with all values filled out`,
        async () => {
            const validConnectionConfig = {
                id: "sidfj98s9d8f",
                insightTypes: ["action_item", "question"],
                config: {
                    confidenceThreshold: 0.9,
                    meetingTitle: "My meeting",
                    encoding: "opus",
                    sampleRateHertz: 48000
                },
                speaker: {
                    userId: "123",
                    name: "Adam Voliva"
                },
                reconnectOnError: true,
                disconnectOnStopRequest: false,
                disconnectOnStopRequestTimeout: 1800,
                noConnectionTimeout: 1800
            }
            expect(async () => await StreamingAPIConnection.validateConfig(validConnectionConfig)).not.toThrow();
        }
    );

    test(
        `config with invalid id`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                id: 12345
            }

            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig argument 'id' field should be a type string.`)
            );
        }
    );

    test(
        `config with invalid insightTypes`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                insightTypes: ["action_item", "question", "invalid_type"]
            }

            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'insightTypes' should be an array of valid insightType strings - ${VALID_INSIGHT_TYPES}`)
            );
        }
    );

    test(
        `config with non-numerical confidenceThreshold`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    confidenceThreshold: 'string'
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'config.confidenceThreshold' field should be a type number.`)
            );
        }
    );

    test(
        `config with non-string meetingTitle;`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    meetingTitle: 123
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'config.meetingTitle' field should be a type string.`)
            );
        }
    );

    test(
        `config with invalid encoding: Not a type string`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    encoding: 3
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'config.encoding' field should be a type string.`)
            );
        }
    );

    test(
        `config with invalid encoding: Not included in list of supported encodings`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    encoding: 'INVALID16'
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new NotSupportedAudioEncodingError(`StreamingAPIConnectionConfig: 'config.encoding' only supports the following types - ${VALID_ENCODING}.`)
            );
        }
    );

    test(
        `config with non-numerical sampleRateHertz;`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    encoding: 'LINEAR16',
                    sampleRateHertz: 'onehundred'
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'config.sampleRateHertz' field should be a type number.`)
            );
        }
    );

    test(
        `config with a LINEAR16 encoding && 'sampleRateHertz' numerical value that is NOT supported.`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    encoding: 'LINEAR16',
                    sampleRateHertz: 99999
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For LINEAR16 encoding, supported sample rates are ${LINEAR16_SAMPLE_RATE_HERTZ}.`)
            );
        }
    );

    test(
        `config with an Opus encoding && 'sampleRateHertz' numerical value that is NOT supported.`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                config: {
                    encoding: 'Opus',
                    sampleRateHertz: 99999
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For Opus encoding, supported sample rates are ${OPUS_SAMPLE_RATE_HERTZ}.`)
            );
        }
    );

    test(
        `config with invalid speaker.userId`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                speaker: {
                    userId: 123,
                    name: 'valid-name'
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'speaker.userId' field should be a type string.`)
            );
        }
    );

    test(
        `config with invalid speaker.name`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                speaker: {
                    userId: 'valid-userId',
                    name: 123
                }
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'speaker.name' field should be a type string.`)
            );
        }
    );

    test(
        `config with invalid type for 'reconnectOnError`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                reconnectOnError: 'non-numerical-invalid-type'
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'reconnectOnError' field should be a type boolean.`)
            );
        }
    );

    test(
        `config with invalid type for 'disconnectOnStopRequest'`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                disconnectOnStopRequest: 'non-boolean-invalid-type',
                disconnectOnStopRequestTimeout: 3000
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'disconnectOnStopRequest' field should be a type boolean.`)
            );
        }
    );

    test(
        `config with 'disconnectOnStopRequest' set to false, but 'disconnectOnStopRequest' is an invalid type.`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                disconnectOnStopRequest: false,
                disconnectOnStopRequestTimeout: 'non-numerical-invalid-type'
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: Please specify 'disconnectOnStopRequestTimeout' field with a positive integer between 0 and 3600.`)
            );
        }
    );

    test(
        `config with 'disconnectOnStopRequest' set to false, but 'disconnectOnStopRequest' is out of range (0 - 3600).`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                disconnectOnStopRequest: false,
                disconnectOnStopRequestTimeout: 9999
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: Please specify 'disconnectOnStopRequestTimeout' field with a positive integer between 0 and 3600.`)
            );
        }
    );

    test(
        `config with invalid type for 'noConnectionTimeout'.`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                noConnectionTimeout: 'non-numerical-invalid-type',
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'noConnectionTimeout' optional field should be a type number.`)
            );
        }
    );

    test(
        `config with 'noConnectionTimeout' that is out of range (0 - 3600)`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                noConnectionTimeout: 9999,
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(`StreamingAPIConnectionConfig: 'noConnectionTimeout' optional field should be a type number.`)
            );
        }
    );
});