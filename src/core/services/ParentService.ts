const ApiClient = require("@rammerai/api-client")
const LogMonitor = require("./LogMonitorService")
export = class ParentService {
    apiClient = new ApiClient()
    public logger = new LogMonitor()

    constructor() {
        this.logger = new LogMonitor()
    }

    getApiClient(): string {
        return this.apiClient;
    }

    getLogger(): string {
        return this.logger;
    }
}