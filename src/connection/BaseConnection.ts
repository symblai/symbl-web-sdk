import {DelegatedEventTarget, SymblEvent} from "../events";
import {EventTypes, SymblData} from "../types";
import Logger from "../logger";
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

        this.on = this.on.bind(this);
        this.emitEvents = this.emitEvents.bind(this);
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.onDataReceived = this.onDataReceived.bind(this);
        this.getSessionId = this.getSessionId.bind(this);

    }

    on (eventName: EventTypes, callback: (event: SymblEvent) => void): void {

        this.addEventListener(
            eventName,
            (data) => callback(data.detail)
        );

    }

    async emitEvents (data: any /* SymblData*/): Promise<void> {

        const eventNameMapper = (data) => {

            const eventNameMap = {
                "message_response": {
                    name: "message",
                    data: data.messages
                },
                "topic_response": {
                    name: "topic",
                    data: data.topics,
                },
                "insight_response": {
                    name: null,
                    data,
                },
                "message": {
                    name: data.message
                        ? data.message.type
                        : null,
                    data
                },
                "tracker_response": {
                    name: "tracker",
                    data: data.trackers
                }
            };
            let eventType = eventNameMap[data.type];
            if (eventType.name === "recognition_result") {

                eventType.name = "speech_recognition";

            }
            return eventType;

        };
        const eventData = eventNameMapper(data);

        if (eventData.name) {

            this.dispatchEvent(new SymblEvent(
                eventData.name,
                eventData.data.message ? eventData.data.message : eventData.data
            ));

        } else if (!eventData.name && data.type === "insight_response") {

            for (const insight of data.insights) {

                this.dispatchEvent(new SymblEvent(
                    insight.type,
                    insight
                ));

            }

        } else {

            this.logger.warn(
                "The data had no type",
                data
            );

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
