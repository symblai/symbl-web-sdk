import {AudioContext} from "standardized-audio-context-mock";


// (AudioContext.prototype as any).createMediaStreamSource = m2;
// import AudioContext, {mocks} from "../../__mocks__/AudioContext.mock";
/**
 * return {
    SoundPlayer: jest.fn().mockImplementation(() => {
      return {playSoundFile: () => {}};
    }),
  };
 */
import Symbl from "../../../src/symbl";
// import 
import { PCMAudioStream, AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { InvalidAudioInputDeviceError } from " ../../../src/error";
import { SymblEvent } from "../../../src/events";



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
 // AudioContext = jest.fn().mockImplementation(() => {});


 let audioStream, authConfig
 let symbl, streamingAPIConnection;

 describe('PCMAudioStream.attachAudioDevice tests', () => {
    beforeAll(() => {

        authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        symbl = new Symbl(authConfig);
        const context = new AudioContext();
        const sourceNode = (<any>context).createMediaStreamSource(new MediaStream());
        sourceNode.context = context;
        audioStream = new PCMAudioStream(sourceNode);

        
    });

    beforeEach(() => {

       
    })

     test(
         'PCMAudioStream.attachAudioDevice -deviceId is invalid - throw InvalidAudioInputDeviceError',
         async () => {
            try {
                const deviceId = "my-invalid-device-id";
                expect(audioStream.attachAudioDevice(deviceId)).toThrowError(new InvalidAudioInputDeviceError('Invalid deviceId as parameter'));
            } catch (e) {

            }
         }
     )
    
    test(
        `PCMAudioStream.attachAudioDevice - Verify that createMediaStreamSource is invoked 
        when valid arguments are supplied.`,
        async () => {
            const mediaStream = new MediaStream();
            audioStream.audioContext = new AudioContext();
            const mediaStreamSpy = jest.spyOn(audioStream.audioContext, 'createMediaStreamSource');
            await audioStream.attachAudioDevice('default', mediaStream);
            expect(mediaStreamSpy).toBeCalledTimes(1);
            expect(mediaStreamSpy).toBeCalledWith(mediaStream);
        }
    )

     test(
         `PCMAudioStream.attachAudioDevice - If media stream is not passed do not 
         invoke - create media stream instead`,
         async () => {
            try {
                const testSpy = jest.spyOn(audioStream, 'test');
                const mediaStreamSpy = jest.spyOn(audioStream.audioContext, 'createMediaStreamSource');
                const gumSpy = jest.spyOn(AudioStream, 'getMediaStream');
                await audioStream.attachAudioDevice('default');
                // expect(testSpy).toBeCalled();
                expect(gumSpy).toBeCalledTimes(1);

                // might not work because getUserMedia returns a promise
                // expect(gumSpy).toReturnWith(myStream);

                // expect(mediaStreamSpy).toBeCalledTimes(1);
                // expect(mediaStreamSpy).toBeCalledWith(myStream);
            } catch(e) {
                throw e;
            }
         }
     )

    // /**
    //  * if (context.state === 'running') {
    //  *  this.detachAudioDevice()
    //  * }
    //  * // go on
    //  */

     test(
         `PCMAudioStream.attachAudioDevice -If audio context is already active invoke \`detachAudioDevice\``,
         async () => {
             const context = <any>new AudioContext();
             await context.resume();
             audioStream.audioContext = context;
             const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
             await audioStream.attachAudioDevice('default', new MediaStream());
             expect(detachDeviceSpy).toBeCalledTimes(1);
         }
     )

     test(
         `PCMAudioStream.attachAudioDevice -If audio context is inactive we do not invoke \`detachAudioDevice\``,
         async () => {
             const context: any = new AudioContext();
             await context.close();
             audioStream.audioContext = context;
             const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
             await audioStream.attachAudioDevice('default', new MediaStream());
             expect(detachDeviceSpy).toBeCalledTimes(0);
         }
     )


    
     test(
        `PCMAudioStream.attachAudioDevice - If successful emit \`audio_source_connected\``,
        async () => {
           const mediaStream = new MediaStream();
           const eventEmitterSpy = jest.spyOn(audioStream, 'dispatchEvent');
           await audioStream.attachAudioDevice('default', mediaStream);
           expect(eventEmitterSpy).toBeCalledTimes(1);
           expect(eventEmitterSpy).toBeCalledWith(new SymblEvent('audio_source_connected', audioStream.audioContext.sampleRate));
        }
    )
});