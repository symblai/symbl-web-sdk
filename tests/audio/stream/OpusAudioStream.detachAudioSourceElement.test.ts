import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { SymblEvent } from "../../../src2/events";
import { OpusAudioStream } from '../../../src2/audio';
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
    `OpusAudioStream.detachAudioSourceElement - Ensure that audioContext, sourceNode 
    and processorNode are being closed`,
    async () => {
        try {
            // setup
            const audioElement = document.createElement("audio");
            audioElement.src = "test.mp3";
            audioStream.audioContext = new AudioContext();
            audioStream.sourceNode = audioStream.audioContext.createMediaElementSource(audioElement);
            audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);

            const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
            const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
            const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
            const eventEmitterSpy = jest.spyOn(audioStream, 'eventEmitter');
            audioStream.detachAudioSourceElement();
            expect(audioContextSpy).toBeCalledTimes(1);
            expect(processorNodeSpy).toBeCalledTimes(1);
            expect(sourceNodeSpy).toBeCalledTimes(1);
            expect(eventEmitterSpy).toBeCalledWith(new SymblEvent('audio_source_disconnected'));
            expect(eventEmitterSpy).toBeCalledTimes(1);    
        } catch (e) {
            throw new Error(e)
        }
    }
)


test(
    `OpusAudioStream.detachAudioSourceElement - If audioContext is null then log a 
    warning and do nothing else`,
    async () => {
        try {     
            // setup
            const audioElement = document.createElement("audio");
            audioElement.src = "test.mp3";

            const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
            const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
            const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
            const eventEmitterSpy = jest.spyOn(audioStream, 'eventEmitter');
            const warnSpy = jest.spyOn(audioStream.logger, 'warn');
            audioStream.detachAudioSourceElement();
            expect(audioContextSpy).toBeCalledTimes(0);
            expect(processorNodeSpy).toBeCalledTimes(0);
            expect(sourceNodeSpy).toBeCalledTimes(0);
            expect(eventEmitterSpy).toBeCalledTimes(0);  
            expect(warnSpy).toBeCalledTimes(1);
        } catch (e) {
            throw e
        } 
    }
)