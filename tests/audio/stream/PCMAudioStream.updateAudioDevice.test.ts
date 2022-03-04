import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { PCMAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl, device1;
let audioStream;
let myStream = new MediaStream();
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    const context = new AudioContext();
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new PCMAudioStream(sourceNode);

    device1 = {
        deviceId: "default",
        kind: "audioinput",
        label: "",
        groupId: "default"
    }
    device1.__proto__ = MediaDeviceInfo.prototype;
    navigator.mediaDevices.enumerateDevices = function() { 
        return new Promise((res, rej)=>{res([device1])})
    }

    navigator.mediaDevices.getUserMedia = function() { 
        return new Promise((res, rej)=>{res(myStream)})
    }
});

test(
    `PCMAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
    \`attachAudioDevice\` and \`attachAudioProcessor\` are invoked - No mediaStream passed`,
    async () => {
        try {
            // setup
            const mediaStream = new MediaStream();
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
            expect(attachDeviceSpy).toBeCalledWith('default', myStream);
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