import { BaseConnection } from "../../connection";
import { is } from "typescript-is";
import { AudioStream } from "../../audio";
import Logger from "../../logger";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import { NoConnectionError } from "../../error";

export class StreamingAPIConnection extends BaseConnection {
    private config: StreamingAPIConnectionConfig;
    private connectionState = ConnectionState.DISCONNECTED;
    private processingState = ConnectionProcessingState.NOT_PROCESSING;
    private _isProcessing = false;
    private _isConnected = false;
    private restartProcessing = false;
    private stream: SymblStreamingAPIConnection;
    private audioStream: AudioStream;
    private logger: Logger;
    private sdk: sdk = sdk;
    
    constructor(config: StreamingAPIConnectionConfig, audioStream: AudioStream) {
        super(config.id);
        this.logger = new Logger();
        this.config = config;
        this.config.handlers = {
            onDataReceived: this.onDataReceived
        };
        this.audioStream = audioStream;
        
        // Add function bindings here
        if (this.audioStream) {
            this.attachAudioStream(this.audioStream);
        }
    }
    
    static async validateConfig(config: StreamingAPIConnectionConfig | StreamingAPIStartRequest) : Promise<StreamingAPIConnectionConfig | StreamingAPIStartRequest> {
        // if (is<StreamingAPIConnectionConfig>config) {

        // } else {
        //     throw new Error("Invalid config.");
        // }
        return config;
        // Perform validations for received config
        // Explicit validations on required fields to be passed in the `StreamingAPIConnectionConfig`
        // In case any required key/value pair is missing, throw `RequiredParameterAbsentError`
        // In case of any invalid key/value pairs, throw `InvalidValueError`
        // In case the audio encoding is not supported, throw `NotSupportedAudioEncodingError`
        // In case the sample rate is not supported by the AudioEncoding, throw `NotSupportedSampleRateError`
        // If the validation of the `config` is successful, return the validated config
    }
    
    async connect() {
        if (this.connectionState === ConnectionState.CONNECTED) {
            this.logger.warn('A connection attempt is being made on an already open connection.');
        } else {
            try {
                this.connectionState = ConnectionState.CONNECTING;
                this.stream = await this.sdk.createStream(this.config);
                this.connectionState = ConnectionState.CONNECTED;
                this._isConnected = true;
            } catch(e) {
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;
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
            this.logger.warn('A connection closure attempt is being made on an already closed connection.');
        } else if (this.connectionState === ConnectionState.TERMINATED) {
            this.logger.warn('A connection closure attempt is being made on an already terminated connection.');
        } else {
            try {
                this.connectionState = ConnectionState.DISCONNECTING;
                await this.stream.close();
                this.connectionState = ConnectionState.DISCONNECTED;
                this._isConnected = false;
            } catch(e) {
                this.logger.error('Error while disconnecting', e);
            }
        }
        // If the `connectionState` is already DISCONNECTED, log at warning level that a connection closure attempt is being made on an already closed connection.
        // If the `connectionState` is already TERMINATED, log at warning level that a connection closure attempt is being made on an already terminated connection.
        // Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
        // Set the `connectionState` to DISCONNECTED
        // Set the value of `_isConnected` to `false` and emit the appropriate event
        // Any failure to close the connection should be handled, and logged as an error.
    }
    
    async startProcessing(startRequestData?: StreamingAPIStartRequest): Promise<StreamingAPIConnection> {
        if (this.connectionState !== ConnectionState.CONNECTED) {
            throw new NoConnectionError('No connection available. You need to call `.connect()` before you can start processing.');
        }
        if (startRequestData) {
            try {
                StreamingAPIConnection.validateConfig(startRequestData);
            } catch(e) {
                throw e;
            }
        }
        if (this.processingState === ConnectionProcessingState.PROCESSING ||
            this.processingState === ConnectionProcessingState.ATTEMPTING) {
            this.logger.warn('An attempt to `startProcessing` on a connection that is already processing or has already initiated the call');
        } else {
            try {
                this.processingState = ConnectionProcessingState.ATTEMPTING;
                startRequestData ? await this.stream.start() : await this.stream.start(startRequestData);
                this.processingState = ConnectionProcessingState.PROCESSING;
            } catch(e) {
                throw e;
            }
            // the started_procesing event will be fired in the onDataReceived handler 
            //      when the WebSocket returns `recognition_started` event.

        }
        return this;
        // If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
        // If `startRequestData` is passed in, validate it and in failure to do so, throw the appropriate error emmited by validateConfig.
        // If `processingState` is PROCESSING or ATTEMPTING, then log a warning stating an attempt to `startProcessing` on a connection that is already processing or has already initiated the call.
        // Else, set the value of `processingState` to ATTEMPTING and invoke the `start` function on the `stream` reference with startRequestData if present.
        // Set the value of `processingState` to PROCESSING if the call is successful
        // Set the value of `_isProcessing` to `true` and emit the appropriate event
        // Any failure to send the `start_request` should be caught, handled and re-thrown with appropriate error class.
        // Return from function
    }
    
    async stopProcessing(): Promise<StreamingAPIConnection> {
        if (this.connectionState !== ConnectionState.CONNECTED) {
            throw new NoConnectionError("There is no established connection with the websocket.");
        }
        if (this.processingState === ConnectionProcessingState.NOT_PROCESSING ||
            this.processingState === ConnectionProcessingState.STOPPING) {
            this.logger.warn("An attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.");
        } else {
            try {
                this.processingState = ConnectionProcessingState.STOPPING;
                await this.stream.stop();
                this.processingState = ConnectionProcessingState.NOT_PROCESSING;
                this._isProcessing = false;
            } catch(e) {
                throw e;
            }
        }
        // If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
        // If `processingState` is NOT_PROCESSING or STOPPING, then log a warning stating an attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.
        // Else, set the value of `processingState` to STOPPING and invoke the `stop` function on the `stream`.
        // Set the value of `processingState` to NOT_PROCESSING if the call is successful
        // Set the value of `_isProcessing` to `false` and emit the appropriate event
        // Any failure to send the `stop_request` should be caught, handled and re-thrown with appropriate error class.
        // Return from function
        if (this.restartProcessing) {
            try {
                await this.startProcessing();
            } catch(e) {
                throw e;
            }
        }
        return this;
    }
    
    onAudioSourceChanged(audioSourceChangedEvent) {
        if (this._isConnected) {
            if (this._isProcessing && audioSourceChangedEvent.type === 'audio_source_disconnected') {
                this.restartProcessing = true;
                this.stopProcessing();
            } else if (!this._isProcessing && audioSourceChangedEvent.type === 'audio_source_connected' && this.restartProcessing) {
                this.restartProcessing = false;
                this.startProcessing();
            }
        } else {
            this.restartProcessing = false;
        }
    }
    
    async isProcessing() {
        return this._isProcessing;
    }
    
    async isConnected() {
        return this._isConnected;
    }
    
    async onDataReceived(data: SymblData) {
        super.emitEvents(data);
        // if (data.type === "recognition_started") {
        //     this._isProcessing = true;
        // }
        return;
    }
    
    async sendAudio(audioData: ArrayBuffer | Uint8Array | Uint16Array) {
        this.stream.sendAudio(audioData);
    }   
    
    async sendJSON(data: StreamingAPIStartRequest | StreamingAPIStopRequest | StreamingAPIModifyRequest) {
        // Validate `data` before stringifying
        this.stream.sendAudio(JSON.stringify(data)); // `sendAudio` function exposed by the JS SDK currently accepts any serializable data to be sent over the channel
    }
    
    private registerAudioStreamCallback() {
        if (this.audioStream) {
            this.audioStream.attachAudioCallback(this.sendAudio);
        }
    }
    
    private attachAudioStream(audioStream: AudioStream) {
        this.audioStream = audioStream;
        
        // this.audioStream.on('audio_source_connected', this.onAudioSourceChanged);
        // this.audioStream.on('audio_source_disconnected', this.onAudioSourceChanged);

        this.on('audio_source_connected', this.onAudioSourceChanged);
        this.on('audio_source_disconnected', this.onAudioSourceChanged);
        
        this.registerAudioStreamCallback();
    }
    
    async updateAudioStream(audioStream: AudioStream) {
        if (this.audioStream) {
            try {
                await this.stopProcessing();
                this.attachAudioStream(audioStream);
            } catch(e) {
                throw e;
            }
        }
        // Check if an AudioStream is already attached to this instance
        // If it is, then stop the audio processing via the attached stream
        // Call the `attachAudioStream` function with the new `audioStream`
    }
}