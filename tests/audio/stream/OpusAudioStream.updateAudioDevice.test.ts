import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { OpusAudioStream } from '../../../src2/audio';
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
    `OpusAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
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
    `OpusAudioStream.updateAudioDevice - Check that \`detachAudioDevice\`,
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