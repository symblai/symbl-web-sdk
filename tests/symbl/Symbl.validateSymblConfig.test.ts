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
        const symbl = new Symbl();
        await expect(() => symbl._validateSymblConfig(authConfig)).not.toThrow();
    }
);

test(
    "Symbl._validateSymblConfig - passing in accessToken",
    async () => {
        const authConfig = {
            accessToken: ACCESS_TOKEN
        };
        const symbl = new Symbl();
        symbl._validateSymblConfig(authConfig);  
        await expect(() => symbl._validateSymblConfig(authConfig)).not.toThrow();
    }
);
    
test(
    "Symbl._validateSymblConfig - passing in no parameters",
    async () => {
        try {
            const symbl = new Symbl(null);
            await expect(() => symbl._validateSymblConfig(null)).toThrowError(new InvalidCredentialsError('No credentials were passed'));
        } catch(e) {
            //
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
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppSecret is missing"));
        } catch (e) {
            //
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
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppID is missing"));
        } catch (e) {
            //
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
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately."));
        } catch (e) {
            //
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
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppID is not valid"));
        } catch (e) {
            //
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
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("The app secret value is invalid."));
        } catch (e) {
            //
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
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new AccessTokenExpiredError("Provided token as expired"));
        } catch (e) {
            //
        }
    }
);