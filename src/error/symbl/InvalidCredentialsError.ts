import SymblError from "./SymblError";

export default class InvalidCredentialsError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidCredentialsError"
        );

    }

}
