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
        const mediaStream = new MediaStream();
        audioStream.audioContext = new AudioContext();
        await audioStream.audioContext.resume();
        audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);
        
        audioStream.sourceNode = {
            connect: jest.fn(),
            disconnect: jest.fn()
        }
        audioStream.gainNode = context.createGain();
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
