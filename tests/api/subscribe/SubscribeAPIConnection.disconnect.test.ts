import Symbl from "../../../src2/symbl";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
jest.mock("@symblai/symbl-js/build/client.sdk.min")
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { SubscribeAPIConnection } from '../../../src2/api';
import { NoConnectionError } from "../../../src2/error";
// jest.mock('../../src2/connection'); // ConnectionFactory is now a mock constructor
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState } from "../../../src2/types/connection"

/* Requirements
    If the `connectionState` is already DISCONNECTED, log at warning level that a connection closure attempt is being made on an already closed connection.
    If the `connectionState` is already TERMINATED, log at warning level that a connection closure attempt is being made on an already terminated connection.
    Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
    Set the `connectionState` to DISCONNECTED
    Set the value of `_isConnected` to `false` and emit the appropriate event
    Any failure to close the connection should be handled, and logged as an error.
*/

describe("SubscribeAPIConnection.disconnect", () => {
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
        (<any>subscribeAPIConnection).stream = {
            close: jest.fn(),
        }
    });

    test(
        "If 'connectionState' is already DISCONNECTED, verify that an appropriate warning message is logged to indicate a connection closure attempt is being made on an already closed connection.",
        async () => {
            (<any>subscribeAPIConnection).connectionState = ConnectionState.DISCONNECTED;
            console.log(subscribeAPIConnection);
            const warnSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
            const stopSpy = jest.spyOn(subscribeAPIConnection.stream, 'close');
            await subscribeAPIConnection.disconnect();
            expect(warnSpy).toBeCalledTimes(1);
            expect(stopSpy).toBeCalledTimes(0);
        }
    );

    test(
        "If 'connectionState' is already TERMINATED, verify that an appropriate warning message is logged to indicate a connection closure attempt is being made on an already terminated connection.",
        async () => {
            (<any>subscribeAPIConnection).connectionState = ConnectionState.TERMINATED;

            const warnSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
            const stopSpy = jest.spyOn(subscribeAPIConnection.stream, 'close');
            await subscribeAPIConnection.disconnect();
            expect(warnSpy).toBeCalledTimes(1);
            expect(stopSpy).toBeCalledTimes(0);
        }
    );

    test(
        "Verify `connectionState` is set to DISCONNECTING and the `close` function on the `stream` created via JS SDK is called.",
        (done) => {
            // need help...
            (<any>subscribeAPIConnection).connectionState = ConnectionState.CONNECTED;
            const closeSpy = jest.spyOn(subscribeAPIConnection.stream, 'close');

            subscribeAPIConnection.disconnect().then(() => {
                expect((<any>subscribeAPIConnection).connectionState).toBe(ConnectionState.DISCONNECTED);
                expect(closeSpy).toBeCalledTimes(1);
                done();
            });
            
            expect((<any>subscribeAPIConnection).connectionState).toBe(ConnectionState.DISCONNECTING);
        }
    );

    test(
        "After successful disconnect, verify that 1) 'connectionState' is set to DISCONNECTED, 2) '_isConnected' is set to false, and 3) the appropriate event is emitted.",
        async () => {
            (<any>subscribeAPIConnection).connectionState = ConnectionState.CONNECTED;
            const eventSpy = jest.spyOn(subscribeAPIConnection, 'dispatchEvent');

            await subscribeAPIConnection.disconnect();
            
            expect((<any>subscribeAPIConnection).connectionState).toBe(ConnectionState.DISCONNECTED);
            expect((<any>subscribeAPIConnection)._isConnected).toBe(false);
            expect(eventSpy).toHaveBeenCalled();
        }
    );

    // test(
    //     "Verify that any failure to close the connection are handled & logged as an error",
    //     async () => {
    //         try {
    //             const subscribeAPIConnection = new SubscribeAPIConnection(validConnectionConfig);
    //             (<any>subscribeAPIConnection.connectionState) = ConnectionState.CONNECTED;
    //             const warnSpy = jest.spyOn(subscribeAPIConnection.logger, 'warn');
    //             const stopSpy = jest.spyOn(subscribeAPIConnection.stream, 'close');
    //             await subscribeAPIConnection.disconnect();
    //             expect(warnSpy).toBeCalledTimes(1);
    //             expect(stopSpy).toBeCalledTimes(0);
    //         } catch (e) {
    //             throw new Error(e);
    //         }
    //     }
    // );

});