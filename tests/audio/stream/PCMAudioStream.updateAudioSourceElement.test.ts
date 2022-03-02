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
    `PCMAudioStream.updateAudioSourceElement - Check that \`detachAudioSourceElement\`,
    \`attachAudioSourceElement\` and \`attachAudioProcessor\` are invoked.`,
    async () => {
        try {
            // setup
            const audioElement = document.createElement("audio");
            audioElement.src = "test.mp3";
            const detachElementSpy = jest.spyOn(audioStream, 'detachAudioSourceElement');
            const attachElementSpy = jest.spyOn(audioStream, 'attachAudioSourceElement');
            const attachProcessorSpy = jest.spyOn(audioStream, 'attachAudioProcessor');
            audioStream.updateAudioSourceElement(audioElement);
            expect(detachElementSpy).toBeCalledTimes(1);
            expect(attachElementSpy).toBeCalledTimes(1);
            expect(attachElementSpy).toBeCalledWith(audioElement)
            expect(attachProcessorSpy).toBeCalledTimes(1);
        } catch (e) {
            throw new Error(e)
        }
    }
)