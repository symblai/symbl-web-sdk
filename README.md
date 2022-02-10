# Symbl Web SDK

The Symbl Web SDK provides convenient access to the Symbl API from applications written in the Javascript language directly in the browser. It includes a pre-defined set of classes for a simple and clear utilization of APIs.

## Documentation

See the [API docs](https://docs.symbl.ai/docs/).

Browser Support
---------------

|             | Chrome | Edge            | Firefox | Safari |
| ------------|--------|-----------------|---------|--------|
| **macOS**   | ✓      | ✓               | ✓       | ✓      |
| **Windows** | ✓      | ✓               | ✓       | -      |
| **Linux**   | ✓      | -               | ✓       | -      |
| **iOS**     | ✓      | -               | ✓       | ✓      |
| **Android** | ✓      | -               | ✓       | ✓      |

## Installation

```js
npm install @symblai/symbl-web-sdk
```

## Build

If you'd like to build a local copy of the SDK you will need Node.js installed and you can simply run the following command inside of the repository folder:

`npm install && npm run build`

Your build will be located in the `dist/` folder.

## Setup

In order to use the Symbl Web SDK you need to include it via script tags in your HTML file or in the case of a front-end web application using a framework such as React, import it in the ES2015 style.

HTML script:
```html
<script src="https://sdk.symbl.ai/js/beta/symbl-web-sdk/latest/symbl.min.js"></script>
```
or
```html
<script src="https://sdk.symbl.ai/js/beta/symbl-web-sdk/v0.8.6/symbl.min.js"></script>
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


### Additional Web SDK configs

These are configs that have been added that are specific to the Web SDK.


| Name         | Default | Description |
|--------------|---------|-------|
| `sourceNode` | `null`  | For passing in an external [MediaStreamAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) object. By default the Web SDK will handle audio context and source nodes on it's own, though if you wish to handle that externally we've provided that option. |
| `reconnectOnError` | `false` | If `true` the Web SDK will attempt to reconnect to the WebSocket in case of error. You can also make sure of our `onReconnectFail` callback which will fire in case the reconnection attempt fails. |


Usage Example:

```js
const id = btoa("my-first-symbl-ai-code");

const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	sourceNode: sourceNode,
	reconnectOnError: true,
	handlers: { // Read the handlers section for more
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
await symbl.start(stream);
```

### Handlers / Callbacks

Web SDK provides a suite of callbacks for you to utilize in your application.

| Name | Description |
|------|-------------|
| `onClose(event)` |  Fires when the WebSocket connection closes for any reason.
| `onSpeechDetected(data)` | To retrieve the real-time transcription results as soon as they are detected. You can use this callback to render live transcription which is specific to the speaker of this audio stream. [View an example of the response here](https://docs.symbl.ai/docs/javascript-sdk/reference/#onspeechdetected) |
| `onMessageResponse(messages)` | This callback function contains the "finalized" transcription data for this speaker and if used with multiple streams with other speakers this callback would also provide their messages. [View an example of the response here](https://docs.symbl.ai/docs/javascript-sdk/reference/#onmessageresponse) |
| `onInsightResponse(insights)` | This callback provides you with any of the detected insights in real-time as they are detected. As with the `onMessageCallback` this would also return every speaker's insights in case of multiple streams. [View an example of the response here](https://docs.symbl.ai/docs/javascript-sdk/reference/#oninsightresponse) |
| `onTrackerResponse(trackers)` | This callback provides you with any of the detected trackers in real-time as they are detected. As with the `onMessageCallback` this would also return every tracker in case of multiple streams. [View an example of the response here](https://docs.symbl.ai/docs/javascript-sdk/reference/#ontrackerresponse) |
| `onTopicResponse(topics)` | This callback provides you with any of the detected topics in real-time as they are detected. As with the onMessageCallback this would also return every topic in case of multiple streams. [View an example of the response here](https://docs.symbl.ai/docs/javascript-sdk/reference/#ontopicresponse) |
| `onRequestError(err)` | Fires when the WebSocket has an error. |
| `onConversationCompleted(message)` | Fires when the `conversation_completed` event is recieved from the WebSocket. |
| `onReconnectFail(err)` | Fires when the reconnection attempt fails. Related to the `reconnectOnError` config. |
| `onStartedListening(message)` | Fires when the `started_listening` event is received from the WebSocket. |
| `onRequestStart(message)` | Fires when the `recognition_started` event is received from the WebSocket |
| `onRequestStop(message)` | Fires when the `recognition_stopped` event is received from the WebSocket |

### Using `createStream` to start a realtime request

Creating a stream using `symbl.startRealtimeRequest(config)` has been deprecated in favor of `symbl.createStream(config)`. For `createStream`, the WebSocket is started in a non processing state. You must send the start request before processing any audio. 

After the stream is created, you need to call `symbl.start(stream)` to start the stream.

## How to pass in a custom sourceNode

If you wish you can pass in a custom [MediaStreamAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) object to the Web SDK. By default the Web SDK will create the AudioContext and the MediaStreamAudioSourceNode object automatically but using this will give you more control over those.

Once you create the MediaStreamAudioSourceNode object you can pass it via the connectionConfig as `sourceNode`

```js

// create the MediaStreamAudioSourceNode
const AudioContext = window.AudioContext || window.webkitAudioContext;
stream = await navigator.mediaDevices.getUserMedia({
	audio: true,
	video: false
});
context = new AudioContext();
const sourceNode = context.createMediaStreamSource(stream);

symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	basePath: 'https://api.symbl.ai',
});

const id = btoa("my-first-symbl-ai-code");
// pass in the MediaStreamAudioSourceNode as sourceNode
const connectionConfig = {
	id,
	sourceNode,
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

### Updating your external source node

If you wish to update your external source node you can do se by using the `symbl.updateSourceNode` function:

```js
symbl.updateSourceNode(stream, sourceNode);
```

## Passing in custom `ondevicechange` handler.

By default the Symbl Web SDK will handle the `ondevicechange` event and send a `modify_request` event to modify the sample rate with the new device's sample rate. If you wish to override this logic you can pass in your own `ondevicechange` handler in the handlers config.


```js
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	basePath: 'https://api.symbl.ai',
});
const id = btoa("my-first-symbl-ai-code");
// pass in the MediaStreamAudioSourceNode as sourceNode
const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	config: {
		languageCode: 'en-US',
		sampleRateHertz: 48000
	},
	handlers: {
		ondevicechange: () => {
		  // add your logic here.
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

### Using the `deviceChanged` callback

You can also make use of our callback using our `deviceChanged` callback:

```js
symbl.deviceChanged = () => {
	// Add your logic here
}
```



## Transcribing live audio input through the microphone

As a simple test of the Streaming API you can simply setup a live microphone and push the audio stream using the browser APIs to access the microphone.

Initialize the SDK and connect via the built-in websocket connector. This will output the live transcription to the console.

NOTE: The `symbl.startRealtimeRequest` function creates a new AudioContext, so the call must be made on user interaction, such as a button click.

```js
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	// accessToken: '<your Access Token>', // can be used instead of appId and appSecret
	// basePath: '<your custom base path (optional)>',
});

const id = btoa("my-first-symbl-ai-code");

const connectionConfig = {
	id,
	insightTypes: ['action_item', 'question'],
	config: {
		meetingTitle: 'My Test Meeting ' + id,
		confidenceThreshold: 0.7,
		timezoneOffset: 480, // Offset in minutes from UTC
		languageCode: 'en-US',
		// sampleRateHertz: 48000
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
	const connection = await symbl.startRealtimeRequest(connectionConfig);
})();
```

## Muting and unmuting the connected device

You can mute and unmute the connected device by simply calling `symbl.mute()` or `symbl.unmute()`.

### Muting

A quick snippet on how to use the mute method.

```js
(async () => {
	const connection = await symbl.startRealtimeRequest(connectionConfig);
	await symbl.mute(connection);
})();

```

### Unmuting

A quick snippet on how to use the unmute method.

```js
(async () => {
	const connection = await symbl.startRealtimeRequest(connectionConfig);
	await symbl.unmute(connection);
})();

```

## Reconnecting to an existing realtime connection

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
	const connection = await symbl.startRealtimeRequest(connectionConfig);
})();
```


## Subscribing to an existing realtime connection with Subscribe API

With the Subscribe API you can connect to an existing connection via the connection ID. Building on the previous example we can connect to that ID. You'll want to open this example in a different browser while the realtime transcription example is running.

```js
/**
 * id: connectionId
 * cb: message callback
 * reconnectOnerror: boolean
 */
symbl.subscribeToStream(id, (message) => { ... }, true);
```

### Subscribe API Options

| Name         | Default | Description |
|--------------|---------|-------|
| `reconnectOnError` | `true` | If `true` the Web SDK will attempt to reconnect to the WebSocket in case of error. You can also make sure of our `onReconnectFail` callback which will fire in case the reconnection attempt fails. |

### Subscribe API Handlers

| Name | Description |
|------|-------------|
| `onMessage(message)` | Fired any time a message is received. |
| `onSubscribe()` | Fired when the connection intially subscribes |
| `onClose()` | Fired when the connection is closed |
| `onReconnectFail(err)` | Fires when the reconnection attempt fails. Related to the `reconnectOnError` config. |

## Stopping realtime connection

In order to end the connection to the realtime WebSocket you'll need to use the following command with your `connection` object:

```js
symbl.stopRequest(connection);
```

If you do not sever the connection you could use more minutes of time than intended, so it is recommended to always end the connection programmatically.

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
