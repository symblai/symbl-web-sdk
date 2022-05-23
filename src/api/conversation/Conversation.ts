import {InvalidValueError} from "../../error";

export class Conversation {

    protected conversationId: string;

    constructor (conversationId: string) {

        if (!conversationId) {

            throw new InvalidValueError("Please provide a valid conversationId.");

        }

        this.conversationId = conversationId;

    }

    getConversationId (): string {

        return this.conversationId;

    }

    setConversationId (conversationId: string): void {

        this.conversationId = conversationId;

    }

}
