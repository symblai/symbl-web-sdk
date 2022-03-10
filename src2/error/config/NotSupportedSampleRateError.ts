import { SymblError } from '../symbl';

export class NotSupportedSampleRateError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "NotSupportedSampleRateError"
        );

    }

}