import {
    EventTypes,
    SymblData
} from "../types";


export class SymblEvent {

    /**
     * Creates custom event with supplied eventType and data
     * @param eventType EventTypes
     * @param data unknown
     * @returns CustomEvent
     */
    constructor (eventType: EventTypes, data?: unknown) {

        const detail: CustomEventInit = {
            "detail": data
        };
        // eslint-disable-next-line no-constructor-return
        return new CustomEvent<SymblData>(
            eventType,
            detail
        );

    }

}

export class DelegatedEventTarget implements EventTarget {

  private delegate = document.createDocumentFragment();


  /**
   * Adds event listener to target Class
   * @param args any
   */
  addEventListener (...args: any): void {

      this.delegate.addEventListener.apply(
          this.delegate,
          args
      );

  }

  /**
   * Sends event to any supplied target Class
   * @param args any
   * @returns Event
   */
  dispatchEvent (...args: any): boolean {

      return this.delegate.dispatchEvent.apply(
          this.delegate,
          args
      );

  }

  /**
   * Removes event listener from target Class
   * @param args any
   * @returns Event
   */
  removeEventListener (...args: any): void {

      return this.delegate.removeEventListener.apply(
          this.delegate,
          args
      );

  }

  /**
   * Attaches callback function to event listener
   * @param eventName EventTypes
   * @param callback function
   */
  on (eventName: EventTypes, callback: (event: SymblEvent) => void): void {

      this.addEventListener(
          eventName,
          (data) => callback(data.detail
              ? data.detail
              : data)
      );

  }

  /**
   * Removes callback function from event listener
   * @param eventName EventTypes
   * @param callback function
   */
  off (eventName: EventTypes, callback: (event: SymblEvent) => void): void {

      this.removeEventListener(
          eventName,
          (data) => callback(data.detail
              ? data.detail
              : data)
      );

  }

}

export class NetworkEvent extends SymblEvent {


}

// New CustomEvent('topic', topic);

// New CustomEvent('topic', topic);
