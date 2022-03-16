import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { SymblEvent } from "../../../src/events";
import { OpusAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let authConfig, symbl;
let audioStream;
let streamingAPIConnection;
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

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in source element with 'video' parent.`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            srcElement.src = "test.mp4";
            const videoElement = document.createElement("video");
            videoElement.appendChild(srcElement);
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            await expect(async () => await audioStream.attachAudioSourceElement(srcElement)).not.toThrow();
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledWith(true);
        } catch(e) {
            // throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in source element with 'audio' parent.`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            srcElement.src = "test.mp3";
            const audioElement = document.createElement("audio");
            audioElement.appendChild(srcElement);
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            await expect(async () => await audioStream.attachAudioSourceElement(srcElement)).not.toThrow();
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledWith(true);
        } catch(e) {
            // throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in video element with valid source child`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            srcElement.src = "test.mp4";
            const videoElement = document.createElement("video");
            videoElement.appendChild(srcElement);
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).not.toThrow();
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledWith(true);
        } catch(e) {
            // throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in audio element with valid source child`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            srcElement.src = "test.mp3";
            const audioElement = document.createElement("audio");
            audioElement.appendChild(srcElement);
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            await expect(async () => await audioStream.attachAudioSourceElement(audioElement)).not.toThrow();
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledWith(true);
        } catch(e) {
            // throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in audio element with src attribute`,
    async () => {
        try {
            const audioElement = document.createElement("audio");
            audioElement.src = "test.mp3";
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            await expect(async () => await audioStream.attachAudioSourceElement(audioElement)).not.toThrow();
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledWith(true);
        } catch(e) {
            // throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in video element with src attribute`,
    async () => {
        try {
            const videoElement = document.createElement("video");
            videoElement.src = "test.mp3";
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).not.toThrow();
            expect(attachProcessorSpy).toBeCalledTimes(1);
            expect(attachProcessorSpy).toBeCalledWith(true);
        } catch(e) {
            // throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on source element`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            const videoElement = document.createElement("video");
            videoElement.appendChild(srcElement);
            await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).toThrowError(new Error('Element is missing its `src` property'));
        } catch (e) {

        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on video element`,
    async () => {
        try {
            const videoElement = document.createElement("video");
            await expect(async () => await audioStream.attachAudioSourceElement(videoElement)).toThrowError(new Error('Element is missing its `src` property'));
        } catch (e) {

        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on audio element`,
    async () => {
        try {
            const audioElement = document.createElement("audio");
            await expect(async () => await audioStream.attachAudioSourceElement(audioElement)).toThrowError(new Error('Element is missing its `src` property'));
        } catch(e) {

        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    a non audio element is passed`,
    async () => {
        try {
            const divElement = document.createElement("div");
            await expect(async () => await audioStream.attachAudioSourceElement(divElement)).toThrowError(new Error('Incorrect DOM element for processing audio.'));
        } catch(e) {

        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    the source element's parent is not audio or video`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            const pictureElement = document.createElement("picture");
            srcElement.src = "test.jpg";
            pictureElement.appendChild(srcElement);
            await expect(async () => await audioStream.attachAudioSourceElement(srcElement)).toThrowError(new Error('Source element parent must be audio or video'));
        } catch(e) {

        }
    } 
)


test(
    `PCMAudioStream.attachAudioSourceElement - Ensure that auddioContext is being 
    closed and \`audio_source_disconnected\` is being emitted if it's already set to 'running'`,
    async () => {
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp3";
        const context = new AudioContext();
        await context.resume();
        audioStream.audioContext = context;
        const closeSpy = jest.spyOn(audioStream, 'detachAudioSourceElement');
        const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');
        await audioStream.attachAudioSourceElement(videoElement);
        expect(closeSpy).toBeCalledTimes(1);
        expect(dispatchEventSpy).toBeCalledWith(new SymblEvent('audio_source_disconnected'));
    }
)


test(
    `PCMAudioStream.attachAudioSourceElement - Ensure that audiocontext is created,
    that \`audioContext.createMediaElementSource\` is invoked, that 
    \`audioContext.createScriptProcessor\` is invoked and that 
    \`attachAudioProcessor\` is invoked`,
    async () => {
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp3";

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


test(
    `PCMAudioStream.attachAudioSourceElement - Ensure that \`audio_source_connected\` is emitted`,
    async () => {
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp3";

        const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');

        await audioStream.attachAudioSourceElement(videoElement);

        expect(dispatchEventSpy).toBeCalledWith(new SymblEvent('audio_source_connected', audioStream.sampleRate));
    }
)