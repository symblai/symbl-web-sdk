/// <reference path="types/base.d.ts" />
/// <reference path="types/conversation.d.ts" />
/// <reference path="types/responses.d.ts" />
declare const TextApi: any;
declare const _default: {
    new (token: any): {
        token: string;
        text: typeof TextApi;
        realtimeRequest: any;
    };
};
export = _default;
