import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { OpusAudioStream } from '../../../src/audio';
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
    audioStream = new OpusAudioStream(sourceNode);
});

test(
    `OpusAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
    \`attachAudioDevice\` and \`attachAudioProcessor\` are invoked - No mediaStream passed`,
    async () => {
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

        const detachDeviceSpy = jest.fn();
        audioStream.detachAudioDevice = detachDeviceSpy;
        const attachDeviceSpy = jest.fn();
        audioStream.attachAudioDevice = attachDeviceSpy;
        audioStream.updateAudioDevice('default');
        expect(detachDeviceSpy).toBeCalledTimes(1);
        expect(attachDeviceSpy).toBeCalledTimes(1);
        expect(attachDeviceSpy).toBeCalledWith('default', undefined);
    }
)

test(
    `OpusAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
    \`attachAudioDevice\` and \`attachAudioProcessor\` are invoked - mediaStream passed`,
    async () => {
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

        const detachDeviceSpy = jest.fn();
        audioStream.detachAudioDevice = detachDeviceSpy;
        const attachDeviceSpy = jest.fn();
        audioStream.attachAudioDevice = attachDeviceSpy;
        audioStream.updateAudioDevice('default', mediaStream);
        expect(detachDeviceSpy).toBeCalledTimes(1);
        expect(attachDeviceSpy).toBeCalledTimes(1);
        expect(attachDeviceSpy).toBeCalledWith('default', mediaStream);
    }
)