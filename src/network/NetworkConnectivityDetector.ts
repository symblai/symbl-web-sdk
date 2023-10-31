import {DelegatedEventTarget, NetworkEvent} from "../events";
import Logger from "../logger";
const sdk = require("@symblai/symbl-js/build/client.sdk.min").sdk;

export class NetworkConnectivityDetector extends DelegatedEventTarget {

    /**
     * @ignore
     */
    private sdk: typeof sdk;

    /**
     * @ignore
     */
    private maxRetries: number;

    /**
     * @ignore
     */
    private checkInterval: number;

    /**
     * @ignore
     */
    private connectivityCheckIntervalRef: ReturnType<typeof setInterval>;

    /**
     * @ignore
     */
    private logger: typeof Logger = Logger;

    /**
     * Creates instance of JS SDK for network connectivity testing
     * @param sdk sdk
     */
    constructor (jsSDK: typeof sdk) {

        super();
        this.sdk = jsSDK;

    }

    /**
     * Check network connectivity with `onlineDetector`
     */
    public forceCheckNetworkConnectivity (): void {

        this.onlineDetector();

    }

    /**
     * Checks if currently online by attempting to establish a network connection and retrying as many times as specified before determining
     * that there is no current connection
     */
    public onlineDetector (): void {

        this.maxRetries = 1200;
        this.checkInterval = 3000;

        if (this.connectivityCheckIntervalRef) {

            clearInterval(this.connectivityCheckIntervalRef);

        }

        this.connectivityCheckIntervalRef = setInterval(
            async () => {

                if (this.maxRetries > 0) {

                    try {

                        const response = await fetch("https://sdk.symbl.ai");
                        if (response.ok) {

                            this.dispatchEvent(new NetworkEvent(
                                "offline",
                                false
                            ));
                            if (this.connectivityCheckIntervalRef) {

                                clearInterval(this.connectivityCheckIntervalRef);

                            }

                        } else {

                            this.dispatchEvent(new NetworkEvent(
                                "offline",
                                true
                            ));
                            this.maxRetries -= 1;

                        }

                    } catch (err) {

                        this.dispatchEvent(new NetworkEvent(
                            "offline",
                            true
                        ));
                        this.maxRetries -= 1;

                    }

                } else {

                    this.logger.warn("Max retries to check for active internet connection exceeded! Please refresh the page when the internet is back online.");
                    if (this.connectivityCheckIntervalRef) {

                        clearInterval(this.connectivityCheckIntervalRef);

                    }

                }

            },
            this.checkInterval
        );

    }

}
