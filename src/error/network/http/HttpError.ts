import {SymblError} from "../../symbl";

export class HttpError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "HttpError"
        );

    }

}
