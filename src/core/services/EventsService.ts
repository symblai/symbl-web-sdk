const LogMonitor = require("./LogMonitorService");

interface IEventsManager {
    logger: typeof LogMonitor;
    notifyEvent(event: Event): void;
    logEvent(event: Event): void;
}

export = class EventsManager implements IEventsManager {
    logger: typeof LogMonitor = new LogMonitor();

    notifyEvent(event: Event) {
        console.warn(`${event.type}: ${event}`);
    }

    logEvent(event: Event) {
        this.logger.logEvent(event);
    }

    sum(a: number, b: number): number {
        return a + b;
    }
}