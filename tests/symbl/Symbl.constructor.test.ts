import Symbl from "../../src2/symbl/index";
import { InvalidCredentialsError, AccessTokenExpiredError } from "../../src2/error/symbl/index";
import { APP_ID, APP_SECRET, ACCESS_TOKEN, EXPIRED_ACCESS_TOKEN } from '../constants';

test(
    "constructor for Symbl class - passing in appId and appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl(authConfig);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    "constructor for Symbl class - passing in accessToken",
    async () => {
        const authConfig = {
            accessToken: ACCESS_TOKEN
        };

        try {
            const symbl = new Symbl(authConfig);  
        } catch (e) {
            throw new Error("Fix your test!");
        }
    }
);
    
test(
    "constructor for Symbl class - passing in no parameters",
    async () => {
        try {
            const symbl = new Symbl(null);
        } catch(e) {
            throw new Error("Fix your test!");
        }
    }
);

test(
    "constructor for Symbl class - appSecret is missing",
    async () => {
        const authConfig = {
            appId: APP_ID
        };

        try {
            const symbl = new Symbl(authConfig);  
        } catch (e) {
            // throw new Error("Fix your test!");
            expect(e).toEqual(new InvalidCredentialsError("AppSecret is missing"))
        }
    }
);

test(
    "constructor for Symbl class - appId is missing",
    async () => {
        const authConfig = {
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl(authConfig);  
        } catch (e) {
            // throw new Error("Fix your test!");
            expect(e).toEqual(new InvalidCredentialsError("AppID is missing"))
        }
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

        try {
            const symbl = new Symbl(authConfig);  
        } catch (e) {
            // throw new Error("Fix your test!");
            expect(e).toEqual(new InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately."))
        }
    }
);

test(
    "constructor for Symbl class - malformed appId",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET,
        };
        
        try {
            const symbl = new Symbl(authConfig);
        } catch (e) {
            expect(e).toEqual(new InvalidCredentialsError("AppID is not valid"))
        }
    }
);

test(
    "constructor for Symbl class - malformed appSecret",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl(authConfig);  
        } catch (e) {
            // throw new Error("Fix your test!");
            expect(e).toEqual(new InvalidCredentialsError("The app secret value is invalid."))
        }
    }
);

test(
    "constructor for Symbl class - expired accessToken",
    async () => {
        const authConfig = {
            accessToken: EXPIRED_ACCESS_TOKEN
        };

        try {
            const symbl = new Symbl(authConfig);  
        } catch (e) {
            // throw new Error("Fix your test!");
            expect(e).toEqual(new AccessTokenExpiredError("Provided token as expired"))
        }
    }
);
