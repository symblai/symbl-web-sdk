import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream } from "../../../src/audio";
import { StreamingAPIConnection } from '../../../src/api';
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src/types"

/* Design Doc Requirements
    updateAudioStream(audioStream: AudioStream)
    - Check if an AudioStream is already attached to this instance
    - If it is, then stop the audio processing via the existing/attached stream
    - Call the `attachAudioStream` function with the new `audioStream`
*/

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream;
let streamingAPIConnection;
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
    const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
    audioStream = new LINEAR16AudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection("abc123", audioStream);
    streamingAPIConnection.stream = {
        stop: jest.fn()
    }
});

test(
    `StreamingAPIConnection.updateAudioStream - If AudioStream is already attached to the instance, verify that the audio stops processing via the attached stream.`,
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        const newAudioStream = new LINEAR16AudioStream(sourceNode);
    
        const attachSpy = jest.spyOn(streamingAPIConnection, 'attachAudioStream')
        const stopSpy = jest.spyOn(streamingAPIConnection, 'stopProcessing');
        await streamingAPIConnection.updateAudioStream(newAudioStream);
        expect(attachSpy).toBeCalledTimes(1);
        expect(stopSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
);

test(
    `StreamingAPIConnection.updateAudioStream - Verify that 'attachAudioStream' function is invoked with the new audioStream`,
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        const newAudioStream = new LINEAR16AudioStream(sourceNode);

        streamingAPIConnection.audioStream = null;
        const attachSpy = jest.spyOn(streamingAPIConnection, 'attachAudioStream')
        await streamingAPIConnection.updateAudioStream(newAudioStream);
        expect(attachSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
);



test(
    `StreamingAPIConnection.updateAudioStream - Verify error handling if attachment fails`,
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
        const newAudioStream = new LINEAR16AudioStream(sourceNode);

        streamingAPIConnection.audioStream = null;
        streamingAPIConnection.attachAudioStream = jest.fn(() => {
            throw new Error("An error happened.");
        });
        const attachSpy = jest.spyOn(streamingAPIConnection, 'attachAudioStream')
        await expect(async () => await streamingAPIConnection.updateAudioStream(newAudioStream)).rejects.toThrow();
        expect(attachSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.audioStream).not.toBe(newAudioStream);
    }
);
