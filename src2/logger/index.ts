// import consola from 'consola/src/browser'
// import console from 'console';

export default class Logger {
    
    // logger: consola = consola;

    // logLevel: string;

    constructor (logLevel?: string) {
        
        // this.setLevel(logLevel);
        
    }

    error(message): void {};
    warn(message): void {};
    info(message): void {};
    log(message): void {};
    trace(message): void {};
    debug(message): void {};

    // /**
    //  * Sets the logging level.
    //  * @param {string} level - logging level
    //  */
    // setLevel (level): void {

    //     const options: {
    //         level?: string,
    //         recorder?: any
    //     } = {};
    //     if (level) {
    //         options.level = level;
    //         this.logLevel = level;
    //     }
    //     this.logger = consola.create(options);

    // }

    // /**
    //  * Returns the current logging level.
    //  * @returns {string} - logging level
    //  */
    // getLevel (): string {

    //     return this.logLevel;

    // }

    // /**
    //  * Outputs a stack trace that will show the call path
    //  * taken to reach the point of the value
    //  * @param {string} value
    //  */
    // trace (msg, meta = {}): void {

    //     this.logger.trace.apply(
    //         null,
    //         [msg, meta]
    //     );

    // }

    // /**
    //  * Outputs a debug level logging message
    //  */
    // debug (msg, meta = {}): void {

    //     this.logger.debug.apply(
    //         null,
    //         [msg, meta]
    //     );

    // }

    // /**
    //  * Outputs a basic log level logging message
    //  */
    // log (msg, meta = {}): void {

    //     this.logger.log.apply(
    //         null,
    //         [msg, meta]
    //     );

    // }

    // /**
    //  * Outputs an informational logging message
    //  */
    // info (msg, meta = {}): void {

    //     this.logger.info.apply(
    //         null,
    //         [msg, meta]
    //     );

    // }

    // /**
    //  * Outputs a warn level logging message
    //  */
    // warn (msg, meta = {}): void {

    //     this.logger.warn.apply(
    //         null,
    //         [msg, meta]
    //     );

    // }

    // /**
    //  * Outputs an error level logging message
    //  */
    // error (msg, meta = {}): void {

    //     this.logger.error.apply(
    //         null,
    //         [msg, meta]
    //     );

    // }

}
