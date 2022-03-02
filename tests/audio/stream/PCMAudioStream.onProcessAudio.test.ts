import AudioContext from 'audio-context-mock';
import Symbl from "../../src2/symbl";
import { PCMAudioStream } from '../../src2/audio';
import { APP_ID, APP_SECRET } from '../constants';

let authConfig, symbl, audioStream;

beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    audioStream = new PCMAudioStream();
});

test(
    `PCMAudioStream.onProcessAudio - Verify that audioCallback is NOT invoked if there is no audioCallback function registered.`,
    async () => {
        try {
            const audioData = {};
            audioStream.audioCallback = null;
            const callbackSpy = jest.spyOn(audioStream, 'audioCallback');
            audioStream.onProcessAudio(audioData)
            expect(callbackSpy).toBeCalledTimes(0);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    `PCMAudioStream.onProcessAudio - Verify that audioCallback is being invoked`,
    async () => {
        try {
            const audioData = {};
            audioStream.audioCallback = (audioData) => {};
            const callbackSpy = jest.spyOn(audioStream, 'audioCallback');
            audioStream.onProcessAudio(audioData);
            expect(callbackSpy).toBeCalledTimes(1);
            expect(callbackSpy).toBeCalledWith(audioData);
        } catch (e) {
            throw new Error(e);
        }
    }
);
