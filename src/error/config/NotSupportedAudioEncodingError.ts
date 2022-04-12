import {SymblError} from "../symbl";

export class NotSupportedAudioEncodingError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "NotSupportedAudioEncodingError"
        );

    }

}
