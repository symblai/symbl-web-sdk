export default class BaseConnection extends EventTarget {
    private sessionId: string;
    
    constructor(sessionId: string) {
        super();
        
        this.sessionId = sessionId;
        // Add function bindings here
    }
    
    on(eventName: EventTypes, callback: (event: SymblEvent) => void) {
        this.addEventListener(eventName, callback);
    }
    
    emitEvents(data: SymblData) {
        // Check if the `data` received is valid
        // Check the `data` for event types and accordingly emit the appropriate data event
        // If the received data is invalid, log a warning stating that the data received was invalid.
    }
    
    connect() {
        throw new TypeError('Function not implemented!');
    }
    
    disconnect() {
        throw new TypeError('Function not implemented!');
    }
    
    onDataReceived() {
        throw new TypeError('Function not implemented!');
    }
    
    getSessionId() {
        return this.sessionId;
    }
}