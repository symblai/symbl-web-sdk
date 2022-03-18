/*
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "TypeError: Cannot read property 'stop' of undefined".] {
    code: 'ERR_UNHANDLED_REJECTION'
*/

import Symbl from "../../../src/symbl";
import { StreamingAPIConnection } from '../../../src/api';
import { PCMAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblEvent } from "../../../src/events";
import { ConnectionState, ConnectionProcessingState } from "../../../src/types"
// import Logger from "../../src/logger";
// import { Stream } from "stream";

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream, sourceNode;
let streamingAPIConnection
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    validConnectionConfig = {
        insightTypes: ['action_item', 'question'],
        config: {
            meetingTitle: 'My Test Meeting',
            confidenceThreshold: 0.7,
            timezoneOffset: 480,
            languageCode: 'en-US',
        },
        speaker: {
            userId: 'emailAddress',
            name: 'My name'
        },
    };
    const context = new AudioContext();
    sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);  
});

test(
    `StreamingAPIConnection.onAudioSourceChanged - If isConnected and isProcessing 
    are both true and event type is \`audio_source_disconnected\` set \`restartProcessing\`
    to true and call \`stopProcessing\``,
    async () => {
        streamingAPIConnection.connectionState = ConnectionState.CONNECTED;
        streamingAPIConnection.processingState = ConnectionProcessingState.PROCESSING;
        streamingAPIConnection._isConnected = true;
        streamingAPIConnection._isProcessing = true;
        const stopSpy = jest.spyOn(streamingAPIConnection, 'stopProcessing');
        streamingAPIConnection.onAudioSourceChanged(new SymblEvent('audio_source_disconnected'));
        expect(stopSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.restartProcessing).toBe(true);

    }
);

/*
} else if (!this._isProcessing && audioSourceChangedEvent.type === 'audio_source_connected' && this.restartProcessing) {
    this.restartProcessing = false;
    this.startProcessing();
}
*/

test(
    `StreamingAPIConnection.onAudioSourceChanged - If 1) '_isConnected' is true, 2) '_isProcessing' is false, 3) 'restartProcessing' is true, and 
    4) event type is \`audio_source_connected\`, then 'restartProcessing' value is set to false and 'startProcessing' method is invoked.`,
    async () => {
        streamingAPIConnection._isConnected = true;
        streamingAPIConnection._isProcessing = false;
        streamingAPIConnection.restartProcessing = true;
        const startSpy = jest.spyOn(streamingAPIConnection, 'startProcessing');
        streamingAPIConnection.onAudioSourceChanged(new SymblEvent('audio_source_connected'));
        expect(startSpy).toBeCalledTimes(1);
        expect(streamingAPIConnection.restartProcessing).toBe(false);

    }
)

test(
    `StreamingAPIConnection.onAudioSourceChanged - If '_isConnected' is false, then 'restartProcessing' should be set to false.`,
    async () => {
        streamingAPIConnection._isConnected = false;
        streamingAPIConnection.onAudioSourceChanged(new SymblEvent('audio_source_connected'));
        expect(streamingAPIConnection.restartProcessing).toBe(false);
    }
)