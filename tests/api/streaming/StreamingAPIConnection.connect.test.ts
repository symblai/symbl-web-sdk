import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { NoConnectionError, HandshakeError } from "../../../src2/error";
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';


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
    async () => {

        try {
            streamingAPIConnection.connect();
            expect(streamingAPIConnection.connectionState).toBe(1);
            expect(streamingAPIConnection.isConnected()).toBe(true);

        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "StreamingAPIConnection.connect - Attempting to connect when connectionState is CONNECTED",
    async () => {

        try {


            streamingAPIConnection.connectionState = 1
            streamingAPIConnection.connect();
            expect(streamingAPIConnection.connectionState).toBe(1);
            // check that warning was logged

        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "StreamingAPIConnection.connect - Connection attempt fails due to internet connection",
    async () => {
        try {
            streamingAPIConnection.connect();

        } catch (e) {
            expect(e).toBe(new NoConnectionError("Connection attempt failed due to no internet connection."));
            expect(streamingAPIConnection.connectionState).toBe(3);
            expect(streamingAPIConnection.isConnected()).toBe(false);
        }
    }
);

test(
    "StreamingAPIConnection.connect - Connection attempt fails due to initial handshake",
    async () => {
        try {
            streamingAPIConnection.connect();

        } catch (e) {
            expect(e).toBe(new HandshakeError("Connection attempt faild during initial handshake."));
            expect(streamingAPIConnection.connectionState).toBe(3);            
            expect(streamingAPIConnection.isConnected()).toBe(false);
        }
    }
);