import {Conversation} from "../../../src/api/conversation";

test(
    "constructor for Conversation class - passing in conversation id",
    () => {
        let conversationId = "123456789"
        let conversation = new Conversation(conversationId);
        expect(conversation.getConversationId()).toEqual("123456789")
    }
);