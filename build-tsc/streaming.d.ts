declare class Streaming {
    token: string;
    options: any;
    constructor(token: string, options: SymblConfig);
    start(): Promise<unknown>;
}
export = Streaming;
