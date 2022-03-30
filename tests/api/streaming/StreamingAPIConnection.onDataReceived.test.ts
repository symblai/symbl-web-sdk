/* 
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "TypeError: Cannot read property 'name' of undefined".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
*/

import Symbl from "../../../src/symbl";
import { BaseConnection } from '../../../src/connection';
import { StreamingAPIConnection } from '../../../src/api';
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblData } from '../../../src/types';
import { SymblEvent } from "../../../src/events";

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
    audioStream = new LINEAR16AudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection("abc123", audioStream);  
});

test(
    `Make sure dispatchEvent is called when invoking onDataReceived`,
    async () => {
        const emitSpy = jest.spyOn(streamingAPIConnection, 'dispatchEvent');
        const loggerSpy = jest.spyOn(streamingAPIConnection.logger, 'warn');
        const data: any = {
            type: "message",
            message: {
                type: "recognition_result"
            }
        };
        await streamingAPIConnection.onDataReceived(data);
        expect(emitSpy).toBeCalledTimes(1);
        expect(emitSpy).toBeCalledWith(new SymblEvent("speech_recognition", data))
        expect(loggerSpy).toBeCalledTimes(0);
    }
);

test(
    `Ensure warning is called if invalid data is passed.`,
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

test(
    `Ensure error is thrown if error type is received.`,
    async () => {
        const data: any = {
            type: "error",
            detail: "This is an error"
        };
        // try {
            await expect(async () => await streamingAPIConnection.onDataReceived(data)).rejects.toThrow();

        // } catch(e) {
        //     throw e;
        // }
    }
);
