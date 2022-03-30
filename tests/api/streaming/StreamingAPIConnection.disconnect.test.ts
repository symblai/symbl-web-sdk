import Symbl from "../../../src/symbl";
// import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
// jest.mock("@symblai/symbl-js/build/client.sdk.min");
import { LINEAR16AudioStream, OpusAudioStream } from "../../../src/audio";
import { StreamingAPIConnection } from '../../../src/api';
import { NoConnectionError } from "../../../src/error";
// jest.mock('../../src/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState } from "../../../src/types/connection"


let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, sourceNode, audioStream, streamingAPIConnection;
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
    audioStream = new LINEAR16AudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection("abc123", audioStream);
    streamingAPIConnection.stream = {
        close: jest.fn()
    }
});


// If the `connectionState` is already DISCONNECTED, log at warning level that a connection closure attempt is being made on an already closed connection.
// If the `connectionState` is already TERMINATED, log at warning level that a connection closure attempt is being made on an already terminated connection.
// Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
// Set the `connectionState` to DISCONNECTED
// Set the value of `_isConnected` to `false` and emit the appropriate event
// Any failure to close the connection should be handled, and logged as an error.

test(
    "StreamingAPIConnection.connect - Testing a successful disconnection attempt",
    (done) => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.disconnect().then(() => {
            expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
            expect(streamingAPIConnection.isConnected()).toBe(false);
            done();
        });
        expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTING);
    }
);

test(
    "StreamingAPIConnection.connect - Testing an unsuccessful disconnection attempt",
    async () => {
            streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
            streamingAPIConnection.stream = {
                close: jest.fn(() => {
                    throw new Error("An error happened.");
                })
            }
            await expect(async () => await streamingAPIConnection.disconnect()).rejects.toThrow();
            expect(streamingAPIConnection.connectionState).toBe(ConnectionState.TERMINATED);
    }
);


test(
    "StreamingAPIConnection.connect - Attempt a disconnect when connectionState is already TERMINATED",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.TERMINATED;
        await streamingAPIConnection.disconnect();
        expect(streamingAPIConnection.connectionState).toBe(ConnectionState.TERMINATED);
        expect(streamingAPIConnection.isConnected()).toBe(false);
    }
);


test(
    "StreamingAPIConnection.connect - Attempt a disconnect when connectionState is already DISCONNECTED",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED;
        await streamingAPIConnection.disconnect();
        expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
        expect(streamingAPIConnection.isConnected()).toBe(false);
    }
);

// test(
//     "StreamingAPIConnection.connect - Testing failure to disconnect",
//     async () => {

//         try {
//             const audioStream = new LINEAR16AudioStream();
//             const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
//             streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED;
//             streamingAPIConnection.disconnect();
//             expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
//             expect(streamingAPIConnection.isConnected()).toBe(false);

//         } catch (e) {
//             throw new Error(e);
//         }
//     }
// );


