import Logger from "../../logger/index";

export default class SymblError extends Error {

    logger: Logger = new Logger();

    constructor (message: string, name: string) {

        super(message);
        this.message = message;
        this.name = name;
        this.logger.error(message);
        this.logger.trace(message);

    }

}
