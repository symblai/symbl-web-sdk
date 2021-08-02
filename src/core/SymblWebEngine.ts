const sdk = require('../../scripts/client.sdk.min.js');

export = class SymblWebEngine {
    sdk: typeof sdk = (window as any).rammerSdk;
    appConfig: any;
    
    constructor() {
    }

    async init(appConfig: any) {
        console.log('appConfig', appConfig);
        await this.sdk.init({
            appId: appConfig.appId,
            appSecret: appConfig.appSecret,
            basePath: appConfig.basePath || 'https://api.symbl.ai',
            // logLevel: 'debug'
        });
        console.log(this);
        return this;
    }

    randomId(): string {
        const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
        return uint32.toString(16);
    }
}