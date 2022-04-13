import {
    AudioContext
} from "standardized-audio-context-mock";
import Symbl from "../../../src/symbl";
// import 
import {
    LINEAR16AudioStream,
    AudioStream
} from '../../../src/audio';
import {
    APP_ID,
    APP_SECRET
} from '../../constants';
import {
    InvalidAudioInputDeviceError
} from " ../../../src/error";
import {
    SymblEvent
} from "../../../src/events";



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


let audioStream, authConfig;
let symbl;

describe('LINEAR16AudioStream.attachAudioDevice tests', () => {
    beforeAll(() => {

        authConfig = {
            appId: APP_ID,
            appSecret: APP_SECRET
        };
        symbl = new Symbl(authConfig);
        const context = new AudioContext();
        (context as any).createScriptProcessor = jest.fn();
        const sourceNode = ( < any > context).createMediaStreamSource(new MediaStream());
        // sourceNode.context = context;
        audioStream = new LINEAR16AudioStream(sourceNode);

    });

    test(
        'LINEAR16AudioStream.attachAudioDevice -deviceId is invalid - throw InvalidAudioInputDeviceError',
        async () => {
            const deviceId = null;
            await expect(async () => await audioStream.attachAudioDevice(deviceId)).rejects.toThrowError(new InvalidAudioInputDeviceError('Invalid deviceId passed as argument.'));
        }
    )

    test(
        `LINEAR16AudioStream.attachAudioDevice - Verify that createMediaStreamSource is invoked 
        when valid arguments are supplied.`,
        async () => {
            const mediaStream = new MediaStream();
            audioStream.audioContext = new AudioContext();
            (audioStream.audioContext as any).createScriptProcessor = jest.fn();
            audioStream.sourceNode = {
                disconnect: jest.fn()
            }
            const mediaStreamSpy = jest.spyOn(audioStream.audioContext, 'createMediaStreamSource');
            await audioStream.attachAudioDevice('default', mediaStream);
            expect(mediaStreamSpy).toBeCalledTimes(1);
            expect(mediaStreamSpy).toBeCalledWith(mediaStream);
        }
    )

    test(
        `LINEAR16AudioStream.attachAudioDevice - If media stream is not passed do not 
         invoke - create media stream instead`,
        async () => {
            const mediaStreamSpy = jest.spyOn(audioStream.audioContext, 'createMediaStreamSource');
            const gumSpy = jest.spyOn(AudioStream, 'getMediaStream');
            audioStream.mediaStream = null;
            audioStream.sourceNode = {
                disconnect: jest.fn()
            }
            await audioStream.attachAudioDevice('default');
            // expect(testSpy).toBeCalled();
            expect(gumSpy).toBeCalledTimes(1);

            // might not work because getUserMedia returns a promise
            // expect(gumSpy).toReturnWith(myStream);

            // expect(mediaStreamSpy).toBeCalledTimes(1);
            // expect(mediaStreamSpy).toBeCalledWith(myStream);
        }
    )

    // /**
    //  * if (context.state === 'running') {
    //  *  this.detachAudioDevice()
    //  * }
    //  * // go on
    //  */

    // test(
    //     `LINEAR16AudioStream.attachAudioDevice -If audio context is already active invoke \`detachAudioDevice\``,
    //     async () => {
    //         const context = <any>new AudioContext();
    //         await context.resume();
    //         audioStream.audioContext = context;
    //         console.log('====== AUDIO CONTEXT STATE =======', audioStream.audioContext.state);
    //         (audioStream.audioContext as any).createScriptProcessor = jest.fn();
    //         const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
    //         await audioStream.attachAudioDevice('default', new MediaStream());
    //         expect(detachDeviceSpy).toBeCalledTimes(1);
    //     }
    // )

    test(
        `LINEAR16AudioStream.attachAudioDevice -If audio context is inactive we do not invoke \`detachAudioDevice\``,
        async () => {
            audioStream.audioContext = null;

            audioStream.sourceNode = {
                disconnect: jest.fn()
            }

            const detachDeviceSpy = jest.spyOn(audioStream, 'detachAudioDevice');
            await audioStream.attachAudioDevice('default', new MediaStream());
            expect(detachDeviceSpy).toBeCalledTimes(0);
        }
    )

});