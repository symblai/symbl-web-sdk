const sdk = require('../../scripts/client.sdk.min.js');

export = class SymblWebEngine {
    logger: typeof SymblWebEngine.sdk.logger = SymblWebEngine.sdk.logger;
    errorHandler: typeof SymblWebEngine.sdk.errorHandler = SymblWebEngine.sdk.errorHandler;
    static sdk: typeof sdk = (window as any).rammerSdk;
    appConfig: any;

    static init(appConfig: any) {
        console.log('appConfig', appConfig);
        SymblWebEngine.sdk.init({
            appId: appConfig.appId,
            appSecret: appConfig.appSecret,
            basePath: appConfig.basePath || 'https://api.symbl.ai',
            // logLevel: 'debug'
        });  
    }

    startRealtimeRequest(realtimeConfig: any) {
        // this.sdk.startRealtimeRequest(realtimeConfig);
    }
}