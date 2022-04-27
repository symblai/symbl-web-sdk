import { BaseConnection } from '../../src/connection';

test(
    "BaseConnection - connect() throws error",
    async () => {
        await expect(async () => {await BaseConnection.prototype.connect()}).rejects.toThrowError(new TypeError("Function not implemented!"));
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

test(
    "BaseConnection.emitEvents -- dispatches events passed to it",
    () => {
        let bc = new BaseConnection("12345-12345-abcde-12345");
        bc.dispatchEvent = jest.fn();
        bc.emitEvents({
            "type": "insight_response",
            "insights": [
                {
                  "id": "e0e44c21-c965-47b0-92d9-878ac22302ae",
                  "confidence": 0.9834683553122807,
                  "hints": [
                    {
                      "key": "confidenceScore",
                      "value": "0.9957259328650095"
                    },
                    {
                      "key": "comprehensionScore",
                      "value": "0.971210777759552"
                    }
                  ],
                  "type": "question",
                  "assignee": {
                    "id": "29c192e0-6fbc-4b94-9cb8-040783654003",
                    "name": "Jane Doe",
                    "userId": "user@example.com"
                  },
                  "tags": [],
                  "dismissed": false,
                  "payload": {
                    "content": "How may I help you today?",
                    "contentType": "text/plain"
                  },
                  "from": {
                    "id": "29c192e0-6fbc-4b94-9cb8-040783654003",
                    "name": "Jane Doe",
                    "userId": "user@example.com"
                  },
                  "entities": null,
                  "messageReference": {
                    "id": "79a57ed7-d043-4a82-85fc-ae7844d8d2bb"
                  }
                }
              ]
        })
        expect(dispatchEvent).toHaveBeenCalled;
    }
);