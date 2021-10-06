import Logger from "./Logger";

export default class StorageService {

    container: Storage;

    logger: Logger = new Logger();

    init (): StorageService {

        this.logger.info("Started storage service");

        this.container = window.localStorage;

        return this;

    }

    put (key: string, value: string): void {

        this.logger.info(`Storing ${key} : ${value}`);

        this.container.setItem(
            key,
            value
        );

    }

    expiration (key: string, value: number): void {


        const addMinutes = (dt, minutes) => {

            return new Date(dt.getTime() + (minutes * 60000));

        };

        const now = new Date();

        const exp = addMinutes(
            now,
            value
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
