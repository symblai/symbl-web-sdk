const Logger = require("./Logger");

export = class StorageService {

    container: Storage;

    logger: typeof Logger;

    constructor (logger: typeof Logger) {

        this.logger = logger || new Logger();

    }

    init (): void {

        this.logger.info("Started storage service");

        this.container = window.localStorage;

    }

    put (key: string, value: string): void {

        this.logger.info(`Storing ${key} : ${value}`);

        this.container.setItem(
            key,
            value
        );

    }

    expiration (key: string, time: number): void {


        const addMinutes = (dt, minutes) => {

            return dt + (minutes * 60000);

        };

        const now = Date.now();

        const exp = addMinutes(
            now,
            time
        ).toString();

        this.logger.info(`Setting expiration for ${key}`);

        this.container.setItem(
            `${key}Expiration`,
            exp
        );

    }

    get (key: string): string {

        return this.container.getItem(key);

    }

    delete (key: string): void {

        this.container.removeItem(key);

    }

}
