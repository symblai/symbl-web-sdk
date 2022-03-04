import Symbl from "../../../src2/symbl";
import { PCMAudioStream, OpusAudioStream } from "../../../src2/audio";
import { StreamingAPIConnection } from '../../../src2/api';
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src2/types/connection"

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream, sourceNode;
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
    const context = new AudioContext();
    sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection(validConnectionConfig, audioStream);  
});

test(
    `StreamingAPIConnection.attachAudioStream - Verify that new audio stream is attached to the StreamingAPIConnection instance.`,
    async () => {
        const newAudioStream = new PCMAudioStream(sourceNode);
        streamingAPIConnection.attachAudioStream(newAudioStream);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
)
