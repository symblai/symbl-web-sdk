import Symbl from "../../src2/symbl";
import { ConnectionFactory, SubscribeAPIConnection } from '../../src2/connection';
jest.mock('../../src2/connection'); // SoundPlayer is now a mock constructor
import { APP_ID, APP_SECRET } from '../constants';


// Validate `sessionId` and if not present, throw `RequiredParameterAbsentError`
// Initialize the instance of `SubscribeAPIConnection` via the `ConnectionFactory` with the passed in `sessionId`
// If connection is successful, return the instance of the `SubscribeAPIConnection`
// If connection fails to get established, re-throw the error returned by `SubscribeAPIConnection`


beforeEach(() => {
    // will Clear all instances and calls to constructor and all methods:
    ConnectionFactory.mockClear();
    SubscribeAPIConnection.mockClear();
});

test(
    "Symbl.subscribeToConnection - Calling subscribeToConnection with valid parameters",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const sessionId = "230920-99392-187463";
        try {
            const symbl = new Symbl(authConfig);
            const subscription = symbl.subscribeToConnection(sessionId);
            const connectSpy = jest.spyOn(subscription, 'connect');
            expect(connectSpy).toHaveBeenCalled();
            expect(subscription instanceof SubscribeAPIConnection);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl.subscribeToConnection - Calling subscribeToConnection without sessionId",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        try {
            const symbl = new Symbl(authConfig);
            const subscription = symbl.subscribeToConnection();
            const connectSpy = jest.spyOn(subscription, 'connect');
            expect(connectSpy).toHaveBeenCalled();
            expect(subscription instanceof SubscribeAPIConnection);
        } catch (e) {
            expect(e).toEqual(new RequiredParameterAbsentError("sessionID is required"))
        }
    }
);
