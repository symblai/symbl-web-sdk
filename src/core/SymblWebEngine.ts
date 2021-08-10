const sdk = require('../../scripts/client.sdk.min.js');
const DeviceManager = require('../workers/DeviceManager');

/*
Classes:
    ConnectionError
    HttpError
    NullError
    ConfigError
    All inehrit from Error
*/


export = class SymblWebEngine {
    sdk: typeof sdk = (window as any).rammerSdk;
    appConfig: any;
    deviceManager: typeof DeviceManager;

    constructor() {
        this.deviceManager = new DeviceManager();
    }

    /**
     * Initializes SymblWebEngine with application configuration
     * @param {object} appConfig - Symbl configuration object  
     */
    async init(appConfig: any) {
        await this.sdk.init({
            appId: appConfig.appId,
            appSecret: appConfig.appSecret,
            basePath: appConfig.basePath || 'https://api.symbl.ai',
            logLevel: 'debug'
        });
        console.log(this);
        return this;
    }

    /**
     * Starts a request to the WebSocket-based Streaming API
     * @param {object} config - Symbl realtime request config object
     * @param {boolean} connect - indicate whether connection is immediate
     */
    async startRealtimeRequest(config: any, connect: boolean) {
         /*
            if config doesnt have rquired key {
                throw ConfigError('<key name here> is missing');
            }
            if config is null throw NullError('Config is null');
        */
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
    async connect(connection: any) {
        await this.deviceManager.deviceConnect(connection);
    }

    /**
     * Subscribe to existing connection in mostly non-interactive way
     * @param {string} connectionId - connection ID created on connection init
     * @param {function} cb - callback function to use data returned
     * @param {boolean} isStreaming - specify if streaming (else telephony)
     */
    async subscribe(connectionId: string, cb: any, isStreaming: boolean) {
        const subscription = await this.sdk.subscribeToConnection(connectionId, cb, isStreaming);
        return subscription;
    }
}