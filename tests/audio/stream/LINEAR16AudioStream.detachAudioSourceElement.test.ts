/* no tests */

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
    const context = new AudioContext() as any;
    context.createMediaStreamSource = jest.fn(() => {
        return {
            disconnect: jest.fn()
        }
    })
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new LINEAR16AudioStream(sourceNode);
});

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `LINEAR16AudioStream.detachAudioSourceElement - Ensure that audioContext, sourceNode 
    and processorNode are being closed`,
    async () => {
        // setup
        const audioElement = document.createElement("audio");
        audioElement.src = "test.mp3";
        audioStream.audioContext = new AudioContext();
        audioStream.sourceNode = {
            disconnect: jest.fn()
        }
        audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);

        audioStream.processorNode = {
            disconnect: jest.fn()
        }
        const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
        const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
        await audioStream.detachAudioSourceElement();
        expect(processorNodeSpy).toBeCalledTimes(1);
        expect(sourceNodeSpy).toBeCalledTimes(1);
    }
)

test(
    `LINEAR16AudioStream.detachVideoSourceElement - Ensure that audioContext, sourceNode 
    and processorNode are being closed`,
    async () => {
        // setup
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp4";
        audioStream.audioContext = new AudioContext();
        audioStream.sourceNode = {
            disconnect: jest.fn()
        }
        audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);

        audioStream.processorNode = {
            disconnect: jest.fn()
        }
        const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
        const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
        await audioStream.detachVideoSourceElement();
        expect(processorNodeSpy).toBeCalledTimes(1);
        expect(sourceNodeSpy).toBeCalledTimes(1);
    }
)