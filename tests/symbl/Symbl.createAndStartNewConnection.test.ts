import Symbl from "../../src2/symbl";
import { ConnectionFactory, BaseConnection } from '../../src2/connection';
import { StreamingAPIConnection  } from "../../src2/api";
import { Recorder } from "symbl-opus-encdec";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import { ConnectionProcessingState, ConnectionState } from "../../src2/types";
import { PCMAudioStream, OpusAudioStream } from '../../src2/audio';
import { APP_ID, APP_SECRET } from '../constants';

jest.mock("../../src2/utils");
jest.mock("symbl-opus-encdec");
const startProcessingMock = jest.fn(() => {
    // (StreamingAPIConnection as any).processingState = ConnectionProcessingState.PROCESSING;
})
jest.mock("../../src2/api", () => {
    return {
        StreamingAPIConnection: jest.fn().mockImplementation(() => {
            return {
                connect: jest.fn(() => {
                    (StreamingAPIConnection as any).connectionState = ConnectionState.CONNECTED;
                }),
                startProcessing: startProcessingMock,
                sdk: {
                    createStream: jest.fn()
                },
                stream: {
                    start: jest.fn()
                }
            }
        })
    }
});
jest.mock('../../src2/connection', () => {
    return {
        ConnectionFactory: jest.fn().mockImplementation(() => {
            return {
                instantiateConnection: jest.fn(() => {
                    return new StreamingAPIConnection({} as any, {} as any) as any;
                })
            }
        })
    }
})
// jest.mock("@symblai/symbl-js/build/client.sdk.min");
// jest.mock("@symblai/symbl-js/build/client.sdk.min", () => {
//     return {
//         sdk: jest.fn().mockImplementation(() => {
//             return {
//                 createStream: jest.fn().mockImplementation(() => {
//                     return {
//                         start: jest.fn()
//                     }
//                 })
//             }
//         })
//     }
// });

// const sdkSpy = jest.spyOn((BaseConnection.prototype as any).sdk, 'createStream');
// sdkSpy.mockImplementation(() => {})
// const streamSpy = jest.spyOn(StreamingAPIConnection.prototype as any, 'stream');
// streamSpy.mockImplementation(() => {
//     return {
//         start: jest.fn()
//     }

// });



// jest.mock("../../src2/api", () => {
//     return {
//         StreamingAPIConnection: jest.fn().mockImplementation(() => {
//             return {
//                 startProcessing: jest.fn(() => {
//                     // this.processingState = ConnectionProcessingState.PROCESSING;
//                 }),
//                 connect: jest.fn(() => {
//                 }),
//                 processingState: ConnectionProcessingState.NOT_PROCESSING
//             }
//         })
//     }
// });
// jest.mock('../../src2/connection', () => {
//     return {
//         ConnectionFactory: jest.fn().mockImplementation(() => {
//             return {
//                 instantiateConnection: jest.fn(() => {
//                     return new StreamingAPIConnection({} as any, {} as any);
//                 })
//             }
//         })
//     }
// });

// jest.mock('../../src2/audio', () => {
//   // Works and lets you check for constructor calls:
//   return {
//     PCMAudioStream: jest.fn().mockImplementation(() => {
//       return {
//         attachAudioCallback: jest.fn(),
//         getMediaStream: jest.fn(() => {
//             const mediaStream = new MediaStream();
//             return mediaStream;
//         })
//       };
//     }),
//     OpusAudioStream: jest.fn().mockImplementation(() => {
//       return {
//         attachAudioCallback: jest.fn(),
//         getMediaStream: jest.fn(() => {
//             const mediaStream = new MediaStream();
//             return mediaStream;
//         })
//       };
//     }),
//   };
// });


// Invoke `createAndStartNewConnection` with the above arguments.
// If the connection fails to get established, re-throw the error thrown by `StreamingAPIConnection` instance
// Invoke `startProcessing` on the instance of `StreamingAPIConnection`
// Return the connection instance

let pcmStream, opusStream;
beforeEach(() => {

    // will Clear all instances and calls to constructor and all methods:
    // ConnectionFactory.mockClear();
    // StreamingAPIConnection.mockClear()
    ;
});

beforeAll(() => {
    const opusConfig: any = {
        numberOfChannels: 1,
        encoderSampleRate: 48000,
        encoderFrameSize: 20,
        maxFramesPerPage: 40,
        encoderComplexity: 6,
        streamPages: true,
        rawOpus: true
    };
    const context = new AudioContext();
    const mediaStream = new MediaStream();
    const sourceNode = context.createMediaStreamSource(mediaStream);
    opusStream = new OpusAudioStream(sourceNode, opusConfig);
    pcmStream = new PCMAudioStream(sourceNode);

});

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config without passing AudioStream",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            id: "209u3ij",
            insightTypes: ['action_item', 'question'],
            config: {
                meetingTitle: 'My Test Meeting',
                confidenceThreshold: 0.7,
                timezoneOffset: 480,
                languageCode: 'en-US',
            },
            speaker: {
                userId: 'emailAddress',
                name: 'My name'
            },
        };            

        const connectSpy = jest.spyOn(symbl, 'createConnection');
        const connection: any = await symbl.createAndStartNewConnection(connectionConfig);
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);

        // expect(connection.processingState).toBe(ConnectionProcessingState.PROCESSING);
    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config that contains an id",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const id = "asidjf23sdf";
        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            id,
            insightTypes: ['action_item', 'question'],
            config: {
                meetingTitle: 'My Test Meeting',
                confidenceThreshold: 0.7,
                timezoneOffset: 480,
                languageCode: 'en-US',
            },
            speaker: {
                userId: 'emailAddress',
                name: 'My name'
            },
        };
        
        const connectSpy = jest.spyOn(symbl, 'createConnection');
        const connection: any = await symbl.createAndStartNewConnection(connectionConfig);
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);
    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config and passing in PCMAudioStream",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            id: "209u3ij",
            insightTypes: ['action_item', 'question'],
            config: {
                meetingTitle: 'My Test Meeting',
                confidenceThreshold: 0.7,
                timezoneOffset: 480,
                languageCode: 'en-US',
            },
            speaker: {
                userId: 'emailAddress',
                name: 'My name'
            },
        };
        const connection: any = await symbl.createAndStartNewConnection(connectionConfig, pcmStream);
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);
    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config and passing in OpusAudioStream",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            id: "209u3ij",
            insightTypes: ['action_item', 'question'],
            config: {
                meetingTitle: 'My Test Meeting',
                confidenceThreshold: 0.7,
                timezoneOffset: 480,
                languageCode: 'en-US',
            },
            speaker: {
                userId: 'emailAddress',
                name: 'My name'
            },
        };
        const connection: any = await symbl.createAndStartNewConnection(connectionConfig, opusStream);
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);
    }
);

