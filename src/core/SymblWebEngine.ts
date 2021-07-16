const LogMonitor = require('./services/LogMonitor.js')
const EventsManager = require('./services/EventsManager.js')

interface ISymblWebEngine {
    logMonitor: typeof LogMonitor;
    eventsManager: typeof EventsManager;
}

export = class SymblWebEngine implements ISymblWebEngine {
    logMonitor: typeof LogMonitor = new LogMonitor();
    eventsManager: typeof EventsManager = new EventsManager();
}