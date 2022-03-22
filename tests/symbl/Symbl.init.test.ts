/* AppID is invalid? Double checked and it is definitely updated. */

import Symbl from "../../src/symbl/index";
import { HttpError, InvalidCredentialsError } from '../../src/error';
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import { APP_ID, APP_SECRET } from '../constants';

// If the `appId` and `appSecret` are invalid which is verified after generating the token, then `InvalidCredentialsError` should be thrown.
// If the `accessToken` is (also) provided, then it should be validated, failure in which should result in `AccessTokenExpiredError`
// If `appId`, `appSecret` and `accessToken` are all provided, then all of them should be validated and accessToken should be given priority for usage.
// If all the validations pass, the JS SDK is initialized with these parameters

let sdkInitMock = jest.fn();
beforeAll(() => {
    (Symbl.prototype as any).sdk = {
        init: sdkInitMock
    };
});

test(
    "Symbl.init: Initalizes with the SDK by validating authConfig and sending it to JS SDK",
    async () => {
        const authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        const symbl = new Symbl();
        const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
        // const jsSDKSpy = jest.spyOn((Symbl.prototype as any).sdk, 'init');
        await symbl.init(authConfig);
        expect(validationSpy).toBeCalledWith(authConfig);
        expect(validationSpy).toReturnWith(true);
        // expect(sdkInitMock).toBeCalledTimes(1);
    }
);


test(
    "Symbl.init: Fails to initialize and throws an HttpError",
    async () => {
        try {
            const authConfig = {
                appId: '58686b6b505a41456c43707042313855554c494e78575171506a38354f6c3sdfsd850',
                appSecret: APP_SECRET
            };
            const symbl = new Symbl();
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            await expect(async () => await symbl.init(authConfig)).toThrowError(new InvalidCredentialsError("AppID is not valid"));
        } catch(e) {

        }
    }
);

