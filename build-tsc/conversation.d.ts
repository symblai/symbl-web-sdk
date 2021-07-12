declare const _default: {
    new (id: any, jobId: any, token: any): {
        id: string;
        token: string;
        job: any;
        sleep(time?: number): Promise<void>;
        messages(): Promise<MessageResponse>;
    };
};
export = _default;
