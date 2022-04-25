import Symbl from "../../src/symbl";
import { InvalidValueError  } from "../../src/error";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test(
    "Symbl.wait - Call with time number value less than 0 throws error",
    () => {
        expect(() => {Symbl.wait(-5,'ms')}).toThrowError(new InvalidValueError("`time` must be >= 0."));
    }
);

test(
    "Symbl.wait - Call with no time number value throws error",
    () => {
        expect(() => {Symbl.wait(null,'ms')}).toThrowError(new InvalidValueError("Please provide a number for `time`"));
    }
);

test(
    "Symbl.wait - Call with incorrect time unit value throws error",
    () => {
        expect(() => {Symbl.wait(5,'j')}).toThrowError(new InvalidValueError("Please provide a valid time unit of 'ms', 's', or 'm'"));
    }
);

test(
    "Symbl.wait - Successful wait for 1000 milliseconds",
    () => {
        Symbl.wait(1000, "ms");
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    }
)

test(
    "Symbl.wait - Successful wait for 10 seconds",
    () => {
        Symbl.wait(10, "s");
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    }
)

test(
    "Symbl.wait - Successful wait for 1 minute",
    () => {
        Symbl.wait(1, "m");
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 60000);
    }
)