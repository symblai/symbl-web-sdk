const sdk = require('../../scripts/client.sdk.min.js');
const DeviceManager = require('../workers/DeviceManager');

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
    async startRealtimeRequest(config, connect) {
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
    async connect(connection) {
        await this.deviceManager.deviceConnect(connection);
    }
}