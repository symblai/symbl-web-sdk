import Symbl from "../../src2/symbl";
import { ConnectionFactory, StreamingAPIConnection } from '../../src2/connection';
import { PCMAudioStream, OpusAudioStream } from '../../src2/audio';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"
import { APP_ID, APP_SECRET } from '../constants';
import Logger from "../../src2/logger";
import { Stream } from "stream";




let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream
let streamingAPIConnection
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
    `Make sure sendSON is called when invoking sendSON`,
    async () => {
        const sendAudioSpy = jest.spyOn(streamingAPIConnection.stream, 'sendAudio');
        const data = new ArrayBuffer(16);
        streamingAPIConnection.sendAudio(data);
        expect(sendAudioSpy).toBeCalledWith(data);
        expect(sendAudioSpy).toBeCalledTimes(1);
    }
);

test(
    `Make sure sendAudio is called when invoking sendJSON`,
    async () => {
        const sendAudioSpy = jest.spyOn(streamingAPIConnection.stream, 'sendAudio');
        const data = new StreamingAPIStartRequest();
        streamingAPIConnection.sendJSON(data);
        expect(sendAudioSpy).toBeCalledWith(data);
        expect(sendAudioSpy).toBeCalledTimes(1);
    }
);