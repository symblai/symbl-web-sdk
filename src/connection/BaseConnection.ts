import {
    DelegatedEventTarget,
    SymblEvent
} from "../events";
import {
    StreamingAPIConnection
} from "../api";
import {
    RealtimeBookmarkData,
    RealtimeInsightData,
    RealtimeMessageData,
    RealtimeTopicData,
    RealtimeTrackerData,
    StreamingAPIConnectionConfig,
    SymblData
} from "../types";
import {
    AudioStream
} from "../audio";
import {
    Conversation
} from "../api/conversation";
import {
    InvalidValueError
} from "../error";
import Logger from "../logger";
import {
    NullError
} from "../old/core/services/ErrorHandler";
const sdk = require("@symblai/symbl-js/build/client.sdk.min").sdk;


export class BaseConnection extends DelegatedEventTarget {

    /**
     * @ignore
     */
    protected sessionId: string;

    /**
     * @ignore
     */
    protected sdk: typeof sdk = sdk;

    /**
     * @ignore
     */
    protected logger: typeof Logger = Logger;

    /**
     * Conversation object
     */
    conversation: Conversation;

    constructor (sessionId: string) {

        super();

        this.sessionId = sessionId;
        // Add function bindings here

        this.on = this.on.bind(this);
        this.emitEvents = this.emitEvents.bind(this);
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.onDataReceived = this.onDataReceived.bind(this);
        this.getSessionId = this.getSessionId.bind(this);

        this.on(
            "conversation_created",
            (conversationData) => {

                this.conversation = new Conversation(conversationData.data.conversationId);

            }
        );

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
                "bookmark_response": {
                    "data": mapperData.bookmarks as RealtimeBookmarkData,
                    "name": "bookmark"
                },
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
                    "data": mapperData.trackers as RealtimeTrackerData[],
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
    // eslint-disable-next-line
    async connect(): Promise < void > {

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
    onDataReceived(data: SymblData): void {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line
    async startProcessing(options ? : StreamingAPIConnectionConfig | null): Promise < StreamingAPIConnection > {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line
    async stopProcessing(): Promise < StreamingAPIConnection > {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modifySampleRate (sampleRateHertz: number) {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line
    async updateAudioStream(audioStream: AudioStream): Promise < void > {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sendAudio (audioData: any): void {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sendJSON (data: any): void {

        throw new TypeError("Function not implemented!");

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isProcessing (): boolean {

        throw new TypeError("Function not implemented!");

    }

    /**
     * Returns the current session/connection id
     * @returns string
     */
    getSessionId (): string {

        return this.sessionId;

    }

    /**
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static validateConfig (config: StreamingAPIConnectionConfig): StreamingAPIConnectionConfig {

        throw new TypeError("Function not implemented!");

    }

    getConversationId (): string {

        if (!this.conversation) {

            return null;

        }

        return this.conversation.getConversationId();

    }

}
