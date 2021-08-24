const Logger = require("./Logger");

export = class StorageService {

    container: Storage;

    logger: typeof Logger = new Logger();

    init (): void {

        this.logger.info("Started storage service");

        this.container = window.localStorage;

    }

    put (key: string, value: string, expiration: number): void {

        const addMinutes = (dt, minutes) => {

            return new Date(dt.getTime() + (minutes * 60000));

        };

        const now = new Date();

        const exp = addMinutes(
            now,
            expiration
        ).toString();

        this.logger.info(`Storing ${key} : ${value}`);

        this.container.setItem(
            key,
            value
        );

        this.logger.info(`Storing ${key}Expiration : ${exp}`);

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
