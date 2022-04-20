import {
    AudioStream
} from "../../../src/audio/stream";

test(
    "AudioStream.suspendAudioContext -- does not throw error suspending active AudioContext",
    () => {

        const audioStream = new AudioStream();
        (audioStream as any).createNewContext();
        expect((audioStream as any).audioContext).toBeDefined();

        (audioStream as any).audioContext.state = "running";

        expect(async () => {
            audioStream.suspendAudioContext();
        }).not.toThrowError();

    }
);
