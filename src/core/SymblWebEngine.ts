const sdk = require('../../scripts/client.sdk.min.js');

export = class SymblWebEngine {
    logMonitor: typeof sdk.logger = sdk.logger;
    errorHandler: typeof sdk.errorHandler = sdk.errorHandler;
    sdk: typeof sdk = sdk;
    appConfig: any;

    constructor(appConfig: any) {
        this.sdk.init({
            appId: appConfig.appId,
            appSecret: appConfig.appSecret,
            basePath: appConfig.basePath ? appConfig.basePath : 'https://api.symbl.ai',
            logLevel: 'debug'
        });

    }

    startRealtimeRequest(realtimeConfig: any) {
        this.sdk.startRealtimeRequest(realtimeConfig);
    }
}