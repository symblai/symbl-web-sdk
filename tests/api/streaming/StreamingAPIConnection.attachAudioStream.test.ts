import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream, OpusAudioStream } from "../../../src/audio";
import { StreamingAPIConnection } from '../../../src/api';
import { APP_ID, APP_SECRET } from '../../constants';
import { ConnectionState, ConnectionProcessingState } from "../../../src/types/connection"

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
    audioStream = new LINEAR16AudioStream(sourceNode);
    streamingAPIConnection = new StreamingAPIConnection("123abc", audioStream);  
});

test(
    `StreamingAPIConnection.attachAudioStream - Verify that new audio stream is attached to the StreamingAPIConnection instance.`,
    async () => {
        const newAudioStream = new LINEAR16AudioStream(sourceNode);
        streamingAPIConnection.attachAudioStream(newAudioStream);
        expect(streamingAPIConnection.audioStream).toBe(newAudioStream);
    }
)
