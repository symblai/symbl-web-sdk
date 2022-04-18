import { BaseConnection } from '../../src/connection';

test(
    "BaseConnection - connect() throws error",
    () => {
        expect(() => {BaseConnection.prototype.connect()}).toThrowError(new TypeError("Function not implemented!"));
    }
);

test(
    "BaseConnection - disconnect() throws error",
    () => {
        expect(() => {BaseConnection.prototype.disconnect()}).toThrowError(new TypeError("Function not implemented!"));
    }
);

test(
    "BaseConnection - onDataReceived() throws error",
    () => {
        expect(() => {BaseConnection.prototype.onDataReceived({} as any)}).toThrowError(new TypeError("Function not implemented!"));
    }
);

test(
    "BaseConnection.getSessionId() - returns session id provided in constructor",
    () => {
        let bc = new BaseConnection("12345-12345-abcde-12345");
        let sessionId = bc.getSessionId();
        expect(sessionId).toEqual("12345-12345-abcde-12345");
    }
);