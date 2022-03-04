import Symbl from "../../../src2/symbl";
import { ConnectionFactory } from '../../../src2/connection';
import { SubscribeAPIConnection } from '../../../src2/api/subscribe';
import { PCMAudioStream, OpusAudioStream } from '../../../src2/audio';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"
import { APP_ID, APP_SECRET } from '../../constants';
import Logger from "../../../src2/logger";
import { Stream } from "stream";
import { SymblData } from '../../../src2/types/symbl';

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream
let subscribeAPIConnection
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
    subscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig);  
});

test(
    `Make sure emitEvents is called when invoking onDataReceived`,
    async () => {
        const emitSpy = jest.spyOn(subscribeAPIConnection, 'emitEvents');
        const data: SymblData = {};
        subscribeAPIConnection.onDataReceived(data);
        expect(emitSpy).toBeCalledWith(data);
        expect(emitSpy).toBeCalledTimes(1);
    }
);