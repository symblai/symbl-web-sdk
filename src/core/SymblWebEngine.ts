const sdk = require("../../scripts/client.sdk.min.js");
const DeviceManager = require("../workers/DeviceManager");
const Logger = require("./services/Logger");
const {ConfigError, NullError} = require("./services/ErrorHandler");


/** Main Symbl Web SDK class */
export = class SymblWebEngine {

    /* eslint-disable */
    /**
     * @ignore
     */
    sdk: typeof sdk = (window as any).rammerSdk;
    /* eslint-enable */

    /**
     * @ignore
     */
    deviceManager: typeof DeviceManager;

    /**
     * @ignore
     */
    logger: typeof Logger;

    /**
     * Sets up the basic Symbl connection object
     * @param {string} loggingLevel - establishes default log level
     */
    constructor (logLevel = "warn") {

        this.logger = new Logger();
        this.logger.setDefaultLevel(logLevel);
        this.deviceManager = new DeviceManager();

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

        this.logger.info("Symbl: Connecting to Symbl");

        try {

            await this.sdk.init({
                "appId": appConfig.appId,
                "appSecret": appConfig.appSecret,
                "basePath": appConfig.basePath || "https://api.symbl.ai"
            });

            this.logger.info("Symbl: Successfully connected to Symbl");

        } catch (err) {

            this.logger.error(err);
            this.logger.trace(err);

        }


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

        this.logger.info(`Symbl: Starting Realtime Request for ${config.id}`);

        const connection = await this.sdk.startRealtimeRequest(config);

        this.logger.info(`Symbl: Completed Realtime Request for ${config.id}`);

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

        this.logger.info("Symbl: Establishing Realtime Connection");

        try {

            await this.deviceManager.deviceConnect(connection);

            this.logger.info("Symbl: Established Realtime Connection");

        } catch (err) {

            this.logger.error(err);
            this.logger.trace(err);

        }

    }

    /**
     * Subscribe to existing streaming connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToStreaming (connectionId: string, cb: () => any):
        Promise<void> {

        if (!connectionId) {

            throw new NullError("Connection ID is missing");

        }

        this.logger.info(`Symbl: Subscribing to Streaming at ${connectionId}`);

        try {

            await this.sdk.subscribeToConnection(
                connectionId,
                cb,
                true
            );

            this.logger.info(`Symbl: Subscribed to Streaming at ${connectionId}`);

        } catch (err) {

            this.logger.error(err);
            this.logger.trace(err);

        }

    }

    /**
     * Subscribe to existing telephony connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToTelephony (connectionId: string, cb: () => any):
        Promise<void> {

        if (!connectionId) {

            throw new ConfigError("Connection ID is missing");

        }

        this.logger.info(`Symbl: Subscribing to Telephony at ${connectionId}`);

        try {

            await this.sdk.subscribeToConnection(
                connectionId,
                cb,
                false
            );

            this.logger.info(`Symbl: Subscribed to Telephony at ${connectionId}`);

        } catch (err) {

            this.logger.error(err);
            this.logger.trace(err);

        }

    }

}
