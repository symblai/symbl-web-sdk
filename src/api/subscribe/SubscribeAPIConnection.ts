import { BaseConnection } from "../../connection";
import { SymblEvent } from "../../events";
import {
    ConnectionState,
    SymblConnectionType,
    SubscribeAPIConnectionConfig,
    SymblData
} from "../../types";

export class SubscribeAPIConnection extends BaseConnection {
    private config: SubscribeAPIConnectionConfig;
    // private stream: SymblSubscribeAPIConnection;
    private stream: any;
    private connectionState = ConnectionState.DISCONNECTED;
    private _isConnected = false;
    public connectionType = SymblConnectionType.SUBSCRIBE;
    
    constructor(sessionId: string) {
        super(sessionId);

        // Add function bindings here
        this.onDataReceived = this.onDataReceived.bind(this);
    }
    
    async connect() {
        // If the `connectionState` is already CONNECTED, log at warning level that a connection attempt is being made on an already open connection.
        if (this.connectionState === ConnectionState.CONNECTED) {
            this.logger.warn("A connection attempt is being made on an already open connection.");

        // Else, set the `connectionState` to CONNECTING and establish a new connection with the Streaming API via JS SDK
        } else {
            try {
                this.connectionState = ConnectionState.CONNECTING;
                this.stream = await this.sdk.subscribeToStream(this.config.sessionId || this.config.id, {
                    handlers: {
                        onMessage: this.onDataReceived
                    }
                });
                // Once the connection is established, set the `connectionState` to CONNECTED
                this.connectionState = ConnectionState.CONNECTED;

                // Set the value of `_isConnected` to `true` and emit the appropriate event  
                this._isConnected = true;
                window.setTimeout(() => {
                    this.dispatchEvent(new SymblEvent("subscribed"));
                }, 1);
            } catch(e) {

                // In any case of faliure, the `connectionState` should be set to `TERMINATED`
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;
                throw e;

            }
        }

        //TODO:
        // If the connection attempt fails due to no internet connection, this should be detected, caught and thrown as `NoConnectionError`
        // If the initial handshake for the connection fails, this should be caught and thrown as `HandshakeError` 
    }
    
    async disconnect() {
        // If the `connectionState` is already DISCONNECTED, log a warning.
        if (this.connectionState === ConnectionState.DISCONNECTED) {
            this.logger.warn("A connection closure attempt is being made on an already closed connection.");

        // If the `connectionState` is already TERMINATED, log a warning.
        } else if (this.connectionState === ConnectionState.TERMINATED) {
            this.logger.warn("A connection closure attempt is being made on an already terminated connection.");

        // Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
        } else {
            try {
                this.connectionState = ConnectionState.DISCONNECTING;
                await this.stream.close();

                // Set the `connectionState` to DISCONNECTED
                this.connectionState = ConnectionState.DISCONNECTED;


                // Set the value of `_isConnected` to `false` and emit the appropriate event
                this._isConnected = false;
                this.dispatchEvent(new SymblEvent('unsubscribed'));
            } catch(e) {
                // Any failure to close the connection should be handled, and logged as an error.
                throw e;
            }
        }
    }
    
    isConnected() {
        return this._isConnected;
    }    
    
    async onDataReceived(data: SymblData) {
        await super.emitEvents(data);
    }
}
