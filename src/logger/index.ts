/* eslint-disable sort-keys */
import log from "loglevel";

const LogLevel = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "silent"
];

export class Logger {

    logger: typeof log;

    logLevel: string;

    constructor (logLevel?: string) {

        this.logger = log;
        if (logLevel) {

            this.setLevel(logLevel);

        } else {

            this.logLevel = LogLevel[this.logger.getLevel()];

        }

    }

    /**
     * Sets the logging level.
     * @param {string} level - logging level
     */
    setLevel (level: string): void {

        this.logLevel = level;
        this.logger.setLevel(level as any);

    }

    /**
     * Returns the current logging level.
     * @returns {string} - logging level
     */
    getLevel (): string {


        return this.logLevel;

    }

    /**
     * Outputs a stack trace that will show the call path
     * taken to reach the point of the value
     * @param {string} value
     */
    trace (msg, meta = {}): void {

        this.logger?.trace.apply(
            null,
            [
                msg,
                meta
            ]
        );

    }

    /**
     * Outputs a debug level logging message
     */
    debug (msg, meta = {}): void {

        this.logger?.debug.apply(
            null,
            [
                msg,
                meta
            ]
        );

    }

    /**
     * Outputs a basic log level logging message
     */
    log (msg, meta = {}): void {

        this.logger?.log.apply(
            null,
            [
                msg,
                meta
            ]
        );

    }

    /**
     * Outputs an informational logging message
     */
    info (msg, meta = {}): void {

        this.logger?.info.apply(
            null,
            [
                msg,
                meta
            ]
        );

    }

    /**
     * Outputs a warn level logging message
     */
    warn (msg, meta = {}): void {

        this.logger?.warn.apply(
            null,
            [
                msg,
                meta
            ]
        );

    }

    /**
     * Outputs an error level logging message
     */
    error (msg, meta = {}): void {

        this.logger?.error.apply(
            null,
            [
                msg,
                meta
            ]
        );

    }

}

const logger = new Logger();

export default logger;
