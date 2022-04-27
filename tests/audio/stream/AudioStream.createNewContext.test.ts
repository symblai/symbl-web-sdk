import {
    AudioStream
} from "../../../src/audio/stream";

test(
    `AudioStream.createNewContext -- creates new instance of AudioContext when none is provided`,
    () => {
        const audioStream = new AudioStream();
        (audioStream as any).createNewContext();
        expect((audioStream as any).audioContext).toBeDefined();
    }
);