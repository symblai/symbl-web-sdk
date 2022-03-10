import { BaseConnection } from "../../connection";
import { SymblEvent } from "../../events";
import Logger from "../../logger";

export class SubscribeAPIConnection extends BaseConnection {
    private config: SubscribeAPIConnectionConfig;
    // private stream: SymblSubscribeAPIConnection;
    private stream: any;
    private connectionState = ConnectionState.DISCONNECTED;
    private _isConnected = false;
    private logger: Logger = new Logger();
    
    constructor(config: SubscribeAPIConnectionConfig) {
        super(config.sessionId);
        
        this.config = config;
        // Add function bindings here
    }
    
    static async validateConfig(config: SubscribeAPIConnectionConfig) : Promise<SubscribeAPIConnectionConfig> {
        // Validate the `sessionId` passed in the `config`.
        // If it is absent, throw `RequiredParameterAbsentError`
        // If the `uniqueness` of the `sessionId` is incorrect, throw `SessionIDNotUniqueError`
        // If the validation of the `config` is successful, return the validated config
        return config;
    }
    
    async connect() {
        super.connect();
        if (this.connectionState === ConnectionState.CONNECTED) {
            this.logger.warn("A connection attempt is being made on an already open connection.");
        } else {
            try {
                this.connectionState = ConnectionState.CONNECTING;
                await this.stream.subscribeToStream(this.config.sessionId);
                this.connectionState = ConnectionState.CONNECTED;
                this._isConnected = true;
                this.dispatchEvent(new SymblEvent("connected"));
            } catch(e) {
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;
                throw e;
            }
        }
        // If the `connectionState` is already CONNECTED, log at warning level that a connection attempt is being made on an already open connection.
        // Else, set the `connectionState` to CONNECTING and establish a new connection with the Streaming API via JS SDK
        // Once the connection is established, set the `connectionState` to CONNECTED and return from function
        // If the connection attempt fails due to no internet connection, this should be detected, caught and thrown as `NoConnectionError`
        // If the initial handshake for the connection fails, this should be caught and thrown as `HandshakeError` 
        // Set the value of `_isConnected` to `true` and emit the appropriate event  
        // In any case of faliure, the `connectionState` should be set to `TERMINATED`
    }
    
    async disconnect() {
        if (this.connectionState === ConnectionState.DISCONNECTED) {
            this.logger.warn("A connection closure attempt is being made on an already closed connection.");
        } else if (this.connectionState === ConnectionState.TERMINATED) {
            this.logger.warn("A connection closure attempt is being made on an already terminated connection.");
        } else {
            try {
                this.connectionState = ConnectionState.DISCONNECTING;
                await this.stream.close();
                this.connectionState = ConnectionState.DISCONNECTED;
                this._isConnected = false;
            } catch(e) {
                throw e;
            }
        }
        // If the `connectionState` is already DISCONNECTED, log at warning level that a connection closure attempt is being made on an already closed connection.
        // If the `connectionState` is already TERMINATED, log at warning level that a connection closure attempt is being made on an already terminated connection.
        // Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
        // Set the `connectionState` to DISCONNECTED
        // Set the value of `_isConnected` to `false` and emit the appropriate event
        // Any failure to close the connection should be handled, and logged as an error.
    }
    
    async isConnected() {
        return this._isConnected;
    }    
    
    async onDataReceived(data: SymblData) {
        super.emitEvents(data);
    }
}
