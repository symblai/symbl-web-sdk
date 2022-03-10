import { SymblError } from '../symbl';

export class InvalidValueError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidValueError"
        );

    }

}