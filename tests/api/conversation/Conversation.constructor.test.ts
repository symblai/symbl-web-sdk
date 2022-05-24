import { Conversation } from "../../../src/api/conversation";
import { InvalidValueError } from "../../../src/error";

test(
    "constructor for Conversation class - passing in conversation id",
    async () => {
        let conversationid = "123456789"
        expect(() => new Conversation(conversationid)).not.toThrow();
    }
);

test(
    "constructor for Conversation class - passing in invalid conversation id",
    async () => {
        let conversationid = 123456789
        expect(() => new Conversation(conversationid as any)).toThrow(new InvalidValueError("Please provide a valid conversationId."));
    }
);