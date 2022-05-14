import Symbl from "../../../src/symbl";
import { StreamingAPIConnection } from '../../../src/api';
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblEvent } from "../../../src/events";
import { ConnectionState, ConnectionProcessingState } from "../../../src/types"
import AudioContext from 'audio-context-mock';
// import Logger from "../../src/logger";
// import { Stream } from "stream";

let authConfig, symbl, validSessionID;
let audioStream, sourceNode;
let streamingAPIConnection
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    // validConnectionConfig = {
    //     insightTypes: ['action_item', 'question'],
    //     config: {
    //         meetingTitle: 'My Test Meeting',
    //         confidenceThreshold: 0.7,
    //         timezoneOffset: 480,
    //         languageCode: 'en-US',
    //     },
    //     speaker: {
    //         userId: 'emailAddress',
    //         name: 'My name'
    //     },
    // };
    validSessionID = "123475-abcde-9876-bce";
    const context = new AudioContext();
    context.resume();
    sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new LINEAR16AudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection("abc123", audioStream);  
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
        streamingAPIConnection.onAudioSourceChanged(new SymblEvent('audio_source_changed'));
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
        (streamingAPIConnection as any).connectionState = ConnectionState.DISCONNECTED;
        streamingAPIConnection.onAudioSourceChanged(new SymblEvent('audio_source_connected'));
        expect(streamingAPIConnection.restartProcessing).toBe(false);
    }
)
