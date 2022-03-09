import { SymblError } from '../symbl';

export class NoAudioInputDeviceDetectedError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "NoAudioInputDeviceDetectedError"
        );

    }

}