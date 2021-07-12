const Job = require('./job.js');
const { symblFetch } = require('./utils.js');

export = class Conversation {
    id: string;
    token: string;
    job: typeof Job;

    constructor(id: string, jobId: string, token: string) {
        this.id = id;
        if (jobId) {
            this.job = new Job(jobId, token);
        }
        this.token = token;
    }

    async sleep(time = 2000) {
        await new Promise(r => setTimeout(r, time));
    }

    async messages(): Promise<MessageResponse> {
        let status: string = await this.job.getStatus();
        while (status === 'in_progress') {
            await this.sleep();
            status = await this.job.getStatus();
        }
        const result: MessageResponse = await symblFetch(`https://api.symbl.ai/v1/conversations/${this.id}/messages`, this.token);
        return result;
    }
}