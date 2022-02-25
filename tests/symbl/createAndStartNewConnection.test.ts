import Symbl from "../../src2/symbl";
import { ConnectionFactory, StreamingAPIConnection } from '../../src2/connection';
import { PCMAudioStream, OpusAudioStream } from '../../src2/audio';
jest.mock('../../src2/connection'); // SoundPlayer is now a mock constructor
import { APP_ID, APP_SECRET } from '../constants';

// Invoke `createConnection` with the above arguments.
// If the connection is established successfully, check the value for `unMuteAudioDevice` 
// If the connection fails to get established, re-throw the error thrown by `StreamingAPIConnection` instance
// Invoke `startProcessing` on the instance of `StreamingAPIConnection`
// Return the connection instance

beforeEach(() => {
    // will Clear all instances and calls to constructor and all methods:
    ConnectionFactory.mockClear();
    StreamingAPIConnection.mockClear();
});

beforeAll(() => {

});

test(
    "Symbl.createConnection - Calling createConnection with valid config without passing AudioStream",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl(authConfig);
            const connectionConfig = {
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

            expect(ConnectionFactory).toHaveBeenCalled();
            const connection = symbl.createConnection(connectionConfig);
            const connectSpy = jest.spyOn(connection, 'connect');
            expect(connectSpy).toHaveBeenCalled();

            const startProcessingSpy = jest.spyOn(connection, 'startProcessing');
            expect(startProcessingSpy).toHaveBeenCalled();
            expect(connection instanceof StreamingAPIConnection);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.createConnection - Calling createConnection with valid config that contains an id",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const id = "123940-2390394-19848598";
        try {
            const symbl = new Symbl(authConfig);
            const connectionConfig = {
                id,
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
            
            const startProcessingSpy = jest.spyOn(connection, 'startProcessing');
            expect(startProcessingSpy).toHaveBeenCalled();

            const connection = symbl.createConnection(connectionConfig);
            expect(connection instanceof StreamingAPIConnection);
            expect(connection.id).toBe(id);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.createConnection - Calling createConnection with valid config and passing in PCMAudioStream",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const audioStream = new PCMAudioStream();

        try {
            const symbl = new Symbl(authConfig);
            const connectionConfig = {
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
            expect(ConnectionFactory).toHaveBeenCalled();
            const connection = symbl.createConnection(connectionConfig, audioStream);
            expect(connection instanceof StreamingAPIConnection);
            expect(connection.audioStream).toBe(audioStream);
            const startProcessingSpy = jest.spyOn(connection, 'startProcessing');
            expect(startProcessingSpy).toHaveBeenCalled();
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.createConnection - Calling createConnection with valid config and passing in OpusAudioStream",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const audioStream = new OpusAudioStream();

        try {
            const symbl = new Symbl(authConfig);
            const connectionConfig = {
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
            expect(ConnectionFactory).toHaveBeenCalled();
            const connection = symbl.createConnection(connectionConfig, audioStream);
            expect(connection instanceof StreamingAPIConnection);
            expect(connection.audioStream).toBe(audioStream);

            const startProcessingSpy = jest.spyOn(connection, 'startProcessing');
            expect(startProcessingSpy).toHaveBeenCalled();
        } catch (e) {
            throw new Error(e);
        }
    }
);

