const Logger = require("./Logger");

export = class StorageService {

    container: Storage;

    logger: typeof Logger = new Logger();

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

    get (key: string): string {

        return this.container.getItem(key);

    }

}
