import {InvalidValueError} from "../../error";

export class Conversation {


    /**
     * @ignore
     */
    protected conversationId: string;

    constructor (conversationId: string) {

        if (!conversationId || typeof conversationId !== "string") {

            throw new InvalidValueError("Please provide a valid conversationId.");

        }

        this.conversationId = conversationId;

    }

    /**
     * Returns the stored conversationId
     * @returns string
     */
    getConversationId (): string {

        return this.conversationId;

    }

}
