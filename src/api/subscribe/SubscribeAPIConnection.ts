import {
    ConnectionState,
    SubscribeAPIConnectionConfig,
    SymblConnectionType,
    SymblData
} from "../../types";
import {BaseConnection} from "../../connection";
import {SymblEvent} from "../../events";

export class SubscribeAPIConnection extends BaseConnection {

    /**
     * @ignore
     */
    private config: SubscribeAPIConnectionConfig;

    /**
     * @ignore
     */
    private stream: {
        close: () => void
    }

    /**
     * @ignore
     */
    private connectionState = ConnectionState.DISCONNECTED;

    /**
     * @ignore
     */
    private _isConnected = false;

    /**
     * Connection type is either STREAMING or SUBSCRIBE
     */
    public connectionType = SymblConnectionType.SUBSCRIBE;

    constructor (sessionId: string) {

        super(sessionId);

        // Add function bindings here
        this.onDataReceived = this.onDataReceived.bind(this);

    }

    /**
     * Establishes a live subscriber connection to an active websocket stream
     */
    async connect (): Promise<void> {

        // If the `connectionState` is already CONNECTED, log at warning level that a connection attempt is being made on an already open connection.
        if (this.connectionState === ConnectionState.CONNECTED) {

            this.logger.warn("A connection attempt is being made on an already open connection.");

            // Else, set the `connectionState` to CONNECTING and establish a new connection with the Streaming API via JS SDK

        } else {

            try {

                this.connectionState = ConnectionState.CONNECTING;
                await this.sdk.oauth2.init();
                this.stream = await this.sdk.subscribeToStream(
                    this.sessionId,
                    {
                        "handlers": {
                            "onMessage": this.onDataReceived
                        }
                    }
                );
                // Once the connection is established, set the `connectionState` to CONNECTED
                this.connectionState = ConnectionState.CONNECTED;

                // Set the value of `_isConnected` to `true` and emit the appropriate event
                this._isConnected = true;
                window.setTimeout(
                    () => {

                        this.dispatchEvent(new SymblEvent("connected"));

                    },
                    1
                );

            } catch (ex) {

                // In any case of faliure, the `connectionState` should be set to `TERMINATED`
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;
                throw ex;

            }

        }

        /*
         * TODO:
         *  If the connection attempt fails due to no internet connection, this should be detected, caught and thrown as `NoConnectionError`
         *  If the initial handshake for the connection fails, this should be caught and thrown as `HandshakeError`
         */

    }

    /**
     * Disconnects subscriber from active websocket connection
     */
    async disconnect (): Promise<void> {

        // If the `connectionState` is already DISCONNECTED, log a warning.
        if (this.connectionState === ConnectionState.DISCONNECTED) {

            this.logger.warn("A connection closure attempt is being made on an already closed connection.");

            // If the `connectionState` is already TERMINATED, log a warning.

        } else if (this.connectionState === ConnectionState.TERMINATED) {

            this.logger.warn("A connection closure attempt is being made on an already terminated connection.");

            // Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK

        } else {

            this.connectionState = ConnectionState.DISCONNECTING;
            await this.stream.close();

            // Set the `connectionState` to DISCONNECTED
            this.connectionState = ConnectionState.DISCONNECTED;


            // Set the value of `_isConnected` to `false` and emit the appropriate event
            this._isConnected = false;
            this.dispatchEvent(new SymblEvent("disconnected"));

        }

    }

    /**
     * Checks private `_isConnected` variable
     * @returns boolean
     */
    isConnected (): boolean {

        return this._isConnected;

    }

    /**
     * When any data is received from the websocket connection it is passed through
     * `emitEvents` to parse which specifics events are to be fired
     * @param data SymblData
     */
    async onDataReceived (data: SymblData): Promise<void> {

        await super.emitEvents(data);

    }

}
