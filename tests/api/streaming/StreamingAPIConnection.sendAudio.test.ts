import Symbl from "../../../src2/symbl";
import { StreamingAPIConnection } from '../../../src2/api';
import { PCMAudioStream, OpusAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { StreamingAPIStartRequest } from '../../../src2/types/symbl';

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
    const audioContext = new AudioContext();
    const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);
    streamingAPIConnection.stream = {
        sendAudio: jest.fn(),
        sendJSON: jest.fn()
    }  
});

test(
    `Make sure sendJSON is called when invoking sendJSON`,
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
        const data: StreamingAPIStartRequest = { "type": "start_request"}
        streamingAPIConnection.sendJSON(data);
        expect(sendAudioSpy).toBeCalledWith(JSON.stringify(data));
        expect(sendAudioSpy).toBeCalledTimes(1);
    }
);