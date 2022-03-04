import Symbl from "../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../src2/audio";
import { ConnectionFactory } from '../../src2/connection';
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../constants';
import { InvalidValueError } from '../../src2/error'

// Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
// Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
// If the validation fails for `connectionType`, throw `InvalidValueError`
// Validation of the `config` should be done in the respective class ingesting it. Appropriate error should be bubbled in case of failure in validation.
// Return the instantiated `Connection` type

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
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - No AudioStream passed in",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = factory.instantiateConnection('streaming', validConnectionConfig)
            expect(connection.type).toBe("streaming");
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
            const connection = factory.instantiateConnection('subscribe', validConnectionConfig)
            expect(connection.type).toBe("subscribe");
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
            const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
            const stream = new PCMAudioStream(sourceNode);
            const connection = factory.instantiateConnection('streaming', validConnectionConfig, stream)
            expect(connection.type).toBe("streaming");
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
            const sourceNode = audioContext.createMediaStreamSource(new MediaStream());
            const stream = new PCMAudioStream(sourceNode);
            const connection = factory.instantiateConnection('subscribe', validConnectionConfig, stream)
            expect(connection.type).toBe("subscribe");
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("Invalid config"))
        }
    }
);


test(
    "ConnectionFactory.instantiateConnection - Connection type not in ConnectionType enum - Should throw InvalidValueError",
    async () => {
        try {
            const factory = new ConnectionFactory();
            const connection = factory.instantiateConnection('not-valid', validConnectionConfig)
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("Invalid config"))
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of StreamingAPIConnection - Invalid config",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = factory.instantiateConnection('streaming', validConnectionConfig)
            expect(connection.type).toBe("streaming");
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("Invalid config"))
        }
    }
);

test(
    "ConnectionFactory.instantiateConnection - Create an instance of SubscribeAPIConnection - Invalid config",
    async () => {

        try {
            const factory = new ConnectionFactory();
            const connection = factory.instantiateConnection('subscribe', validConnectionConfig)
            expect(connection.type).toBe("subscribe");
        } catch (e) {
            expect(e).toEqual(new InvalidValueError("Invalid config"))
        }
    }
);