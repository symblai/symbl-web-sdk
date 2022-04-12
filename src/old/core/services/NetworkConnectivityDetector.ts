import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
let connectivityCheckIntervalRef;

const onlineDetector = async (sdk, e) => {
    let maxRetries = 600;
    const checkInterval = 3000;

    if (connectivityCheckIntervalRef) {
        clearInterval(connectivityCheckIntervalRef);
    }

    connectivityCheckIntervalRef = setInterval(async () => {
        if (maxRetries > 0) {
            try {
                const response = await fetch('https://symbl-sdk-cdn-bucket.storage.googleapis.com');
                if (response.ok) {
                    sdk.setOffline(false);
                    if (connectivityCheckIntervalRef)
                        clearInterval(connectivityCheckIntervalRef);

                    console.debug(`Connection online!`);
                } else {
                    sdk.setOffline(true);
                    maxRetries -= 1;
                }
            } catch (e) {
                sdk.setOffline(true);
                maxRetries -= 1;
            }
        } else {
            console.warn(`Max retries to check for active internet connection exceeded!`);
            if (connectivityCheckIntervalRef)
                clearInterval(connectivityCheckIntervalRef);
        }
    }, checkInterval);
};


const NetworkConnectivityDetector = class {
    sdk: sdk;

    constructor (sdk) {
        this.sdk = sdk;
        this.forceCheckNetworkConnectivity = this.forceCheckNetworkConnectivity.bind(this);
    }

    forceCheckNetworkConnectivity () {
        onlineDetector(this.sdk, null);
    }
};

const registerNetworkConnectivityDetector = (sdk) => {
    if (window) {
        window.addEventListener('offline', (e) => {
            sdk.setOffline(true);
            if (connectivityCheckIntervalRef)
                clearInterval(connectivityCheckIntervalRef);

            console.debug(`Connection offline`);
        });

        window.addEventListener('online', (e) => {
            onlineDetector(sdk, e);
        });

        onlineDetector(sdk, null);
        sdk.setNetworkConnectivityDispatcher(new NetworkConnectivityDetector(sdk));
    }
}

export default registerNetworkConnectivityDetector;
