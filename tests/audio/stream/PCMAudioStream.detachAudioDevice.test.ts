import AudioContext from 'audio-context-mock';

let authConfig, symbl;
let audioStream;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    audioStream = new PCMAudioStream();
});

// Check if `audioContext`, `sourceNode` and `processorNode` exist.
// If they do, close the `audioContext`, disconnect the `sourceNode` and `processorNode`
// Emit `audio_source_disconnected` event

test(
    `PCMAudioStream.detachAudioDevice - Ensure that audioContext, sourceNode 
    and processorNode are being closed`,
    async () => {
        try {
            // setup
            const mediaStream = new MediaStream();
            audioStream.audioContext = new AudioContext();
            audioStream.sourceNode = audioStream.audioContext.createMediaStreamSource(mediaStream);
            audioStream.processorNode = audioStream.audioContext.createScriptProcessor(1024, 1, 1);
            audioStream.gainNode = context.createGain();
            audioStream.sourceNode.connect(audioStream.gainNode);
            audioStream.gainNode.connect(audioStream.processorNode);
            audioStream.processorNode.connect(audioStream.audioContext.destination);

            const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
            const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
            const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
            const gainNodeSpy = jest.spyOn(audioStream.gainNode, 'disconnect');
            const eventEmitterSpy = jest.spyOn(audioStream, 'eventEmitter');
            audioStream.detachAudioDevice();
            expect(audioContextSpy).toBeCalledTimes(1);
            expect(processorNodeSpy).toBeCalledTimes(1);
            expect(gainNodeSpy).toBeCalledTimes(1);
            expect(sourceNodeSpy).toBeCalledTimes(1);
            expect(eventEmitterSpy).toBeCalledWith(new SymblEvent('audio_source_disconnected'));
            expect(eventEmitterSpy).toBeCalledTimes(1);    
        } catch (e) {
            throw new Error(e)
        }
    }
)


test(
    `PCMAudioStream.detachAudioDevice - If audioContext is null then log a 
    warning and do nothing else`,
    async () => {
        try {    
            const audioContextSpy = jest.spyOn(audioStream.audioContext, 'close');
            const sourceNodeSpy = jest.spyOn(audioStream.sourceNode, 'disconnect');
            const processorNodeSpy = jest.spyOn(audioStream.processorNode, 'disconnect');
            const eventEmitterSpy = jest.spyOn(audioStream, 'eventEmitter');
            const warnSpy = jest.spyOn(audioStream.logger, 'warn');
            audioStream.detachAudioDevice();
            expect(audioContextSpy).toBeCalledTimes(0);
            expect(processorNodeSpy).toBeCalledTimes(0);
            expect(sourceNodeSpy).toBeCalledTimes(0);
            expect(eventEmitterSpy).toBeCalledTimes(0);  
            expect(warnSpy).toBeCalledTimes(1);
        } catch (e) {
            throw e
        } 
    }
)