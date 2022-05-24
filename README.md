# Symbl Web SDK

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=symblai_symbl-web-sdk&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=symblai_symbl-web-sdk)

You can read the docs for the Symbl Web SDK at https://docs.symbl.ai/docs/web-sdk/overview

>This feature is in Beta. If you have questions or comments, email [devrelations@symbl.ai](mailto:devrelations@symbl.ai).


The Web SDK is a Typescript application that allows you to add Symbl’s Conversation Intelligence into your JavaScript application directly into the browser. It provides a pre-defined set of classes for easy utilization of our Streaming and Subscribe APIs.

>The Web SDK is currently available with Symbl’s Streaming and Subscribe APIs.

## Supported Browsers
The following web browser supported with the Web SDK are given below: 

Operating System | Chrome | Edge | Firefox | Safari |
---------- | ------- | ------- | ------ | ------ |
macOS | ✅ | ✅ | ✅ | ✅ | 
Windows | ✅ | ✅ | ✅ | - |
Linux| ✅ | ✅ | ✅ | - | 


## Prerequisites

Before using the Web SDK you must [Sign up with Symbl.ai](https://platform.symbl.ai) to generate your own App ID and App Secret values, which is used for authentication.

## Installation

### Using npm

Install the Web SDK using `npm` with the following command:

```shell
npm i  @symblai/symbl-web-sdk
```

### CDN

You can also import the file into your HTML appliaction using our CDN.

#### Versioned CDN

```html
<script src="https://sdk.symbl.ai/js/beta/symbl-web-sdk/v1.0.4/symbl.min.js"></script>
```

#### Latest CDN

```html
<script src="https://sdk.symbl.ai/js/beta/symbl-web-sdk/latest/symbl.min.js"></script>
```

You would then access the `Symbl` class via the `window` method:

```js
const Symbl = window.Symbl;
const symbl = new Symbl({
  accessToken: "< YOUR ACCESS TOKEN >"
});
```

>For production environments we recommend using the Versioned CDN.


### Importing

You can import the Web SDK in via Browser, ES5 and ES6 syntax:

#### ES6
```js
import {Symbl} from '@symblai/symbl-web-sdk';
```

#### ES5
```js
const {Symbl} = require('@symblai/symbl-web-sdk');
```

#### Browser

```js
const {Symbl} = window;
```


## Authentication

To initialize the Web SDK, you can pass in an access token generated using [Symbl’s Authentication method](https://docs.symbl.ai/docs/developer-tools/authentication/). Alternatively, you can use the App ID and App Secret from the [Symbl Platform](https://platform.symbl.ai). **Using the App ID and App Secret is not meant for production usage, as those are meant be secret.**


The code given below initializes the Web SDK:

```js
const symbl = new Symbl({
    accessToken: '<your Access Token>'
    // appId: '<your App ID>', // Should only be used for development environment
    // appSecret: '<your App Secret>', // Should only be used for development environment
    // basePath: '<your custom base path>',// optional
    // logLevel: 'debug' // Sets which log level you want to view
});
```

## Getting Started

In order to get started with the Symbl Web SDK we will start with a basic Hello World implementation

### Example

The following example opens a WebSocket connection with the Symbl Streaming API and starts processing audio data from the default input device (microphone). After 60 seconds this sample code stops audio processing and closes the WebSocket connection.

View the [Importing](#importing) section for the various ways to import the Web SDK.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Symbl Web SDK example</title>
  <script src="https://sdk.symbl.ai/js/beta/symbl-web-sdk/latest/symbl.min.js"></script>
  <script>
    const start = async () => {


      try {

          // Symbl recommends replacing the App ID and App Secret with an Access Token for authentication in production applications.
          // For more information about authentication see https://docs.symbl.ai/docs/developer-tools/authentication/.
          const symbl = new Symbl({
              appId: '<your App ID>',
              appSecret: '<your App Secret>',
              // accessToken: '<your Access Token>' // for production use
          });
          
          // Open a Streaming API WebSocket Connection and start processing audio from your input device.
          const connection = await symbl.createAndStartNewConnection();

          // Retrieve real-time transcription from the conversation.
          connection.on("speech_recognition", (speechData) => {
            const name = speechData.user ? speechData.user.name : "User";
            const transcript = speechData.punctuated.transcript;
            console.log(`${name}: `, transcript);
            document.querySelector("#speechRecognition").innerHTML = `${name}: ${transcript}`;
          });
          
          // This is a helper method for testing purposes.
          // It waits 60 seconds before continuing to the next API call.
          await Symbl.wait(60000);
          
          // Stops processing audio, but keeps the WebSocket connection open.
          await connection.stopProcessing();
          
          // Closes the WebSocket connection.
          connection.disconnect();
      } catch(e) {
          // Handle errors here.
      }
    }
  </script>
</head>

<body>

  <button onclick="javascript: start()">Start Processing</button>

  <p id="speechRecognition">Click <b>Start Processing</b> and begin speaking to see transcription. If prompted, allow access to your microphone. <br> <br> If nothing happens, check your <a href="https://platform.symbl.ai/#/home">Symbl App ID and App Secret</a> in this HTML file on lines 16 and 17 respectively.</p>

</body>

</html>
```

## Read more

You can read the docs for the Symbl Web SDK at https://docs.symbl.ai/docs/web-sdk/overview


- [Getting Live Transcripts and Conversation Intelligence](https://docs.symbl.ai/docs/web-sdk/web-sdk-getting-live-transcripts/) for step-by-step instructions about receiving live transcripts and Conversation Intelligence.
- [Sending external Audio Streams](https://docs.symbl.ai/docs/web-sdk/web-sdk-sending-external-audio-streams/) to send a custom external audio source or audio stream.
- [Handing Device Change](https://docs.symbl.ai/docs/web-sdk/code-snippets/handling-device-change/) to update an audio source during a live stream.
- [Processing Data from Audio File](https://docs.symbl.ai/docs/web-sdk/code-snippets/processing-data-from-audio-file/) using the `attachAudioSourceElement` method on the AudioStream.


## Known Issues

The current version of the Web SDK includes a few [Known Issues](https://docs.symbl.ai/docs/changelog/#known-issues). You can also keep track of these issues as they are addressed via the [Issues tab of the github repo](https://github.com/symblai/symbl-web-sdk/issues).
