const LogMonitor = require('./services/LogMonitor.js')
const EventsManager = require('./services/EventsManager.js')
const ClientSDK = require('symbl-node/build/client.sdk.min.js');

interface ISymblWebEngine {
    logMonitor: typeof LogMonitor;
    eventsManager: typeof EventsManager;
    test: any;
}

export = class SymblWebEngine implements ISymblWebEngine {
    logMonitor: typeof LogMonitor = new LogMonitor();
    eventsManager: typeof EventsManager = new EventsManager();
    clientSDK: any = new (window as any).ClientSDK();
    appConfig: any;

    constructor(appConfig: any) {
        this.clientSdk.init({
            appId: appConfig.appId,
            appSecret: appConfig.appSecret,
            basePath: appConfig.basePath ? appConfig.basePath : 'https://api.symbl.ai',
            logLevel: 'debug'
        });

    }

    startRealtimeRequest(realtimeConfig: any) {
        this.clientSdk.startRealtimeRequest(realtimeConfig);
    }
}