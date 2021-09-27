const {sdk} = require("@symblai/symbl-js/build/client.sdk.min.js");
const DeviceManager = require("../workers/DeviceManager");
const Logger = require("./services/Logger");
const Store = require("./services/Storage");
const {ConfigError, NullError, ConnectionError} = require("./services/ErrorHandler");


/** Main Symbl Web SDK class */
export = class SymblWebEngine {

    /* eslint-disable */
    /**
     * @ignore
     */
    sdk: typeof sdk = sdk;
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
     * @ignore
     */
    store: typeof Store;

    /**
     * Sets up the basic Symbl connection object
     * @param {string} loggingLevel - establishes default log level
     */
    constructor (logLevel = "warn") {

        this.logger = new Logger();
        this.logger.setDefaultLevel(logLevel);
        this.deviceManager = new DeviceManager();
        this.store = new Store(this.logger);
        this.store.init();

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

            throw new ConnectionError(err);

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

        const storedConfig = JSON.parse(JSON.stringify(config));

        const expDate = parseInt(
            this.store.get("connectionConfigExpiration"),
            10
        );

        if (config.autoReconnect &&
            storedConfigString === this.store.get("connectionConfig") &&
            Date.now() < expDate) {

            return this.reconnect();

        }

        this.store.put(
            "connectionConfig",
            storedConfigString
        );

        this.logger.info(`Symbl: Starting Realtime Request for ${config.id}`);

        const connection = await this.sdk.startRealtimeRequest(config);

        this.logger.info(`Symbl: Completed Realtime Request for ${config.id}`);

        const setExpiration = () => {

            this.store.expiration(
                "connectionConfig",
                1
            );

        };

        if (config.handlers.onDataReceived) {

            const fn = config.handlers.onDataReceived.bind({});
            config.handlers.onDataReceived = () => {

                setExpiration();
                fn();

            };

        } else {

            config.handlers.onDataReceived = () => {

                setExpiration();

            };

        }


        if (connect) {

            this.connect(connection);

        }

        return connection;

    }

    /**
     * Reconnects to an existing realtime connection using stored connection
     * config with an expiration date.
     */
    async reconnect (): Promise<SymblRealtimeConnection> {

        const config = JSON.parse(this.store.get("connectionConfig"));
        const expDate = parseInt(
            this.store.get("connectionConfigExpiration"),
            10
        );

        // UTC
        if (Date.now() > expDate) {

            throw new ConfigError("Connection configuration has expired");

        }

        if (!config) {

            throw new NullError("There is no saved realtime configuration");

        }

        this.logger.info("Symbl: Attempting to reconnect to Realtime websocket");

        const connection = await this.startRealtimeRequest(
            config,
            true
        );

        this.logger.info("Symbl: Successfully reconnected to websocket");

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

            throw new ConnectionError(err);

        }

    }

    /**
     * Subscribe to existing streaming connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToStream (connectionId: string, cb: () => unknown):
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

            throw new ConnectionError(err);

        }

    }

    /**
     * Subscribe to existing telephony connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     */
    async subscribeToCall (connectionId: string, cb: () => unknown):
        Promise<void> {

        if (!connectionId) {

            throw new ConfigError("Connection ID is missing");

        }

        this.logger.info(`Symbl: Subscribing to Call at ${connectionId}`);

        try {

            await this.sdk.subscribeToConnection(
                connectionId,
                cb,
                false
            );

            this.logger.info(`Symbl: Subscribed to Call at ${connectionId}`);

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

}
