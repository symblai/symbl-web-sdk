
import Symbl from "../../src/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../src/audio";
import { ConnectionFactory } from '../../src/connection';
import { StreamingAPIConnection, SubscribeAPIConnection } from '../../src/api';
// jest.mock('../../src/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../constants';
import { InvalidValueError } from '../../src/error';
import {
    SymblConnectionType,
    ConnectionState,
    ConnectionProcessingState
} from "../../src/types/connection";

// Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
// Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
// If the validation fails for `connectionType`, throw `InvalidValueError`
// Validation of the `config` should be done in the respective class ingesting it. Appropriate error should be bubbled in case of failure in validation.
// Return the instantiated `Connection` type

let authConfig, symbl, mediaStream, validSessionID, invalidSessionID;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    validSessionID = "123475-abcde-9876-bce";

    mediaStream = new MediaStream();
});

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - No AudioStream passed in",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validSessionID)
            expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
            expect(connection.audioStream).toBe(null);
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
            const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validSessionID)
            expect(connection.connectionType).toBe(SymblConnectionType.SUBSCRIBE);
            expect(connection.audioStream).toBe(null);
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
            const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validSessionID, stream)
            expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
            expect(connection.audioStream).toBe(stream);
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
            const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validSessionID, stream)
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
            const connection = await factory.instantiateConnection('not-valid' as any, validSessionID)
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - Invalid sessionId",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, invalidSessionID)
            expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - Invalid sessionID",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, invalidSessionID)
            expect(connection.connectionType).toBe(SymblConnectionType.SUBSCRIBE);
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
        }
    }
);