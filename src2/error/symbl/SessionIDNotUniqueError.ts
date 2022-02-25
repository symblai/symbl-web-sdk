import SymblError from './SymblError';

export default class SessionIDNotUniqueError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "SessionIDNotUniqueError"
        );

    }

}