import SymblError from './SymblError';

export default class InvalidValueError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidValueError"
        );

    }

}