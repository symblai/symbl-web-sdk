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
        audioStream.detachElement = detachElementSpy;
        const attachElementSpy = jest.fn();
        audioStream.attachElement = attachElementSpy;
        audioStream.updateAudioSourceElement(audioElement);
        expect(detachElementSpy).toBeCalledTimes(1);
        expect(attachElementSpy).toBeCalledTimes(1);
        expect(attachElementSpy).toBeCalledWith(audioElement, "AUDIO");
    }
)

test(
    `LINEAR16AudioStream.updateVideoSourceElement - Check that \`detachElement\` and
    \`attachElement\` are invoked.`,
    async () => {
        // setup
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp4";
        const detachElementSpy = jest.fn();
        audioStream.detachElement = detachElementSpy;
        const attachElementSpy = jest.fn();
        audioStream.attachElement = attachElementSpy;
        audioStream.updateVideoSourceElement(videoElement);
        expect(detachElementSpy).toBeCalledTimes(1);
        expect(attachElementSpy).toBeCalledTimes(1);
        expect(attachElementSpy).toBeCalledWith(videoElement, "VIDEO");
    }
)