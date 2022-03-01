import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { NoConnectionError } from "../../../src2/error";
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"

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
    audioStream = new PCMAudioStream();
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);  
});

test(
    `StreamingAPIConnection.updateAudioStream - If AudioStream is already attached to the instance, verify that the audio stops processing via the attached stream.`,
    async () => {
        const newAudioStream = new PCMAudioStream();
        const attachSpy = jest.spyOn(streamingAPIConnection.attachAudioStream, 'attachAudioStream')
        const stopSpy = jest.spyOn(streamingAPIConnection, 'stopProcessing');
        streamingAPIConnection.updateAudioStream(newAudioStream);
        expect(attachSpy).toBeCalledTimes(1);
        expect(stopSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
);

test(
    `StreamingAPIConnection.updateAudioStream - Verify that 'attachAudioStream' function is invoked with the new audioStream`,
    async () => {
        const newAudioStream = new PCMAudioStream();
        streamingAPIConnection.audioStream = null;
        const attachSpy = jest.spyOn(streamingAPIConnection.attachAudioStream, 'attachAudioStream')
        streamingAPIConnection.updateAudioStream(newAudioStream);
        expect(attachSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
);