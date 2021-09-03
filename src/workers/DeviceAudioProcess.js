class DeviceAudioProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
        // Convert to 16-bit payload
        // const inputData = event.inputBuffer.getChannelData(0);
        // const targetBuffer = new Int16Array(inputData.length);
        // for (let index = inputData.length; index > 0; index -= 1) {

        //     targetBuffer[index] = 32767 * Math.min(
        //         1,
        //         inputData[index]
        //     );

        // }
    }
}

registerProcessor('device-audio-processor', DeviceAudioProcessor);