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
	async getDevice(deviceConfig: DeviceConfig) {
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

	deviceConnect(streamSource: any) {
		const currentStream = streamSource || this.currentStream;
		const AudioContext = window.AudioContext;
		const context = new AudioContext();
		const source = context.createMediaStreamSource(currentStream);
		const gainNode = context.createGain();
		source.connect(gainNode);

		const mediaRecorder = new MediaRecorder(currentStream);
		return mediaRecorder;
	}
}