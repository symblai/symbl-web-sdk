import SymblError from './SymblError';

export default class RequiredParameterAbsentError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "RequiredParameterAbsentError"
        );

    }

}