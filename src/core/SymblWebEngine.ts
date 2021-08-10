const sdk = require("../../scripts/client.sdk.min.js");
const DeviceManager = require("../workers/DeviceManager");
const {ConfigError, NullError} = require("./services/ErrorHandler");

interface SymblAppConfig {
    appId: string;
    appSecret: string;
    basePath?: string;
    logLevel?: string;
}

interface SymblRealtimeConnection {
    conversationId: string;
    sendAudio: unknown;
    stop: unknown;
}

interface SymblRealtimeConfig {
    id: string;
    insightTypes?: Array<string>;
    config?: {
        meetingTitle?: string;
        confidenceThreshold?: number;
        timezoneOffset?: number;
        languageCode?: string;
        sampleRateHertz?: number;
    };
    speaker?: {
        userId?: string;
        name?: string;
    }
    handlers?: {
        onSpeechDetected?: unknown;
        onMessageResponse?: unknown;
        onInsightResponse?: unknown;
        onTopicResponse?: unknown;
    }
}

export = class SymblWebEngine {

    sdk: typeof sdk = (window as any).rammerSdk;

    appConfig: unknown;

    deviceManager: typeof DeviceManager;

    constructor () {

        this.deviceManager = new DeviceManager();

    }

    /**
     * Initializes SymblWebEngine with application configuration
     * @param {object} appConfig - Symbl configuration object
     */
    async init (appConfig: SymblAppConfig): Promise<object> {

        if (appConfig === null) {

            throw new NullError("AppConfig is null");

        }
        if (!appConfig.appId) {

            throw new ConfigError("AppID is missing");

        }
        if (!appConfig.appSecret) {

            throw new ConfigError("AppSecret is missing");

        }

        await this.sdk.init({
            "appId": appConfig.appId,
            "appSecret": appConfig.appSecret,
            "basePath": appConfig.basePath || "https://api.symbl.ai",
            "logLevel": "debug"
        });

        return this;

    }

    /**
     * Starts a request to the WebSocket-based Streaming API
     * @param {object} config - Symbl realtime request config object
     * @param {boolean} connect - indicate whether connection is immediate
     */
    async startRealtimeRequest (config: SymblRealtimeConfig, connect: boolean):
        Promise<SymblRealtimeConnection> {

        if (config === null) {

            throw new NullError("Realtime config is null");

        }
        if (!config) {

            throw new ConfigError("Realtime config is missing");

        }
        if (!config.id) {

            throw new ConfigError("Meeting ID is missing");

        }

        const connection = await this.sdk.startRealtimeRequest(config);
        if (connect) {

            this.connect(connection);

        }
        return connection;

    }

    /**
     * Manually connects to the Symbl WebSocket endpoint
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async connect (connection: SymblRealtimeConnection): Promise<void> {

        if (connection === null) {

            throw new NullError("Realtime config is null");

        }
        if (!connection) {

            throw new ConfigError("Realtime websocket connection is missing");

        }

        await this.deviceManager.deviceConnect(connection);

    }

    /**
     * Subscribe to existing streaming connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToStreaming (connectionId: string, cb: unknown):
        Promise<object> {

        if (connectionId === null) {

            throw new NullError("Connection ID is null");

        }
        if (!connectionId) {

            throw new ConfigError("Connection ID is missing");

        }

        const subscription = await this.sdk.subscribeToConnection(
            connectionId,
            cb,
            true
        );

        return subscription;

    }

    /**
     * Subscribe to existing telephony connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToTelephony (connectionId: string, cb: unknown):
        Promise<object> {

        if (connectionId === null) {

            throw new NullError("Connection ID is null");

        }
        if (!connectionId) {

            throw new ConfigError("Connection ID is missing");

        }

        const subscription = await this.sdk.subscribeToConnection(
            connectionId,
            cb,
            false
        );

        return subscription;

    }

}
