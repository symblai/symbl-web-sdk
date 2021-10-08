import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import DeviceManager from "../workers/DeviceManager";
import Logger from "./services/Logger";
import Store from "./services/Storage";
import {ConfigError, ConnectionError, NullError} from "./services/ErrorHandler";
import isBrowser from "../browser";


/** Main Symbl Web SDK class */
export default class SymblWebEngine {

    /* eslint-disable */
    /**
     * @ignore
     */
    sdk: sdk = sdk;
    /* eslint-enable */

    /**
     * @ignore
     */
    deviceManager: DeviceManager;

    /**
     * @ignore
     */
    logger: Logger;

    /**
     * @ignore
     */
    store: Store;

    realtimeConfig: SymblRealtimeConfig;

    onDeviceChangeDefined = false;

    /**
     * Sets up the basic Symbl connection object
     * @param {string} loggingLevel - establishes default log level
     */
    constructor (logLevel = "warn") {

        this.logger = new Logger();
        this.logger.setDefaultLevel(logLevel);
        this.store = new Store(this.logger);
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

        const alphaNumericRegex = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

        if (!appConfig) {

            throw new NullError("AppConfig is missing");

        }
        if (!appConfig.appId && !appConfig.appSecret && !appConfig.accessToken) {

            throw new ConfigError("Please provide an AppID & AppSecret or an AccessToken");

        }
        if (!appConfig.appId && !appConfig.accessToken) {

            throw new ConfigError("AppID is missing");

        }
        if (appConfig.appId &&
            (appConfig.appId.length !== 64 || !appConfig.appId.match(alphaNumericRegex))
        ) {

            throw new ConfigError("AppID is not valid");

        }
        if (appConfig.appId && !appConfig.appSecret && !appConfig.accessToken) {

            throw new ConfigError("AppSecret is missing");

        }
        if (appConfig.appSecret &&
            (appConfig.appSecret.length !== 128 || !appConfig.appSecret.match(alphaNumericRegex))
        ) {

            throw new ConfigError("AppSecret is not valid");

        }

        this.logger.info("Symbl: Connecting to Symbl");

        try {

            const initConfig: SymblConfig = {};

            if (appConfig.accessToken) {

                initConfig.accessToken = appConfig.accessToken;

            } else {

                initConfig.appId = appConfig.appId;
                initConfig.appSecret = appConfig.appSecret;

            }

            initConfig.basePath = appConfig.basePath || "https://api.symbl.ai";

            await this.sdk.init(initConfig);

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

        /*  Will add autoreconnect feature
        if (options.autoReconnect &&
            Date.now() <= parseInt(
                await this.store.get("connectionIDExpiration"),
                10
            )) {

            // something with just ID
            options.id = await this.store.get("connectionID");

        }
        */

        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

        options.config.sampleRateHertz = new AudioContext().sampleRate;

        const storedConfig = JSON.parse(JSON.stringify(options));

        await this.store.put(
            "connectionID",
            options.id
        );

        this.logger.info(`Symbl: Starting Realtime Request for ${options.id}`);

        this.realtimeConfig = options;

        const connection = await this.sdk.startRealtimeRequest(options);

        this.logger.info(`Symbl: Completed Realtime Request for ${options.id}`);

        if (connect) {

            await this.connectDevice(connection);

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
     * Manually connects a device to the Symbl WebSocket endpoint
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async connectDevice (connection: SymblRealtimeConnection): Promise<void> {

        if (!connection) {

            throw new NullError("Realtime websocket connection is missing");

        }

        this.logger.info("Symbl: Establishing Realtime Connection");

        try {

            await this.deviceManager.deviceConnect(connection);

            this.logger.info("Symbl: Established Realtime Connection");

            // Reconnects on device change to update Sample Rate and connect to new device
            if (!this.onDeviceChangeDefined) {
                navigator.mediaDevices.ondevicechange = async () => {

                    this.onDeviceChangeDefined = true;

                    this.logger.info("Symbl: Attempting to change device");

                    // Disconnect from previous device first to avoid multiple connections
                    if (!isBrowser().safari) {

                        await this.deviceManager.deviceDisconnect();

                    }

                    await this.startRealtimeRequest(
                        this.realtimeConfig,
                        true
                    );

                    this.logger.info("Symbl: Successfully reconnected to websocket");

                };
            }

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    mute(): void {
        this.deviceManager.setGain(0);
    }

    unmute(): void {
        this.deviceManager.setGain(1);
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
