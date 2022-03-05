import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { OpusAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl, audioStream;

beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    const opusConfig: any = {
        numberOfChannels: 1,
        encoderSampleRate: 48000,
        encoderFrameSize: 20,
        maxFramesPerPage: 40,
        encoderComplexity: 6,
        streamPages: true,
        rawOpus: true
    };
    const context = new AudioContext();
    const mediaStream = new MediaStream();
    const sourceNode = context.createMediaStreamSource(mediaStream);
    audioStream = new OpusAudioStream(sourceNode, opusConfig);
});

test(
    `OpusAudioStream.attachAudioCallback - verify that the argument (cb function) is properly registered to this.audioCallback.`,
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
