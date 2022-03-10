export class SymblEvent extends CustomEvent<SymblData> {
    constructor(eventType: EventTypes, data?: any) {
        const detail: CustomEventInit = {
            detail: data
        };
        super(eventType, detail);
    }
}

// new CustomEvent('topic', topic);