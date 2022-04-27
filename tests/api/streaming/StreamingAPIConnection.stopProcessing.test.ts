import Symbl from "../../../src/symbl";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
jest.mock("@symblai/symbl-js/build/client.sdk.min")
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
    const audioContext = new AudioContext();
    const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
    const audioStream = new LINEAR16AudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection("123abc", audioStream);
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
    "Symbl.stopProcessing - Verify that `NoConnectionError` is thrown if the `connectionState` is not connected.",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED
        await expect(async () => await streamingAPIConnection.stopProcessing()).rejects.toThrow();
    }
);

test(
    "Symbl.stopProcessing - If `processingState` is NOT_PROCESSING, verify that an appropriate warning message is logged.",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED
        streamingAPIConnection.processingState = ConnectionProcessingState.NOT_PROCESSING;
        const warnSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        const stopSpy = jest.spyOn(streamingAPIConnection.stream, 'stop');
        await streamingAPIConnection.stopProcessing();
        expect(warnSpy).toBeCalledTimes(1);
        expect(stopSpy).toBeCalledTimes(0);
    }
);

test(
    "Symbl.stopProcessing - If `processingState` is STOPPING, verify that an appropriate warning message is logged.",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED
        streamingAPIConnection.processingState = ConnectionProcessingState.STOPPING;
        const warnSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        const stopSpy = jest.spyOn(streamingAPIConnection.stream, 'stop');
        await streamingAPIConnection.stopProcessing();
        expect(warnSpy).toBeCalledTimes(1);

        expect(stopSpy).toBeCalledTimes(0);
    }
);





test(
    "Symbl.stopProcessing - Verify that all failure attempts to send the `stop_request` are caught & handled & re-thrown with appropriate error class.",
    // TODO - We should break down the failure attempt scenarios and write unit tests for each scenario, assuming that each errors are handled differently.
    async () => {
        streamingAPIConnection.stream = {
            stop: jest.fn(() => {
                throw new Error("An error happened.");
            })
        }
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED
        streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING

        await expect(async () => await streamingAPIConnection.stopProcessing()).rejects.toThrow();
    }
);

// test(
//     "Symbl.stopProcessing - Test error handling during restartProcessing phase",
//     async () => {
//         const newStreamingAPIConnection = createNewConnection();
//         const stopSpy = jest.fn();
//         newStreamingAPIConnection.stream = {
//             start: jest.fn(() => {
//                 throw new Error("An error happened.");
//             }),
//             stop: stopSpy,
//         };
//         newStreamingAPIConnection.audioStream = {
//             suspendAudioContext: jest.fn()
//         }
//         newStreamingAPIConnection.connectionState = ConnectionState.CONNECTED
//         newStreamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING
//         newStreamingAPIConnection.restartProcessing = true;
//         const startSpy = jest.spyOn(newStreamingAPIConnection.stream, 'start');
//         const startProcessingSpy = jest.spyOn(newStreamingAPIConnection, 'startProcessing');
//         await expect(async () => await newStreamingAPIConnection.stopProcessing()).rejects.toThrow();
//         expect(stopSpy).toBeCalledTimes(1);
//         expect(startSpy).toBeCalledTimes(1);
//         expect(startProcessingSpy).toBeCalledTimes(1);
//     }
// );




