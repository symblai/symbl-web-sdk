import Symbl from "../../../src/symbl";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
jest.mock("@symblai/symbl-js/build/client.sdk.min")
import { ConnectionFactory } from '../../../src/connection';
import { StreamingAPIConnection } from "../../../src/api";
import { LINEAR16AudioStream, OpusAudioStream } from '../../../src/audio';
import { ConnectionState, ConnectionProcessingState } from "../../../src/types/connection"
import { APP_ID, APP_SECRET } from '../../constants';
import {SYMBL_DEFAULTS} from "../../../src/constants";
import Logger from "../../../src/logger";
import { Stream } from "stream";
import { SymblEvent } from "../../../src/events";
import { NoConnectionError, SymblError, InvalidValueError, NotSupportedSampleRateError } from "../../../src/error";

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
    "Symbl.modifySampleRate - Set sample rate to 44100",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.sendJSON = jest.fn();
        const connectionConfig = {
            config: {
                encoding: "LINEAR16"
            }
        };
        (streamingAPIConnection as any).config = connectionConfig as any;
        streamingAPIConnection.modifySampleRate(44100);
    }
);

test(
    "Symbl.modifySampleRate - Set sample rate to a non number value",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.sendJSON = jest.fn();
        const connectionConfig = {
            config: {
                encoding: "LINEAR16"
            }
        };
        (streamingAPIConnection as any).config = connectionConfig as any;
        await expect(async () => await streamingAPIConnection.modifySampleRate("44100" as any)).rejects.toThrow(new InvalidValueError("Sample rate argument must be a number."));
    }
);

test(
    "Symbl.modifySampleRate - Set sample rate when audio stream is null",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.sendJSON = jest.fn();
        const connectionConfig = {
            config: {
                encoding: "LINEAR16"
            }
        };
        (streamingAPIConnection as any).config = connectionConfig as any;
        streamingAPIConnection.audioStream = null;
        await expect(async () => await streamingAPIConnection.modifySampleRate(48000)).rejects.toThrow(new InvalidValueError("There is no audio stream attached to this connection."));
    }
);

test(
    "Symbl.modifySampleRate - Set sample rate with invalid sample rate",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.sendJSON = jest.fn();
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        const audioStream = new LINEAR16AudioStream(sourceNode);
        streamingAPIConnection.audioStream = audioStream;
        const connectionConfig = {
            config: {
                encoding: "LINEAR16"
            }
        };
        (streamingAPIConnection as any).config = connectionConfig as any;
        await expect(async () => await streamingAPIConnection.modifySampleRate(4800)).rejects.toThrow(new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For LINEAR16 encoding, supported sample rates are ${SYMBL_DEFAULTS.LINEAR16_SAMPLE_RATE_HERTZ}.`));
    }
);

test(
    "Symbl.modifySampleRate - Set sample rate with invalid sample rate",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.sendJSON = jest.fn();
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        const audioStream = new OpusAudioStream(sourceNode);
        streamingAPIConnection.audioStream = audioStream;
        const connectionConfig = {
            config: {
                encoding: "OPUS"
            }
        };
        (streamingAPIConnection as any).config = connectionConfig as any;
        await expect(async () => await streamingAPIConnection.modifySampleRate(4800)).rejects.toThrow(new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For Opus encoding, supported sample rates are ${SYMBL_DEFAULTS.OPUS_SAMPLE_RATE_HERTZ}.`));
    }
);

test(
    "Symbl.modifySampleRate - Set sample rate when not connected",
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.DISCONNECTED;
        streamingAPIConnection.sendJSON = jest.fn();
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        const audioStream = new OpusAudioStream(sourceNode);
        streamingAPIConnection.audioStream = audioStream;
        const connectionConfig = {
            config: {
                encoding: "OPUS"
            }
        };
        (streamingAPIConnection as any).config = connectionConfig as any;
        await expect(async () => await streamingAPIConnection.modifySampleRate(48000)).rejects.toThrow(new NoConnectionError("There is no established connection with the websocket."));
    }
);






