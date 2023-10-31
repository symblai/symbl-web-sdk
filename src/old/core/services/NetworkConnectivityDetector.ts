const sdk = require("@symblai/symbl-js/build/client.sdk.min").sdk;
let connectivityCheckIntervalRef;

const onlineDetector = async (jsSDK, e) => {
    let maxRetries = 600;
    const checkInterval = 3000;

    if (connectivityCheckIntervalRef) {
        clearInterval(connectivityCheckIntervalRef);
    }

    connectivityCheckIntervalRef = setInterval(async () => {
        if (maxRetries > 0) {
            try {
                const response = await fetch('https://sdk.symbl.ai');
                if (response.ok) {
                    jsSDK.setOffline(false);
                    if (connectivityCheckIntervalRef)
                        clearInterval(connectivityCheckIntervalRef);

                    console.debug(`Connection online!`);
                } else {
                    jsSDK.setOffline(true);
                    maxRetries -= 1;
                }
            } catch (e) {
                jsSDK.setOffline(true);
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
    jsSDK: typeof sdk;

    constructor (jsSDK) {
        this.jsSDK = jsSDK;
        this.forceCheckNetworkConnectivity = this.forceCheckNetworkConnectivity.bind(this);
    }

    forceCheckNetworkConnectivity () {
        onlineDetector(this.jsSDK, null);
    }
};

const registerNetworkConnectivityDetector = (jsSDK) => {
    if (window) {
        window.addEventListener('offline', (e) => {
            jsSDK.setOffline(true);
            if (connectivityCheckIntervalRef)
                clearInterval(connectivityCheckIntervalRef);

            console.debug(`Connection offline`);
        });

        window.addEventListener('online', (e) => {
            onlineDetector(jsSDK, e);
        });

        onlineDetector(jsSDK, null);
        jsSDK.setNetworkConnectivityDispatcher(new NetworkConnectivityDetector(jsSDK));
    }
}

export default registerNetworkConnectivityDetector;
