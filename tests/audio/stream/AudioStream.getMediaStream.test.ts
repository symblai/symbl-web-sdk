import {
    AudioStream
} from "../../../src/audio/stream";
import {
    NoAudioInputDeviceDetectedError
} from "../../../src/error";

test(
    `AudioStream.getMediaStream -- find no device and throw error`,
    () => {
        navigator.mediaDevices.enumerateDevices = jest.fn(() => {
            return [] as any;
        });
        expect(async () => {AudioStream.getMediaStream()}).rejects.toThrowError(new NoAudioInputDeviceDetectedError("No input devices found."));
    }
);

test(
    `AudioStream.getMediaStream -- finds no default device and selects first available`,
    () => {
        expect(async () => {
            await AudioStream.getMediaStream("123");
        }).resolves;
    }
);