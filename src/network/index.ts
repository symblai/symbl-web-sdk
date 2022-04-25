import Logger from "../logger";
import {NetworkConnectivityDetector} from "./NetworkConnectivityDetector";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";

let offlineEventListenerRegistered = false,
    onlineEventListenerRegistered = false;
let networkConnectivityDetector: NetworkConnectivityDetector;

const registerNetworkConnectivityDetector = (jsSDK: sdk) => {

    let connectivityCheckIntervalRef;
    const logger = Logger;
    if (window) {

        if (!networkConnectivityDetector) {

            networkConnectivityDetector = new NetworkConnectivityDetector(jsSDK);

        }

        if (!offlineEventListenerRegistered) {

            window.addEventListener(
                "offline",
                () => {

                    jsSDK.setOffline(true);
                    if (connectivityCheckIntervalRef) {

                        clearInterval(connectivityCheckIntervalRef);

                    }

                    logger.debug("Connection offline");

                }
            );

            offlineEventListenerRegistered = true;

        }

        if (!onlineEventListenerRegistered) {

            window.addEventListener(
                "online",
                () => {

                    networkConnectivityDetector.onlineDetector();

                }
            );

            onlineEventListenerRegistered = true;

        }

        networkConnectivityDetector.onlineDetector();

    }

};

export default registerNetworkConnectivityDetector;
