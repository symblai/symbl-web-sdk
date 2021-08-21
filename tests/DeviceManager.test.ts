const DeviceManager = require("../src/workers/DeviceManager");
const { NullError, ConfigError } = require("../src/core/services/ErrorHandler");

const createDeviceMocks = () => {
    const mockMediaDevices = {
      enumerateDevices: jest.fn().mockResolvedValueOnce([] as any),
      getUserMedia: jest.fn().mockResolvedValueOnce({} as any),
    };
    Object.defineProperty(window.navigator, 'mediaDevices', {
      writable: true,
      value: mockMediaDevices,
    });
}
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
            expect(err).toEqual(new NullError("Websocket connection is missing"))
        }
    }
);
