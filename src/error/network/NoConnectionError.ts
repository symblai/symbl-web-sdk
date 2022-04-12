import {SymblError} from "../symbl";

export class NoConnectionError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "NoConnectionError"
        );

    }

}
