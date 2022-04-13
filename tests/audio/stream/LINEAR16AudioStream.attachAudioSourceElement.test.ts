import {AudioContext} from 'standardized-audio-context-mock';
import Symbl from "../../../src/symbl";
import { LINEAR16AudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblEvent } from "../../../src/events";
import { InvalidAudioElementError } from "../../../src/error";
import 'whatwg-fetch';

/*
- Validate if the `audioSourceDomElement` is a valid DOM Element granting access to audio data.
- Failure to do so should be handled and appropriate error should be thrown
- Check if the `audioContext` already exists and is `running`.
- If it is, emit `audio_source_disconnected` event and then close the `audioContext`
- Re-create AudioContext, MediaStream from the active/default audio device if available and invoke `createScriptProcessor` on the `audioContext`
- Re-assign the class variables
- Emit `audio_source_connected` event with the updated `sampleRate`
*/

// mock audio context
// window.AudioContext = jest.fn().mockImplementation(() => {});

let audioStream, authConfig, symbl, context;
let streamingAPIConnection;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    context = new AudioContext();
    (context as any).createScriptProcessor = jest.fn();
    (context as any).createMediaElementSource = jest.fn()
    const sourceNode = context.createMediaStreamSource(new MediaStream());
    audioStream = new LINEAR16AudioStream(sourceNode);
});

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in source element with 'video' parent.`,
    async () => {
        const srcElement = document.createElement('source');
        srcElement.src = "test.mp4";
        const videoElement = document.createElement("video");
        videoElement.appendChild(srcElement);
        await expect(async () => await audioStream.attachAudioSourceElement(srcElement)).resolves
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in source element with 'audio' parent.`,
    async () => {
        const srcElement = document.createElement('source');
        srcElement.src = "test.mp3";
        const audioElement = document.createElement("audio");
        audioElement.appendChild(srcElement);
        await expect(async () => await audioStream.attachAudioSourceElement(srcElement)).resolves
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in video element with valid source child`,
    async () => {
        const srcElement = document.createElement('source');
        srcElement.src = "test.mp4";
        const videoElement = document.createElement("video");
        videoElement.appendChild(srcElement);
        await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).resolves
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in audio element with valid source child`,
    async () => {
        const srcElement = document.createElement('source');
        srcElement.src = "test.mp3";
        const audioElement = document.createElement("audio");
        audioElement.appendChild(srcElement);
        await expect(async () => await audioStream.attachAudioSourceElement(audioElement)).resolves
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in audio element with src attribute`,
    async () => {
        const audioElement = document.createElement("audio");
        audioElement.src = "test.mp3";
        await expect(async () => await audioStream.attachAudioSourceElement(audioElement)).resolves
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in video element with src attribute`,
    async () => {
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp3";
        await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).resolves
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on source element`,
    async () => {
        const srcElement = document.createElement('source');
        const videoElement = document.createElement("video");
        videoElement.appendChild(srcElement);
        await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).rejects.toThrow();
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on video element`,
    async () => {
        const videoElement = document.createElement("video");
        await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).rejects.toThrowError();
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on audio element`,
    async () => {
        const audioElement = document.createElement("audio");
        await expect(async () => await audioStream.attachAudioSourceElement(audioElement)).rejects.toThrowError();
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that error is thrown if 
    a non audio element is passed`,
    async () => {
        const divElement = document.createElement("div");
        await expect(async () => await audioStream.attachAudioSourceElement(divElement)).rejects.toThrowError();
    } 
)

test(
    `LINEAR16AudioStream.attachAudioSourceElement - Validate that error is thrown if 
    the source element's parent is not audio or video`,
    async () => {
        const srcElement = document.createElement('source');
        const pictureElement = document.createElement("picture");
        srcElement.src = "test.jpg";
        pictureElement.appendChild(srcElement);
        await expect(async () => await audioStream.attachAudioSourceElement(srcElement)).rejects.toThrowError();
    } 
)


// test(
//     `LINEAR16AudioStream.attachAudioSourceElement - Ensure that auddioContext is being 
//     closed and \`audio_source_disconnected\` is being emitted if it's already set to 'running'`,
//     async () => {
//         const videoElement = document.createElement("video");
//         videoElement.src = "test.mp3";
//         const context = new AudioContext();
//         await context.resume();
//         audioStream.audioContext = context;
//         audioStream.detachAudioSourceElement = jest.fn().mockImplementation(() => {});
//         const closeSpy = jest.spyOn(audioStream, 'detachAudioSourceElement');
//         await audioStream.attachAudioSourceElement(videoElement);
//         expect(closeSpy).toBeCalledTimes(1);
//     }
// )


test(
    `LINEAR16AudioStream.attachAudioSourceElement - Ensure that audiocontext is created,
    that \`audioContext.createMediaElementSource\` is invoked, that 
    \`audioContext.createScriptProcessor\` is invoked and that 
    \`attachAudioProcessor\` is invoked`,
    async () => {
        const videoElement = document.createElement("video");
        (videoElement as any).type = "audio/mp3"
        videoElement.src = "test.mp3";
        
        audioStream.audioContext = new AudioContext();
        audioStream.audioContext.createMediaElementSource = jest.fn();
        audioStream.audioContext.createScriptProcessor = jest.fn();
        audioStream.sourceNode = {
            disconnect: jest.fn()
        }
        const createMediaElementEventSpy = jest.spyOn(audioStream.audioContext, 'createMediaElementSource');
        const createScriptProcessorEventSpy = jest.spyOn(audioStream.audioContext, 'createScriptProcessor');
        const attachAudioProcessorEventSpy = jest.spyOn(audioStream, 'attachAudioProcessor');

        await audioStream.attachAudioSourceElement(videoElement);
        expect(createMediaElementEventSpy).toBeCalledTimes(1);
        expect(createMediaElementEventSpy).toBeCalledWith(videoElement);
        expect(createScriptProcessorEventSpy).toBeCalledTimes(1);
        expect(createScriptProcessorEventSpy).toBeCalledWith(1024, 1, 1);
        expect(attachAudioProcessorEventSpy).toBeCalledTimes(1);
        expect(audioStream.audioContext).not.toBe(null)
    }
)

