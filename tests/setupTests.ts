import {AudioContext} from "standardized-audio-context-mock";


Object.defineProperty(window, 'MediaStream', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {})
});
   
Object.defineProperty(window, 'MediaStreamAudioSourceNode', {
    writable: true,
    value: {
        disconnect: jest.fn()
    }
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

(AudioContext.prototype as any).createScriptProcessor = function() {}
AudioContext.prototype.createMediaStreamSource = jest.fn().mockReturnValue(myStream) as any;
AudioContext.prototype.createMediaElementSource = jest.fn().mockReturnValue(myStream) as any;