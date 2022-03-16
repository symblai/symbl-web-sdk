// import { NetworkConnectivityDetector } from "./NetworkConnectivityDetector";
// import {sdk} from "@symblai/symbl-js/build/client.sdk.min";

// let offlineEventListenerRegistered = false, onlineEventListenerRegistered = false;
// let networkConnectivityDetector: NetworkConnectivityDetector;

// const registerNetworkConnectivityDetector = (sdk: sdk) => {
//     if (window) {
//         if (!networkConnectivityDetector) {
//             networkConnectivityDetector = new NetworkConnectivityDetector(sdk);
//         }
  
//         if (!offlineEventListenerRegistered) {
//             window.addEventListener('offline', (e) => {
//                 sdk.setOffline(true);
//                 if (connectivityCheckIntervalRef)
//                     clearInterval(connectivityCheckIntervalRef);
    
//                 logger.debug(`Connection offline`);
//             });
            
//             offlineEventListenerRegistered = true;
//         }

//         if (!onlineEventListenerRegistered) {
//             window.addEventListener('online', (e) => {
//                 networkConnectivityDetector.onlineDetector();
//             });
            
//             onlineEventListenerRegistered = true;
//         }

//         networkConnectivityDetector.onlineDetector();
//     }
// } 

// export default registerNetworkConnectivityDetector;