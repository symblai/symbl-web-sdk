import Symbl from "../../../src2/symbl";
import { uuid } from "../../../src2/utils";
jest.mock("../../../src2/utils");
import { PCMAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types"
import { InvalidValueError } from "../../../src2/error"
import { VALID_INSIGHT_TYPES} from "../../../src2/constants";

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
    let authConfig, symbl, audioStream;
    beforeAll(() => {
        authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        symbl = new Symbl(authConfig);
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        audioStream = new PCMAudioStream(sourceNode);
    });

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

    /*
    // config with invalid insightTypes
    // config with non-numerical confidenceThreshold
    // config with non-string meetingTitle;
    // config with invalid encoding type
    // config with non-numerical sampleRateHertz
    config with non-string userId
    config with non-string name
    config with handlers present
    config with non-boolean reconnectOnError
    config with non-boolean disconnectOnStopRequest
    config with non-numerical disconnectOnStopRequestTimeout
    config without paired disconnectonStopRequest configs
    config with non-numerical noConnectionTimeout
    */
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
                new InvalidValueError(``)
            );
        }
    );

    test(
        `config with non-string meetingTitle;`,
        async () => {
            const invalidConfig = {
                ...validConfig,
                meetingTitle: 123
            }
            await expect(async () => {
                await StreamingAPIConnection.validateConfig(invalidConfig as any)
            }).rejects.toThrow(
                new InvalidValueError(``)
            );
        }
    );

    test(
        `config with invalid encoding type;`,
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
                new InvalidValueError(``)
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
                new InvalidValueError(``)
            );
        }
    );
});