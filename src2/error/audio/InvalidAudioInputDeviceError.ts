import { SymblError } from '../symbl';

export class InvalidAudioInputDeviceError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidAudioInputDeviceError"
        );

    }

}