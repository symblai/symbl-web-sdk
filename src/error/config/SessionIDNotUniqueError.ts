import { SymblError } from '../symbl';

export class SessionIDNotUniqueError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "SessionIDNotUniqueError"
        );

    }

}