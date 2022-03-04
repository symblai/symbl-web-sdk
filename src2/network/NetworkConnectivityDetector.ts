import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import {NetworkEvent} from "../events";
import Logger from "../logger";

export class NetworkConnectivityDetector extends EventTarget {
    private sdk: sdk;
    private maxRetries: number;
    private checkInterval: number;
    private connectivityCheckIntervalRef: number;
    private logger: Logger = new Logger();
    
    constructor(sdk: sdk) { // Instance of JS-SDK
        super();
        this.sdk = sdk
        this.sdk.setNetworkConnectivityDispatcher(this);
        // Add function bindings here
    }
    
    public forceCheckNetworkConnectivity() {
        this.onlineDetector();
    }
    
    private async onlineDetector() {
        this.maxRetries = 1200;
        this.checkInterval = 3000;

        if (this.connectivityCheckIntervalRef) {
            clearInterval(this.connectivityCheckIntervalRef);
        }
    
        const connectivityCheckIntervalRef = setInterval(async () => {
            if (this.maxRetries > 0) {
                try {
                    const response = await fetch('https://symbl-sdk-cdn-bucket.storage.googleapis.com');
                    if (response.ok) {
                        this.dispatchEvent(new NetworkEvent('offline', false));
                        if (this.connectivityCheckIntervalRef)
                            clearInterval(this.connectivityCheckIntervalRef);
    
                        this.logger.debug(`Connection online!`);
                    } else {
                        this.dispatchEvent(new NetworkEvent('offline', true));
                        this.maxRetries -= 1;
                    }
                } catch (e) {
                    this.dispatchEvent(new NetworkEvent('offline', true));
                    this.maxRetries -= 1;
                }
            } else {
                this.logger.warn(`Max retries to check for active internet connection exceeded! Please refresh the page when the internet is back online.`);
                if (connectivityCheckIntervalRef)
                    clearInterval(connectivityCheckIntervalRef);
            }
        }, this.checkInterval);
    }
}