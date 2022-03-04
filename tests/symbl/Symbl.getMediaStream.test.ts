// test(
//     "Symbl.init: Initalizes with the SDK by validating authConfig and sending it to JS SDK",
//     async () => {
//         const authConfig = {
//             appId: APP_ID,
//             appSecret: APP_SECRET
//         };

//         try {
//             const symbl = new Symbl();
//             const validatiPCMonSpy = jest.spyOn(symbl, '_validateSymblConfig');
//             const jsSDKSpy = jest.spyOn(symbl.sdk, 'init');
//             await symbl.init(authConfig);
//             expect(validationSpy).toBeCalledWith(authConfig);
//             expect(validationSpy).toReturnWith(true);
//             expect(jsSDKSpy).toBeCalledTimes(1);
//         } catch (e) {
//             throw new Error(e);
//         }
//     }
// );