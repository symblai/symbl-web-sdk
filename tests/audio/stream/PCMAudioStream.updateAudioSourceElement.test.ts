import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { PCMAudioStream } from '../../../src2/audio';
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
    audioStream = new PCMAudioStream(sourceNode);
});

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `PCMAudioStream.updateAudioSourceElement - Check that \`detachAudioSourceElement\` and
    \`attachAudioSourceElement\` are invoked.`,
    async () => {
        try {
            // setup
            const audioElement = document.createElement("audio");
            audioElement.src = "test.mp3";
            const detachElementSpy = jest.spyOn(audioStream, 'detachAudioSourceElement');
            const attachElementSpy = jest.spyOn(audioStream, 'attachAudioSourceElement');
            audioStream.updateAudioSourceElement(audioElement);
            expect(detachElementSpy).toBeCalledTimes(1);
            expect(attachElementSpy).toBeCalledTimes(1);
            expect(attachElementSpy).toBeCalledWith(audioElement)
        } catch (e) {
            throw new Error(e)
        }
    }
)