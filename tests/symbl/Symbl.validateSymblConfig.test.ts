import Symbl from "../../src/symbl/index";
import { InvalidCredentialsError, AccessTokenExpiredError } from "../../src/error";
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
            const symbl = new Symbl(null);
            await expect(() => symbl._validateSymblConfig(null)).toThrowError(new InvalidCredentialsError('No credentials were passed'));
    }
);

test(
    "Symbl._validateSymblConfig - appSecret is missing",
    async () => {
        const authConfig = {
            appId: APP_ID
        };
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppSecret is missing"));
    }
);

test(
    "Symbl._validateSymblConfig - appId is missing",
    async () => {
        const authConfig = {
            appSecret: APP_SECRET
        };
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppID is missing"));
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
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately."));
    }
);

test(
    "Symbl._validateSymblConfig - malformed appId",
    async () => {
        const authConfig = {
            appId: APP_SECRET,
            appSecret: APP_SECRET,
        };
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppID is not valid"));
    }
);

test(
    "Symbl._validateSymblConfig - malformed appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_ID
        };
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new InvalidCredentialsError("AppSecret is not valid"));
    }
);

test(
    "Symbl._validateSymblConfig - malformed reconnectOnError",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
            reconnectOnError: "true"
        };
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig as any)).toThrowError(new InvalidCredentialsError("`reconnectOnError` must be a boolean value."));
    }
);

test(
    "Symbl._validateSymblConfig - expired accessToken",
    async () => {
        const authConfig = {
            accessToken: EXPIRED_ACCESS_TOKEN
        };
            const symbl = new Symbl();
            await expect(() => symbl._validateSymblConfig(authConfig)).toThrowError(new AccessTokenExpiredError("Provided token as expired"));
    }
);