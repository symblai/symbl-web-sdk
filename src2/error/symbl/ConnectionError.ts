import SymblError from './SymblError';

export default class ConnectionError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "ConnectionError"
        );

    }

}