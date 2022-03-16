import {EventTypes, SymblData} from "../types";
import Logger from "../logger";
import {SymblEvent, DelegatedEventTarget } from "../events";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";

export class BaseConnection extends DelegatedEventTarget {

    private sessionId: string;

    protected sdk: sdk = sdk;

    protected logger: Logger = new Logger();

    constructor (sessionId: string) {

        super();

        this.sessionId = sessionId;
        this.logger = new Logger();
        // Add function bindings here

    }

    on (eventName: EventTypes, callback: (event: SymblEvent) => void): void {

        this.addEventListener(
            eventName,
            callback
        );

    }

    async emitEvents (data: any /* SymblData*/): Promise<void> {
        const eventNameMapper = (data) => {
            const eventNameMap = {
                "message_response": "message",
                "topic_response": "topic",
                "tracker_response": "tracker",
                "insight_response": null,
                "message": data.message ? data.message.type : null,
            };
            let eventType = eventNameMap[data.type];
            if (eventType === "recognition_result") {
                eventType = "speech_recognition";
            }
            return eventType;
        }
        const eventName = eventNameMapper(data);
        
        if (eventName) {
            this.dispatchEvent(new SymblEvent(
                eventName,
                data
            ));

        } else if (!eventName && data.type === "insight_response") {
            for (let insight of data.insights) {
                this.dispatchEvent(new SymblEvent(
                    insight.type,
                    insight
                ));
            }
        } else {

            this.logger.warn("The data had no type", data);

        }

        /*
         * Check if the `data` received is valid
         * Check the `data` for event types and accordingly emit the appropriate data event
         * If the received data is invalid, log a warning stating that the data received was invalid.
         */

    }

    connect (): void {

        throw new TypeError("Function not implemented!");

    }

    disconnect (): void {

        throw new TypeError("Function not implemented!");

    }

    async onDataReceived (data: SymblData): Promise<void> {

        throw new TypeError("Function not implemented!");

    }

    getSessionId (): string {

        return this.sessionId;

    }

}
