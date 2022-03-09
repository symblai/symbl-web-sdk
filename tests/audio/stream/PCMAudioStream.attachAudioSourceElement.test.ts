import AudioContext from 'audio-context-mock';
import Symbl from "../../../src2/symbl";
import { PCMAudioStream } from '../../../src2/audio';
import { APP_ID, APP_SECRET } from '../../constants';
import { SymblEvent } from "../../../src2/events";

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

let audioStream, authConfig, symbl;
let streamingAPIConnection;
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
    `PCMAudioStream.attachAudioSourceElement - Validate that element is a valid 
    DOM element that can provide audio: Passing in source element with 'video' parent.`,
    async () => {
        try {
            const srcElement = document.createElement('source');
            srcElement.src = "test.mp4";
            const videoElement = document.createElement("video");
            videoElement.appendChild(srcElement);
            expect(audioStream.attachAudioSourceElement(srcElement)).not.toThrow();
        } catch(e) {
            throw e;
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
            expect(audioStream.attachAudioSourceElement(srcElement)).not.toThrow();
        } catch(e) {
            throw e;
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
            expect(audioStream.attachAudioSourceElement(videoElement)).not.toThrow();
        } catch(e) {
            throw e;
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
            expect(audioStream.attachAudioSourceElement(audioElement)).not.toThrow();
        } catch(e) {
            throw e;
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
            expect(audioStream.attachAudioSourceElement(audioElement)).not.toThrow();
        } catch(e) {
            throw e;
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
            expect(audioStream.attachAudioSourceElement(videoElement)).not.toThrow();
        } catch(e) {
            throw e;
        }
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on source element`,
    async () => {
        const srcElement = document.createElement('source');
        const videoElement = document.createElement("video");
        videoElement.appendChild(srcElement);
        expect(audioStream.attachAudioSourceElement(videoElement)).toThrowError(new Error('Element is missing its `src` property'));
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on video element`,
    async () => {
        const videoElement = document.createElement("video");
        videoElement.appendChild(videoElement);
        expect(audioStream.attachAudioSourceElement(videoElement)).toThrowError(new Error('Element is missing its `src` property'));
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    no src attribute on audio element`,
    async () => {
        const audioElement = document.createElement("audio");
        audioElement.appendChild(audioElement);
        expect(audioStream.attachAudioSourceElement(audioElement)).toThrowError(new Error('Element is missing its `src` property'));
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    a non audio element is passed`,
    async () => {
        const divElement = document.createElement("div");
        divElement.appendChild(divElement);
        expect(audioStream.attachAudioSourceElement(divElement)).toThrowError(new Error('Incorrect DOM element for processing audio.'));
    } 
)

test(
    `PCMAudioStream.attachAudioSourceElement - Validate that error is thrown if 
    the source element's parent is not audio or video`,
    async () => {
        const srcElement = document.createElement('source');
        const pictureElement = document.createElement("picture");
        srcElement.src = "test.jpg";
        pictureElement.appendChild(srcElement);
        expect(audioStream.attachAudioSourceElement(srcElement)).toThrowError(new Error('Source element parent must be audio or video'));
    } 
)


test(
    `PCMAudioStream.attachAudioSourceElement - Ensure that auddioContext is being 
    closed and \`audio_source_disconnected\` is being emitted if it's already set to 'running'`,
    async () => {
        const videoElement = document.createElement("video");
        videoElement.src = "test.mp3";
        videoElement.appendChild(videoElement);
        const context = new AudioContext();
        context.state = 'running';
        audioStream.audioContext = context;
        const closeSpy = jest.spyOn(audioStream, 'detachAudioSourceElement');
        audioStream.attachAudioSourceElement(videoElement);
        expect(closeSpy).toBeCalledTimes(1);
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
        videoElement.appendChild(videoElement);

        const createMediaElementEventSpy = jest.spyOn(audioStream.audioContext, 'createMediaElementSource');
        const createScriptProcessorEventSpy = jest.spyOn(audioStream.audioContext, 'createScriptProcessor');
        const attachAudioProcessorEventSpy = jest.spyOn(audioStream, 'attachAudioProcessor');

        audioStream.attachAudioSourceElement(videoElement);
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
        videoElement.appendChild(videoElement);

        const dispatchEventSpy = jest.spyOn(audioStream, 'dispatchEvent');

        audioStream.attachAudioSourceElement(videoElement);

        expect(dispatchEventSpy).toBeCalledWith(new SymblEvent('audio_source_connected'));
    }
)