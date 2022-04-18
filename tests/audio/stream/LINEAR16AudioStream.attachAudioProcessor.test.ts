import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream;
let streamingAPIConnection;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    const context = new AudioContext();
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new LINEAR16AudioStream(sourceNode);
    audioStream.attachAudioDevice();
});

test(
    'LINEAR16AudioStream.attachAudioProcessor - Test that audio processor was attached successfully',
    async () => {
        // audioStream.
        audioStream.processAudio = jest.fn(x => x+2);
        audioStream.attachAudioProcessor();
        expect(audioStream.processorNode.onaudioprocess).toBe(audioStream.processAudio);
    }
)

test(
    'LINEAR16AudioStream.attachAudioProcessor - Test that audio processor was not attached successfully',
    async () => {
        audioStream.processAudio = null
        audioStream.attachAudioProcessor();
        expect(audioStream.processorNode.onaudioprocess).toBe(null);
    }
)