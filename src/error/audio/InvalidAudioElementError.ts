import {SymblError} from "../symbl";

export class InvalidAudioElementError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidAudioElementError"
        );

    }

}
