import {APP_ID, APP_SECRET} from "../constants";
import {LINEAR16AudioStream, OpusAudioStream} from "../../src/audio";
import {ConnectionFactory} from "../../src/connection";
import {ConnectionState} from "../../src/types";
import {StreamingAPIConnection} from "../../src/api";
import Symbl from "../../src/symbl";

/** Define mocks */
jest.mock("symbl-opus-encdec");
const startProcessingMock = jest.fn(() => {
    // (StreamingAPIConnection as any).processingState = ConnectionProcessingState.PROCESSING;
});
jest.mock(
    "../../src/api",
    () => {

        return {
            "StreamingAPIConnection": jest.fn().mockImplementation(() => {

                return {
                    "connect": jest.fn(() => {

                        (StreamingAPIConnection as any).connectionState = ConnectionState.CONNECTED;

                    }),
                    "sdk": {
                        "createStream": jest.fn()
                    },
                    "startProcessing": startProcessingMock,
                    "stream": {
                        "start": jest.fn()
                    }
                };

            })
        };

    }
);
jest.mock(
    "../../src/connection",
    () => {

        return {
            "ConnectionFactory": jest.fn().mockImplementation(() => {

                return {
                    "instantiateConnection": jest.fn(() => {

                        return new StreamingAPIConnection(
{} as any,
{} as any
                        ) as any;

                    })
                };

            })
        };

    }
);

/** End mocks definition **/


let opusStream, pcmStream;
beforeAll(() => {

    const opusConfig: any = {
        "encoderComplexity": 6,
        "encoderFrameSize": 20,
        "encoderSampleRate": 48000,
        "maxFramesPerPage": 40,
        "numberOfChannels": 1,
        "rawOpus": true,
        "streamPages": true
    };
    const context = new AudioContext();
    const mediaStream = new MediaStream();
    const sourceNode = context.createMediaStreamSource(mediaStream);
    opusStream = new OpusAudioStream(
        sourceNode,
        opusConfig
    );
    pcmStream = new LINEAR16AudioStream(sourceNode);

});

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config without passing AudioStream",
    async () => {

        const authConfig = {
            "appId": APP_ID,
            "appSecret": APP_SECRET
        };

        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            "config": {
                "confidenceThreshold": 0.7,
                "languageCode": "en-US",
                "meetingTitle": "My Test Meeting",
                "timezoneOffset": 480
            },
            "id": "209u3ij",
            "insightTypes": [
                "action_item",
                "question"
            ],
            "speaker": {
                "name": "My name",
                "userId": "emailAddress"
            }
        };

        const connectSpy = jest.spyOn(
            symbl,
            "createConnection"
        );
        const connection: any = await symbl.createAndStartNewConnection(connectionConfig);
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);

        // Expect(connection.processingState).toBe(ConnectionProcessingState.PROCESSING);

    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config that contains an id",
    async () => {

        const authConfig = {
            "appId": APP_ID,
            "appSecret": APP_SECRET
        };
        const id = "asidjf23sdf";
        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            "config": {
                "confidenceThreshold": 0.7,
                "languageCode": "en-US",
                "meetingTitle": "My Test Meeting",
                "timezoneOffset": 480
            },
            id,
            "insightTypes": [
                "action_item",
                "question"
            ],
            "speaker": {
                "name": "My name",
                "userId": "emailAddress"
            }
        };

        const connectSpy = jest.spyOn(
            symbl,
            "createConnection"
        );
        const connection: any = await symbl.createAndStartNewConnection(connectionConfig);
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);

    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config and passing in LINEAR16AudioStream",
    async () => {

        const authConfig = {
            "appId": APP_ID,
            "appSecret": APP_SECRET
        };
        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            "config": {
                "confidenceThreshold": 0.7,
                "languageCode": "en-US",
                "meetingTitle": "My Test Meeting",
                "timezoneOffset": 480
            },
            "id": "209u3ij",
            "insightTypes": [
                "action_item",
                "question"
            ],
            "speaker": {
                "name": "My name",
                "userId": "emailAddress"
            }
        };
        const connection: any = await symbl.createAndStartNewConnection(
            connectionConfig,
            pcmStream
        );
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);

    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with no config",
    async () => {

        const authConfig = {
            "appId": APP_ID,
            "appSecret": APP_SECRET
        };
        const symbl = new Symbl(authConfig);
        const connection: any = await symbl.createAndStartNewConnection();
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);

    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with invalid config",
    async () => {

        const authConfig = {
            "appId": APP_ID,
            "appSecret": APP_SECRET
        };
        const symbl = new Symbl(authConfig);
        await expect(async () => await symbl.createAndStartNewConnection("test" as any)).rejects.toThrow();

    }
);

test(
    "Symbl.createAndStartNewConnection - Calling createAndStartNewConnection with valid config and passing in OpusAudioStream",
    async () => {

        const authConfig = {
            "appId": APP_ID,
            "appSecret": APP_SECRET
        };
        const symbl = new Symbl(authConfig);
        const connectionConfig = {
            "config": {
                "confidenceThreshold": 0.7,
                "languageCode": "en-US",
                "meetingTitle": "My Test Meeting",
                "timezoneOffset": 480
            },
            "id": "209u3ij",
            "insightTypes": [
                "action_item",
                "question"
            ],
            "speaker": {
                "name": "My name",
                "userId": "emailAddress"
            }
        };
        const connection: any = await symbl.createAndStartNewConnection(
            connectionConfig,
            opusStream
        );
        expect(ConnectionFactory).toHaveBeenCalledTimes(1);
        expect(connection instanceof StreamingAPIConnection);
        expect(startProcessingMock).toBeCalledTimes(1);

    }
);

