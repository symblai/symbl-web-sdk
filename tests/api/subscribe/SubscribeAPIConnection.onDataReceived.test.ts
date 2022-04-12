import Symbl from "../../../src/symbl";
import { ConnectionFactory } from '../../../src/connection';
import { SubscribeAPIConnection } from '../../../src/api/subscribe';
import { LINEAR16AudioStream, OpusAudioStream } from '../../../src/audio';
import { ConnectionState, ConnectionProcessingState } from "../../../src/types/connection"
import { APP_ID, APP_SECRET } from '../../constants';
import Logger from "../../../src/logger";
import { Stream } from "stream";
import { SymblData } from '../../../src/types';
import { SymblEvent } from '../../../src/events';

let invalidConnectionConfig, authConfig, symbl;
let audioStream
let subscribeAPIConnection
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    subscribeAPIConnection = new SubscribeAPIConnection("abc123") as any;
});

test(
    `Make sure dispatchEvent is called when invoking onDataReceived`,
    async () => {
        const emitSpy = jest.spyOn(subscribeAPIConnection, 'dispatchEvent');
        const loggerSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
        const data: any = {
            type: "message",
            message: {
                type: "recognition_result"
            }
        };
        await subscribeAPIConnection.onDataReceived(data);
        expect(emitSpy).toBeCalledTimes(1);
        expect(emitSpy).toBeCalledWith(new SymblEvent("speech_recognition", data))
        expect(loggerSpy).toBeCalledTimes(0);
    }
);

test(
    `Ensure warning is called if invalid data is passed.`,
    async () => {
        const emitSpy = jest.spyOn(subscribeAPIConnection, 'dispatchEvent');
        const loggerSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
        const data: any = {
            type: "invalid_type"
        };
        await subscribeAPIConnection.onDataReceived(data);
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
            await expect(async () => await subscribeAPIConnection.onDataReceived(data)).rejects.toThrow();

        // } catch(e) {
        //     throw e;
        // }
    }
);
