import {EventTypes, SymblData} from "../types";
import Logger from "../logger";
import {SymblEvent} from "../events";
import {sdk} from "@symblai/symbl-js/build/client.sdk.min";

export class BaseConnection extends EventTarget {

    private sessionId: string;

    protected sdk: sdk = sdk;

    protected logger: Logger = new Logger();

    constructor (sessionId: string) {

        super();

        this.sessionId = sessionId;
        // Add function bindings here

    }

    on (eventName: EventTypes, callback: (event: SymblEvent) => void): void {

        this.addEventListener(
            eventName,
            callback
        );

    }

    async emitEvents (data: any /* SymblData*/): Promise<void> {

        let eventName;
        console.log(
            "data.type",
            data.type
        );
        switch (data.type) {

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
        default:
            // Do nothing

            /*
             * Case "message":
             *  todo
             */

        }
        console.log(
            "eventName",
            eventName
        );
        if (eventName) {

            console.log("dispatchEvent");
            this.dispatchEvent(new SymblEvent(
                eventName,
                data
            ));

        } else {

            this.logger.warn("The data received was invalid");

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
