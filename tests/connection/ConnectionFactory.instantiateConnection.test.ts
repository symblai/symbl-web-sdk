
import Symbl from "../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../src2/audio";
import { ConnectionFactory } from '../../src2/connection';
import { StreamingAPIConnection, SubscribeAPIConnection } from '../../src2/api';
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../constants';
import { InvalidValueError } from '../../src2/error';
import {
    SymblConnectionType,
    ConnectionState,
    ConnectionProcessingState
} from "../../src2/types/connection";

// Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
// Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
// If the validation fails for `connectionType`, throw `InvalidValueError`
// Validation of the `config` should be done in the respective class ingesting it. Appropriate error should be bubbled in case of failure in validation.
// Return the instantiated `Connection` type

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, mediaStream;
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
    mediaStream = new MediaStream();
});

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - No AudioStream passed in",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validConnectionConfig)
            expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - No AudioStream passed in",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validConnectionConfig)
            expect(connection.connectionType).toBe(SymblConnectionType.SUBSCRIBE);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - AudioStream passed in",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const audioContext = new AudioContext();
            const sourceNode = audioContext.createMediaStreamSource(mediaStream)
            const stream = new PCMAudioStream(sourceNode);
            const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validConnectionConfig, stream)
            expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - AudioStream passed in - SHould throw an error as Subscribe API takes no audio stream",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const audioContext = new AudioContext();
            const sourceNode = audioContext.createMediaStreamSource(mediaStream)
            const stream = new PCMAudioStream(sourceNode);
            const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validConnectionConfig, stream)
            expect(connection.connectionType).toBe(SymblConnectionType.SUBSCRIBE);
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);


test(
    "ConnectionFactory.instantiateConnection - Connection type not in ConnectionType enum - Should throw InvalidValueError",
    async () => {
        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection('not-valid' as any, validConnectionConfig)
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - Invalid config",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validConnectionConfig)
            expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - Invalid config",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validConnectionConfig)
            expect(connection.connectionType).toBe(SymblConnectionType.SUBSCRIBE);
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);