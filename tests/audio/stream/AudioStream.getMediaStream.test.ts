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