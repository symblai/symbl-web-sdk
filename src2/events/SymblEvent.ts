import {
    EventTypes,
    SymblData
} from "../types";

export class SymblEvent extends CustomEvent<SymblData> {

    constructor (eventType: EventTypes, data?: unknown) {

        const detail: CustomEventInit = {
            "detail": data
        };
        super(
            eventType,
            detail
        );

    }

}

export class NetworkEvent extends SymblEvent {

}

// New CustomEvent('topic', topic);
