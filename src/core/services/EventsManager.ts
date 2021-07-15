const LogMonitor = require("./LogMonitor.js");

export = class EventsManager {
    logger: typeof LogMonitor;

    constructor() {
        this.logger = new LogMonitor();
    }

    notifyEvent(event: Event) {
        console.warn(`${event.type}: ${event}`);
    }

    logEvent(event: Event) {
        this.logger.logEvent(event);
    }
}