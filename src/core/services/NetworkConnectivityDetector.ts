const registerNetworkConnectivityDetector = (sdk) => {
    let connectivityCheckIntervalRef;
    if (window) {
        window.addEventListener('offline', (e) => {
            sdk.setOffline(true);
            if (connectivityCheckIntervalRef)
                clearInterval(connectivityCheckIntervalRef);

            console.debug(`Connection offline`);
        });

        window.addEventListener('online', async (e) => {
            let maxRetries = 450;
            const checkInterval = 3000;

            connectivityCheckIntervalRef = setInterval(async () => {
                if (maxRetries > 0) {
                    try {
                        const response = await fetch('https://symbl-sdk-cdn-bucket.storage.googleapis.com');
                        if (response.ok) {
                            sdk.setOffline(false);
                            if (connectivityCheckIntervalRef)
                                clearInterval(connectivityCheckIntervalRef);

                            console.debug(`Connection back online`);
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
        });
    }
}

export default registerNetworkConnectivityDetector;
