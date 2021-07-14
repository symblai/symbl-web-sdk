/// <reference path="./types/base.ts" />
/// <reference path="./types/conversation.ts" />
/// <reference path="./types/responses.ts" />
/// <reference path="./types/realtime.ts" />

const RealtimeApi = require("./streaming.js");
const Job = require("./job.js");
const Conversation = require("./conversation.js");
const TextApi = require('./async.js');

const FLOW_TYPES = {
    STREAMING_FLOW_TYPE: 'REALTIME',
}

interface ISymblWebEngine {
    startRealtimeRequest(config): void;
    init(): void;
    config: any;
    connectionConfig: ConnectionConfig;
}

class SymblWebEngine implements ISymblWebEngine {
    config: any;
    connectionConfig: ConnectionConfig;
    authHandler: AuthHandler;
    constructor(config?: any) {
        this.config = config;
        if (this.config) {
            this.init();
        }
    }

    async init(): Promise<void> {
        if (!this.config) {
            throw new Error('SDK is not initialized or failed during initialization.');
        }
        if (!this.config.appId && !this.config.appSecret) {
            throw new Error('Invalid connection configuration passed.');
        }
        this.connectionConfig = new ConnectionConfig(this.config);
        this.authHandler = new AuthHandler(this.connectionConfig);
    }

    startRealtimeRequest(config): void {
        const handler = new TransactionHandler().startTransaction(config, 'REALTIME');
    }
}


interface IConnectionConfig {
    appId: string;
    appSecret: string;
    getAppId(): string;
    getAppSecret(): string;
}

class ConnectionConfig implements IConnectionConfig {
    appId: string;
    appSecret: string;
    constructor(config) {
        this.appId = config.appId;
        this.appSecret = config.appSecret;
        window.sessionStorage.setItem('symbl-appId', this.appId);
        window.sessionStorage.setItem('symbl-appSecret', this.appSecret);
    }
    getAppId(): string {
        return this.appId;
    }

    getAppSecret(): string {
        return this.appSecret;
    }
}

interface IAuthHandler {
    token: string;
    connectionConfig: ConnectionConfig;
    generateToken(connectionConfig: ConnectionConfig): Promise<string>;
}

class AuthHandler implements IAuthHandler {
    token: string;
    connectionConfig: ConnectionConfig;
    constructor(connectionConfig) {
        this.connectionConfig = connectionConfig;
        this.generateToken(connectionConfig);
    }
    async generateToken(connectionConfig: ConnectionConfig): Promise<string> {
        const response = await fetch("https://api.symbl.ai/oauth2/token:generate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'application',
                appId: this.connectionConfig.getAppId(),
                appSecret: this.connectionConfig.getAppSecret()
            })
        });
        const result: { accessToken: string, expiresIn: number } = await response.json();
        this.token = result.accessToken;
        return this.token;
    }
}

interface IUserSession {
    name: string;
    email: string;
    connectionId: string;
}

class UserSession implements IUserSession {
    name: string;
    email: string;
    connectionId: string;
    constructor(name) {
        this.name = name;
    }
}

interface ISymblRequest {
    parameters: any;
}

class SymblRequest implements ISymblRequest {
    parameters: any;
    constructor(parameters) {
        this.parameters = parameters;
    }
}

interface ITransactionHandler {
    userSession: IUserSession;
    requestOptions: SymblRequest;
    request: RequestHandler;
    initUserSession(): void;
    flowType: string;
    startTransaction(config, flowType: string): TransactionHandler;
}

class TransactionHandler extends SymblWebEngine implements ITransactionHandler {
    userSession: UserSession;
    requestOptions: SymblRequest;
    request: RequestHandler;
    flowType: string;
    startTransaction(config, flowType: string): TransactionHandler {
        /* if config has mic info
             create device manager
        */
        this.initUserSession();
        this.flowType = flowType;
        this.requestOptions = new SymblRequest(config);
        this.request = new RequestHandler(this);
        return this;
    }

    initUserSession(): void {
        this.userSession = new UserSession('Bob');
    }
}

interface IRequestHandler {
    api: SymblClientAsync | SymblClientStreaming;
}

class RequestHandler implements IRequestHandler {
    api: SymblClientAsync | SymblClientStreaming;
    constructor(transactionHandler: TransactionHandler) {
        // super(config, flowType);
        if (transactionHandler.flowType === FLOW_TYPES.STREAMING_FLOW_TYPE) {
            this.api = new SymblClientStreaming();
            this.api.execute();
        }/* else if (transactionHandler.flowType === FLOW_TYPES.ASYNC_FLOW_TYPE) {
            
        }*/
    }
}

interface ISymblClientAsync {
    execute(): void;
}

class SymblClientAsync implements ISymblClientAsync {
    execute(): void {
        alert('started');
    }
    
}

interface ISymblClientStreaming {
    execute(): void;
}

class SymblClientStreaming implements ISymblClientStreaming {
    // constructor(config) {
    //     super(config);
    // }

    execute(): void { // same function from RealtimeApi
        alert('started');
    }

}

export = SymblWebEngine;

// (window as any).Symbl = Symbl;




