import {AudioStream, AudioStreamFactory} from "../../audio";
import {
    ConnectionProcessingState,
    ConnectionState,
    Speaker,
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
    InvalidValueError,
    NoConnectionError,
    NotSupportedAudioEncodingError,
    NotSupportedSampleRateError
} from "../../error";
import {BaseConnection} from "../../connection";
import {SYMBL_DEFAULTS} from "../../constants";
import {SymblEvent} from "../../events";


/**
 * Checks if insight types provided are valid
 * @param insightTypes Array<string>
 * @returns boolean
 */
const validateInsightTypes = (insightTypes: Array<string>): boolean => {

    if (!Array.isArray(insightTypes)) {

        throw new InvalidValueError(`StreamingAPIConnectionConfig: 'insightTypes' should be an array of valid insightType strings - ${SYMBL_DEFAULTS.VALID_INSIGHT_TYPES}`);

    }

    for (const insight of insightTypes) {

        if (!SYMBL_DEFAULTS.VALID_INSIGHT_TYPES.includes(insight)) {

            throw new InvalidValueError(`StreamingAPIConnectionConfig: 'insightTypes' should be an array of valid insightType strings - ${SYMBL_DEFAULTS.VALID_INSIGHT_TYPES}`);

        }

    }

    return true;

};

/**
 * Checks if ID exists and is a string
 * @param id string
 * @returns boolean
 */
const validateId = (id: string): boolean => {

    if (id && typeof id !== "string") {

        throw new InvalidValueError("StreamingAPIConnectionConfig argument 'id' field should be a type string.");

    }

    return true;

};

/**
 * Checks the meeting title config
 * @param configObj object
 * @returns boolean
 */
const validateMeetingTitle = (configObj): boolean => {

    const {meetingTitle} = configObj;


    if (meetingTitle && typeof meetingTitle !== "string") {

        throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.meetingTitle' field should be a type string.");

    }

    return true;

};

/**
 * Checks the confidence threshold config
 * @param configObj object
 * @returns boolean
 */
const validateConfidenceThreshold = (configObj): boolean => {

    const {confidenceThreshold} = configObj;


    if (confidenceThreshold && typeof confidenceThreshold !== "number") {

        throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.confidenceThreshold' field should be a type number.");

    }

    return true;

};

/**
 * Checks the encoding and sample rate config
 * @param configObj object
 * @returns boolean
 */
const validateEncoding = (configObj): boolean => {

    const {encoding, sampleRateHertz} = configObj;

    if (sampleRateHertz && typeof sampleRateHertz !== "number") {

        throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.sampleRateHertz' field should be a type number.");

    }

    if (encoding) {

        if (typeof encoding !== "string") {

            throw new InvalidValueError("StreamingAPIConnectionConfig: 'config.encoding' field should be a type string.");

        }
        if (!SYMBL_DEFAULTS.VALID_ENCODING.includes(encoding.toUpperCase())) {

            throw new NotSupportedAudioEncodingError(`StreamingAPIConnectionConfig: 'config.encoding' only supports the following types - ${SYMBL_DEFAULTS.VALID_ENCODING}.`);

        }

    }
    if (sampleRateHertz) {

        if ((!encoding || encoding?.toUpperCase() === "LINEAR16") && !SYMBL_DEFAULTS.LINEAR16_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {

            throw new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For LINEAR16 encoding, supported sample rates are ${SYMBL_DEFAULTS.LINEAR16_SAMPLE_RATE_HERTZ}.`);

        }
        if (encoding?.toUpperCase() === "OPUS" && !SYMBL_DEFAULTS.OPUS_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {

            throw new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For Opus encoding, supported sample rates are ${SYMBL_DEFAULTS.OPUS_SAMPLE_RATE_HERTZ}.`);

        }

    }

    return true;

};

/**
 * Checks each individual property of configuration object
 * @param configObj object
 * @returns boolean
 */
const validateDisconnectionConfig = (config): boolean => {

    const {
        disconnectOnStopRequest,
        disconnectOnStopRequestTimeout,
        noConnectionTimeout
    } = config;

    if (Boolean(disconnectOnStopRequest) && typeof disconnectOnStopRequest !== "boolean") {

        throw new InvalidValueError("StreamingAPIConnectionConfig: 'disconnectOnStopRequest' field should be a type boolean.");

    }

    if (disconnectOnStopRequest === false && disconnectOnStopRequestTimeout) {

        if (typeof disconnectOnStopRequestTimeout !== "number" ||
        (disconnectOnStopRequestTimeout < SYMBL_DEFAULTS.DISCONNECT_TIMEOUT_MIN || disconnectOnStopRequestTimeout > SYMBL_DEFAULTS.DISCONNECT_TIMEOUT_MAX)) {

            throw new InvalidValueError(`StreamingAPIConnectionConfig: Please specify 'disconnectOnStopRequestTimeout' field with a positive integer between ${SYMBL_DEFAULTS.DISCONNECT_TIMEOUT_MIN} and ${SYMBL_DEFAULTS.DISCONNECT_TIMEOUT_MAX}.`);

        }

    }

    if (noConnectionTimeout) {

        if (typeof noConnectionTimeout !== "number" ||
        (noConnectionTimeout < SYMBL_DEFAULTS.NO_CONNECTION_TIMEOUT_MIN || noConnectionTimeout > SYMBL_DEFAULTS.NO_CONNECTION_TIMEOUT_MAX)) {

            throw new InvalidValueError(`StreamingAPIConnectionConfig: Please specify 'noConnectionTimeout' field with a positive integer between ${SYMBL_DEFAULTS.NO_CONNECTION_TIMEOUT_MIN} and ${SYMBL_DEFAULTS.NO_CONNECTION_TIMEOUT_MAX}.`);

        }

    }

    return true;

};

/**
 * Checks each individual property of configuration object
 * @param configObj object
 * @returns boolean
 */
const validateConfigObj = (configObj): boolean => {

    validateConfidenceThreshold(configObj);

    validateMeetingTitle(configObj);

    validateEncoding(configObj);
    return true;

};

/**
 * Checks individual properties of Speaker object
 * @param speaker Speaker
 * @returns boolean
 */
const validateSpeaker = (speaker: Speaker): boolean => {

    const {userId, name} = speaker;
    if (userId && typeof userId !== "string") {

        throw new InvalidValueError("StreamingAPIConnectionConfig: 'speaker.userId' field should be a type string.");

    }
    if (name && typeof name !== "string") {

        throw new InvalidValueError("StreamingAPIConnectionConfig: 'speaker.name' field should be a type string.");

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

    /**
     * @ignore
     */
    protected conversationId: string;

    /**
     * @ignore
     */
    private config: StreamingAPIConnectionConfig;

    /**
     * @ignore
     */
    private connectionState = ConnectionState.DISCONNECTED;

    /**
     * @ignore
     */
    private processingState = ConnectionProcessingState.NOT_PROCESSING;

    /**
     * @ignore
     */
    private _isProcessing = false;

    /**
     * @ignore
     */
    private _isConnected = false;

    /**
     * @ignore
     */
    private restartProcessing = false;

    /**
     * @ignore
     */
    private stream: SymblStreamingAPIConnection;

    /**
     * @ignore
     */
    private audioStream: AudioStream;

    /**
     * Connection type is either STREAMING or SUBSCRIBE
     */
    public connectionType = SymblConnectionType.STREAMING;

    /**
     * Creates Streaming API connection instance
     * @param sessionId string
     * @param audioStream AudioStream
     */
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
        this.attachAudioStream = this.attachAudioStream.bind(this);
        this.onAudioSourceChanged = this.onAudioSourceChanged.bind(this);
        this.on = this.on.bind(this);
        this.getConversationId = this.getConversationId.bind(this);

        // Set the conversation ID once it's created.
        this.on(
            "conversation_created",
            (conversationData) => {

                this.conversationId = conversationData.data.conversationId;

            }
        );

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


    static validateConfig (config: StreamingAPIConnectionConfig) : StreamingAPIConnectionConfig {

        const {
            id,
            insightTypes,
            "config": configObj,
            speaker,
            reconnectOnError
        } = config;

        validateId(id);

        if (insightTypes) {

            validateInsightTypes(insightTypes);

        }

        if (configObj) {

            validateConfigObj(configObj);

        }

        if (speaker) {

            validateSpeaker(speaker);

        }

        if (reconnectOnError && typeof reconnectOnError !== "boolean") {

            throw new InvalidValueError("StreamingAPIConnectionConfig: 'reconnectOnError' field should be a type boolean.");

        }

        validateDisconnectionConfig(config);

        return config;

    }

    /**
     * Check if already connected and if not connect to the websocket stream to send data.
     * @returns connection object
     */
    async connect (): Promise<void> {

        // If the `connectionState` is already CONNECTED, log at warning level that a connection attempt is being made on an already open connection.
        if (this.connectionState === ConnectionState.CONNECTED) {

            this.logger.warn("A connection attempt is being made on an already open connection.");

        } else {

            try {

                // Else, set the `connectionState` to CONNECTING and establish a new connection with the Streaming API via JS SDK
                this.connectionState = ConnectionState.CONNECTING;
                const copiedHandlers = this.config.handlers;
                const copiedConfig = JSON.parse(JSON.stringify(this.config));
                copiedConfig.handlers = copiedHandlers;
                await this.sdk.oauth2.init();
                this.stream = await this.sdk.createStream(copiedConfig);
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

            } catch (error) {

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
    disconnect (): void {

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
                this.stream.close();
                // Set the `connectionState` to DISCONNECTED
                this.connectionState = ConnectionState.DISCONNECTED;
                // Set the value of `_isConnected` to `false` and emit the appropriate event
                this._isConnected = false;
                this.dispatchEvent(new SymblEvent("disconnected"));

            } catch (ex) {

                // Any failure to close the connection should be handled, and logged as an error.
                this.connectionState = ConnectionState.TERMINATED;
                this._isConnected = false;
                throw ex;

            }

        }

    }

    /**
     * Triggers the streaming connection to begin processing through Symbl websocket
     * @param options StreamingAPIConnectionConfig object
     * @returns StreamingAPIConnection object
     */
    async startProcessing (options?: StreamingAPIConnectionConfig | null): Promise<StreamingAPIConnection> {

        // If the `connectionState` is not CONNECTED, throw `NoConnectionError` with appropriate error message
        if (this.connectionState !== ConnectionState.CONNECTED) {

            throw new NoConnectionError("No connection available. You need to call `.connect()` before you can start processing.");

        }

        // If `processingState` is PROCESSING or ATTEMPTING, then log a warning stating an attempt to `startProcessing` on a connection that is already processing or has already initiated the call.
        if (this.processingState === ConnectionProcessingState.PROCESSING ||
            this.processingState === ConnectionProcessingState.ATTEMPTING) {

            this.logger.warn("An attempt to `startProcessing` on a connection that is already processing or has already initiated the call");

            // Else, set the value of `processingState` to ATTEMPTING and invoke the `start` function on the `stream` reference with options if present.

        } else {

            if (!options) {

                options = {};

            }

            this.config = Object.assign(
                this.config,
                options
            );

            const setDefaultEncoding = (processingOptions, audioStream?) => {

                // All requests must have a encoding type.
                if (!processingOptions.config) {

                    processingOptions.config = {};

                }

                if (!processingOptions.config.encoding) {

                    processingOptions.config.encoding = audioStream
                        ? audioStream.type
                        : SymblAudioStreamType.LINEAR16;

                }

                return processingOptions;

            };

            let encoding: string;
            let {audioStream} = this;
            if (audioStream) {

                encoding = audioStream.type;

                if (this.config.config &&
                    this.config.config.encoding &&
                    this.config.config.encoding.toUpperCase() !== encoding) {

                    throw new InvalidValueError("There is a mismatch between the audioStream type and the encoding type passed in the config.");

                }

                this.config = setDefaultEncoding(
                    this.config,
                    audioStream
                );

            } else {

                if (this.config.config && this.config.config.encoding) {

                    this.config.config.encoding = this.config.config.encoding.toUpperCase();
                    ({encoding} = this.config.config);

                } else {

                    encoding = SymblAudioStreamType.LINEAR16;

                }

                this.config = setDefaultEncoding(this.config);

                if (!audioStream) {

                    audioStream = new AudioStreamFactory().instantiateStream(encoding.toUpperCase() as SymblAudioStreamType);

                }

            }

            this.attachAudioStream(audioStream);

            if (this.audioStream.deviceProcessing) {

                let device, mediaStream;
                if (this.audioStream.sourceNode) {

                    ({mediaStream} = (<MediaStreamAudioSourceNode> this.audioStream.sourceNode));
                    device = mediaStream.getAudioTracks()[0].getSettings().deviceId;

                }

                await this.audioStream.attachAudioDevice(
                    device,
                    mediaStream
                );

            }

            this.processingState = ConnectionProcessingState.ATTEMPTING;

            if (this.config.config && !this.config.config.sampleRateHertz) {

                this.config.config.sampleRateHertz = this.audioStream.getSampleRate();

            }

            this.config.config.encoding = this.config.config.encoding.toUpperCase();

            StreamingAPIConnection.validateConfig(this.config);


            const copiedHandlers = this.config.handlers;
            const copiedConfig = JSON.parse(JSON.stringify(this.config));
            copiedConfig.handlers = copiedHandlers;
            await this.audioStream.resumeAudioContext();
            await this.stream.start(copiedConfig);
            // Set the value of `processingState` to PROCESSING if the call is successful
            this.processingState = ConnectionProcessingState.PROCESSING;
            // Set the value of `_isProcessing` to `true` and emit the appropriate event
            this._isProcessing = true;

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

            if (this.audioStream) {

                if (this.config.disconnectOnStopRequest === false) {

                    await this.audioStream.suspendAudioContext();

                } else if (this.audioStream.deviceProcessing) {

                    this.audioStream.detachAudioDevice();

                } else {

                    this.audioStream.detachAudioSourceElement();

                }

            }

            this.stream.stop();

            // Set the value of `processingState` to NOT_PROCESSING if the call is successful
            this.processingState = ConnectionProcessingState.NOT_PROCESSING;

            // Set the value of `_isProcessing` to `false` and emit the appropriate event
            this._isProcessing = false;

            // If `restartProcessing` is true call `startProcessing`
            if (this.restartProcessing) {

                await this.startProcessing(this.config);
                this.modifySampleRate(this.audioStream.getSampleRate());
                this.restartProcessing = false;

            }

        }


        // Return from function
        return this;

    }

    /**
     * Sends out a modify_request event to the WebSocket which modifies the sample rate.
     * @param sampleRateHertz number
     */
    modifySampleRate (sampleRateHertz: number) {

        if (!sampleRateHertz || typeof sampleRateHertz !== "number") {

            throw new InvalidValueError("Sample rate argument must be a number.");

        }

        if (!this.audioStream) {

            throw new InvalidValueError("There is no audio stream attached to this connection.");

        }

        const encoding = this.audioStream.type;

        if ((!encoding || encoding?.toUpperCase() === "LINEAR16") && !SYMBL_DEFAULTS.LINEAR16_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {

            throw new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For LINEAR16 encoding, supported sample rates are ${SYMBL_DEFAULTS.LINEAR16_SAMPLE_RATE_HERTZ}.`);

        }
        if (encoding?.toUpperCase() === "OPUS" && !SYMBL_DEFAULTS.OPUS_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {

            throw new NotSupportedSampleRateError(`StreamingAPIConnectionConfig: For Opus encoding, supported sample rates are ${SYMBL_DEFAULTS.OPUS_SAMPLE_RATE_HERTZ}.`);

        }

        this.sendJSON({
            "speechRecognition": {
                sampleRateHertz
            },
            "type": "modify_request"
        });

        this.dispatchEvent(new SymblEvent(
            "session_modified",
            {
                sampleRateHertz
            }
        ));

    }

    /**
     * Stops and restarts processing on a change of audio source being pushed to the websocket
     * @param audioSourceChangedEvent Event
     */
    private async onAudioSourceChanged (audioSourceChangedEvent: Event): Promise<void> {

        if (this.isConnected()) {

            if (this.isProcessing() && audioSourceChangedEvent.type === "audio_source_changed") {

                this.restartProcessing = true;
                this.audioStream.detachAudioDevice();
                await this.stopProcessing();

            } else if (!this.isProcessing() && audioSourceChangedEvent.type === "audio_source_connected" && this.restartProcessing) {

                this.restartProcessing = false;
                await this.startProcessing(this.config);

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

        return this.processingState === ConnectionProcessingState.PROCESSING;

    }

    /**
     * Check if `isConnected` flag is currently active
     * @returns boolean
     */
    isConnected (): boolean {

        return this.connectionState === ConnectionState.CONNECTED;

    }

    /**
     * Emits events based on data received from websocket
     * @param data SymblData
     */
    onDataReceived (data: SymblData): void {

        super.emitEvents(data);

    }

    /**
     * Sends the raw audio data to the websocket connection for processing
     * @param audioData ArrayBuffer
     */
    sendAudio (audioData: any): void {

        this.stream.sendAudio(audioData);

    }

    /**
     * Sends JSON requests to start, stop, or modify an ongoing websocket connection
     * @param data StreamingAPIRequest
     */
    sendJSON (data: any): void {

        // `sendAudio` function exposed by the JS SDK currently accepts any serializable data to be sent over the channel
        this.stream.sendAudio(JSON.stringify(data));

    }

    /**
     * Connects the `sendAudio` method to the audioStream class
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
        try {

            this.audioStream.off(
                "audio_source_changed",
                this.onAudioSourceChanged
            );

        } catch (ex) {

            this.logger.debug(
                "Error",
                ex
            );

        }
        this.audioStream.on(
            "audio_source_changed",
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

    /**
     * Returns the current converation id
     * @returns string
     */
    getConversationId (): string {

        if (!this.conversationId) {

            this.logger.info("The conversation ID hasn't been created, yet.");

        }

        return this.conversationId;

    }

}
