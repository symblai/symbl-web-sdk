import Symbl from "../../src/symbl/index";
import { HttpError, InvalidCredentialsError } from '../../src/error';
import { ACCESS_TOKEN, APP_ID, APP_SECRET } from '../constants';

// If the `appId` and `appSecret` are invalid which is verified after generating the token, then `InvalidCredentialsError` should be thrown.
// If the `accessToken` is (also) provided, then it should be validated, failure in which should result in `AccessTokenExpiredError`
// If `appId`, `appSecret` and `accessToken` are all provided, then all of them should be validated and accessToken should be given priority for usage.
// If all the validations pass, the JS SDK is initialized with these parameters



describe('Mock SDK', () => {
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
        "Symbl.init: Initalizes with the SDK by validating authConfig with only AccessToken and sending it to JS SDK",
        async () => {
            const authConfig = {
                accessToken: ACCESS_TOKEN
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
        "Symbl.init: Pass SymblConfig into constructor and then call init to use previously validated and stored config",
        async () => {
            const authConfig = {
                appId: APP_ID,
                appSecret: APP_SECRET
            };
            const symbl = new Symbl(authConfig);
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            // const jsSDKSpy = jest.spyOn((Symbl.prototype as any).sdk, 'init');
            await symbl.init();
            expect(validationSpy).toBeCalledWith(authConfig);
            expect(validationSpy).toReturnWith(true);
            // expect(sdkInitMock).toBeCalledTimes(1);
        }
    );
    test(
        "Symbl.init: Ignores invalid parameters ",
        async () => {
            const authConfig = {
                appId: APP_ID,
                appSecret: APP_SECRET,
                foo:'bar'
            };
            const symbl = new Symbl();
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            await symbl.init(authConfig);
            expect(validationSpy).toBeCalledWith(authConfig);
            expect(validationSpy).toReturnWith(true);
            // expect(sdkInitMock).toBeCalledTimes(1);
        }
    );
    
    test(
        "Symbl.init: Called twice",
        async () => {
            const authConfig = {
                appId: APP_ID,
                appSecret: APP_SECRET,
            };
            const symbl = new Symbl();
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            await symbl.init(authConfig);
            await symbl.init(authConfig);
            expect(validationSpy).toBeCalledWith(authConfig);
            expect(validationSpy).toReturnWith(true);
            // expect(sdkInitMock).toBeCalledTimes(1);
        }
    );
    test(
        "Symbl.init: Called with undefined as auth config",
        async () => {
            const authConfig = undefined
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("No credentials were passed"));
        }
    );
    test(
        "Symbl.init: Called with null auth config",
        async () => {
            const authConfig = null
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("No credentials were passed"));
        }
    );
    test(
        "Symbl.init: Called with undefined appId",
        async () => {
            const authConfig = {
                appId: undefined,
                appSecret: APP_SECRET,
            };
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("AppID is missing"));
        }
    );
    test(
        "Symbl.init: Called with null appId",
        async () => {
            const authConfig = {
                appId: null,
                appSecret: APP_SECRET,
            };
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("AppID is missing"));
        }
    );
    test(
        "Symbl.init: Called with undefined appSecret",
        async () => {
            const authConfig = {
                appId: APP_ID,
                appSecret: undefined,
            };
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("AppSecret is missing"));
        }
    );
    test(
        "Symbl.init: Called with null appSecret",
        async () => {
            const authConfig = {
                appId: APP_ID,
                appSecret: null,
            };
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("AppSecret is missing"));
        }
    );
    test(
        "Symbl.init: Called with undefined accessToken",
        async () => {
            const authConfig = {
                accessToken: undefined,
            };
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("Please provide an AppID & AppSecret or an AccessToken"));
        }
    );
    test(
        "Symbl.init: Called with null accessToken",
        async () => {
            const authConfig = {
                accessToken: null,
            };
            const symbl = new Symbl();
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("Please provide an AppID & AppSecret or an AccessToken"));
        }
    );
    test(
        "Symbl.init: Fails to initialize with invalid AppID and throws an InvalidCredentialsError",
        async () => {
            const authConfig = {
                appId: '58686b6b505a41456c43707042313855554c494e78575171506a38354f6c3sdfsd850',
                appSecret: APP_SECRET
            };
            const symbl = new Symbl();
            const validationSpy = jest.spyOn(symbl, '_validateSymblConfig');
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError(new InvalidCredentialsError("AppID is not valid"));
        }
    );
})

describe("Mocking SDK Error", () => {
    test(
        "Symbl.init: Fails to initialize and throws an HttpError",
        async () => {
            const authConfig = {
                appId: '47427768525353535765506f536961616d535a4b6d743554535a665855486f55',
                appSecret: APP_SECRET
            };
            const symbl = new Symbl();
            (symbl as any).sdk = {
                init: jest.fn(() => {throw new Error('An error happened')})
            };
            await expect(async () => await symbl.init(authConfig)).rejects.toThrowError();
        }
    );
})



