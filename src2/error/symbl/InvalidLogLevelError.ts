import SymblError from './SymblError';

export default class InvalidLogLevelError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidLogLevelError"
        );

    }

}