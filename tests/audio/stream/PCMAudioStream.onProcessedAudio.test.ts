/*
PCMAudioStream.onProcessedAudio - Verify that audioCallback is NOT invoked if there is no audioCallback function registered.

    Error: expect(jest.fn()).toBeCalledTimes(expected)

    Expected number of calls: 1
    Received number of calls: 0
*/

import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { PCMAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl, audioStream;

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
    `PCMAudioStream.onProcessedAudio - Verify that audioCallback is NOT invoked if there is no audioCallback function registered.`,
    async () => {
        try {
            const audioData = {};
            audioStream.audioCallback = null;
            const logSpy = jest.spyOn(audioStream.logger, 'warn');
            audioStream.onProcessedAudio(audioData)
            expect(logSpy).toBeCalledTimes(1);
        } catch (e) {
            throw new Error(e);
        }
    }
);

test(
    `PCMAudioStream.onProcessedAudio - Verify that audioCallback is being invoked`,
    async () => {
        try {
            const audioData = {};
            audioStream.audioCallback = (audioData) => {};
            const callbackSpy = jest.spyOn(audioStream, 'audioCallback');
            const logSpy = jest.spyOn(audioStream.logger, 'warn');
            audioStream.onProcessedAudio(audioData);
            expect(callbackSpy).toBeCalledTimes(1);
            expect(logSpy).toBeCalledTimes(0);
            expect(callbackSpy).toBeCalledWith(audioData);
        } catch (e) {
            throw new Error(e);
        }
    }
);
