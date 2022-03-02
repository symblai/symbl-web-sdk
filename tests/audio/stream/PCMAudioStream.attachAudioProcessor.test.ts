let validConnectionConfig, invalidConnectionConfig, authConfig, symbl;
let audioStream;
let streamingAPIConnection;
beforeAll(() => {
    authConfig = {
        appId: APP_ID,
        appSecret: APP_SECRET
    };
    symbl = new Symbl(authConfig);
    audioStream = new PCMAudioStream();
});

test(
    'PCMAudioStream.attachAudioProcessor - Test that audio processor was attached successfully',
    async () => {
        audioStream.processAudio = jest.fn(x => x+2);
        audioStream.attachAudioProcessor();
        expect(audioStream.procesorNode.onaudioprocess).toBe(audioStream.processAudio);
    }
)

test(
    'PCMAudioStream.attachAudioProcessor - Test that audio processor was not attached successfully',
    async () => {
        audioStream.processAudio = null
        audioStream.attachAudioProcessor();
        expect(audioStream.procesorNode.onaudioprocess).toBe(null);
    }
)