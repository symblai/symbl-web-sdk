import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { PCMAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl;
let audioStream;
let myStream2 = new MediaStream();
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

test(
    `PCMAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
    \`attachAudioDevice\` and \`attachAudioProcessor\` are invoked - No mediaStream passed`,
    async () => {
        try {
            // setup
            const mediaStream = new MediaStream();
            const context = new AudioContext();
        
            audioStream.audioContext = new AudioContext();
            audioStream.sourceNode = audioStream.audioContext.createMediaStreamSource(mediaStream);
            audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);
            audioStream.gainNode = context.createGain();
            audioStream.sourceNode.connect(audioStream.gainNode);
            audioStream.gainNode.connect(audioStream.processorNode);
            audioStream.processorNode.connect(audioStream.audioContext.destination);

            const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
            const attachDeviceSpy = jest.spyOn(audioStream, 'attachAudioDevice');
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            audioStream.updateAudioDevice('default');
            expect(detachDeviceSpy).toBeCalledTimes(1);
            expect(attachDeviceSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachDeviceSpy).toBeCalledWith('default', undefined);
        } catch (e) {
            throw new Error(e)
        }
    }
)

test(
    `PCMAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
    \`attachAudioDevice\` and \`attachAudioProcessor\` are invoked - mediaStream passed`,
    async () => {
        try {
            // setup
            const mediaStream = new MediaStream();
            const context = new AudioContext();
            audioStream.audioContext = new AudioContext();
            audioStream.sourceNode = audioStream.audioContext.createMediaStreamSource(new MediaStream());
            audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);
            audioStream.gainNode = context.createGain();
            audioStream.sourceNode.connect(audioStream.gainNode);
            audioStream.gainNode.connect(audioStream.processorNode);
            audioStream.processorNode.connect(audioStream.audioContext.destination);

            const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
            const attachDeviceSpy = jest.spyOn(audioStream, 'attachAudioDevice');
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            audioStream.updateAudioDevice('default', mediaStream);
            expect(detachDeviceSpy).toBeCalledTimes(1);
            expect(attachDeviceSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachDeviceSpy).toBeCalledWith('default', mediaStream);
        } catch (e) {
            throw new Error(e)
        }
    }
)