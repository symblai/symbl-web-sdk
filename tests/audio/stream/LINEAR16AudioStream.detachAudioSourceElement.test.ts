/* no tests */

import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblEvent } from "../../../src/events";

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

        const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
        const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
        const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
        const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');
        await audioStream.detachAudioSourceElement();
        expect(audioContextSpy).toBeCalledTimes(1);
        expect(processorNodeSpy).toBeCalledTimes(1);
        expect(sourceNodeSpy).toBeCalledTimes(1);
        expect(dispatchEventSpy).toBeCalledWith(new SymblEvent('audio_source_disconnected'));
        expect(dispatchEventSpy).toBeCalledTimes(1);
    }
)


test(
    `LINEAR16AudioStream.detachAudioSourceElement - If audioContext is null then log a 
    warning and do nothing else`,
    async () => {     
        // setup
        const audioElement = document.createElement("audio");
        audioElement.src = "test.mp3";

        const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
        const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
        const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
        const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');
        const warnSpy = jest.spyOn(audioStream.logger, 'warn');
        await audioStream.detachAudioSourceElement();
        expect(audioContextSpy).toBeCalledTimes(0);
        expect(processorNodeSpy).toBeCalledTimes(0);
        expect(sourceNodeSpy).toBeCalledTimes(0);
        expect(dispatchEventSpy).toBeCalledTimes(0);  
        expect(warnSpy).toBeCalledTimes(1);
    }
)