import {AudioStream, AudioStreamFactory} from "../../audio";
import {
    ConnectionConfig,
    ConnectionProcessingState,
    ConnectionState,
    StreamingAPIConnectionConfig,
    StreamingAPIModifyRequest,
    StreamingAPIStartRequest,
    StreamingAPIStopRequest,
    SymblAudioStreamType,
    SymblConnectionType,
    SymblData,
    SymblStreamingAPIConnection
} from "../../types";
import {
    DEFAULT_ENCODING_TYPE,
    DEFAULT_SAMPLE_RATE_HERTZ,
    LINEAR16_SAMPLE_RATE_HERTZ,
    OPUS_SAMPLE_RATE_HERTZ,
    VALID_ENCODING,
    VALID_INSIGHT_TYPES
} from "../../constants";
import {
    InvalidValueError,
    NoConnectionError,
    NotSupportedAudioEncodingError,
    NotSupportedSampleRateError
} from "../../error";
import {BaseConnection} from "../../connection";
import {SymblEvent} from "../../events";
import {is} from "typescript-is";
import {uuid} from "../../utils";


/**
 * Checks if insight types provided are valid
 * @param insightTypes Array<string>
 * @returns boolean
 */
const validateInsightTypes = (insightTypes: Array<string>): boolean => {

    if (!Array.isArray(insightTypes)) {

        return false;

    }

    for (const insight of insightTypes) {

        if (!VALID_INSIGHT_TYPES.includes(insight)) {

            return false;

        }

    }

    return true;

};

/**
 *
 * This module wraps around Symbl’s Streaming APIs and provides an interface to access the connection-specific functionalities.
 * StreamingAPIConnection
 *
 * This class extends the BaseConnection class and implements the wrapper functionality around the Streaming APIs interface, exposed via the JS SDK.
 *
 * Additionally, it also integrates with AudioStream to seamlessly handle the streaming of Audio, managed internally.
 */
export class StreamingAPIConnection extends BaseConnection {

    private config: StreamingAPIConnectionConfig;

    private connectionState = ConnectionState.DISCONNECTED;

    private processingState = ConnectionProcessingState.NOT_PROCESSING;

    private _isProcessing = false;

    private _isConnected = false;

    private restartProcessing = false;

    private stream: SymblStreamingAPIConnection;

    private audioStream: AudioStream;

    public connectionType = SymblConnectionType.STREAMING;

    constructor (sessionId: string, audioStream: AudioStream) {

        super(sessionId);
        this.config = {
            "handlers": {
                "onDataReceived": this.onDataReceived
            },
            "id": sessionId
        };
        this.audioStream = audioStream;

        this.onDataReceived = this.onDataReceived.bind(this);
        this.sendAudio = this.sendAudio.bind(this);

    }

    /*
     *Perform validations for received config
     *Explicit validations on required fields to be passed in the `StreamingAPIConnectionConfig`
     *
     *In case any required key/value pair is missing, throw `RequiredParameterAbsentError`
     *[Adam] To confirm, there is 0 required field in the config argument? 'id' is not a required field as uuid is generated
     *
     *In case of any invalid key/value pairs, throw `InvalidValueError`
     *In case the audio encoding is not supported, throw `NotSupportedAudioEncodingError`
     *In case the sample rate is not supported by the AudioEncoding, throw `NotSupportedSampleRateError`
     *If the validation of the `config` is successful, return the validated config
     */

    /**
     * Validates the configuration prior to the connection being opened.
     * @param config StreamingAPIConnectionConfig
     * @returns StreamingAPIConnectionConfig
     */
    static validateConfig (config: StreamingAPIConnectionConfig) : StreamingAPIConnectionConfig | StreamingAPIStartRequest {

        const {
            id,
            insightTypes,
            "config": configObj,
            speaker,
            reconnectOnError,
            disconnectOnStopRequest,
            disconnectOnStopRequestTimeout,
            noConnectionTimeout
        } = config;

        if (id && typeof id !== "string") {

            throw new InvalidValueError("StreamingAPIConnectionConfig argument 'id' field should be a type string.");

        } else if (!id) {

            config.id = uuid();

        }

        if (insightTypes) {

            if (!validateInsightTypes(insightTypes)) {

                throw new InvalidValueError(`StreamingAPIConnectionConfig: 'insightTypes' should be an array of valid insightType strings - ${VALID_INSIGHT_TYPES}`);

            }

        }

        if (configObj) {

            let {confidenceThreshold, meetingTitle, encoding, sampleRateHertz} = configObj;
            if (confidenceThreshold && typeof confidenceThreshold !== "number") {

                throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.confidenceThreshold' field should be a type number.");

            }
            if (meetingTitle && typeof meetingTitle !== "string") {

                throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.meetingTitle' field should be a type string.");

            }
            if (sampleRateHertz && typeof sampleRateHertz !== "number") {

                throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.sampleRateHertz' field should be a type number.");

            }

            if (!encoding) {

                encoding = DEFAULT_ENCODING_TYPE;

            }

            if (encoding) {

                if (typeof encoding !== "string") {

                    throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.encoding' field should be a type string.");

                }
                if (!VALID_ENCODING.includes(encoding.toUpperCase())) {

                    throw new NotSupportedAudioEncodingError(`StreamingAPIConnectionConfig: 'config.encoding' only supports the following types - ${VALID_ENCODING}.`);

                }

                if (sampleRateHertz) {

                    if (encoding.toUpperCase() === "LINEAR16" && !LINEAR16_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {

                        throw new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For LINEAR16 encoding, supported sample rates are ${LINEAR16_SAMPLE_RATE_HERTZ}.`);

                    }
                    if (encoding.toUpperCase() === "OPUS" && (!OPUS_SAMPLE_RATE_HERTZ.includes(sampleRateHertz))) {

                        throw new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For Opus encoding, supported sample rates are ${OPUS_SAMPLE_RATE_HERTZ}.`);

                    }

                }

            }

        }

        if (speaker) {

            const {userId, name} = speaker;
            if (userId && typeof userId !== "string") {

                throw new InvalidValueError("StreamingAPIConnectionConfig: 'speaker.userId' field should be a type string.");

            }
            if (name && typeof name !== "string") {

                throw new InvalidValueError("StreamingAPIConnectionConfig: 'speaker.name' field should be a type string.");

            }

        }

        if (reconnectOnError && typeof reconnectOnError !== "boolean") {

            throw new InvalidValueError("StreamingAPIConnectionConfig: 'reconnectOnError' field should be a type boolean.");

        }

        if (Boolean(disconnectOnStopRequest) && typeof disconnectOnStopRequest !== "boolean") {

            throw new InvalidValueError("StreamingAPIConnectionConfig: 'disconnectOnStopRequest' field should be a type boolean.");

        }

        if (disconnectOnStopRequest === false && disconnectOnStopRequestTimeout) {

            if (typeof disconnectOnStopRequestTimeout !== "number" ||
            (disconnectOnStopRequestTimeout < 0 || disconnectOnStopRequestTimeout > 3600)) {

                throw new InvalidValueError("StreamingAPIConnectionConfig: Please specify 'disconnectOnStopRequestTimeout' field with a positive integer between 0 and 3600.");

            }

        }

        if (noConnectionTimeout) {

            if (typeof noConnectionTimeout !== "number" ||
            (noConnectionTimeout < 0 || noConnectionTimeout > 3600)) {

                throw new InvalidValueError("StreamingAPIConnectionConfig: 'noConnectionTimeout' optional field should be a type number.");

            }

        }

        return config;

    }

    /**
     * Check if already connected and if not connect to the websocket stream to send data.
     * @returns connection object
     */
    async connect () {

        // If the `connectionState` is already CONNECTED, log at warning level that a connection attempt is being made on an already open connection.
        if (this.connectionState === ConnectionState.CONNECTED) {

            this.logger.warn("A connection attempt is being made on an already open connection.");

        } else {

            try {

                // Else, set the `connectionState` to CONNECTING and establish a new connection with the Streaming API via JS SDK
                this.connectionState = ConnectionState.CONNECTING;
                this.stream = await this.sdk.createStream(this.config);
                // Once the connection is established, set the `connectionState` to CONNECTED
                this.connectionState = ConnectionState.CONNECTED;
                // Set uthe value of `_isConnected` to `true` and emit the appropriate event
                this._isConnected = true;
                window.setTimeout(
                    () => {

                        this.dispatchEvent(new SymblEvent("connected"));

                    },
                    1
                );
                return this;

            } catch (e) {

                // In any case of faliure, the `connectionState` should be set to `TERMINATED`
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;

            }

        }

        /*
         * TODO:
         * If the connection attempt fails due to no internet connection, this should be detected, caught and thrown as `NoConnectionError`
         * If the initial handshake for the connection fails, this should be caught and thrown as `HandshakeError`
         */

    }

    /**
     * Disconnects from streaming websocket.
     */
    async disconnect () {

        // If the `connectionState` is already DISCONNECTED, log at warning level that a connection closure attempt is being made on an already closed connection.
        if (this.connectionState === ConnectionState.DISCONNECTED) {

            this.logger.warn("A connection closure attempt is being made on an already closed connection.");
            // If the `connectionState` is already TERMINATED, log at warning level that a connection closure attempt is being made on an already terminated connection.

        } else if (this.connectionState === ConnectionState.TERMINATED) {

            this.logger.warn("A connection closure attempt is being made on an already terminated connection.");

        } else {

            try {

                // Else, set the `connectionState` to DISCONNECTING and call the `close` function on the `stream` created via JS SDK
                this.connectionState = ConnectionState.DISCONNECTING;
                await this.stream.close();
                // Set the `connectionState` to DISCONNECTED
                this.connectionState = ConnectionState.DISCONNECTED;
                // Set the value of `_isConnected` to `false` and emit the appropriate event
                this._isConnected = false;
                this.dispatchEvent(new SymblEvent("disconnected"));

            } catch (e) {

                // Any failure to close the connection should be handled, and logged as an error.
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;
                throw e;

            }

        }

    }

    /**
     * Triggers the streaming connection to begin processing through Symbl websocket
     * @param options StreamingAPIConnectionConfig object
     * @returns StreamingAPIConnection object
     */
    async startProcessing (options: StreamingAPIConnectionConfig): Promise<StreamingAPIConnection> {

        // If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
        if (this.connectionState !== ConnectionState.CONNECTED) {

            throw new NoConnectionError("No connection available. You need to call `.connect()` before you can start processing.");

        }

        // If `options` is passed in, validate it and in failure to do so, throw the appropriate error emited by validateConfig.
        if (options) {

            StreamingAPIConnection.validateConfig(options);

        }
        const encoding = options.config && options.config.encoding
            ? options.config.encoding
            : SymblAudioStreamType.PCM;
        const audioStream = await new AudioStreamFactory().instantiateStream(encoding.toUpperCase() as SymblAudioStreamType);
        this.attachAudioStream(audioStream);
        await this.audioStream.attachAudioDevice();

        // If `processingState` is PROCESSING or ATTEMPTING, then log a warning stating an attempt to `startProcessing` on a connection that is already processing or has already initiated the call.
        if (this.processingState === ConnectionProcessingState.PROCESSING ||
            this.processingState === ConnectionProcessingState.ATTEMPTING) {

            this.logger.warn("An attempt to `startProcessing` on a connection that is already processing or has already initiated the call");

            // Else, set the value of `processingState` to ATTEMPTING and invoke the `start` function on the `stream` reference with options if present.

        } else {

            this.processingState = ConnectionProcessingState.ATTEMPTING;
            if (options.config && !options.config.sampleRateHertz) {

                options.config.sampleRateHertz = this.audioStream.getSampleRate();

            }
            const copiedOptions = {...options};
            await this.audioStream.resumeAudioContext();
            await this.stream.start(copiedOptions);
            // Set the value of `processingState` to PROCESSING if the call is successful
            this.processingState = ConnectionProcessingState.PROCESSING;
            // Set the value of `_isProcessing` to `true` and emit the appropriate event
            this._isProcessing = true;
            this.dispatchEvent(new SymblEvent("processing_started"));

        }

        // Return from function
        return this;

    }

    /**
     * Stops the processing of audio data without disconnecting from the websocket connection
     * @returns StreamingAPIConnection Promise object
     */
    async stopProcessing (): Promise<StreamingAPIConnection> {

        // If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
        if (this.connectionState !== ConnectionState.CONNECTED) {

            throw new NoConnectionError("There is no established connection with the websocket.");

        }

        // If `processingState` is NOT_PROCESSING or STOPPING, then log a warning stating an attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.
        if (this.processingState === ConnectionProcessingState.NOT_PROCESSING ||
            this.processingState === ConnectionProcessingState.STOPPING) {

            this.logger.warn("An attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.");

            // Else, set the value of `processingState` to STOPPING and invoke the `stop` function on the `stream`.

        } else {

            this.processingState = ConnectionProcessingState.STOPPING;
            await this.audioStream.suspendAudioContext();
            await this.stream.stop();

            // Set the value of `processingState` to NOT_PROCESSING if the call is successful
            this.processingState = ConnectionProcessingState.NOT_PROCESSING;

            // Set the value of `_isProcessing` to `false` and emit the appropriate event
            this._isProcessing = false;
            this.dispatchEvent(new SymblEvent("processing_stopped"));

        }

        // If `restartProcessing` is true call `startProcessing`
        if (this.restartProcessing) {

            await this.startProcessing(this.config);

        }

        // Return from function
        return this;

    }

    /**
     * Stops and restarts processing on a change of audio source being pushed to the websocket
     * @param audioSourceChangedEvent Event
     */
    onAudioSourceChanged (audioSourceChangedEvent: Event): void {

        if (this._isConnected) {

            if (this._isProcessing && audioSourceChangedEvent.type === "audio_source_disconnected") {

                this.restartProcessing = true;
                this.stopProcessing();

            } else if (!this._isProcessing && audioSourceChangedEvent.type === "audio_source_connected" && this.restartProcessing) {

                this.restartProcessing = false;
                this.startProcessing(this.config);

            }

        } else {

            this.restartProcessing = false;

        }

    }

    /**
     * Check if `isProcessing` flag is currently active
     * @returns boolean
     */
    isProcessing (): boolean {

        return this._isProcessing;

    }

    /**
     * Check if `isConnected` flag is currently active
     * @returns boolean
     */
    isConnected (): boolean {

        return this._isConnected;

    }

    /**
     * Emits events based on data received from websocket
     * @param data SymblData
     */
    async onDataReceived (data: SymblData): Promise<void> {

        await super.emitEvents(data);

    }

    /**
     * Sends the raw audio data to the websocket connection for processing
     * @param audioData ArrayBuffer
     */
    sendAudio (audioData: ArrayBuffer | Uint8Array | Uint16Array): void {

        this.stream.sendAudio(audioData);

    }

    /**
     * Sends JSON requests to start, stop, or modify an ongoing websocket connection
     * @param data StreamingAPIRequest
     */
    sendJSON (data: StreamingAPIStartRequest | StreamingAPIStopRequest | StreamingAPIModifyRequest): void {

        /*
         * TODO:
         * Validate `data` before stringifying
         */

        // `sendAudio` function exposed by the JS SDK currently accepts any serializable data to be sent over the channel
        this.stream.sendAudio(JSON.stringify(data));

    }

    /**
     * ??
     */
    private registerAudioStreamCallback (): void {

        if (this.audioStream) {

            this.audioStream.attachAudioCallback(this.sendAudio);

        }

    }

    /**
     * Triggers Audio Source change when connected or disconnected
     * @param audioStream AudioStream
     */
    private attachAudioStream (audioStream: AudioStream): void {

        this.audioStream = audioStream;

        this.on(
            "audio_source_connected",
            this.onAudioSourceChanged
        );
        this.on(
            "audio_source_disconnected",
            this.onAudioSourceChanged
        );

        this.registerAudioStreamCallback();

    }

    /**
     * 
     * @param audioStream AudioStream
     */
    async updateAudioStream (audioStream: AudioStream): Promise<void> {

        // Check if an AudioStream is already attached to this instance
        if (audioStream) {

            // If it is, then stop the audio processing via the attached stream
            await this.stopProcessing();

        }
        // Call the `attachAudioStream` function with the new `audioStream`
        this.attachAudioStream(audioStream);

    }

}
