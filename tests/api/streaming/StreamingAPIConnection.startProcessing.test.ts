import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { NoConnectionError } from "../../../src2/error";
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"


let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
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
});


// If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
// If `startRequestData` is passed in, validate it and in failure to do so, throw the appropriate error emmited by validateConfig.
// If `processingState` is PROCESSING or ATTEMPTING, then log a warning stating an attempt to `startProcessing` on a connection that is already processing or has already initiated the call.
// Else, set the value of `processingState` to ATTEMPTING and invoke the `start` function on the `stream` reference with startRequestData if present.
// Set the value of `processingState` to PROCESSING if the call is successful
// Set the value of `_isProcessing` to `true` and emit the appropriate event
// Any failure to send the `start_request` should be caught, handled and re-thrown with appropriate error class.
// Return from function

test(
    "StreamingAPIConnection.startProcesing - Testing a successful startProcessing call - no startRequestData",
    async () => {

        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectedState.CONNECTED;
            streamingAPIConnection.startProcessing().then(() => {
                expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.PROCESSING);
            });
            expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.ATTEMPTING);
            expect(streamingAPIConnection.isProcessing()).toBe(true);

        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "StreamingAPIConnection.startProcesing - Testing a successful startProcessing call - with startRequestData",
    async () => {

        try {
            const startRequestData = {
                type: "start_request"
            }
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectedState.CONNECTED;
            streamingAPIConnection.startProcessing(startRequestData).then(() => {
                expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.PROCESSING);
            });
            expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.ATTEMPTING);
            expect(streamingAPIConnection.isProcessing()).toBe(true);

        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "StreamingAPIConnection.startProcesing - throw `NoConnectionError` if connectedState is not CONNECTED",
    async () => {

        try {
            const startRequestData = {
                type: "start_request"
            }
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectedState.DISCONNECTED;
            streamingAPIConnection.startProcessing(startRequestData).then(() => {
                expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.PROCESSING);
            });
            expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.ATTEMPTING);
            expect(streamingAPIConnection.isProcessing()).toBe(true);

        } catch (e) {
            throw new Error(e);
        }
    }
);