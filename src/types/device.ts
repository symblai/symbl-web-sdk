declare namespace W3C {
    type LongRange = NumberRange;
    type DoubleRange = NumberRange;
    type ConstrainBoolean = boolean | ConstrainBooleanParameters;
    type ConstrainNumber = number | ConstrainNumberRange;
    type ConstrainLong = ConstrainNumber;
    type ConstrainDouble = ConstrainNumber;
    type ConstrainString = string | string[] | ConstrainStringParameters;
}

interface NumberRange {
    max?: number | undefined;
    min?: number | undefined;
}

interface ConstrainNumberRange extends NumberRange {
    exact?: number | undefined;
    ideal?: number | undefined;
}

interface ConstrainStringParameters {
    exact?: string | string[] | undefined;
    ideal?: string | string[] | undefined;
}

interface MediaStreamConstraints {
    video?: boolean | MediaTrackConstraints | undefined;
    audio?: boolean | MediaTrackConstraints | undefined;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[] | undefined;
}

interface MediaTrackConstraintSet {
    width?: W3C.ConstrainLong | undefined;
    height?: W3C.ConstrainLong | undefined;
    aspectRatio?: W3C.ConstrainDouble | undefined;
    frameRate?: W3C.ConstrainDouble | undefined;
    facingMode?: W3C.ConstrainString | undefined;
    volume?: W3C.ConstrainDouble | undefined;
    sampleRate?: W3C.ConstrainLong | undefined;
    sampleSize?: W3C.ConstrainLong | undefined;
    echoCancellation?: W3C.ConstrainBoolean | undefined;
    latency?: W3C.ConstrainDouble | undefined;
    deviceId?: W3C.ConstrainString | undefined;
    groupId?: W3C.ConstrainString | undefined;
}

interface MediaStream extends EventTarget {
    //id: string;
    //active: boolean;

    //onactive: EventListener;
    //oninactive: EventListener;
    //onaddtrack: (event: MediaStreamTrackEvent) => any;
    //onremovetrack: (event: MediaStreamTrackEvent) => any;

    clone(): MediaStream;
    stop(): void;

    getAudioTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    getTracks(): MediaStreamTrack[];

    getTrackById(trackId: string): MediaStreamTrack;

    addTrack(track: MediaStreamTrack): void;
    removeTrack(track: MediaStreamTrack): void;
}