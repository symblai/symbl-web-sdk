import { Logger } from "../../src/logger"

test(
    "constructor for Logger - return default logLevel",
    () => {
        const logger = new Logger();
        expect(logger.getLevel()).toEqual("warn");
    }
)