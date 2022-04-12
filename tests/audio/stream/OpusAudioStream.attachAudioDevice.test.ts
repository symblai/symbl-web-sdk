import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { SymblEvent } from "../../../src/events";
import { OpusAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl, context;
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
    context = new AudioContext();
    const mediaStream = new MediaStream();
    const sourceNode = context.createMediaStreamSource(mediaStream);
    audioStream = new OpusAudioStream(sourceNode, opusConfig);
});

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `OpusAudioStream.detachAudioDevice - Ensure that audioContext, sourceNode 
    and processorNode are being closed`,
    async () => {
        try {
            // setup
            const mediaStream = new MediaStream();
            audioStream.audioContext = new AudioContext();
            await audioStream.audioContext.resume();
            audioStream.sourceNode = audioStream.audioContext.createMediaStreamSource(mediaStream);
            audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);
            audioStream.gainNode = context.createGain();
            audioStream.sourceNode.connect(audioStream.gainNode);
            audioStream.gainNode.connect(audioStream.processorNode);
            audioStream.processorNode.connect(audioStream.audioContext.destination);

            const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
            const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
            const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
            const gainNodeSpy = jest.spyOn(audioStream.gainNode, 'disconnect');
            const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');
            await audioStream.detachAudioDevice();
            expect(audioContextSpy).toBeCalledTimes(1);
            expect(processorNodeSpy).toBeCalledTimes(1);
            expect(gainNodeSpy).toBeCalledTimes(1);
            expect(sourceNodeSpy).toBeCalledTimes(1);
            expect(dispatchEventSpy).toBeCalledWith(new SymblEvent('audio_source_disconnected'));
            expect(dispatchEventSpy).toBeCalledTimes(1);    
        } catch (e) {
            throw new Error(e)
        }
    }
)


test(
    `OpusAudioStream.detachAudioDevice - If audioContext is null then log a 
    warning and do nothing else`,
    async () => {
        try {    
            const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
            const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
            const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
            const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');
            const warnSpy = jest.spyOn(audioStream.logger, 'warn');
            audioStream.audioContext = null;
            await audioStream.detachAudioDevice();
            expect(audioContextSpy).toBeCalledTimes(0);
            expect(processorNodeSpy).toBeCalledTimes(0);
            expect(sourceNodeSpy).toBeCalledTimes(0);
            expect(dispatchEventSpy).toBeCalledTimes(0);  
            expect(warnSpy).toBeCalledTimes(1);
        } catch (e) {
            throw e
        } 
    }
)