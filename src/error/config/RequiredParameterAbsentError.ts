import { SymblError } from '../symbl';

export class RequiredParameterAbsentError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "RequiredParameterAbsentError"
        );

    }

}