/* eslint-disable no-var */
/* eslint-disable vars-on-top */
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
    max?: number;
    min?: number;
}

interface ConstrainNumberRange extends NumberRange {
    exact?: number;
    ideal?: number;
}

interface ConstrainStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}

interface MediaStreamConstraints {
    video?: boolean | MediaTrackConstraints;
    audio?: boolean | MediaTrackConstraints;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}

interface MediaTrackConstraintSet {
    width?: W3C.ConstrainLong;
    height?: W3C.ConstrainLong;
    aspectRatio?: W3C.ConstrainDouble;
    frameRate?: W3C.ConstrainDouble;
    facingMode?: W3C.ConstrainString;
    volume?: W3C.ConstrainDouble;
    sampleRate?: W3C.ConstrainLong;
    sampleSize?: W3C.ConstrainLong;
    echoCancellation?: W3C.ConstrainBoolean;
    latency?: W3C.ConstrainDouble;
    deviceId?: W3C.ConstrainString;
    groupId?: W3C.ConstrainString;
}

interface MediaStream extends EventTarget {

    /*
     * Id: string;
     * active: boolean;
     */

    /*
     * Onactive: EventListener;
     * oninactive: EventListener;
     * onaddtrack: (event: MediaStreamTrackEvent) => any;
     * onremovetrack: (event: MediaStreamTrackEvent) => any;
     */

    clone(): MediaStream;
    stop(): void;

    getAudioTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    getTracks(): MediaStreamTrack[];

    getTrackById(trackId: string): MediaStreamTrack;

    addTrack(track: MediaStreamTrack): void;
    removeTrack(track: MediaStreamTrack): void;
}

interface AudioWorkletProcessor {
    readonly port: MessagePort;
    process(
      inputs: Float32Array[][],
      outputs: Float32Array[][],
      parameters: Record<string, Float32Array>
    ): boolean;
  }

declare var AudioWorkletProcessor: {
    prototype: AudioWorkletProcessor;
    new (options?: AudioWorkletNodeOptions): AudioWorkletProcessor;
};
