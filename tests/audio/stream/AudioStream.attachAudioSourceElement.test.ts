import {
    AudioStream
} from "../../../src/audio/stream";

import {
    InvalidAudioElementError
} from "../../../src/error";

test(
    "AudioStream.attachAudioSourceElement - throws error on invalid audio source element",
    () => {

        const audioStream = new AudioStream();
        expect(async () => {audioStream.attachAudioSourceElement(0)}).rejects.toThrowError(new InvalidAudioElementError("Element is null. Please pass in a valid audio source dom element."));


    }
);

test(
    "AudioStream.attachAudioSourceElement - throws error on invalid child element of audio element",
    () => {

        const audioStream = new AudioStream();
        const audioElem = document.createElement("audio");
        const childDiv = document.createElement("div");
        audioElem.appendChild(childDiv);
        expect(async () => {audioStream.attachAudioSourceElement(audioElem)}).rejects.toThrowError(new InvalidAudioElementError("Child element must be a source element."));


    }
);

test(
    "AudioStream.attachAudioSourceElement - resolves if valid <source> elem is passed",
    async () => {

        const audioStream = new AudioStream();
        (audioStream as any).createNewContext();
        (audioStream as any).audioContext.createMediaElementSource = jest.fn();
        const audioElem = document.createElement("audio");
        const sourceElement = document.createElement('source');
        sourceElement.src = 'file.mp3';
        sourceElement.type = 'audio/wav';
        audioElem.appendChild(sourceElement);
        expect(() => {
            audioStream.attachAudioSourceElement(sourceElement)
        }).not.toThrowError();

    }
);

test(
    "AudioStream.attachAudioSourceElement - creates AudioContext if none is available",
    async () => {

        const audioStream = new AudioStream();
        const audioElem = document.createElement("audio");
        const sourceElement = document.createElement('source');
        sourceElement.src = 'file.mp3';
        sourceElement.type = 'audio/wav';
        audioElem.appendChild(sourceElement);
        expect(() => {
            audioStream.attachAudioSourceElement(sourceElement)
        }).not.toThrowError();
        expect((audioStream as any).audioContext).not.toBeUndefined();
    }
);