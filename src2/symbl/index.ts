import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import { InvalidCredentialsError, AccessTokenExpiredError, InvalidValueError, SessionIDNotUniqueError, RequiredParameterAbsentError, /*InvalidLogLevelError*/ } from "../error";
import { HttpError } from '../error/network/http'
import Logger from "../logger";
import { VALID_LOG_LEVELS } from "../utils/configs";
import { is, assertType } from 'typescript-is'
import { uniquenessRegex, uuid } from "../utils";
import { ConnectionFactory } from "../connection";
import { StreamingAPIConnection, SubscribeAPIConnection } from "../api";
import { AudioStream } from "../audio";
import {
    SymblConnectionType,
    TimeUnit,
    SymblConfig,
    StreamingAPIConnectionConfig
} from "../types";
/*
const anotherNonConformer: unknown = { aString: 1337 }
try {
    assertType<SomeInterfaceOrType>(anotherNonConformer)
} catch(error) {
    console.log(error.message) // logs: "validation failed at anotherNonConformer.aString: expected a string"
}
 */



export default class Symbl {

    /**
     * @ignore
     */
    private sdk: sdk = sdk;

    private symblConfig: SymblConfig;

    private logger: Logger;

    constructor(symblConfig?: SymblConfig) {
        if (symblConfig) {

            try {
                this._validateSymblConfig(symblConfig);   
            } catch(e) {
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
    _validateSymblConfig(symblConfig: SymblConfig): boolean {

        if (!symblConfig) {
            throw new InvalidCredentialsError('No credentials were passed');
        }

        const {appId, accessToken, appSecret, logLevel} = symblConfig;

        if (logLevel && VALID_LOG_LEVELS.indexOf(logLevel) === -1) {
            // throw new InvalidLogLevelError(`Log level must be one of: ${VALID_LOG_LEVELS.join(', ')}`)
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
            const tokenPayload = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
            const expiry = Math.floor(tokenPayload.exp - Date.now() / 1000);
            if (expiry <= 0) {
                throw new AccessTokenExpiredError("Provided token as expired")
            }
        }

        return true;
    }

    // validateStreamingAPIConnectionConfig(options: StreamingAPIConnectionConfig): boolean {
    //     if (!options) {

    //     }
        
    //     if (!options.id) {

    //     }

    //     return true
    // }
   
    /**
     * Validates and initializes Symbl with application configuration
     * @param {object} appConfig - Symbl configuration object
     */
    async init(symblConfig: SymblConfig) : Promise<void> {
        try {
            this._validateSymblConfig(symblConfig);   
        } catch(e) {
            throw e;
        }

        try {
            const initConfig = {
                appId: symblConfig.appId,
                appSecret: symblConfig.appSecret,
                accessToken: symblConfig.accessToken,
                basePath: symblConfig.basePath || 'https://api.symbl.ai',
                logLevel: symblConfig.logLevel
            }

            await this.sdk.init(initConfig);
            // this.logger.info("Symbl: Successfully connected to Symbl");
        } catch (err) {
            throw new HttpError(err.message);
        }
    }

          
    // Get the media stream instance via the AudioStream interface
    // static async getMediaStream(deviceId?) : Promise<MediaStream> {
    //     // let stream = null;

    //     // try {
    //     //     stream = await navigator.mediaDevices.getUserMedia({
    //     //         "audio": deviceId ? { deviceId } : true,
    //     //         "video": false,
    //     //     });
    //     //     return stream
    //     // } catch(err) {
    //     //     throw new Error
    //     // }
    // }
    
    async createConnection(options: StreamingAPIConnectionConfig, audioStream?: AudioStream) : Promise<StreamingAPIConnection> {
        if (options.id) {
            const regex = new RegExp(uniquenessRegex);
            const validSessionId = regex.test(options.id);
            if (!validSessionId) {
                throw new SessionIDNotUniqueError("Session ID should be a unique combination of numbers and characters or a UUID.");
            }
        } else {
            options.id = uuid();
        }
        try {
            const connection = await new ConnectionFactory().instantiateConnection(
                SymblConnectionType.STREAMING, options, audioStream);
            await connection.connect();
            return connection as StreamingAPIConnection;
        } catch(e) {
            throw e;
        }

        // Validate `options` with the `StreamingAPIConnectionConfig` interface
        // Validate `id` as a `uuid` or its `uniqueness` and if it doesn't conform, reject the request with `SessionIDNotUniqueError`
        // If no `id` is present in the options, log a warning and assign a `uuid`
        // Establish a new Streaming API Connection via the `ConnectionFactory`, creating an instance of the `StreamingAPIConnection`
        // Invoke the `connect` function to establish an idle connection with Streaming API. (It will not process Audio in this state)
        // If the Connection establishment fails, throw the appropriate error generated by the `StreamingAPIConnection` interface.
        // Return the connection instance

              
    }
    
    async createAndStartNewConnection(options: StreamingAPIConnectionConfig, audioStream?: AudioStream) : Promise<StreamingAPIConnection> {
        try {
            const connection = await this.createConnection(options, audioStream);
            await connection.startProcessing();
            return connection as StreamingAPIConnection;
        } catch(e) {
            throw e;
        }

        // Invoke `createConnection` with the above arguments.
        // If the connection fails to get established, re-throw the error thrown by `StreamingAPIConnection` instance
        // Invoke `startProcessing` on the instance of `StreamingAPIConnection`
        // Return the connection instance
    }
    
    async subscribeToConnection(sessionId: string) : Promise<SubscribeAPIConnection> {
        if (!sessionId) {
            throw new RequiredParameterAbsentError('sessionId is required.');
        }
        try {
            const connection = await new ConnectionFactory().instantiateConnection(
                SymblConnectionType.SUBSCRIBE, {} as StreamingAPIConnectionConfig);
            await connection.connect();
            return connection as SubscribeAPIConnection;
        } catch(e) {
            throw e;
        }
        // Validate `sessionId` and if not present, throw `RequiredParameterAbsentError`
        // Initialize the instance of `SubscribeAPIConnection` via the `ConnectionFactory` with the passed in `sessionId`
        // If connection is successful, return the instance of the `SubscribeAPIConnection`
        // If connection fails to get established, re-throw the error returned by `SubscribeAPIConnection`
    }
    
    static wait(time: number, unit = TimeUnit.MS) : Promise<void> {
        if (time < 0) {
            throw new InvalidValueError("`time` must be >= 0.");   
        }
        // if (unit )
        return new Promise(res => {
            setTimeout(() => {
                res();
            }, time);
        });
        // Validate `time` as a positive integer greater than or equal to zero.
        // Validate `unit` as a valid Enum of type `TimeUnit`
        // In case the validation fails, return the appropriate error out of `RequiredParameterAbsentError` or `InvalidValueError`
        // Default value of `unit` will be `TimeUnit.MS`
        // Convert the time according to the unit passed in to milliseconds
        // Execute `setTimeout` for that duration and return the Promise
    }
}