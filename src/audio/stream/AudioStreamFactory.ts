import {
    AudioStream,
    LINEAR16AudioStream,
    OpusAudioStream
} from ".";
import {
    InvalidValueError
} from "../../error";
import {
    SymblAudioStreamType
} from "../../types";


export class AudioStreamFactory {

    /**
     * Establishes an audio stream based on stream type
     * @param streamType SymblAudioStreamType
     * @returns audioStream - Opus or LINEAR16
     */
    instantiateStream (streamType: SymblAudioStreamType): AudioStream {

        let audioStream: AudioStream;
        switch (streamType.toUpperCase()) {

        case SymblAudioStreamType.OPUS:
            audioStream = new OpusAudioStream();
            break;
        case SymblAudioStreamType.LINEAR16:
            audioStream = new LINEAR16AudioStream();
            break;
        default:
            // If the validation fails for `connectionType`, throw `InvalidValueError`
            throw new InvalidValueError(`\`streamType\` must be one of ${SymblAudioStreamType.OPUS} or ${SymblAudioStreamType.LINEAR16}.`);

        }

        return audioStream;

    }

}
