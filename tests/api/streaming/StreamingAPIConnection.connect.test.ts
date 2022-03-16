import Symbl from "../../../src/symbl";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
jest.mock("@symblai/symbl-js/build/client.sdk.min")
import { PCMAudioStream, OpusAudioStream } from "../../../src/audio";
import { StreamingAPIConnection } from '../../../src/api';
import { NoConnectionError, HandshakeError } from "../../../src/error";
// jest.mock('../../src/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState } from "../../../src/types";


let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, audioStream, sourceNode, streamingAPIConnection;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    validConnectionConfig = {
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
    const audioContext = new AudioContext();
    sourceNode = audioContext.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
});

test(
    "StreamingAPIConnection.connect - Testing a successful connection attempt",
    (done) => {
        streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED;
        const logSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        streamingAPIConnection.connect().then(() => {
            expect(streamingAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
            expect(logSpy).toBeCalledTimes(0);
            done();
        })
        expect(streamingAPIConnection.connectionState).toBe(ConnectionState.CONNECTING);
    }
);

test(
    "StreamingAPIConnection.connect - Testing a terminated connection attempt",
    async () => {
        streamingAPIConnection.sdk = {
            createStream: jest.fn(() => {
                throw new Error("An error happened.");
            })
        }
        streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED;
        const logSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        await streamingAPIConnection.connect();
        expect(streamingAPIConnection.connectionState).toBe(ConnectionState.TERMINATED);
    }
);

test(
    "StreamingAPIConnection.connect - Attempting to connect when connectionState is CONNECTED",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED
        const logSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        await streamingAPIConnection.connect()
        expect(streamingAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
        expect(logSpy).toBeCalledTimes(1);
    }
);

// test(
//     "StreamingAPIConnection.connect - Connection attempt fails due to internet connection",
//     async () => {
//         try {
//             await streamingAPIConnection.connect();
//         } catch (e) {
//             expect(e).toBe(new NoConnectionError("Connection attempt failed due to no internet connection."));
//             expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
//             expect(streamingAPIConnection.isConnected()).toBe(false);
//         }
//     }
// );

// test(
//     "StreamingAPIConnection.connect - Connection attempt fails due to initial handshake",
//     async () => {
//         try {
//             streamingAPIConnection.connect();
//         } catch (e) {
//             expect(e).toBe(new HandshakeError("Connection attempt faild during initial handshake."));
//             expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);            
//             expect(streamingAPIConnection.isConnected()).toBe(false);
//         }
//     }
// );