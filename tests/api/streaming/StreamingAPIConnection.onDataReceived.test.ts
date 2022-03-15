import Symbl from "../../../src2/symbl";
import { BaseConnection } from '../../../src2/connection';
import { StreamingAPIConnection } from '../../../src2/api';
import { PCMAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblData } from '../../../src2/types';
import { SymblEvent } from "../../../src2/events";

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, sourceNode;
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
    sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);  
});

test(
    `Make sure emitEvents is called when invoking onDataReceived`,
    async () => {
        const emitSpy = jest.spyOn(streamingAPIConnection, 'dispatchEvent');
        const loggerSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        const data: any = {
            type: "recognition_result"
        };
        await streamingAPIConnection.onDataReceived(data);
        expect(emitSpy).toBeCalledTimes(1);
        expect(emitSpy).toBeCalledWith(new SymblEvent("speech_recognition", data))
        expect(loggerSpy).toBeCalledTimes(0);
    }
);

test(
    `Ensure warning is called if invalid data type is passed.`,
    async () => {
        const emitSpy = jest.spyOn(streamingAPIConnection, 'dispatchEvent');
        const loggerSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        const data: any = {
            type: "invalid_type"
        };
        await streamingAPIConnection.onDataReceived(data);
        expect(emitSpy).toBeCalledTimes(0);
        expect(loggerSpy).toBeCalledTimes(1);
    }
);
