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
        expect(async () => {await AudioStream.getMediaStream()}).rejects.toThrowError(new NoAudioInputDeviceDetectedError("No input devices found."));
    }
);

test(
    `AudioStream.getMediaStream -- finds no default device and selects first available`,
    async () => {
        navigator.mediaDevices.enumerateDevices = jest.fn(() => {
            return new Promise(resolve => {
                resolve([{
                    deviceId: "123",
                    kind: "audioinput"
                }] as any);
            });
        });
        await expect(AudioStream.getMediaStream("123xyz")).resolves.not.toThrowError()
    }
);