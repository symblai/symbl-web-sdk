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

This section will be expanded.

## Transcribing live audio input through the microphone

As a simple test of the Streaming API you can simply setup a live microphone and push the audio stream using the browser APIs to access the microphone.

Initialize the SDK and connect via the built-in websocket connector. This will output the live transcription to the console.

Will update with live audio example.

<!-- If you'd like to see a more in-depth examples for the Streaming API, please take a look at the extended Streaming examples [here][Streaming-Examples]. -->

## Transcribing live audio input through Telephony API

As a simple test of the Telephony API you can call a phone number and see a live transcription of your phone call in the console.

Will update with live telephony example.

<!-- If you'd like to see a more in-depth examples for the Telephony API, please take a look at the extended Telephony examples [here][Telephony-Examples]. -->

## Async Example

Will update with async example.

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