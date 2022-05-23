import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { OpusAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl;
let audioStream;
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

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `OpusAudioStream.updateAudioSourceElement - Check that \`detachElement\` and
    \`attachElement\` are invoked.`,
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
    `OpusAudioStream.updateVideoSourceElement - Check that \`detachElement\` and
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