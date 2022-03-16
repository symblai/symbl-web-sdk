import {
    SymblData,
    EventTypes
} from "../types";

export class DelegatedEventTarget implements EventTarget {

  private delegate = document.createDocumentFragment();


  addEventListener(...args: any): void {
    this.delegate.addEventListener.apply(this.delegate, args);
  }

  dispatchEvent(...args: any): boolean {
    return this.delegate.dispatchEvent.apply(this.delegate, args);
  }

  removeEventListener(...args: any): void {
    return this.delegate.removeEventListener.apply(this.delegate, args);
  }

}

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

// new CustomEvent('topic', topic);