import { Recorder } from "symbl-opus-encdec";
import AudioContext from 'audio-context-mock';
import Symbl from "../../../src/symbl";
import { OpusAudioStream } from '../../../src/audio';
import { APP_ID, APP_SECRET } from '../../constants';

let validConnectionConfig, invalidConnectionConfig, authConfig, symbl, context, mediaStream, sourceNode;
let audioStream;
let streamingAPIConnection;
const opusEncoderMock = {
    "start": jest.fn(),
    "pause": jest.fn(),
    "close": jest.fn(),
}
jest.mock('symbl-opus-encdec', () => {
    return {
        Recorder: jest.fn().mockImplementation( () => {
            return opusEncoderMock;
        })
    }
});

beforeEach(() => {
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
    (done) => {
        audioStream.attachAudioProcessor().then(() => {
            expect(audioStream.opusEncoder.ondataavailable).toBe(audioStream.processAudio);
            done();
        });
    }
)

test(
    'OpusAudioStream.attachAudioProcessor - Test that audio processor was reinitialized successfully',
    (done) => {

        audioStream.attachAudioProcessor(true).then(() => {

            expect(audioStream.opusEncoder.ondataavailable).toBe(audioStream.processAudio);
            expect(Recorder).toBeCalledTimes(1);
            expect(Recorder).toBeCalledWith(audioStream.config);
            done();
        });
    }
)
