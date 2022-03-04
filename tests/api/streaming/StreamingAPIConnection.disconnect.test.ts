import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { NoConnectionError } from "../../../src2/error";
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState } from "../../../src2/types/connection"


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
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
});


// If the `connectionState` is already DISCONNECTED, log at warning level that a connection closure attempt is being made on an already closed connection.
// If the `connectionState` is already TERMINATED, log at warning level that a connection closure attempt is being made on an already terminated connection.
// Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
// Set the `connectionState` to DISCONNECTED
// Set the value of `_isConnected` to `false` and emit the appropriate event
// Any failure to close the connection should be handled, and logged as an error.

test(
    "StreamingAPIConnection.connect - Testing a successful disconnection attempt",
    async () => {

        try {
            streamingAPIConnection.disconnect().then(() => {
                expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
            });
            expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTING);
            expect(streamingAPIConnection.isConnected()).toBe(false);

        } catch (e) {
            throw new Error(e);
        }
    }
);


test(
    "StreamingAPIConnection.connect - Attempt a disconnect when connectionState is already TERMINATED",
    async () => {

        try {
            streamingAPIConnection.connectionState = ConnectionState.TERMINATED;
            streamingAPIConnection.disconnect();
            expect(streamingAPIConnection.connectionState).toBe(ConnectionState.TERMINATED);
            expect(streamingAPIConnection.isConnected()).toBe(false);

        } catch (e) {
            throw new Error(e);
        }
    }
);


test(
    "StreamingAPIConnection.connect - Attempt a disconnect when connectionState is already DISCONNECTED",
    async () => {

        try {
            streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED;
            streamingAPIConnection.disconnect();
            expect(streamingAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
            expect(streamingAPIConnection.isConnected()).toBe(false);

        } catch (e) {
            throw new Error(e);
        }
    }
);

// test(
//     "StreamingAPIConnection.connect - Testing failure to disconnect",
//     async () => {

//         try {
//             const audioStream = new PCMAudioStream();
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


