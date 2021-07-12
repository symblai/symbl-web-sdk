const { symblFetch } = require('./utils.js');

export = class Job {
    id: string;
    token: string;
    status: string;

    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.status = 'in_progress';
    }

    async getStatus(): Promise<string> {
        const result: JobResponse = await symblFetch(`https://api.symbl.ai/v1/job/${this.id}`, this.token);
        this.status = result.status;
        return this.status;
    }
}