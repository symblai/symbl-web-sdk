/*
OpusAudioStream.onProcessedAudio - Verify that audioCallback is NOT invoked if there is no audioCallback function registered.

    Error: expect(jest.fn()).toBeCalledTimes(expected)

    Expected number of calls: 1
    Received number of calls: 0
*/

import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { OpusAudioStream } from '../../../src/audio';
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
    `OpusAudioStream.onProcessedAudio - Verify that audioCallback is NOT invoked if there is no audioCallback function registered.`,
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
    `OpusAudioStream.onProcessedAudio - Verify that audioCallback is being invoked`,
    async () => {
        try {
            const audioData = {};
            audioStream.audioCallback = (audioData) => {};
            const callbackSpy = jest.spyOn(audioStream, 'audioCallback');
            audioStream.onProcessedAudio(audioData);
            expect(callbackSpy).toBeCalledTimes(1);
            expect(callbackSpy).toBeCalledWith(audioData);
        } catch (e) {
            throw new Error(e);
        }
    }
);
