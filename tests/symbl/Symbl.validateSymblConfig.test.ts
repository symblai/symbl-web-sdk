import Symbl from "../../src2/symbl/index";
import { InvalidCredentialsError, AccessTokenExpiredError } from "../../src2/error/symbl/index";
import { APP_ID, APP_SECRET, ACCESS_TOKEN, EXPIRED_ACCESS_TOKEN } from '../constants';


test(
    "Symbl._validateSymblConfig - passing in appId and appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "Symbl._validateSymblConfig - passing in accessToken",
    async () => {
        const authConfig = {
            accessToken: ACCESS_TOKEN
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);  
        } catch (e) {
            throw new Error(e);
        }
    }
);
    
test(
    "Symbl._validateSymblConfig - passing in no parameters",
    async () => {
        try {
            const symbl = new Symbl(null);
            symbl._validateSymblConfig(null);
        } catch(e) {
            expect(e).toEqual(new InvalidCredentialsError('No credentials were passed'));
        }
    }
);

test(
    "Symbl._validateSymblConfig - appSecret is missing",
    async () => {
        const authConfig = {
            appId: APP_ID
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);  
        } catch (e) {
            expect(e).toEqual(new InvalidCredentialsError("AppSecret is missing"))
        }
    }
);

test(
    "Symbl._validateSymblConfig - appId is missing",
    async () => {
        const authConfig = {
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);
        } catch (e) {
            expect(e).toEqual(new InvalidCredentialsError("AppID is missing"))
        }
    }
);

test(
    "Symbl._validateSymblConfig - accessToken is present with appId and appSeret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
            accessToken: ACCESS_TOKEN
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);
        } catch (e) {
            expect(e).toEqual(new InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately."))
        }
    }
);

test(
    "Symbl._validateSymblConfig - malformed appId",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
        };
        
        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);
        } catch (e) {
            expect(e).toEqual(new InvalidCredentialsError("AppID is not valid"))
        }
    }
);

test(
    "Symbl._validateSymblConfig - malformed appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);
        } catch (e) {
            expect(e).toEqual(new InvalidCredentialsError("The app secret value is invalid."))
        }
    }
);

test(
    "Symbl._validateSymblConfig - expired accessToken",
    async () => {
        const authConfig = {
            accessToken: EXPIRED_ACCESS_TOKEN
        };

        try {
            const symbl = new Symbl();
            symbl._validateSymblConfig(authConfig);
        } catch (e) {
            expect(e).toEqual(new AccessTokenExpiredError("Provided token as expired"))
        }
    }
);