export = class StorageService {

    container: Storage;

    init (): void {

        this.container = window.localStorage;

    }

    put (key: string, value: string): void {

        this.container.setItem(
            key,
            value
        );

    }

    get (key: string): void {

        this.container.getItem(key);

    }

}
