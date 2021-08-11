const sdk = require("../../scripts/client.sdk.min.js");
const DeviceManager = require("../workers/DeviceManager");
const Logger = require("./services/Logger");
const {ConfigError, NullError} = require("./services/ErrorHandler");

export = class SymblWebEngine {

    /* eslint-disable */
    sdk: typeof sdk = (window as any).rammerSdk;
    /* eslint-enable */

    appConfig: unknown;

    deviceManager: typeof DeviceManager;
    logger: typeof Logger;

    constructor () {

        this.deviceManager = new DeviceManager();
        this.logger = new Logger();

    }

    /**
     * Initializes SymblWebEngine with application configuration
     * @param {object} appConfig - Symbl configuration object
     */
    async init (appConfig: SymblConfig): Promise<void> {

        if (!appConfig) {

            throw new NullError("AppConfig is missing");

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

    }

    /**
     * Starts a request to the WebSocket-based Streaming API
     * @param {object} config - Symbl realtime request config object
     * @param {boolean} connect - indicate whether connection is immediate
     */
    async startRealtimeRequest (config: SymblRealtimeConfig, connect: boolean):
        Promise<SymblRealtimeConnection> {

        if (!config) {

            throw new NullError("Realtime config is missing");

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

        if (!connection) {

            throw new NullError("Realtime websocket connection is missing");

        }

        await this.deviceManager.deviceConnect(connection);

    }

    /**
     * Subscribe to existing streaming connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToStreaming (connectionId: string, cb: unknown):
        Promise<void> {

        if (!connectionId) {

            throw new NullError("Connection ID is missing");

        }

        await this.sdk.subscribeToConnection(
            connectionId,
            cb,
            true
        );

    }

    /**
     * Subscribe to existing telephony connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToTelephony (connectionId: string, cb: unknown):
        Promise<void> {

        if (!connectionId) {

            throw new ConfigError("Connection ID is missing");

        }

        await this.sdk.subscribeToConnection(
            connectionId,
            cb,
            false
        );

    }

}
