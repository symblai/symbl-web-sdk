import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl;
let audioStream;

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
    audioStream = new LINEAR16AudioStream(sourceNode);
});

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `LINEAR16AudioStream.detachAudioDevice - Ensure that audioContext, sourceNode 
    and processorNode are being closed`,
    async () => {
        // setup
        const mediaStream = new MediaStream();
        audioStream.audioContext = new AudioContext();
        audioStream.sourceNode = audioStream.audioContext.createMediaStreamSource(mediaStream);
        audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);
        audioStream.gainNode = audioStream.audioContext.createGain();
        audioStream.sourceNode.connect(audioStream.gainNode);
        audioStream.gainNode.connect(audioStream.processorNode);
        audioStream.processorNode.connect(audioStream.audioContext.destination);

        const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
        const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
        const gainNodeSpy = jest.spyOn(audioStream.gainNode, 'disconnect');
        await audioStream.detachAudioDevice();
        expect(processorNodeSpy).toBeCalledTimes(1);
        expect(gainNodeSpy).toBeCalledTimes(1);
        expect(sourceNodeSpy).toBeCalledTimes(1);
    }
)


