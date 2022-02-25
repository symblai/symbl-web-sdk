// import SymblWebEngine from "../src/core/SymblWebEngine";
// import { NullError, ConfigError, ConnectionError } from "../src/core/services/ErrorHandler";

// test(
//     "init(): Error returned on null appConfig",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.init();
//         } catch (err) {
//             expect(err).toEqual(new NullError("AppConfig is missing"))
//         }
//     }
// );

// test(
//     "init(): Error returned on missing AppID/AppSecret && missing AccessToken",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.init({
//                 basePath: 'example.com'
//             });
//         } catch (err) {
//             expect(err).toEqual(new ConfigError("Please provide an AppID & AppSecret or an AccessToken"))
//         }
//     }
// )

// test(
//     "init(): Error returned on missing AppID",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.init({
//                 appSecret: "12345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678"
//             });
//         } catch (err) {
//             expect(err).toEqual(new ConfigError("AppID is missing"))
//         }
//     }
// );

// test(
//     "init(): Error returned on missing AppSecret",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.init({
//                 appId: "123456781f34567812b4567812345a78123456c8123456781234567812345678"
//             });
//         } catch (err) {
//             expect(err).toEqual(new ConfigError("AppSecret is missing"))
//         }
//     }
// );

// test(
//     "init(): Error returned on invalid AppID",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.init({
//                 appId: "12345!abc",
//                 appSecret: "12345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678123456781234567812345678"
//             });
//         } catch (err) {
//             expect(err).toEqual(new ConfigError("AppID is not valid"))
//         }
//     }
// );

// test(
//     "init(): Error returned on invalid AppSecret",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.init({
//                 appId: "123456781f34567812b4567812345a78123456c8123456781234567812345678",
//                 appSecret: "12345!abc"
//             });
//         } catch (err) {
//             expect(err).toEqual(new ConfigError("AppSecret is not valid"))
//         }
//     }
// );

// test(
//     "startRealtimeRequest(): Error returned on null realtimeConfig",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.startRealtimeRequest();
//         } catch (err) {
//             expect(err).toEqual(new NullError("Realtime config is missing"))
//         }
//     }
// );

// test(
//     "startRealtimeRequest(): Error returned on missing realtimeConfig Meeting ID",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.startRealtimeRequest({});
//         } catch (err) {
//             expect(err).toEqual(new ConfigError("Meeting ID is missing"))
//         }
//     }
// );



// test(
//     "reconnect(): Error returned on expired connectionConfig",
//     async () => {
//         const engine = new SymblWebEngine();

//         engine.store.delete("connectionConfigExpiration");
//         engine.store.delete("connectionConfig");

//         try {
//             await engine.reconnect();
//         } catch(err) {
//             expect(err).toEqual(new ConfigError("Connection configuration has expired"))
//         }

//     }
// );

// test(
//     "reconnect(): Error returned on no stored configuration",
//     async () => {
//         const engine = new SymblWebEngine();

//         engine.store.expiration(
//             "connectionConfig",
//             1
//         );
//         engine.store.delete("connectionConfig");

//         try {
//             await engine.reconnect();
//         } catch(err) {
//             expect(err).toEqual(new NullError("There is no saved realtime configuration"))
//         }

//     }
// );

// test(
//     "connect(): Error returned on null realtime websocket connection",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.connect();
//         } catch (err) {
//             expect(err).toEqual(new NullError("Realtime websocket connection is missing"))
//         }
//     }
// );

// test(
//     "subscribeToStream(): Error returned on null connection ID",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.subscribeToStream();
//         } catch (err) {
//             expect(err).toEqual(new NullError("Connection ID is missing"))
//         }
//     }
// );

// test(
//     "subscribeToCall(): Error returned on null connection ID",
//     async () => {
//         const engine = new SymblWebEngine();
//         expect.assertions(1);
//         try {
//             await engine.subscribeToCall();
//         } catch (err) {
//             expect(err).toEqual(new NullError("Connection ID is missing"))
//         }
//     }
// );
