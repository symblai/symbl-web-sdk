
import Symbl from "../../src/symbl";
import { LINEAR16AudioStream, OpusAudioStream } from "../../src/audio";
import { ConnectionFactory } from '../../src/connection';
// jest.mock('../../src/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../constants';
import { InvalidValueError } from '../../src/error';
import {
    SymblConnectionType
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
        const factory = new ConnectionFactory();
        const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validSessionID) as any
        expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
        expect(connection.audioStream).toBeUndefined();
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection",
    async () => {

        const factory = new ConnectionFactory();
        const connection = await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validSessionID)
        expect(connection.connectionType).toBe(SymblConnectionType.SUBSCRIBE);
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - AudioStream passed in",
    async () => {

        const factory = new ConnectionFactory();
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(mediaStream)
        const stream = new LINEAR16AudioStream(sourceNode);
        const connection = await factory.instantiateConnection(SymblConnectionType.STREAMING, validSessionID, stream) as any;
        expect(connection.connectionType).toBe(SymblConnectionType.STREAMING);
        expect(connection.audioStream).toBe(stream);
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - AudioStream passed in - SHould throw an error as Subscribe API takes no audio stream",
    async () => {

        const factory = new ConnectionFactory();
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaStreamSource(mediaStream)
        const stream = new LINEAR16AudioStream(sourceNode);
        await expect(async () => await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, validSessionID, stream)).rejects.toThrow();
    }
);


test(
    "ConnectionFactory.instantiateConnection - Connection type not in ConnectionType enum - Should throw InvalidValueError",
    async () => {
        const factory = new ConnectionFactory();
        await expect(async () => await factory.instantiateConnection('not-valid' as any, validSessionID)).rejects.toThrow(new InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'."))
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - Invalid sessionId",
    async () => {
        const factory = new ConnectionFactory();
        await expect(async () => await factory.instantiateConnection(SymblConnectionType.STREAMING, invalidSessionID)).rejects.toThrow();
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - Invalid sessionID",
    async () => {
        const factory = new ConnectionFactory();
        await expect(async () => await factory.instantiateConnection(SymblConnectionType.SUBSCRIBE, invalidSessionID)).rejects.toThrow();
    }
);