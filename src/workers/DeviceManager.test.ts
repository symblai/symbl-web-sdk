const DeviceManager = require("./DeviceManager");
const { NullError, ConfigError, ConnectionError } = require("../core/services/ErrorHandler");

test(
    "getDefaultDevice(): Error returned on null deviceConfig",
    async () => {
        const deviceManager = new DeviceManager();
        expect.assertions(1);
        try {
            await deviceManager.getDefaultDevice(null);
        } catch (err) {
            expect(err).toEqual(new NullError("Device config is null"))
        }
    }
);

test(
    "getDefaultDevice(): Error returned on missing audio property in deviceConfig",
    async () => {
        const deviceManager = new DeviceManager();
        expect.assertions(1);
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
        const deviceManager = new DeviceManager();
        expect.assertions(1);
        try {
            await deviceManager.deviceConnect(null);
        } catch (err) {
            expect(err).toEqual(new NullError("Websocket connection is null"))
        }
    }
);

test(
    "deviceConnect(): Error returned on missing deviceConfig",
    async () => {
        const deviceManager = new DeviceManager();
        expect.assertions(1);
        try {
            await deviceManager.deviceConnect();
        } catch (err) {
            expect(err).toEqual(new ConfigError("Websocket connection is missing"))
        }
    }
);
