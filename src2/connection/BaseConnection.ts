import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import { SymblEvent } from "../events";
import { SymblData, EventTypes } from "../types";
import Logger from "../logger";

export class BaseConnection extends EventTarget {
    private sessionId: string;
    protected sdk: sdk = sdk;
    protected logger: Logger = new Logger();
    
    constructor(sessionId: string) {
        super();
        
        this.sessionId = sessionId;
        // Add function bindings here
    }
    
    on(eventName: EventTypes, callback: (event: SymblEvent) => void) {
        this.addEventListener(eventName, callback);
    }
    
    async emitEvents(data: any /*SymblData*/) {
        let eventName;
        console.log('data.type', data.type);
        switch(data.type) {
            case "recognition_result":
                eventName = "speech_recognition";
                break;
            case "action_item":
            case "follow_up":
            case "question":
            case "topic":
            case "tracker":
                eventName = data.type;
                break;
            //case "message":
                // todo
        }
        console.log('eventName', eventName)
        if (eventName) {
            console.log('dispatchEvent');
            this.dispatchEvent(new SymblEvent(eventName, data));
        } else {
            this.logger.warn("The data received was invalid");
        }
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
    
    async onDataReceived(data: SymblData) {
        throw new TypeError('Function not implemented!');
    }
    
    getSessionId() {
        return this.sessionId;
    }
}