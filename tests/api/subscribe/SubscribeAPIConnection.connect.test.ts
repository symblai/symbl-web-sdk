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
    let  subscribeAPIConnection, authConfig, symbl;
    beforeAll(() => {
        authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        symbl = new Symbl(authConfig);
        subscribeAPIConnection = new SubscribeAPIConnection("abc123") as any;
        subscribeAPIConnection.sdk = {
            subscribeToStream: jest.fn(),
            oauth2: {
                init: jest.fn()
            }
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