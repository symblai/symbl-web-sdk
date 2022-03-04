import Symbl from "../../../src2/symbl";
import { StreamingAPIConnection } from '../../../src2/api';
import { PCMAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';

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
    const context = new AudioContext();
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);  
});

test(
    `Ensure attachAudioStream is invoked if audioStream is not null`,
    async () => {
        const attachAudioStreamSpy = jest.spyOn(streamingAPIConnection, 'attachAudioStream');
        streamingAPIConnection.registerAudioStreamCallback();
        expect(attachAudioStreamSpy).toBeCalledTimes(1);
    }
);

test(
    `Ensure attachAudioStream is NOT invoked if audioStream is null`,
    async () => {
        const attachAudioStreamSpy = jest.spyOn(streamingAPIConnection, 'attachAudioStream');
        streamingAPIConnection.audioStream = null;
        streamingAPIConnection.registerAudioStreamCallback();
        expect(attachAudioStreamSpy).toBeCalledTimes(0);
    }
);