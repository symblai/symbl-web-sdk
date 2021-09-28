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
        this.store = new Store();
        this.store.init();
        this.deviceManager = new DeviceManager(
            this.logger,
            this.store
        );

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
     * @param {object} options - Symbl realtime request config object
     * @param {boolean} connect - indicate whether connection is immediate
     */
    async startRealtimeRequest (options: SymblRealtimeConfig, connect: boolean):
        Promise<SymblRealtimeConnection> {

        if (!options) {

            throw new NullError("Realtime config is missing");

        }
        if (!options.id) {

            throw new ConfigError("Meeting ID is missing");

        }

        options.config.sampleRateHertz = new AudioContext().sampleRate;

        const storedConfig = JSON.parse(JSON.stringify(options));

        this.store.put(
            "connectionConfig",
            JSON.stringify(storedConfig)
        );

        this.logger.info(`Symbl: Starting Realtime Request for ${options.id}`);

        const connection = await this.sdk.startRealtimeRequest(options);

        this.logger.info(`Symbl: Completed Realtime Request for ${options.id}`);

        const setExpiration = () => {

            this.store.expiration(
                "connectionConfig",
                1
            );

        };

        if (options.handlers.onDataReceived) {

            const fn = options.handlers.onDataReceived.bind({});
            options.handlers.onDataReceived = () => {

                setExpiration();
                fn();

            };

        } else {

            options.handlers.onDataReceived = () => {

                setExpiration();

            };

        }


        if (connect) {

            this.connect(connection);

        }

        return connection;

    }

    /**
     * Stops the realtime request and closes the websocket
     * @param {object} connection - Symbl websocket connection
     */
    async stopRequest (connection: SymblRealtimeConnection): Promise<void> {

        try {

            await this.deviceManager.deviceDisconnect();
            await connection.stop();


        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /**
     * Reconnects to an existing realtime connection using stored connection
     * config with an expiration date.
     */
    async reconnect (): Promise<SymblRealtimeConnection> {

        const config = JSON.parse(this.store.get("connectionConfig"));
        const exp = new Date(this.store.get("connectionConfigExpiration"));

        if (new Date() > new Date(exp)) {

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
