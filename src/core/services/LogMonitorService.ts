interface ILogMonitor {
    logAudit(name: string, obj: unknown): void;
    logEvent(event: Event): void;
    monitorDevice(device: MediaStream): void;
}

export = class LogMonitor implements ILogMonitor {
    logAudit(name: string, obj: unknown): void {
        console.log(name, ':', obj);
    }

    logEvent(event: Event): void {
        console.log(event);
    }

    monitorDevice(device: MediaStream): void {
        console.log(`Active: ${device.active}`)
    }
}