type DeviceConfig = {
	audio: boolean;
	video: boolean;
}

export = class DeviceManager {
	currentStream: any;

	/**
	 * Get and return an audio/visual device to access a MediaStream
	 * @param {object} deviceConfig - options for MediaStream device  
	 */
	async getDefaultDevice(deviceConfig: DeviceConfig) {
		let stream = null;
		try {
			stream = await navigator.mediaDevices.getUserMedia(deviceConfig);
			this.currentStream = stream;
			return stream;
		} catch (err) {
			console.log(`Error: ${err}`);
			return stream;
		}
	}

	async deviceConnect(connection: any) {
		const streamSource = await this.getDefaultDevice({audio: true, video: false});
		const AudioContext = window.AudioContext;
		const context = new AudioContext();
		const source = context.createMediaStreamSource(streamSource);
		const processor = context.createScriptProcessor(1024, 1, 1);
		const gainNode = context.createGain();
		source.connect(gainNode);
		gainNode.connect(processor);
		processor.connect(context.destination);
		processor.onaudioprocess = (e) => {
			// convert to 16-bit payload
			const inputData = e.inputBuffer.getChannelData(0);
			const targetBuffer = new Int16Array(inputData.length);
			for (let index = inputData.length; index > 0; index--) {
			    targetBuffer[index] = 32767 * Math.min(1, inputData[index]);
			}
			// Send audio stream to websocket.
			connection.sendAudio(targetBuffer.buffer);
		};
	}
}