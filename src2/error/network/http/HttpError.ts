import { SymblError } from '../../symbl';

export default class HttpError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "HttpError"
        );

    }

}