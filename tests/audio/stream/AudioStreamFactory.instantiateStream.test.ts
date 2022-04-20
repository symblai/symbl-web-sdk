import {
    LINEAR16AudioStream,
    OpusAudioStream
} from "../../../src/audio/stream";
import { AudioStreamFactory } from '../../../src/audio/stream/AudioStreamFactory';
import {
    SymblAudioStreamType
} from "../../../src/types";
import {
    InvalidValueError
} from "../../../src/error";

test(
    `AudioStreamFactory.instantiateStream -- Choose OPUS`,
    () => {
        const audioStreamFactory = new AudioStreamFactory;

        let audioStream = audioStreamFactory.instantiateStream(SymblAudioStreamType.OPUS);

        expect(audioStream).toBeInstanceOf(OpusAudioStream);
    }
);

test(
    `AudioStreamFactory.instantiateStream -- Choose LINEAR16`,
    () => {
        const audioStreamFactory = new AudioStreamFactory;

        let audioStream = audioStreamFactory.instantiateStream(SymblAudioStreamType.LINEAR16);

        expect(audioStream).toBeInstanceOf(LINEAR16AudioStream);
    }
);

test(
    `AudioStreamFactory.instantiateStream -- Choose invalid value and throw error`,
    () => {
        const audioStreamFactory = new AudioStreamFactory;

        expect(() => {audioStreamFactory.instantiateStream("somethingwrong" as any)}).toThrowError(new InvalidValueError(`\`streamType\` must be one of ${SymblAudioStreamType.OPUS} or ${SymblAudioStreamType.LINEAR16}.`))
    }
);