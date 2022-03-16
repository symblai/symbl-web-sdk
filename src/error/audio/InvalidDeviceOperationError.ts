import { SymblError } from '../symbl';

export class InvalidDeviceOperationError extends SymblError {

    constructor (message: string) {

        super(
            message,
            "InvalidDeviceOperationError"
        );

    }

}