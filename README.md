# Symbl Web SDK

The Symbl Web SDK provides convenient access to the Symbl API from applications written in the Javascript language directly in the browser. It includes a pre-defined set of classes for a simple and clear utilization of APIs.

Skip to the [Labs-specific features section](#labs-specific-features) to view the labs-specific features.

Browser Support
---------------

|             | Chrome | Edge            | Firefox | Safari |
| ------------|--------|-----------------|---------|--------|
| **macOS**   | ✓      | ✓               | ✓       | ✓      |
| **Windows** | ✓      | ✓               | ✓       | -      |
| **Linux**   | ✓      | -               | ✓       | -      |

## Installation

```js
npm install @symblai/symbl-web-sdk@labs
```

## Build

If you'd like to build a local copy of the SDK you will need Node.js installed and you can simply run the following command inside of the repository folder:

`npm install && npm run build`

Your build will be located in the `dist/` folder.

## Setup

In order to use the Symbl Web SDK you need to include it via script tags in your HTML file or in the case of a front-end web application using a framework such as React, import it in the ES2015 style.

HTML script:
```html
<script src="https://storage.googleapis.com/symbl-web-sdk/latest-labs/symbl.min.js"></script>
```

Web Application import:
```js
import symbl from "@symblai/symbl-web-sdk";
```

## Authentication

The SDK needs to be initialized with your account's credentials (appId & appSecret) which is
available in your [Symbl Platform][api-keys].

```js
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	// basePath: '<your custom base path (optional)>',
	// logLevel: 'debug' // you can set which log level you want to view
});
```

## Streaming API config options

The full details of the Streaming API config options can be seen [here](https://docs.symbl.ai/docs/streaming-api/api-reference/#request-parameters).

## Labs-Specific Features

You can use labs features by setting your `basePath` in the above `init` call to `https://api-labs.symbl.ai`.


### New Config options

* `disconnectonOnStopRequest` (optional, default: true) - If set to `false` the WebSocket will be set to a non-processing state if the stop_request event is set. In this state, the connection can be re-opened if the start_request event is sent. If `true` the WebSocket connection will close as normal.

* `disconnectOnStopRequestTimeout` (optional) - Accepts a value of 0 to 1800 seconds. Indicates how long this connection will remain in a non-processing state before timing out.

* `noConnectionTimeout` (optional) - Accepts a value of 0 to 1800 seconds. Indicates how long a connection will remain active even when no one is connected. By using the same `connectionId` anyone can reconnect to this WebSocket before it times out completely.

* `sourceNode` (optional, default: null) - For passing in an external [MediaStreamAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) object. By default the Web SDK will handle audio context and source nodes on it's own, though if you wish to handle that externally we've provided that option.

* `config.encoding` (optional, default: 'linear16') - Accepts either `'opus'` or `'linear16'`. For `linear16`, you must set the `sampleRateHertz` option. For `opus` the `sampleRateHertz` should always be 48000.

* `handlers.ondevicechange` (optional) - By default Symbl Web SDK will provide the ondevicehandler logic, which just takes the new device and sends the sample rate over to our servers. If you wish to override this logic you can do so by passing an `ondevicechange` function into the `handlers` section of the config. You can assign a function to `symbl.deviceChanged` as a callback to when the event is fired.

* `reconnectOnError` (optional, default: true) - If `true` the Web SDK will attempt to reconnect to the WebSocket in case of error.

Example:

```js
const id = btoa("symbl-ai-is-the-best");

const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	disonnectOnStopRequest: false,
	disconnectOnStopRequestTimeout: 300,
	noConnectionTimeout: 300,
	sourceNode: sourceNode,
	reconnectOnError: true,
	config {
		encoding: 'opus',
		sampleRateHertz: 48000
	},
	handlers: {
		ondevicechange: () => {
			alert('device changed!');
		},
		...
	}
	...
}

...

// Creates the WebSocket in a non-processing state
const stream = await symbl.createStream(connectionConfig);

// Send the start request
await symbl.unmute(stream);
```

### Using createStream to start a realtime request

Creating a stream using `symbl.startRealtimeRequest(config)` has been deprecated in favor of `symbl.createStream(config)`. For `createStream`,
the WebSocket is started in a non processing state. You must send the start request before processing any audio. 

The `createStream` function returns a `stream` object. In order to start the connection you can call `symbl.unmute(stream)`. Unmute will send 
the start request and start the audio streaming.

### Using mute/unmute to pause a connection.

If you set the `disconnectOnStopRequest` flag to false you can use `symbl.mute(stream)` and `symbl.unmute(stream)` to suspend and resume the connection.
Muting the connection makes it so you're not being billed during times of silence.

#### ```unmute(stream)```

Receive the stream received from createStream as argument. Unmutes the audio by setting gain value to 1. If `disconnectOnStopRequest` config is set to `false` the start request will be sent to the Websocket and the [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) will start.

#### ```mute(stream)```

Receive the stream received from createStream as argument. Mutes the audio by setting gain value to 0. If `disconnectOnStopRequest` config is set to `false` the stop will be sent to the Websocket and the [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) will be suspended.

## Use `disconnectOnStopRequest` to pause and resume a stream

```js
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	basePath: 'https://api-labs.symbl.ai',
});

const id = btoa("symbl-ai-is-the-best");

const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	disconnectOnStopRequest: false,
	disconnectOnStopRequestTimeout: 300,
	noConnectionTimeout: 300,
	config: {
		meetingTitle: 'My Test Meeting ' + id,
		confidenceThreshold: 0.7,
		timezoneOffset: 480, // Offset in minutes from UTC
		languageCode: 'en-US',
		encoding: 'opus',
		sampleRateHertz: 48000
	},
	speaker: {
		// Optional, if not specified, will simply not send an email in the end.
		userId: '', // Update with valid email
		name: ''
	},
	handlers: {
		/**
		 * This will return live speech-to-text transcription of the call.
		 */
		onSpeechDetected: (data) => {
		  if (data) {
		    const {punctuated} = data
		    console.log('Live: ', punctuated && punctuated.transcript)
		    console.log('');
		  }
		  // console.log('onSpeechDetected ', JSON.stringify(data, null, 2));
		},
		/**
		 * When processed messages are available, this callback will be called.
		 */
		onMessageResponse: (data) => {
		  // console.log('onMessageResponse', JSON.stringify(data, null, 2))
		},
		/**
		 * When Symbl detects an insight, this callback will be called.
		 */
		onInsightResponse: (data) => {
		  // console.log('onInsightResponse', JSON.stringify(data, null, 2))
		},
		/**
		 * When Symbl detects a topic, this callback will be called.
		 */
		onTopicResponse: (data) => {
		  // console.log('onTopicResponse', JSON.stringify(data, null, 2))
		}
	}
};

(async () => {
	// Creates the WebSocket in a non-processing state
	const stream = await symbl.createStream(connectionConfig);

	// Send the start request
	await symbl.unmute(stream);

	// Suspend the stream after 10 seconds
	window.setTimeout(() => {
		await symbl.mute(stream);
	}, 10000)

	// Re-send the start request to resume the stream after another 10 seconds
	window.setTimeout(() => {
		await symbl.unmute(stream);
	}, 10000)
})();
```

## Transcribing live audio input through your device

As a simple test of the Streaming API you can simply setup a live microphone and push the audio stream using the browser APIs to access the microphone.

Initialize the SDK and connect via the built-in websocket connector. This will output the live transcription to the console.

```js
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	basePath: 'https://api-labs.symbl.ai',
});

const id = btoa("symbl-ai-is-the-best");

const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	config: {
		meetingTitle: 'My Test Meeting ' + id,
		confidenceThreshold: 0.7,
		timezoneOffset: 480, // Offset in minutes from UTC
		languageCode: 'en-US',
		sampleRateHertz: 48000
	},
	speaker: {
		// Optional, if not specified, will simply not send an email in the end.
		userId: '', // Update with valid email
		name: ''
	},
	handlers: {
		/**
		 * This will return live speech-to-text transcription of the call.
		 */
		onSpeechDetected: (data) => {
		  if (data) {
		    const {punctuated} = data
		    console.log('Live: ', punctuated && punctuated.transcript)
		    console.log('');
		  }
		  // console.log('onSpeechDetected ', JSON.stringify(data, null, 2));
		},
		/**
		 * When processed messages are available, this callback will be called.
		 */
		onMessageResponse: (data) => {
		  // console.log('onMessageResponse', JSON.stringify(data, null, 2))
		},
		/**
		 * When Symbl detects an insight, this callback will be called.
		 */
		onInsightResponse: (data) => {
		  // console.log('onInsightResponse', JSON.stringify(data, null, 2))
		},
		/**
		 * When Symbl detects a topic, this callback will be called.
		 */
		onTopicResponse: (data) => {
		  // console.log('onTopicResponse', JSON.stringify(data, null, 2))
		}
	}
};

(async () => {
	// Creates the WebSocket in a non-processing state
	const stream = await symbl.createStream(connectionConfig);

	// Send the start request
	await stream.start(stream);
})();
```

## Reconnecting to an existing realtime stream

In the case that a user closes their browser or has an interruption in their WebSocket connection you can use the `store` object to grab the Connection ID you last used.

```js
const id = symbl.store.get('connectionID');

const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	config: {
		meetingTitle: 'My Test Meeting ' + id,
		confidenceThreshold: 0.7,
		timezoneOffset: 480, // Offset in minutes from UTC
		languageCode: 'en-US',
		sampleRateHertz: 44100
	},
	speaker: {
		// Optional, if not specified, will simply not send an email in the end.
		userId: '', // Update with valid email
		name: ''
	},
	handlers: {
		/**
		 * This will return live speech-to-text transcription of the call.
		 */
		onSpeechDetected: (data) => {
		  if (data) {
		    const {punctuated} = data
		    console.log('Live: ', punctuated && punctuated.transcript)
		    console.log('');
		  }
		  // console.log('onSpeechDetected ', JSON.stringify(data, null, 2));
		},
		/**
		 * When processed messages are available, this callback will be called.
		 */
		onMessageResponse: (data) => {
		  // console.log('onMessageResponse', JSON.stringify(data, null, 2))
		},
		/**
		 * When Symbl detects an insight, this callback will be called.
		 */
		onInsightResponse: (data) => {
		  // console.log('onInsightResponse', JSON.stringify(data, null, 2))
		},
		/**
		 * When Symbl detects a topic, this callback will be called.
		 */
		onTopicResponse: (data) => {
		  // console.log('onTopicResponse', JSON.stringify(data, null, 2))
		}
	}
};

(async () => {
	// Creates the WebSocket in a non-processing state
	const stream = await symbl.createStream(connectionConfig);

	// Send the start request
	await stream.start(stream);
})();
```


## Subscribing to an existing realtime stream with Subscribe API

With the Subscribe API you can connect to an existing stream via the connection ID. Building on the previous example we can connect to that ID. You'll want to open this example in a different browser while the realtime transcription example is running.

```js
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	// basePath: '<your custom base path (optional)>',
});

const id = btoa("symbl-ai-is-the-best");

symbl.subscribeToStream(id, (data) => {
	console.log('data:', data);
})
```

## Stopping realtime stream

In order to end the stream to the realtime WebSocket you'll need to use the following command with your `stream` object:

```js
symbl.stopRequest(stream);
```

If you do not sever the stream you could use more minutes of time than intended, so it is recommended to always end the stream programmatically.

<!-- If you'd like to see a more in-depth examples for the Streaming API, please take a look at the extended Streaming examples [here][Streaming-Examples]. -->

<!-- ## Transcribing live audio input through Telephony API

As a simple test of the Telephony API you can call a phone number and see a live transcription of your phone call in the console.

* Will update with live telephony example. -->

<!-- If you'd like to see a more in-depth examples for the Telephony API, please take a look at the extended Telephony examples [here][Telephony-Examples]. -->

<!-- ## Async Example

* Will update with async example. -->

## Need support?

<!-- If you are looking for some specific use cases and more in-depth examples do check our [examples][examples] folder. -->

If you can't find your answers, do let us know at support@symbl.ai or join our slack channel [here][slack-invite].

[api-keys]: https://platform.symbl.ai/#/login
[symbl-docs]: https://docs.symbl.ai/docs/javascript-sdk/introduction
[streaming_api-docs]: https://docs.symbl.ai/docs/streamingapi/introduction
[telephony_api-docs]: https://docs.symbl.ai/docs/telephony/introduction
[async_text-docs]: https://docs.symbl.ai/docs/async-api/overview/text/post-text/
[async_audio-docs]: https://docs.symbl.ai/docs/async-api/overview/audio/post-audio
[examples]: examples
[slack-invite]: https://symbldotai.slack.com/join/shared_invite/zt-4sic2s11-D3x496pll8UHSJ89cm78CA#/
[streaming-examples]: examples/Streaming_API
[telephony-examples]: examples/Telephony_API