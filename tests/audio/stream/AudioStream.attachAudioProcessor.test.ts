import {
    AudioStream
} from "../../../src/audio/stream";

test(
    "AudioStream - attachAudioProcessor() throws error",
    () => {
        expect(() => {(AudioStream as any).prototype.attachAudioProcessor()}).toThrowError(new TypeError("Not implemented!"));
    }
);

test(
    "AudioStream - processAudio() throws error",
    () => {
        expect(() => {(AudioStream as any).prototype.processAudio(1)}).toThrowError(new TypeError("Not implemented!"));
    }
);