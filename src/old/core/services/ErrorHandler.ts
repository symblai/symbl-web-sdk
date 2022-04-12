import Logger from "./Logger";

class ErrorHandler extends Error {

    logger: Logger = new Logger();

    constructor (message: string, name: string) {

        super(message);
        this.message = message;
        this.name = name;
        this.logger.error(message);
        this.logger.trace(message);

    }

}

export class ConnectionError extends ErrorHandler {

    constructor (message: string) {

        super(
            message,
            "ConnectionError"
        );

    }

}

export class HttpError extends ErrorHandler {

    constructor (message: string) {

        super(
            message,
            "HttpError"
        );

    }

}

export class NullError extends ErrorHandler {

    constructor (message: string) {

        super(
            message,
            "NullError"
        );

    }

}

export class ConfigError extends ErrorHandler {

    constructor (message: string) {

        super(
            message,
            "ConfigError"
        );

    }

}
