const Conversation = require('./conversation.js');
const { symblFetch } = require('./utils.js');

export = class TextApi {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
    async process(payload): Promise<typeof Conversation> {
        const data: {method: string, body: string} = {
            method: 'POST',
            body: JSON.stringify(payload),
        }
        const result: AsyncResponse = await symblFetch(`https://api.symbl.ai/v1/process/text`, this.token, data);
        return new Conversation(result.conversationId, result.jobId, this.token);
    }
}
