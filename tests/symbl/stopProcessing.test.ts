import Symbl from "../../src2/symbl";
import { ConnectionFactory, StreamingAPIConnection } from '../../src2/connection';
import { PCMAudioStream, OpusAudioStream } from '../../src2/audio';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"
import { APP_ID, APP_SECRET } from '../constants';
import Logger from "../../src2/logger";
import { Stream } from "stream";

/* Design Doc Requirements
    If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
    If `processingState` is NOT_PROCESSING or STOPPING, then log a warning stating an attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.
    Else (=== if `processingState` is some other value other than NOT_PROCESSING or STOPPING), set the value of `processingState` to STOPPING and invoke the `stop` function on the `stream`.
    Set the value of `processingState` to NOT_PROCESSING if the call is successful
    Set the value of `_isProcessing` to `false` and emit the appropriate event
    Any failure to send the `stop_request` should be caught, handled and re-thrown with appropriate error class.
    Return from function
*/


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

test(
    "Symbl.stopProcessing - Verify that `NoConnectionError` is thrown if the `connectionState` is not connected.",
    async () => {
        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED
            streamingAPIConnection.stopProcessing();
        } catch (e) {
            expect(e).toBe(new NoConnectionError('Whatever message'));
        }
    }
);

test(
    "Symbl.stopProcessing - If `processingState` is NOT_PROCESSING or STOPPING, verify that an appropriate warning message is logged.",
    async () => {
        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectionState.NOT_PROCESSING
            streamingAPIConnection.stopProcessing();
            const warnSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
            expect(warnSpy).toBeCalledTimes(1);

            const stopSpy = jest.spyOn(streamingAPIConnection.stream, 'stop');
            expect(stopSpy).toBeCalledTimes(0);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.stopProcessing - If `processingState` is a value other than NOT_PROCESSING or STOPPING, verify that `processingState` value is updated to STOPPING and the `stop` function is invoked on the `stream`.",
    async () => {
        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectionState.CONNECTED
            streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING
            streamingAPIConnection.stopProcessing().then(() => {
                expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.STOPPING)
            });

            const processingStateSpy = jest.spyOn(streamingAPIConnection.stream, 'stop');
            expect(processingStateSpy).toBeCalledTimes(1);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.stopProcessing - Verify that the `processingState` value is updated to NOT_PROCESSING if the `stop` function call is successful.",
    async () => {
        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectionState.CONNECTED
            streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING

            streamingAPIConnection.stream.stop().then(() => {
                expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.NOT_PROCESSING)
                expect(streamingAPIConnection.isProcessing()).toBe(false);
            });
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.stopProcessing - Verify that `_isProcessing` value is set to `false` and the appropriate event is emitted.",
    async () => {
        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectionState.CONNECTED
            streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
            const eventSpy = jest.spyOn(streamingAPIConnection, 'dispatchEvent');

            streamingAPIConnection.stopProcessing().then(() => {
                expect(streamingAPIConnection.isProcessing()).toBe(false);
                expect(eventSpy).toHaveBeenCalledWith(new SymblEvent('processing_stopped'));
            });

            // this.dispatchEvent(new SymblEvent('processing_stopped'))
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.stopProcessing - Verify that all failure attempts to send the `stop_request` are caught & handled & re-thrown with appropriate error class.",
    // TODO - We should break down the failure attempt scenarios and write unit tests for each scenario, assuming that each errors are handled differently.
    async () => {
        try {
            const audioStream = new PCMAudioStream();
            const streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
            streamingAPIConnection.connectionState = ConnectionState.CONNECTED
            streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING

            streamingAPIConnection.stream.stop().then(() => {
                expect(streamingAPIConnection.processingState).toBe(ConnectionProcessingState.NOT_PROCESSING)
                expect(streamingAPIConnection.isProcessing()).toBe(false);
            });
        } catch(e) {
            throw new SymblError(e.message);
            throw e;
        }
    }
);


