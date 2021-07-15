const LogMonitor = require('./services/LogMonitor.js')
const EventsManager = require('./services/EventsManager.js')

export = class SymblWebEngine {
    logMonitor: typeof LogMonitor = new LogMonitor();
    eventsManager: typeof EventsManager = new EventsManager();
}