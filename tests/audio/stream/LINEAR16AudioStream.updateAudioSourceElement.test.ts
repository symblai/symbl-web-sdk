/*
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "TypeError: Cannot read property 'connect' of null".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
*/

import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl;
let audioStream;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    const context = new AudioContext();
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new LINEAR16AudioStream(sourceNode);
});

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `LINEAR16AudioStream.updateAudioSourceElement - Check that \`detachAudioSourceElement\` and
    \`attachAudioSourceElement\` are invoked.`,
    async () => {
        // setup
        const audioElement = document.createElement("audio");
        audioElement.src = "test.mp3";
        const detachElementSpy = jest.fn();
        audioStream.detachAudioSourceElement = detachElementSpy;
        const attachElementSpy = jest.fn();
        audioStream.attachAudioSourceElement = attachElementSpy;
        audioStream.updateAudioSourceElement(audioElement);
        expect(detachElementSpy).toBeCalledTimes(1);
        expect(attachElementSpy).toBeCalledTimes(1);
        expect(attachElementSpy).toBeCalledWith(audioElement);
    }
)