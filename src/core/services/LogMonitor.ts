export = class LogMonitor {
    logAudit(name: string, obj: unknown) {
        console.log(name, ':', obj);
    }

    logEvent(event: Event) {
        console.log(event);
    }

    monitorDevice(device: MediaStream) {
        console.log(`Active: ${device.active}`)
    }
}