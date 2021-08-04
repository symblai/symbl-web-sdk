const sdk = require('../../scripts/client.sdk.min.js');
const DeviceManager = require('../workers/DeviceManager');

export = class SymblWebEngine {
    sdk: typeof sdk = (window as any).rammerSdk;
    appConfig: any;
    deviceManager: typeof DeviceManager;

    constructor() {
        this.deviceManager = new DeviceManager();
    }

    async init(appConfig: any) {
        console.log('appConfig', appConfig);
        await this.sdk.init({
            appId: appConfig.appId,
            appSecret: appConfig.appSecret,
            basePath: appConfig.basePath || 'https://api.symbl.ai',
            logLevel: 'debug'
        });
        console.log(this);
        return this;
    }

    async startRealtimeRequest(config, connect) {
        const connection = await this.sdk.startRealtimeRequest(config);
        if (connect) {
            this.connect(connection);
        }
        return connection;
    }

    async connect(connection) {
        await this.deviceManager.deviceConnect(connection);
    }

    randomId(): string {
        const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
        return uint32.toString(16);
    }
}