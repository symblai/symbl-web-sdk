const DeviceManager = require("../src/workers/DeviceManager");
const Logger = require("../src/core/services/Logger");
const { NullError, ConfigError } = require("../src/core/services/ErrorHandler");

const logger = new Logger();

const createDeviceMocks = () => {
    const mockMediaDevices = {
      enumerateDevices: jest.fn().mockResolvedValueOnce([] as any),
      getUserMedia: jest.fn().mockResolvedValueOnce({} as any),
      ondevicechange: jest.fn()
    };
    Object.defineProperty(window.navigator, 'mediaDevices', {
      writable: true,
      value: mockMediaDevices,
    });
}

window.AudioContext = jest.fn().mockImplementation(() => {
    return {
        close: async () => new Promise(() => true)
    }
});

test(
    "getDefaultDevice(): Error returned on null deviceConfig",
    async () => {
        createDeviceMocks();
        const deviceManager = new DeviceManager();
        // expect.assertions(1);
        try {
            await deviceManager.getDefaultDevice();
        } catch (err) {
            expect(err).toEqual(new NullError("Device config is missing"))
        }
    }
);

test(
    "getDefaultDevice(): Error returned on missing audio property in deviceConfig",
    async () => {
        createDeviceMocks();
        const deviceManager = new DeviceManager();
        // expect.assertions(1);
        try {
            await deviceManager.getDefaultDevice({});
        } catch (err) {
            expect(err).toEqual(new ConfigError("`audio` from Device Config not specified"))
        }
    }
);

test(
    "deviceConnect(): Error returned on null deviceConfig",
    async () => {
        createDeviceMocks();
        const deviceManager = new DeviceManager();
        // expect.assertions(1);
        try {
            await deviceManager.deviceConnect();
        } catch (err) {
            expect(err).toEqual(new NullError("Websocket connection is missing."))
        }
    }
);

test(
    "deviceDisconnect(): Returns log that connection already closed",
    async () => {
        createDeviceMocks();

        const deviceManager = new DeviceManager();

        deviceManager.context = new window.AudioContext();
        
        const consoleSpy = jest.spyOn(
            deviceManager.logger,
            "debug"
        );
        try {
            await deviceManager.deviceDisconnect();
            expect(consoleSpy).toHaveBeenCalledWith('Attempting to close connection.');
        } catch (err) {
            console.error(err);
        }
    }
);
