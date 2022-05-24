import { InvalidValueError } from "../../src/error";
import { Logger } from "../../src/logger"

test(
    "constructor for Logger - return default logLevel",
    () => {
        const logger = new Logger();
        expect(logger.getLevel()).toEqual("warn");
    }
)

test(
    "constructor for Logger - return supplied logLevel",
    () => {
        const logger = new Logger("debug");
        expect(logger.getLevel()).toEqual("debug");
    }
)

test(
    "constructor for Logger - throws error on invalid logLevel",
    () => {
        expect(() => new Logger("invalid")).toThrow(new InvalidValueError("Please provide a valid log level."));
    }
)