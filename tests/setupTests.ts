import {AudioContext} from "standardized-audio-context-mock";


Object.defineProperty(window, 'MediaStream', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {})
});
   
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



const myStream = new MediaStream();
const device1 = {
	deviceId: "default",
	kind: "audioinput",
	label: "",
	groupId: "default"
}
const mockGetUserMedia = jest.fn(() => {
    return myStream;
})

const mockEnumerateDevices = jest.fn(() => {
    console.log('enumerate Devices called');
    return [device1];
})

// const mockEnumerateDevices = jest.fn(() => Promise.resolve([device1]))

Object.defineProperty(navigator, 'mediaDevices', {
    value: {
        getUserMedia: mockGetUserMedia,
        enumerateDevices: mockEnumerateDevices
    },
});

const myStreamSourceNode = new MediaStreamAudioSourceNode(new AudioContext() as any, {
	mediaStream: myStream
});

// const myElementSourceNode = new MediaElementAudioSourceNode(new AudioContext() as any, {
// 	mediaElement: document.createElement("audio")
// });

(AudioContext.prototype as any).createScriptProcessor = jest.fn().mockImplementation(() => {
	return {
		disconnect: jest.fn()
	}
})
AudioContext.prototype.createMediaStreamSource = jest.fn().mockImplementation(() => {
	return myStreamSourceNode;
});
AudioContext.prototype.createMediaElementSource = jest.fn(() => {
	return {
		disconnect: jest.fn()
	}
}) as any;