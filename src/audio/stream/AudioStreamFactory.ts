import {
    AudioStream,
    OpusAudioStream,
    PCMAudioStream
} from ".";
import {
    SymblAudioStreamType,
    OpusConfig
} from "../../types";
import {
    InvalidValueError
} from "../../error";


const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
export class AudioStreamFactory {

    async instantiateStream (streamType: SymblAudioStreamType): Promise < AudioStream > {
        let audioStream: AudioStream;
        switch (streamType.toUpperCase()) {

        case SymblAudioStreamType.OPUS:
            audioStream = new OpusAudioStream();
            break;
        case SymblAudioStreamType.PCM:
            audioStream = new PCMAudioStream();
            break;
        default:
            // If the validation fails for `connectionType`, throw `InvalidValueError`
            throw new InvalidValueError(`\`streamType\` must be one of ${SymblAudioStreamType.OPUS} or ${SymblAudioStreamType.PCM}.`);

        }

        return audioStream;

    }

}
