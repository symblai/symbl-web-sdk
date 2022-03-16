import { Recorder } from "symbl-opus-encdec";
jest.mock("symbl-opus-encdec");
import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { OpusAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, context, mediaStream, sourceNode;
let audioStream;
let streamingAPIConnection;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    const opusConfig: any = {
        numberOfChannels: 1,
        encoderSampleRate: 48000,
        encoderFrameSize: 20,
        maxFramesPerPage: 40,
        encoderComplexity: 6,
        streamPages: true,
        rawOpus: true
    };
    context = new AudioContext();
    mediaStream = new MediaStream();
    sourceNode = context.createMediaStreamSource(mediaStream);
    audioStream = new OpusAudioStream(sourceNode, opusConfig);
});

/*
if (reInitialise) {
    this.config.sourceNode = super.sourceNode;
    this.opusEncoder = new Recorder(this.config);
}

if (this.opusEncoder) {
    this.opusEncoder.ondataavailable = this.processAudio;
}
*/

test(
    'OpusAudioStream.attachAudioProcessor - Test that audio processor was attached successfully',
    async () => {
        audioStream.attachAudioProcessor();
        expect(audioStream.opusEncoder.ondataavailable).toBe(audioStream.processAudio);
    }
)

test(
    'OpusAudioStream.attachAudioProcessor - Test that audio processor was reinitialized successfully',
    async () => {
        audioStream.attachAudioProcessor(true);
        expect(audioStream.opusEncoder.ondataavailable).toBe(audioStream.processAudio);
        expect(Recorder).toBeCalledTimes(1);
        expect(Recorder).toBeCalledWith(audioStream.config);
    }
)
