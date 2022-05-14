import Symbl from "../../src/symbl/index";
import { InvalidCredentialsError, AccessTokenExpiredError, InvalidValueError } from "../../src/error";
import { APP_ID, APP_SECRET, ACCESS_TOKEN, EXPIRED_ACCESS_TOKEN } from '../constants';
import {VALID_LOG_LEVELS} from "../../src/utils/configs";

test(
    "constructor for Symbl class - passing in appId and appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        expect(() => new Symbl(authConfig)).not.toThrow();
    }
);

test(
    "constructor for Symbl class - passing in basePath, appId and appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
            basePath: "https://some-api.base.path.net"
        };
        expect(() => new Symbl(authConfig)).not.toThrow();
    }
);

test(
    "constructor for Symbl class - passing in basePath, appId and appSecret, logLevel and reconnectOnError",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
            basePath: "https://some-api.base.path.net",
            logLevel: "debug",
            reconnectOnError: true,
        };
        expect(() => new Symbl(authConfig)).not.toThrow();
    }
);

test(
    "constructor for Symbl class - invalid logLevel",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
            logLevel: "errors"
        };
        expect(() => new Symbl(authConfig)).toThrow(new InvalidValueError(`Log level must be one of: ${VALID_LOG_LEVELS.join(", ")}`));
    }
);

test(
    "constructor for Symbl class - passing in accessToken",
    async () => {
        const authConfig = {
            accessToken: ACCESS_TOKEN
        };

        expect(() => new Symbl(authConfig)).not.toThrow()
    }
);
    
test(
    "constructor for Symbl class - passing in no parameters",
    async () => {
        expect(() => new Symbl(null)).not.toThrow()
    }
);

test(
    "constructor for Symbl class - appSecret is missing",
    async () => {
        const authConfig = {
            appId: APP_ID
        };

        expect(() => new Symbl(authConfig)).toThrowError(new InvalidCredentialsError("AppSecret is missing"))

    
    }
);

test(
    "constructor for Symbl class - appId is missing",
    async () => {
        const authConfig = {
            appSecret: APP_SECRET
        };

        expect(() => new Symbl(authConfig)).toThrowError(new InvalidCredentialsError("AppID is missing"))
    }
);

test(
    "constructor for Symbl class - accessToken is present with appId and appSeret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
            accessToken: ACCESS_TOKEN
        };

        expect(() => new Symbl(authConfig)).toThrowError(new InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately."))
    }
);

test(
    "constructor for Symbl class - malformed appId",
    async () => {
        const authConfig = {
            appId: "soijaosdifjasf",
            appSecret: APP_SECRET,
        };
        
        expect(() => new Symbl(authConfig)).toThrowError(new InvalidCredentialsError("AppID is not valid"))
    }
);

test(
    "constructor for Symbl class - malformed appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: "xyz"
        };

        expect(() => new Symbl(authConfig)).toThrowError(new InvalidCredentialsError("AppSecret is not valid"))
    }
);

test(
    "constructor for Symbl class - expired accessToken",
    async () => {
        const authConfig = {
            accessToken: EXPIRED_ACCESS_TOKEN
        };

        expect(() => new Symbl(authConfig)).toThrowError(new AccessTokenExpiredError("Provided token as expired"))
    }
);
