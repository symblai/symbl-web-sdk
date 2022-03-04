import { SymblEvent } from "../SymblEvent";

export  class NetworkEvent extends SymblEvent {
    constructor(type: string, arg: any) {
        super(type, arg);
    }
}