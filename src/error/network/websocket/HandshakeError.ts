import {SymblError} from "../../symbl";

export class HandshakeError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "HandshakeError"
        );

    }

}
