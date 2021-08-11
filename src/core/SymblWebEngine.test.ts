const SymblWebEngine = require("./SymblWebEngine");
const { NullError, ConfigError } = require("./services/ErrorHandler")

test(
    "init(): Error returned on null appConfig",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.init(null);
        } catch (err) {
            expect(err).toEqual(new NullError("AppConfig is null"))
        }
    }
);

test(
    "init(): Error returned on missing AppID",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.init({appSecret: "12345"});
        } catch (err) {
            expect(err).toEqual(new ConfigError("AppID is missing"))
        }
    }
);

test(
    "init(): Error returned on missing AppSecret",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.init({appID: "12345"});
        } catch (err) {
            expect(err).toEqual(new ConfigError("AppID is missing"))
        }
    }
);

test(
    "startRealtimeRequest(): Error returned on null realtimeConfig",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.startRealtimeRequest(null);
        } catch (err) {
            expect(err).toEqual(new NullError("Realtime config is null"))
        }
    }
);

test(
    "startRealtimeRequest(): Error returned on missing realtimeConfig",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.startRealtimeRequest();
        } catch (err) {
            expect(err).toEqual(new ConfigError("Realtime config is missing"))
        }
    }
);

test(
    "startRealtimeRequest(): Error returned on missing realtimeConfig Meeting ID",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.startRealtimeRequest({});
        } catch (err) {
            expect(err).toEqual(new ConfigError("Meeting ID is missing"))
        }
    }
);

test(
    "connect(): Error returned on null realtime websocket connection",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.connect(null);
        } catch (err) {
            expect(err).toEqual(new NullError("Realtime websocket connection is null"))
        }
    }
);

test(
    "connect(): Error returned on missing realtime websocket connection",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.connect();
        } catch (err) {
            expect(err).toEqual(new ConfigError("Realtime websocket connection is missing"))
        }
    }
);

test(
    "subscribeToStreaming(): Error returned on null connection ID",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.subscribeToStreaming(null);
        } catch (err) {
            expect(err).toEqual(new NullError("Connection ID is null"))
        }
    }
);

test(
    "subscribeToStreaming(): Error returned on missing connection ID",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.subscribeToStreaming();
        } catch (err) {
            expect(err).toEqual(new ConfigError("Connection ID is missing"))
        }
    }
);

test(
    "subscribeToTelephony(): Error returned on null connection ID",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.subscribeToTelephony(null);
        } catch (err) {
            expect(err).toEqual(new NullError("Connection ID is null"))
        }
    }
);

test(
    "subscribeToTelephony(): Error returned on missing connection ID",
    async () => {
        const engine = new SymblWebEngine();
        expect.assertions(1);
        try {
            await engine.subscribeToTelephony();
        } catch (err) {
            expect(err).toEqual(new ConfigError("Connection ID is missing"))
        }
    }
);

test(
    "Logger has methods from JS SDK",
    () => {

        const engine = new SymblWebEngine();
        expect(engine.sdk.logger.hasOwnProperty("getLevel"));
        expect(engine.sdk.logger.hasOwnProperty("setLevel"));
        expect(engine.sdk.logger.hasOwnProperty("setDefaultLevel"));
        expect(engine.sdk.logger.hasOwnProperty("trace"));
        expect(engine.sdk.logger.hasOwnProperty("debug"));
        expect(engine.sdk.logger.hasOwnProperty("log"));
        expect(engine.sdk.logger.hasOwnProperty("info"));
        expect(engine.sdk.logger.hasOwnProperty("warn"));
        expect(engine.sdk.logger.hasOwnProperty("error"));

    }
);
