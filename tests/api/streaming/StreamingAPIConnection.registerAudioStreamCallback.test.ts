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