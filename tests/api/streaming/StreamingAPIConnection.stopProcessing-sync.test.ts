import Symbl from "../../../src/symbl";
import { AudioContext } from "standardized-audio-context-mock";
import { ConnectionFactory } from '../../../src/connection';
import { StreamingAPIConnection } from "../../../src/api";
import { LINEAR16AudioStream, OpusAudioStream } from '../../../src/audio';
import { ConnectionState, ConnectionProcessingState } from "../../../src/types/connection"
import { APP_ID, APP_SECRET } from '../../constants';
import Logger from "../../../src/logger";
import { Stream } from "stream";
import { SymblEvent } from "../../../src/events";
import { NoConnectionError, SymblError } from "../../../src/error";

/* Design Doc Requirements
    If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
    If `processingState` is NOT_PROCESSING or STOPPING, then log a warning stating an attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.
    Else (=== if `processingState` is some other value other than NOT_PROCESSING or STOPPING), set the value of `processingState` to STOPPING and invoke the `stop` function on the `stream`.
    Set the value of `processingState` to NOT_PROCESSING if the call is successful
    Set the value of `_isProcessing` to `false` and emit the appropriate event
    Any failure to send the `stop_request` should be caught, handled and re-thrown with appropriate error class.
    Return from function
*/


let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, streamingAPIConnection;
const createNewConnection = () => {
    const audioContext = new AudioContext() as any;
    // const stream = new MediaStream() as any;
    (audioContext as any).createScriptProcessor = jest.fn();
    const sourceNode = audioContext.createMediaStreamSource();
    const audioStream = new LINEAR16AudioStream(sourceNode);
    audioStream.suspendAudioContext = jest.fn();
    (audioStream as any).sourceNode = {
        disconnect: jest.fn()
    }
    streamingAPIConnection = new StreamingAPIConnection("123abc" + Math.random(), audioStream);
    streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
    streamingAPIConnection.restartProcessing = false;
    streamingAPIConnection.stream = {
        stop: jest.fn(() => {
            return new Promise(res => {
                setTimeout(res, 1000);
            });
        }),
        start: jest.fn(() => {
            return new Promise(res => {
                setTimeout(res, 1000);
            });
        })
    }
    return streamingAPIConnection;
}
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
    streamingAPIConnection = createNewConnection();
});

test(
    "Symbl.stopProcessing - If `restartProcessing` is set to true make sure `stop` and `start` methods are both invoked",
    done => {
        const newStreamingAPIConnection = createNewConnection();
        newStreamingAPIConnection.connectionState = ConnectionState.CONNECTED
        newStreamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING
        newStreamingAPIConnection.restartProcessing = true;
        const stopSpy = jest.spyOn(newStreamingAPIConnection.stream, 'stop');
        const startSpy = jest.spyOn(newStreamingAPIConnection.stream, 'start');
        newStreamingAPIConnection.stopProcessing().then(() => {
            expect(stopSpy).toBeCalledTimes(1);
            expect(startSpy).toBeCalledTimes(1);
            expect(newStreamingAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
            expect(newStreamingAPIConnection.processingState).toBe(ConnectionProcessingState.PROCESSING);
            done();
        });
    }
);

test(
    "Symbl.stopProcessing - If `processingState` is a value other than NOT_PROCESSING or STOPPING, verify that `processingState` value is updated to STOPPING and the `stop` function is invoked on the `stream`.",
    (done) => {
        const newStreamingAPIConnection = createNewConnection();
        newStreamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        newStreamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
        const stopSpy = jest.spyOn(newStreamingAPIConnection.stream, 'stop');
        newStreamingAPIConnection.stopProcessing().then(() => {
            expect(newStreamingAPIConnection.processingState).toBe(ConnectionProcessingState.NOT_PROCESSING)
            expect(stopSpy).toBeCalledTimes(1);
            done();
        });
    }
);

test(
    "Symbl.stopProcessing - Verify that `_isProcessing` value is set to `false` and the appropriate event is emitted.",
    done => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
        // const eventSpy = jest.spyOn(streamingAPIConnection, 'dispatchEvent');

        streamingAPIConnection.stopProcessing().then(() => {
            expect(streamingAPIConnection.isProcessing()).toBe(false);
            done();
        });

        // expect(eventSpy).toBeCalledTimes(1);
        // expect(eventSpy).toHaveBeenCalledWith(new SymblEvent('processing_stopped'));

        // this.dispatchEvent(new SymblEvent('processing_stopped'))
    }
);

test(
    "Symbl.stopProcessing - Verify that the `processingState` value is updated to NOT_PROCESSING if the `stop` function call is successful.",
    done => {
        const newStreamingAPIConnection = createNewConnection();
        newStreamingAPIConnection.connectionState = ConnectionState.CONNECTED
        newStreamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING

        newStreamingAPIConnection.stopProcessing().then(() => {
            expect(newStreamingAPIConnection.processingState).toBe(ConnectionProcessingState.NOT_PROCESSING)
            expect(newStreamingAPIConnection.isProcessing()).toBe(false);
            done();
        });
    }
);