import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { PCMAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl, audioStream;

Object.defineProperty(window, 'MediaStream', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {})
});
   
Object.defineProperty(window, 'MediaStreamAudioSourceNode', {
    writable: true,
    value: {
        disconnect: jest.fn()
    }
});

beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    const context = new AudioContext();
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);
});

test(
    `PCMAudioStream.attachAudioCallback - verify that the argument (cb function) is properly registered to this.audioCallback.`,
    async () => {
        try {
            let audioData = {};
            const callbackFn = (audioData) => {};
            audioStream.attachAudioCallback(callbackFn);
            expect(audioStream.audioCallback).toBe(callbackFn);
        } catch (e) {
            throw new Error(e);
        }
    }
);
