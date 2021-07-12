declare const Conversation: any;
declare const _default: {
    new (token: any): {
        token: string;
        process(payload: any): Promise<typeof Conversation>;
    };
};
export = _default;
