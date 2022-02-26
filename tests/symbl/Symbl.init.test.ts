import Symbl from "../../src2/symbl/index";
import HttpError from '../../src2/error/network/http/HttpError';
import { APP_ID, APP_SECRET } from '../constants';

// If the `appId` and `appSecret` are invalid which is verified after generating the token, then `InvalidCredentialsError` should be thrown.
// If the `accessToken` is (also) provided, then it should be validated, failure in which should result in `AccessTokenExpiredError`
// If `appId`, `appSecret` and `accessToken` are all provided, then all of them should be validated and accessToken should be given priority for usage.
// If all the validations pass, the JS SDK is initialized with these parameters

test(
    "Symbl.init: Initalizes with the SDK by validating authConfig and sending it to JS SDK",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl();
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            const jsSDKSpy = jest.spyOn(symbl.sdk, 'init');
            await symbl.init(authConfig);
            expect(validationSpy).toBeCalledWith(authConfig);
            expect(validationSpy).toReturnWith(true);
            expect(jsSDKSpy).toBeCalledTimes(1);
        } catch (e) {
            throw new Error(e);
        }
    }
);


test(
    "Symbl.init: Fails to initialize and throws an HttpError",
    async () => {
        const authConfig = {
            appId: '58686b6b505a41456c43707042313855554c494e78575171506a38354f6c3850',
            appSecret: APP_SECRET
        };

        try {
            const symbl = new Symbl();
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            const jsSDKSpy = jest.spyOn(symbl.sdk, 'init');
            await symbl.init(authConfig);
            expect(validationSpy).toBeCalledWith(authConfig);
            expect(validationSpy).toReturnWith(true);
            expect(jsSDKSpy).toBeCalledTimes(1);
        } catch (e) {
            expect(e).toEqual(new HttpError("Combination of appId and appSecret is not valid."))
        }
    }
);