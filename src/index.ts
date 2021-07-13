/// <reference path="./types/base.ts" />
/// <reference path="./types/conversation.ts" />
/// <reference path="./types/responses.ts" />
/// <reference path="./types/realtime.ts" />

const RealtimeApi = require("./streaming.js");
const Job = require("./job.js");
const Conversation = require("./conversation.js");
const TextApi = require('./async.js');

export = class Symbl {
    token: string;
    text: typeof TextApi;
    realtimeRequest: typeof RealtimeApi;

    constructor(token) {
        if (!token) {
            throw new Error('SDK is not initialized or failed during initialization.');
        }
        this.token = token;
        this.text = new TextApi(token);
        const options: any = {};
        this.realtimeRequest = new RealtimeApi(token, options);
    }
}

// (window as any).Symbl = Symbl;




