import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { NoConnectionError } from "../../../src2/error";
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream;
let streamingAPIConnection;
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
    audioStream = new PCMAudioStream();
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);  
});


test(
    `StreamingAPIConnection.attachAudioStream - Verify that new audio stream is attached to the StreamingAPIConnection instance.`,
    async () => {
        const newAudioStream = new PCMAudioStream();
        StreamingAPIConnection.attachAudioStream(newAudioStream);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
)
