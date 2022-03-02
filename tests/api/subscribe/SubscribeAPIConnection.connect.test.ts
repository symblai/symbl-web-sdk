import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { SubscribeAPIConnection } from '../../../src2/api';
import { NoConnectionError } from "../../../src2/error";
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
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
});

test(
    "SubscribeAPIConnection.connect - Testing a successful connection attempt",
    async () => {

        try {
            const SubscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig);
            SubscribeAPIConnection.connect();
            expect(SubscribeAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
            expect(SubscribeAPIConnection.isConnected()).toBe(true);

        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "SubscribeAPIConnection.connect - Attempting to connect when connectionState is CONNECTED",
    async () => {

        try {
            const audioStream = new PCMAudioStream();
            const subscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig, audioStream);
            subscribeAPIConnection.connectionState = ConnectionState.CONNECTED;
            const logSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
            subscribeAPIConnection.connect();
            expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
            expect(logSpy).toBeCalledTimes(1);

        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "SubscribeAPIConnection.connect - Connection attempt fails due to internet connection",
    async () => {
        const subscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig);
        try {
            subscribeAPIConnection.connect();

        } catch (e) {
            expect(e).toBe(new NoConnectionError("Connection attempt failed due to no internet connection."));
            expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
            expect(subscribeAPIConnection.isConnected()).toBe(false);
        }
    }
);

test(
    "SubscribeAPIConnection.connect - Connection attempt fails due to initial handshake",
    async () => {
        const subscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig);
        try {
            subscribeAPIConnection.connect();

        } catch (e) {
            expect(e).toBe(new HandshakeError("Connection attempt faild during initial handshake."));
            expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);            
            expect(subscribeAPIConnection.isConnected()).toBe(false);
        }
    }
);