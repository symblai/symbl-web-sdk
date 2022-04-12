import {DelegatedEventTarget, SymblEvent} from "../events";
import {
    RealtimeInsightData,
    RealtimeMessageData,
    RealtimeTopicData,
    SymblData
} from "../types";
import {InvalidValueError} from "../error";
import Logger from "../logger";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";

export class BaseConnection extends DelegatedEventTarget {

    /**
     * @ignore
     */
    protected sessionId: string;

    /**
     * @ignore
     */
    protected sdk: sdk = sdk;

    /**
     * @ignore
     */
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

    /**
     * Checks if data is valid and if so dispatches the data as an event
     * @param data SymblData
     */
    emitEvents (data: any /* SymblData*/): void {

        if (data.type === "error") {

            throw new InvalidValueError(data.details);

        }

        const eventNameMapper = (mapperData) => {

            const eventRenameMap = {
                "recognition_result": "speech_recognition",
                "recognition_started": "processing_started",
                "recognition_stopped": "processing_stopped"
            };
            const eventNameMap = {
                "insight_response": {
                    "data": mapperData as RealtimeInsightData,
                    "name": null
                },
                "message": {
                    "data": mapperData,
                    "name": mapperData.message
                        ? mapperData.message.type
                        : null
                },
                "message_response": {
                    "data": mapperData.messages as RealtimeMessageData[],
                    "name": "message"
                },
                "topic_response": {
                    "data": mapperData.topics as RealtimeTopicData[],
                    "name": "topic"
                },
                "tracker_response": {
                    "data": mapperData.trackers,
                    "name": "tracker"
                }
            };
            const eventType = eventNameMap[mapperData.type] || {};
            if (eventRenameMap[eventType.name]) {

                eventType.name = eventRenameMap[eventType.name];

            }
            return eventType;

        };
        const eventData = eventNameMapper(data);

        if (eventData.name) {

            this.dispatchEvent(new SymblEvent(
                eventData.name,
                eventData.data.message
                    ? eventData.data.message
                    : eventData.data
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

    /**
     * @ignore
     */
    connect (): void {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    disconnect (): void {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line
    onDataReceived (data: SymblData): void {

        throw new TypeError("Function not implemented!");

    }

    /**
     * Returns the current session/connection id
     * @returns string
     */
    getSessionId (): string {

        return this.sessionId;

    }

}
