import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import DeviceManager from "../workers/DeviceManager";
import OpusDeviceManager from "../workers/OpusDeviceManager";
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
    deviceManager: DeviceManager | OpusDeviceManager;

    /**
     * @ignore
     */
    logger: Logger;

    /**
     * @ignore
     */
    store: Store;

    realtimeConfig: SymblRealtimeConfig;

    /**
     * @ignore
     */
    onDeviceChangeDefined = false;

    /**
     * Assign a function to receive a callback when ondevicechange is fired.
     */
    deviceChanged: any = () => {};

    /**
     * @ignore
     */
    appConfig: SymblConfig;

    /**
     * @ignore
     */
    deviceManagerMap: any = {};

    /**
     * @ignore
     */
    realtimeConfigMap: any = {};
 
    /**
     * Sets up the basic Symbl connection object
     * @param {string} loggingLevel - establishes default log level
     */
    constructor (logLevel = "warn") {

        this.logger = new Logger();
        this.logger.setDefaultLevel(logLevel);
        this.store = new Store(this.logger);
        this.store.init();

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

            this.appConfig = Object.assign({}, initConfig);

            await this.sdk.init(initConfig);

            this.logger.info("Symbl: Successfully connected to Symbl");

        } catch (err) {

            throw new ConnectionError(err);

        }


    }

    /**
     * @deprecated
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

        if (options.disconnectOnStopRequestTimeout !== undefined && options.disconnectOnStopRequestTimeout < 0 || options.disconnectOnStopRequestTimeout > 1800) {

            throw new ConfigError("disconnectOnStopRequestTimeout must be greater than -1 and less than 1800.");

        }

        if (options.disconnectOnStopRequest !== undefined && (options.disconnectOnStopRequest !== true && options.disconnectOnStopRequest !== false)) {
            throw new ConfigError("disconnectOnStopRequest must be a boolean value.");
        }


        if (!options.config.sampleRateHertz) {

            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

            const tempContext = new AudioContext();

            options.config.sampleRateHertz = tempContext.sampleRate;

            tempContext.close();

        }

        if (options.config.encoding && options.config.encoding.toLowerCase() === "opus") {
            options.config.sampleRateHertz = 48000;
        }

        const storedConfig = JSON.parse(JSON.stringify(options));

        await this.store.put(
            "connectionID",
            options.id
        );

        this.logger.info(`Symbl: Starting Realtime Request for ${options.id}`);

        this.realtimeConfig = Object.assign({}, options);

        const connection = await this.sdk.startRealtimeRequest(options);

        this.logger.info(`Symbl: Completed Realtime Request for ${options.id}`);

        connection.id = btoa(Math.random().toString());

        if (connect) {

            await this.connectDevice(connection);

        }

        return connection;

    }

    /**
     * Starts the conection the WebSocket in a non-processing state.
     * @param {object} options - Symbl realtime request config object
     * @param {boolean} connect - indicate whether connection is immediate
     */
    async createStream (options: SymblRealtimeConfig, connect: boolean = true):
        Promise<SymblRealtimeConnection> {

        if (!options) {

            throw new NullError("Realtime config is missing");

        }
        if (!options.id) {

            throw new ConfigError("Meeting ID is missing");

        }

        if (options.disconnectOnStopRequestTimeout !== undefined && options.disconnectOnStopRequestTimeout < 0 || options.disconnectOnStopRequestTimeout > 1800) {

            throw new ConfigError("disconnectOnStopRequestTimeout must be greater than -1 and less than 1800.");

        }

        if (options.disconnectOnStopRequest !== undefined && (options.disconnectOnStopRequest !== true && options.disconnectOnStopRequest !== false)) {
            throw new ConfigError("disconnectOnStopRequest must be a boolean value.");
        }

        if (!options.config.sampleRateHertz) {

            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

            const tempContext = new AudioContext();

            options.config.sampleRateHertz = tempContext.sampleRate;

            tempContext.close();

        }

        if (options.config.encoding && options.config.encoding.toLowerCase() === "opus") {
            options.config.sampleRateHertz = 48000;
        }

        const storedConfig = JSON.parse(JSON.stringify(options));

        await this.store.put(
            "connectionID",
            options.id
        );

        this.logger.info(`Symbl: Starting Realtime Request for ${options.id}`);

        this.realtimeConfig = Object.assign({}, options);

        if (this.realtimeConfig.reconnectOnError === undefined) {
            this.realtimeConfig.reconnectOnError = true;
        }

        const connection = await this.sdk.createStream(options);

        this.logger.info(`Symbl: Completed Realtime Request for ${options.id}`);

        connection.id = btoa(Math.random().toString());

        if (connect) {

            await this.connectDevice(connection);

        }

        return connection;

    }

    async updateSourceNode(connection: SymblRealtimeConnection, sourceNode: MediaStreamAudioSourceNode) {
        const deviceManager = this.getDeviceManager(connection);
        const encoding = this.realtimeConfig.config.encoding || this.realtimeConfig.config.speechRecognition.encoding;
        // await deviceManager.pauseStream();
        await deviceManager.stopAudioSend();
        if (encoding == "opus") {
            await deviceManager.deviceDisconnect();
        }
        this.realtimeConfig.sourceNode = sourceNode;
        await this.connectDevice(connection);
        // await deviceManager.resumeStream();
        const sampleRateHertz = encoding === "opus" ? 48000 : this.getContext(connection).sampleRate;
        // sendAudio should be renamed to sendData. It's not just for sending audio.
        connection.sendAudio(JSON.stringify({
          type: 'modify_request',
          speechRecognition: {
            sampleRateHertz,
          },
        }));

    }

    /** 
     * @ignore Applies the users' ondevicechange hanlder if present.
     */
    setOnDeviceHandler(connection: SymblRealtimeConnection): void {
        this.onDeviceChangeDefined = true;
        if (!this.realtimeConfig.handlers.ondevicechange) {
            if (this.appConfig.basePath === "https://api-labs.symbl.ai" || this.realtimeConfig.disconnectOnStopRequest === false) {
                this.realtimeConfig.handlers.ondevicechange = async () => {

                    this.logger.info("Symbl: Attempting to change device");

                    await this.modifyRequest(connection);

                    this.logger.info("Symbl: Successfully reconnected to websocket");

                }
            } else {

                this.realtimeConfig.handlers.ondevicechange = async () => {

                    this.logger.info("Symbl: Attempting to change device");

                    await this.getDeviceManager(connection).deviceDisconnect();

                    await this.startRealtimeRequest(
                        this.realtimeConfig,
                        true
                    );

                    this.logger.info("Symbl: Successfully reconnected to websocket");

                }

            }
        } else {
            this.logger.info("ondevicechange handler already defined.");
        }
    }

    /**
     * Grabs the context from the current connection.
     * @param {object} connection - Symbl WebSocket Connection
     */
    getContext(connection: SymblRealtimeConnection): AudioContext {
        return this.deviceManagerMap[connection.id].getContext();
    }

    /**
     * Allows you to modify the sampleRate of a connection.
     * Automatically reads the sample rate of the currently active device.
     * @param {object} connection - Symbl websocket connection
     */
    async modifyRequest (connection: SymblRealtimeConnection): Promise<void> {
        
        this.logger.debug('Symbl: Modifying request.');
        const deviceManager = this.getDeviceManager(connection);
        await deviceManager.stopAudioSend();    
        await deviceManager.deviceDisconnect();

        await deviceManager.deviceConnect(connection);
        const encoding = this.realtimeConfig.config.encoding || this.realtimeConfig.config.speechRecognition.encoding;
        const sampleRateHertz = this.realtimeConfig.config.encoding === "opus" ? 48000 : this.getContext(connection).sampleRate;
        // sendAudio should be renamed to sendData. It's not just for sending audio.
        connection.sendAudio(JSON.stringify({
          type: 'modify_request',
          speechRecognition: {
            sampleRateHertz,
          },
        }));

        // await this.mute(connection);
    }


    /**
     * Reconnects the mic and unmutes the connection.
     * @param {object} connection - Symbl websocket connection
     */
    async reconnect(connection: SymblRealtimeConnection): Promise<void> {
        await this.getDeviceManager(connection).deviceConnect(connection);
        await this.unmute(connection);
    }

    /**
     * Stops the realtime request and closes the websocket
     * @param {object} connection - Symbl websocket connection
     */
    async stopRequest (connection: SymblRealtimeConnection): Promise<void> {

        if (!connection) {

            throw new NullError("Realtime WebSocket connection is missing.");

        }

        try {
            const deviceManager = this.getDeviceManager(connection);
            await deviceManager.stopAudioSend();
            await connection.stop();
            if (!this.realtimeConfig.sourceNode) {
                await deviceManager.deviceDisconnect();
            }


        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /** 
     * @ignore Sets which device manager to use based on encoding.
     */
     async setDeviceManager (encoding: string): Promise<DeviceManager | OpusDeviceManager> {
        let deviceManager: DeviceManager | OpusDeviceManager;
        if (encoding === "opus") {
            const opusConfig: any = {
                numberOfChannels: 1,
                encoderSampleRate: 48000,
                encoderFrameSize: 20,
                maxFramesPerPage: 40,
                encoderComplexity: 6,
                streamPages: true,
                rawOpus: true
            };
            if (this.realtimeConfig.sourceNode) {
                opusConfig.sourceNode = this.realtimeConfig.sourceNode;
            }
            deviceManager = new OpusDeviceManager(opusConfig, this.logger);
        } else {
            this.logger.debug('this.reatimeConfig', JSON.stringify(this.realtimeConfig));
            deviceManager = new DeviceManager(this.logger, this.realtimeConfig.sourceNode);
        }

        return deviceManager;
     }

     /**
      * @ignore
      */
      getDeviceManager(connection: SymblRealtimeConnection): DeviceManager | OpusDeviceManager  {
        return this.deviceManagerMap[connection.id];
      }

    /**
     * Manually connects a device to the Symbl WebSocket endpoint
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async connectDevice (connection: SymblRealtimeConnection): Promise<AudioContext> {

        if (!connection) {

            throw new NullError("Realtime websocket connection is missing");

        }

        this.logger.info("Symbl: Establishing Realtime Connection");

        try {
            const encoding = this.realtimeConfig.config.encoding || this.realtimeConfig.config.speechRecognition.encoding;
            this.logger.info(`Symbl: encoding is ${encoding}`);
            const deviceManager = await this.setDeviceManager(encoding);
            const context = await deviceManager.deviceConnect(connection);

            this.logger.info("Symbl: Established Realtime Connection");

            // Reconnects on device change to update Sample Rate and connect to new device
            if (!this.onDeviceChangeDefined) {
                this.setOnDeviceHandler(connection);
                navigator.mediaDevices.ondevicechange = async () => {
                    await this.realtimeConfig.handlers.ondevicechange();
                    this.deviceChanged();
                }
            }

            this.deviceManagerMap[connection.id] = deviceManager;

            return context;

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /**
     * @ignore Sends the stop request and pauses the connection if
     * the disconnectonStopRequest flag is set.
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async stop(connection: SymblRealtimeConnection): Promise<void> {
        if (connection === undefined) {
            const err = "Connection is not defined.";
            this.logger.error(err);
            throw new NullError(err);
        }
        if (this.realtimeConfig.disconnectOnStopRequest === false) {
            const context = this.getContext(connection);
            if (context) {
                if (context.state === "running") {
                    context.suspend();
                }
                await connection.stop();
            } else {
                const err = "Audio context is not defined.";
                this.logger.error(err);
                throw new NullError(err);
            }
        } else {
            await connection.stop();
        }
    }

    /**
     * @ignore Sends the stop request and pauses the connection if
     * the disconnectonStopRequest flag is set.
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async suspend(connection: SymblRealtimeConnection): Promise<void> {
        this.stop(connection);
    }

    /**
     * @ignore Sends the start request and resumes the connection if
     * the disconnectonStopRequest flag is set.
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async start (connection: SymblRealtimeConnection): Promise<void> {
        if (connection === undefined) {
            const err = "Connection is not defined.";
            this.logger.error(err);
            throw new NullError(err);
        }
        if (connection.start === undefined) {
            const err = "You are using a connection object generated using the deprecated `startRealtimeRequest` method. You must use connection generated with newer `createStream` method instead.";
            this.logger.error(err);
            throw new NullError(err);
        }
        const context = this.getContext(connection);
        if (context) {
            context.resume();
            await connection.start(context.sampleRate);
        } else {
            const err = "Audio context is not defined.";
            this.logger.error(err);
            throw new NullError(err);
        }
    }


    /**
     * Mutes the gain and suspends the context if disconnectOnStopRequest
     * is set to true.
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async mute(connection?: SymblRealtimeConnection): Promise<void> {
        this.getDeviceManager(connection).setGain(0);
        if (this.realtimeConfig.disconnectOnStopRequest === false && connection) {
            await this.suspend(connection);
        }
    }

    /**
     * Unmutes the gain and resumes the context if disconnectOnStopRequest
     * is set to true.
     * @param {object} connection - Symbl realtime WebSocket connection object
     */
    async unmute(connection?: SymblRealtimeConnection): Promise<void> {
        this.getDeviceManager(connection).setGain(1);
        if (this.realtimeConfig.disconnectOnStopRequest === false && connection) {
            await this.start(connection);
        }
    }

    /**
     * Subscribe to existing streaming connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {obj} options - provide handlers and options
     */
    async subscribeToStream (connectionId: string, options: any):
        Promise<void> {

        if (!connectionId) {

            throw new NullError("Connection ID is missing");

        }

        this.logger.info(`Symbl: Subscribing to Streaming at ${connectionId}`);

        try {

            await this.sdk.subscribeToStream(
                connectionId,
                options
            );

            this.logger.info(`Symbl: Subscribed to Streaming at ${connectionId}`);

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

    /**
     * Subscribe to existing telephony connection in read-only
     * @param {string} connectionId - connection ID created on connection init
     * @param {obj} options - provide handlers and options
     */
    async subscribeToCall (connectionId: string, options: any):
        Promise<void> {

        if (!connectionId) {

            throw new ConfigError("Connection ID is missing");

        }

        this.logger.info(`Symbl: Subscribing to Call at ${connectionId}`);

        try {

            await this.sdk.subscribeToConnection(
                connectionId,
                options
            );

            this.logger.info(`Symbl: Subscribed to Call at ${connectionId}`);

        } catch (err) {

            throw new ConnectionError(err);

        }

    }

}
