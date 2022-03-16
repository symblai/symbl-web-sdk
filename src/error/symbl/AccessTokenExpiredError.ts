import SymblError from './SymblError';

export default class AccessTokenExpiredError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "AccessTokenExpiredError"
        );

    }

}