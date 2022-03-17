import {
    AccessTokenExpiredError,
    HttpError,
    InvalidCredentialsError,
    InvalidValueError,
    RequiredParameterAbsentError,
    SessionIDNotUniqueError

    /* InvalidLogLevelError*/
} from "../error";
import {StreamingAPIConnection, SubscribeAPIConnection} from "../api";
import {
    StreamingAPIConnectionConfig,
    SymblConfig,
    SymblConnectionType,
    TimeUnit
} from "../types";
import {assertType, is} from "typescript-is";
import {AudioStream} from "../audio";
import {ConnectionFactory} from "../connection";
import Logger from "../logger";
import {VALID_LOG_LEVELS} from "../utils/configs";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import {uuid} from "../utils";

/*
 *Const anotherNonConformer: unknown = { aString: 1337 }
 *try {
 *    assertType<SomeInterfaceOrType>(anotherNonConformer)
 *} catch(error) {
 *    console.log(error.message) // logs: "validation failed at anotherNonConformer.aString: expected a string"
 *}
 */


export default class Symbl {

    /**
     * @ignore
     */
    private sdk: sdk = sdk;

    private symblConfig: SymblConfig;

    private logger: Logger;

    constructor (symblConfig?: SymblConfig) {

        if (symblConfig) {

            try {

                this._validateSymblConfig(symblConfig);

            } catch (e) {

                throw e;

            }

        }

        this.symblConfig = symblConfig;
        this.logger = new Logger();

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

        const {appId, accessToken, appSecret, logLevel} = symblConfig;

        if (logLevel && VALID_LOG_LEVELS.indexOf(logLevel) === -1) {
            // Throw new InvalidLogLevelError(`Log level must be one of: ${VALID_LOG_LEVELS.join(', ')}`)
        }

        const alphaNumericRegex = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

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
            (appId.length !== 64 || !appId.match(alphaNumericRegex))
        ) {

            throw new InvalidCredentialsError("AppID is not valid");

        }

        if (appId && !appSecret && !accessToken) {

            throw new InvalidCredentialsError("AppSecret is missing");

        }

        if (appSecret &&
            (appSecret.length !== 128 || !appSecret.match(alphaNumericRegex))
        ) {

            throw new InvalidCredentialsError("AppSecret is not valid");

        }

        if (accessToken) {

            const tokenPayload = JSON.parse(Buffer.from(
                accessToken.split(".")[1],
                "base64"
            ).toString());
            const expiry = Math.floor(tokenPayload.exp - Date.now() / 1000);
            if (expiry <= 0) {

                throw new AccessTokenExpiredError("Provided token as expired");

            }

        }

        return true;

    }

    /*
     * ValidateStreamingAPIConnectionConfig(options: StreamingAPIConnectionConfig): boolean {
     *     if (!options) {
     */

    //     }

    //     If (!options.id) {

    //     }

    /*
     *     Return true
     * }
     */

    /**
     * Validates and initializes Symbl with application configuration
     * @param {object} appConfig - Symbl configuration object
     */
    async init (symblConfig: SymblConfig) : Promise<void> {

        if (!symblConfig && this.symblConfig) {

            symblConfig = this.symblConfig;

        }
        try {

            this._validateSymblConfig(symblConfig);

        } catch (e) {

            throw e;

        }

        try {

            Logger.log(
                "symblConfig",
                symblConfig
            );
            const initConfig: any = {};

            if (symblConfig.accessToken) {

                initConfig.accessToken = symblConfig.accessToken;

            } else {

                initConfig.appId = symblConfig.appId;
                initConfig.appSecret = symblConfig.appSecret;

            }

            initConfig.basePath = symblConfig.basePath || "https://api.symbl.ai";
            console.log(
                "this.sdk",
                symblConfig
            );
            await this.sdk.init(symblConfig);

        } catch (err) {

            console.log(
                "error",
                err
            );
            throw new HttpError(err.message);

        }

    }
    
    async createConnection(options: StreamingAPIConnectionConfig, audioStream?: AudioStream) : Promise<StreamingAPIConnection> {
        if (options.id) {

            // Validate `id` as a `uuid` or its `uniqueness` and if it doesn't conform, reject the request with `SessionIDNotUniqueError`
            // const regex = new RegExp(
            //     uniquenessRegex,
            //     "u"
            // );
            // const validSessionId = regex.test(options.id);

            // if (!validSessionId) {

            //     throw new SessionIDNotUniqueError("Session ID should be a unique combination of numbers and characters or a UUID.");

            // }
        } else {
            options.id = uuid();
        }
        try {
            const connection = await new ConnectionFactory().instantiateConnection(
                SymblConnectionType.STREAMING,
                options,
                audioStream
            );

            // Invoke the `connect` function to establish an idle connection with Streaming API. (It will not process Audio in this state)
            await connection.connect();
            return connection as StreamingAPIConnection;

        } catch (e) {

            // If the Connection establishment fails, throw the appropriate error generated by the `StreamingAPIConnection` interface.
            console.error(e);
            throw e;

        }

        /*
         * Validate `options` with the `StreamingAPIConnectionConfig` interface
         * Return the connection instance
         */


    }

    async createAndStartNewConnection (options: StreamingAPIConnectionConfig, audioStream?: AudioStream) : Promise<StreamingAPIConnection> {

        try {

            // Invoke `createConnection` with the above arguments.
            const connection = await this.createConnection(
                options,
                audioStream
            );
            await connection.startProcessing();
            return connection as StreamingAPIConnection;

        } catch (e) {

            // If the connection fails to get established, re-throw the error thrown by `StreamingAPIConnection` instance
            throw e;

        }

        /*
         * Invoke `startProcessing` on the instance of `StreamingAPIConnection`
         * Return the connection instance
         */

    }

    async subscribeToConnection (sessionId: string) : Promise<SubscribeAPIConnection> {

        // Validate `sessionId` and if not present, throw `RequiredParameterAbsentError`
        if (!sessionId) {

            throw new RequiredParameterAbsentError("sessionId is required.");

        }
        try {

            // Initialize the instance of `SubscribeAPIConnection` via the `ConnectionFactory` with the passed in `sessionId`
            const connection = await new ConnectionFactory().instantiateConnection(
                SymblConnectionType.SUBSCRIBE,
                {} as StreamingAPIConnectionConfig
            );
            await connection.connect();
            // If connection is successful, return the instance of the `SubscribeAPIConnection`
            return connection as SubscribeAPIConnection;

        } catch (e) {

            // If connection fails to get established, re-throw the error returned by `SubscribeAPIConnection`
            throw e;

        }

    }

    static wait (time: number, unit = TimeUnit.MS) : Promise<void> {

        // Validate `time` as a positive integer greater than or equal to zero.
        if (time < 0) {

            // In case the validation fails, return the appropriate error out of `RequiredParameterAbsentError` or `InvalidValueError`
            throw new InvalidValueError("`time` must be >= 0.");

        }
        // If (unit )
        return new Promise((res) => {

            // Execute `setTimeout` for the duration in ms provided and return the Promise
            setTimeout(
                () => {

                    res();

                },
                time
            );

        });

        /*
         * Validate `unit` as a valid Enum of type `TimeUnit`
         * Default value of `unit` will be `TimeUnit.MS`
         * Convert the time according to the unit passed in to milliseconds
         */

    }

}
