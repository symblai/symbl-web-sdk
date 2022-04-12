import { Recorder } from "symbl-opus-encdec";

global.URL.createObjectURL = jest.fn();
Recorder.isRecordingSupported = jest.fn(() => true)

const myAudioTrack = {
    "applyConstraints": jest.fn(),
    "getSettings": jest.fn(() => {
    	return {
    		sampleRate: 48000
    	}
    })
};

Object.defineProperty(window, 'AudioContext', {
	value: jest.fn().mockImplementation(() => {
		return {
			createMediaStreamSource: jest.fn(() => {
				disconnect: jest.fn()
			}),
			createElementStreamSource: jest.fn(() => {
				disconnect: jest.fn()
			}),
			createScriptProcessor: jest.fn(() => {
				disconnect: jest.fn()
			}),
			createGain: jest.fn(() => {
				disconnect: jest.fn()
			}),
		}
	})
});

Object.defineProperty(window, 'MediaStream', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
		return {
			getAudioTracks: jest.fn(() => {
				return [myAudioTrack]
			})
		}
	})
});

Object.defineProperty(window, 'WebAssembly', {
	value: jest.fn(() => true)
})

const myStream = new MediaStream();

Object.defineProperty(window, 'MediaStreamAudioSourceNode', {
    writable: true,
    value: jest.fn().mockImplementation(() => {
    	return {
	        disconnect: jest.fn()
	    }
	})
});

Object.defineProperty(window, 'MediaElementAudioSourceNode', {
    writable: true,
    value: jest.fn().mockImplementation(() => {
    	return {
	        disconnect: jest.fn()
	    }
	})
});

Object.defineProperty(window, 'GainNode', {
	value: jest.fn().mockImplementation(() => {
		return {
			disconnect: jest.fn()
		}
	})
});

const device1 = {
	deviceId: "default",
	kind: "audioinput",
	label: "",
	groupId: "default"
};

const mockGetUserMedia = jest.fn(() => {
    return myStream;
});

const mockEnumerateDevices = jest.fn(() => {
    console.log('enumerate Devices called');
    return [device1];
});

// const mockEnumerateDevices = jest.fn(() => Promise.resolve([device1]))

Object.defineProperty(navigator, 'mediaDevices', {
    value: {
        getUserMedia: mockGetUserMedia,
        enumerateDevices: mockEnumerateDevices
    },
});


Object.defineProperty(window, 'Worker', {
    value: jest.fn().mockImplementation(() => {
    	return {
    		addEventListener: jest.fn(),
    		postMessage: jest.fn(),
    		removeEventListener: jest.fn(),
    		start: jest.fn(),
    		port: {}
    	} 
    })
});
