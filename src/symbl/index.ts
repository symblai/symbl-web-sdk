import {
    AccessTokenExpiredError,
    HttpError,
    InvalidCredentialsError,
    InvalidValueError,
    RequiredParameterAbsentError,
    SessionIDNotUniqueError
} from "../error";
import {StreamingAPIConnection, SubscribeAPIConnection} from "../api";
import {
    StreamingAPIConnectionConfig,
    SymblConfig,
    SymblConnectionType,
    SymblAudioStreamType,
    TimeUnit
} from "../types";
import {AudioStream} from "../audio";
import {ConnectionFactory} from "../connection";
import Logger from "../logger";
import {SYMBL_DEFAULTS} from "../constants";
import {VALID_LOG_LEVELS} from "../utils/configs";
import registerNetworkConnectivityDetector from "../network";
const sdk = require("@symblai/symbl-js/build/client.sdk.min").sdk;
import {uuid} from "../utils";


export default class Symbl {

    /**
     * @ignore
     */
    private sdk: typeof sdk = sdk;

    /**
     * @ignore
     */
    private symblConfig: SymblConfig;

    /**
     * @ignore
     */
    private logger: typeof Logger;

    /**
     * Using SymblConfig an instance of the Symbl SDK is instantiated
     * @param symblConfig SymblConfig
     */
    constructor (symblConfig?: SymblConfig) {

        this.logger = Logger;
        if (symblConfig) {

            this._validateSymblConfig(symblConfig);

        }

        this.symblConfig = symblConfig;

        this._validateSymblConfig = this._validateSymblConfig.bind(this);
        this.init = this.init.bind(this);
        this.createConnection = this.createConnection.bind(this);
        this.createAndStartNewConnection = this.createAndStartNewConnection.bind(this);
        this.subscribeToConnection = this.subscribeToConnection.bind(this);
        registerNetworkConnectivityDetector(this.sdk);

        if (symblConfig) {

            const {appId, appSecret, accessToken, basePath} = symblConfig;
            if (appId && appSecret) {

                this.sdk.oauth2.appId = appId;
                this.sdk.oauth2.appSecret = appSecret;

            } else if (accessToken) {

                this.sdk.oauth2.activeToken = accessToken;

            }
            if (basePath) {

                this.sdk.oauth2.setBasePath(basePath);
                this.sdk.basePath = basePath;

            }

            this.setNonAuthConfig(symblConfig);

        }


    }

    /**
     * @ignore
     */
    private setNonAuthConfig (symblConfig: SymblConfig): void {

        if (symblConfig) {

            const {logLevel, reconnectOnError, disableOnDeviceChange} = symblConfig;

            if (logLevel) {

                this.logger.setLevel(logLevel);
                this.sdk.logger.setLevel(logLevel);

            } else {

                this.logger.setLevel("info");
                this.sdk.logger.setLevel("info");

            }

            if (reconnectOnError) {

                this.sdk.setReconnectOnError(true);

            }

            if (disableOnDeviceChange) {

                AudioStream.disableOnDeviceChange = disableOnDeviceChange;

            }

        }


    }

    /**
     * Validates Symbl config and throws an error or returns true
     * @param {SymblConfig} symblConfig - Symbl configuration object
     * @returns boolean
     */
    _validateSymblConfig (symblConfig: SymblConfig): boolean {

        if (!symblConfig) {

            throw new InvalidCredentialsError("No credentials were passed");

        }

        const {appId, accessToken, appSecret, logLevel, reconnectOnError} = symblConfig;

        if (logLevel && VALID_LOG_LEVELS.indexOf(logLevel) === -1) {

            throw new InvalidValueError(`Log level must be one of: ${VALID_LOG_LEVELS.join(", ")}`);

        }

        if (reconnectOnError && typeof reconnectOnError !== "boolean") {

            throw new InvalidValueError("`reconnectOnError` must be a boolean value.");

        }

        if (!appId && !appSecret && !accessToken) {

            throw new InvalidCredentialsError("Please provide an AppID & AppSecret or an AccessToken");

        }

        if (accessToken && (appId || appSecret)) {

            throw new InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately.");

        }

        if (!appId && !accessToken) {

            throw new InvalidCredentialsError("AppID is missing");

        }

        if (appId &&
            (appId.length !== 64 || !appId.match(SYMBL_DEFAULTS.AUTH_REGEX))
        ) {

            throw new InvalidCredentialsError("AppID is not valid");

        }

        if (appId && !appSecret && !accessToken) {

            throw new InvalidCredentialsError("AppSecret is missing");

        }

        if (appSecret &&
            (appSecret.length !== 128 || !appSecret.match(SYMBL_DEFAULTS.AUTH_REGEX))
        ) {

            throw new InvalidCredentialsError("AppSecret is not valid");

        }

        if (accessToken) {

            const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]).toString());
            const expiry = Math.floor(tokenPayload.exp - (Date.now() / 1000));
            if (expiry <= 0) {

                throw new AccessTokenExpiredError("Provided token as expired");

            }

        }

        return true;

    }

    /**
     * Validates and initializes Symbl with application configuration
     * @param {object} appConfig - Symbl configuration object
     */
    async init (symblConfig?: SymblConfig) : Promise<void> {

        if (!symblConfig && this.symblConfig) {

            symblConfig = this.symblConfig;

        }
        this._validateSymblConfig(symblConfig);
        this.setNonAuthConfig(symblConfig);

        try {

            const initConfig: SymblConfig = {};

            if (symblConfig.accessToken) {

                initConfig.accessToken = symblConfig.accessToken;

            } else {

                initConfig.appId = symblConfig.appId;
                initConfig.appSecret = symblConfig.appSecret;

            }

            initConfig.basePath = symblConfig.basePath || SYMBL_DEFAULTS.SYMBL_BASE_PATH;


            await this.sdk.init(symblConfig);

        } catch (err) {

            throw new HttpError(err.message);

        }

    }

    /**
     * Validates that SessionID is unique and then creates websocket connection
     * @param sessionId string
     * @param audioStream AudioStream
     * @returns StreamingAPIConnection
     */
    async createConnection (sessionId?: string | null, audioStream?: AudioStream | null) : Promise<StreamingAPIConnection> {

        if (sessionId) {

            if (typeof sessionId !== "string") {

                throw new InvalidValueError("Session ID must be a string.");

            }

            // Validate `id` as a `uuid` or its `uniqueness` and if it doesn't conform, reject the request with `SessionIDNotUniqueError`
            const regex = new RegExp(
                SYMBL_DEFAULTS.ID_REGEX,
                "u"
            );
            const validSessionId = regex.test(sessionId);

            if (!validSessionId) {

                throw new SessionIDNotUniqueError("Session ID should be a unique combination of numbers and characters or a UUID.");

            }

        } else {

            sessionId = uuid();

        }

        const connection = await new ConnectionFactory().instantiateConnection(
            SymblConnectionType.STREAMING,
            sessionId,
            audioStream
        );

        // Invoke the `connect` function to establish an idle connection with Streaming API. (It will not process Audio in this state)
        await connection.connect();
        return connection as StreamingAPIConnection;

    }

    /**
     * Creates a new connection and then immediately starts processing audio data through the connection
     * @param options StreamingApiConnectionConfig
     * @param audioStream AudioStream
     * @returns StreamingAPIConnection
     */
    async createAndStartNewConnection (options?: StreamingAPIConnectionConfig | null, audioStream?: AudioStream) : Promise<StreamingAPIConnection> {

        if (!options) {

            options = {};

        }

        if (typeof options !== "object" && !Array.isArray(options)) {

            throw new InvalidValueError("`options` must be an instance of StreamingAPIConnectionConfig.");

        }

        // Invoke `createConnection` with the above arguments.
        const connection = await this.createConnection(
            options
                ? options.id
                : null,
            audioStream
        );

        // Invoke `startProcessing` on the instance of `StreamingAPIConnection`
        await connection.startProcessing(options);

        // Return the connection instance
        return connection as StreamingAPIConnection;


    }

    /**
     * Establishes a Subscribe connection with session id
     * @param sessionId string
     * @returns SubscribeAPIConnection
     */
    async subscribeToConnection (sessionId: string) : Promise<SubscribeAPIConnection> {

        // Validate `sessionId` and if not present, throw `RequiredParameterAbsentError`
        if (!sessionId) {

            throw new RequiredParameterAbsentError("sessionId is required.");

        }

        // Initialize the instance of `SubscribeAPIConnection` via the `ConnectionFactory` with the passed in `sessionId`
        const connection = await new ConnectionFactory().instantiateConnection(
            SymblConnectionType.SUBSCRIBE,
            sessionId
        );

        // Invoke the `connect` method to start the connection to the Subscribe API
        await connection.connect();

        // If connection is successful, return the instance of the `SubscribeAPIConnection`
        return connection as SubscribeAPIConnection;

    }

    /**
     * Waits for provided amount of time in the supplied units (ms, s, min)
     * @param time number
     * @param unit string
     * @returns Promise<void>
     */
    static wait (time: number, unit: string = TimeUnit.MS) : Promise<void> {

        if (!time) {

            throw new InvalidValueError("Please provide a number for `time`");

        }

        let timeout;

        // Validate `unit` as a valid Enum of type `TimeUnit`
        switch (unit) {

        case TimeUnit.S:
            // Convert the time according to the unit passed in to milliseconds
            timeout = time * 1000;
            break;
        case TimeUnit.M:
            timeout = time * 60000;
            break;
        case TimeUnit.MS:
            timeout = time;
            break;
        default:
            throw new InvalidValueError("Please provide a valid time unit of 'ms', 's', or 'm'");

        }

        // Validate `time` as a positive integer greater than or equal to zero.
        if (timeout < 0) {

            // In case the validation fails, return the appropriate error out of `RequiredParameterAbsentError` or `InvalidValueError`
            throw new InvalidValueError("`time` must be >= 0.");

        }
        return new Promise((res) => {

            // Execute `setTimeout` for the duration in ms provided and return the Promise
            setTimeout(
                () => {

                    res();

                },
                timeout
            );

        });

    }

}
