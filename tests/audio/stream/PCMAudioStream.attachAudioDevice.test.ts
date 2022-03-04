import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { PCMAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { InvalidAudioInputDeviceError } from "../../../src2/error";
import { SymblEvent } from "../../../src2/events";

/**
 * failure cases:
 *  deviceId is invalid - throw InvalidAUdioINputDeviceError
 * 
 * success cases:
 *  if media stream is passed in invoke createMediaStreamSource 
 *  if media stream is not passed do not invoke - create media stream instead
 *  if audio context is already active emit `audio_source_disconnected` and recreate topology
 *  test with audio context not active
 *  if successful emit audio_source_connected
 *  
 */

 // mock audio context
 // window.AudioContext = jest.fn().mockImplementation(() => {});
 
 let audioStream, device1, authConfig
 let symbl, streamingAPIConnection;
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
     'PCMAudioStream.attachAudioDevice -deviceId is invalid - throw InvalidAUdioINputDeviceError',
     async () => {
        const deviceId = "my-invalid-device-id";
        expect(audioStream.attachAudioDevice(deviceId)).toThrowError(new InvalidAudioInputDeviceError('Invalid deviceId as parameter'));
     }
 )
 
 test(
     `PCMAudioStream.attachAudioDevice - Verify that createMediaStreamSource is invoked 
     when valid arguments are supplied.`,
     async () => {
        const mediaStream = new MediaStream();
        const mediaStreamSpy = jest.spyOn(audioStream.audioContext, 'createMediaStreamSource');
        audioStream.attachAudioDevice('default', mediaStream);
        expect(mediaStreamSpy).toBeCalledTimes(1);
        expect(mediaStreamSpy).toBeCalledWith(mediaStream);
     }
 )

 test(
     `PCMAudioStream.attachAudioDevice - If media stream is not passed do not 
     invoke - create media stream instead`,
     async () => {
        const mediaStreamSpy = jest.spyOn(audioStream.audioContext, 'createMediaStreamSource');
        const gumSpy = jest.spyOn(navigator.mediaDevices, 'getUserMedia');
        audioStream.attachAudioDevice('default');
        expect(gumSpy).toBeCalledTimes(1);

        // might not work because getUserMedia returns a promise
        expect(gumSpy).toReturnWith(myStream);

        expect(mediaStreamSpy).toBeCalledTimes(1);
        expect(mediaStreamSpy).toBeCalledWith(myStream);
     }
 )

/**
 * if (context.state === 'running') {
 *  this.detachAudioDevice()
 * }
 * // go on
 */

 test(
     `PCMAudioStream.attachAudioDevice -If audio context is already active invoke \`detachAudioDevice\``,
     async () => {
         const context = new AudioContext();
         context.state = 'active';
         audioStream.audioContext = context;
         const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
         audioStream.attachAudioDevice('default');
         expect(detachDeviceSpy).toBeCalledTimes(1);
     }
 )

 test(
     `PCMAudioStream.attachAudioDevice -If audio context is inactive we do not invoke \`detachAudioDevice\``,
     async () => {
         const context = new AudioContext();
         context.state = 'inactive';
         audioStream.audioContext = context;
         const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
         audioStream.attachAudioDevice('default');
         expect(detachDeviceSpy).toBeCalledTimes(0);
     }
 )


 
 test(
    `PCMAudioStream.attachAudioDevice - If successful emit \`audio_source_connected\``,
    async () => {
       const mediaStream = new MediaStream();
       const eventEmitterSpy = jest.spyOn(audioStream, 'eventEmitter');
       audioStream.attachAudioDevice('default', mediaStream);
       expect(eventEmitterSpy).toBeCalledTimes(1);
       expect(eventEmitterSpy).toBeCalledWith(new SymblEvent('audio_source_connected'));
    }
)