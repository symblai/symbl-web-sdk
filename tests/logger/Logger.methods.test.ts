import { InvalidValueError } from "../../src/error";
import { Logger } from "../../src/logger"

let logger;

const traceSpy = jest.spyOn(console, "trace").mockImplementation();
const logSpy = jest.spyOn(console, "log").mockImplementation();
const infoSpy = jest.spyOn(console, "info").mockImplementation();
const warnSpy = jest.spyOn(console, "warn").mockImplementation();
const errorSpy = jest.spyOn(console, "error").mockImplementation();

beforeAll(() => {
    logger = new Logger();
});

beforeEach(() => {
    traceSpy.mockClear();
    logSpy.mockClear();
    infoSpy.mockClear();
    warnSpy.mockClear();
    errorSpy.mockClear();
})

test(
    "Logger.setLevel() - updates logLevel if valid",
    () => {
        logger.setLevel("warn");
        expect(logger.getLevel()).toEqual("warn");
        expect(logger.logLevel).toEqual("warn");
    }
)

test(
    "Logger.setLevel() - throws error on invalid logLevel",
    () => {
        expect(() => logger.setLevel("invalid")).toThrow(new InvalidValueError("Please provide a valid log level."));
    }
)

test(
    "Logger.trace() - logs a trace to the console",
    () => {
        logger.setLevel("trace");
        logger.trace("This is a trace");
        expect(traceSpy).toHaveBeenCalled();
    }
)

test(
    "Logger.debug() - logs a debug to the console",
    () => {
        logger.setLevel("debug");
        logger.debug("This is a debug");
        expect(logSpy).toHaveBeenCalled();
    }
)

test(
    "Logger.log() - logs a log to the console",
    () => {
        logger.setLevel("trace");
        logger.log("This is a log");
        expect(logSpy).toHaveBeenCalled();
    }
)

test(
    "Logger.info() - logs a info to the console",
    () => {
        logger.setLevel("info");
        logger.info("This is a info");
        expect(infoSpy).toHaveBeenCalled();
    }
)

test(
    "Logger.warn() - logs a warning to the console",
    () => {
        logger.setLevel("warn");
        logger.warn("This is a warning");
        expect(warnSpy).toHaveBeenCalled();
    }
)

test(
    "Logger.error() - logs a error to the console",
    () => {
        logger.setLevel("error");
        logger.error("This is a error");
        expect(errorSpy).toHaveBeenCalled();
    }
)