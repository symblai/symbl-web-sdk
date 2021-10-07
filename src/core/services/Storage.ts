import Logger from "./Logger";

export default class StorageService {

    container: Storage;
  
    logger: Logger;

    constructor (logger: Logger) {

        this.logger = logger || new Logger();

    }

    init (): StorageService {

        this.logger.info("Started storage service");

        this.container = window.localStorage;

        return this;

    }

    async put (key: string, value: string): Promise<void> {


        this.logger.info(`Storing ${key} : ${value}`);

        await null;
        return this.container.setItem(
            key,
            value
        );


    }

    async expiration (key: string, time: number): Promise<void> {


        const addMinutes = (dt, minutes) => {

            return dt + (minutes * 60000);

        };

        const now = Date.now();

        const exp = addMinutes(
            now,
            time
        ).toString();

        this.logger.info(`Setting expiration for ${key}`);

        await null;
        return this.container.setItem(
            `${key}Expiration`,
            exp
        );

    }

    async get (key: string): Promise<string> {

        await null;
        return this.container.getItem(key);

    }

    delete (key: string): void {

        this.container.removeItem(key);

    }

}
