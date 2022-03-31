import {DelegatedEventTarget, SymblEvent} from "../events";
import {
    EventTypes,
    SymblData,
    RealtimeSpeechData,
    RealtimeMessageData,
    RealtimeInsightData,
    RealtimeTopicData,
} from "../types";
import Logger from "../logger";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";
import registerNetworkConnectivityDetector from "../network"
import { InvalidValueError } from "../error";

export class BaseConnection extends DelegatedEventTarget {

    protected sessionId: string;

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
        registerNetworkConnectivityDetector(this.sdk)

    }

    async emitEvents (data: any /* SymblData*/): Promise<void> {

        if (data.type === "error") {
            throw new InvalidValueError(data.detail);
        }

        const eventNameMapper = (data) => {

            const eventNameMap = {
                "message_response": {
                    name: "message",
                    data: data.messages as RealtimeMessageData[]
                },
                "topic_response": {
                    name: "topic",
                    data: data.topics as RealtimeTopicData[]
                },
                "insight_response": {
                    name: null,
                    data: data as RealtimeInsightData,
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
            let eventType = eventNameMap[data.type] || {};
            if (eventType.name === "recognition_result") {

                eventType.name = "speech_recognition";
                eventType.data = eventType.data as RealtimeSpeechData;

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
