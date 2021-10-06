# Symbl Web SDK

The Symbl Web SDK provides convenient access to the Symbl API from applications written in the Javascript language directly in the browser. It includes a pre-defined set of classes for a simple and clear utilization of APIs.

## Documentation

See the [API docs](https://docs.symbl.ai/docs/).

## Setup

In order to use the Symbl Web SDK you need to include it via script tags in your HTML file or in the case of a front-end web application using a framework such as React, import it in the ES2015 style.

HTML script:
```html
<script src="symbl.min.js"></script>
```

Web Application import:
```js
import { sdk } from "symbl";
```

## Authentication

The SDK needs to be initialized with your account's credentials (appId & appSecret) which is
available in your [Symbl Platform][api-keys].

```js
const symbl = new sdk.Symbl();
symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	basePath: '<your custom base path (optional)>',
});
```

## Transcribing live audio input through the microphone

As a simple test of the Streaming API you can simply setup a live microphone and push the audio stream using the browser APIs to access the microphone.

Initialize the SDK and connect via the built-in websocket connector. This will output the live transcription to the console.

```js
const symbl = new sdk.Symbl();

symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	basePath: '<your custom base path (optional)>',
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
	const connection = await symbl.startRealtimeRequest(connectionConfig, true);
})();
```

## Reconnecting to an existing realtime connection

In the case that a user closes their browser or has an interruption in their connection, you can call a reconnect function to reconnect using configuration details saved from the initial realtime request.

```js
const symbl = new sdk.Symbl();

symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	basePath: '<your custom base path (optional)>',
});

symbl.reconnect();
```

## Subscribing to an existing realtime connection with Subscribe API

With the Subscribe API you can connect to an existing connection via the connection ID. Building on the previous example we can connect to that ID. You'll want to open this example in a separate tab.

```js
const symbl = new sdk.Symbl();

symbl.init({
	appId: '<your App ID>',
	appSecret: '<your App Secret>',
	basePath: '<your custom base path (optional)>',
});

const id = btoa("symbl-ai-is-the-best");

symbl.subscribeToStream(id, (data) => {
	console.log('data:', data);
})
```

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