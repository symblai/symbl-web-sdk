import {
    AudioStream
} from "../../../src/audio/stream";
import {SymblEvent} from "../../../src/events";

jest.useFakeTimers();

test(
    "AudioStream.detachAudioSourceElement - disconnects AudioContext and detaches from audio element",
    async () => {

        const audioStream = new AudioStream();
        (audioStream as any).createNewContext();
        (audioStream as any).audioContext.createMediaElementSource = jest.fn();
        const audioElem = document.createElement("audio");
        const sourceElement = document.createElement('source');
        sourceElement.src = 'file.mp3';
        sourceElement.type = 'audio/wav';
        audioElem.appendChild(sourceElement);
        audioStream.attachAudioSourceElement(audioElem)
        const dispatchEventSpy = jest.spyOn(audioStream, "dispatchEvent"); 
        audioStream.detachAudioSourceElement();
        jest.runAllTimers()
        expect(dispatchEventSpy).toHaveBeenCalledWith(new SymblEvent("audio_source_disconnected"))

        dispatchEventSpy.mockRestore();
    }
);