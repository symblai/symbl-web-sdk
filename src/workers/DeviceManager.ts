type DeviceConfig = {
	audio: boolean;
	video: boolean;
}

export = class DeviceManager {
	currentStream: typeof MediaStream;

	/**
	 * Get and return an audio/visual device to access a MediaStream
	 * @param {object} deviceConfig - options for MediaStream device  
	 */
	async getDevice(deviceConfig: DeviceConfig) {
		let stream = null;
		try {
			stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
			this.currentStream = stream;
			return stream;
		} catch(err) {		
			console.log(`Error: ${err}`);
			return stream;
		}
	}
}