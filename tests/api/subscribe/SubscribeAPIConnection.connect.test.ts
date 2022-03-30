import Symbl from "../../../src/symbl";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
jest.mock("@symblai/symbl-js/build/client.sdk.min")
import { LINEAR16AudioStream, OpusAudioStream } from "../../../src/audio";
import { SubscribeAPIConnection } from '../../../src/api';
import { NoConnectionError, HandshakeError } from "../../../src/error";
import { ConnectionState } from "../../../src/types/connection";
// jest.mock('../../src/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';


describe('SubscribeAPIConnection.connect()', () => {
    let validConnectionConfig, subscribeAPIConnection, authConfig, symbl;
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
        subscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig) as any;
        subscribeAPIConnection.sdk = {
            subscribeToStream: jest.fn(() => Promise.resolve())
        }
    });

    test(
        "Testing a successful connection attempt",
        (done) => {    
            subscribeAPIConnection.connect().then(() => {
                expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
                expect(subscribeAPIConnection.isConnected()).toBe(true);
                done();
            });
            expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.CONNECTING);
        }
    );

    test(
        "Testing an unsuccessful connection attempt",
        async () => {
            subscribeAPIConnection.connectionState = ConnectionState.DISCONNECTED;
            subscribeAPIConnection.sdk = {
                subscribeToStream: jest.fn(() => {
                    throw new Error("An error happened.");
                })
            }
            await expect(async () => await subscribeAPIConnection.connect()).rejects.toThrow();
        }
    );

    test(
        "Attempting to connect when connectionState is CONNECTED",
        async () => {
            subscribeAPIConnection.connectionState = ConnectionState.CONNECTED;
            const logSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
            subscribeAPIConnection.connect();
            expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.CONNECTED);
            expect(logSpy).toBeCalledTimes(1);
        }
    );

    // test(
    //     "Connection attempt fails due to internet connection",
    //     async () => {
    //         try {
    //             subscribeAPIConnection.connect();

    //         } catch (e) {
    //             expect(e).toBe(new NoConnectionError("Connection attempt failed due to no internet connection."));
    //             expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);
    //             expect(subscribeAPIConnection.isConnected()).toBe(false);
    //         }
    //     }
    // );

    // test(
    //     "Connection attempt fails due to initial handshake",
    //     async () => {
    //         try {
    //             subscribeAPIConnection.connect();

    //         } catch (e) {
    //             expect(e).toBe(new HandshakeError("Connection attempt faild during initial handshake."));
    //             expect(subscribeAPIConnection.connectionState).toBe(ConnectionState.DISCONNECTED);            
    //             expect(subscribeAPIConnection.isConnected()).toBe(false);
    //         }
    //     }
    // );
});