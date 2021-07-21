        const AuthenticationApi =require('@rammerai/api-client');
        const {sdk} = require('symbl-node/build/client.sdk.min.js');

        export = class SYMBLConfig {
            public readonly appId: string;
            public readonly appSecret: string;
            public readonly basePath: string;
            public readonly logLevel: string;
            static  readonly clientSdk =new (window as any).ClientSDK();
            public static  init(symblConfig: any) {
                this.clientSdk.init({
                    appId: symblConfig.appId,
                    appSecret: symblConfig.appSecret,
                    basePath: symblConfig.basePath ? symblConfig.basePath : 'https://api.symbl.ai',
                    logLevel: 'debug'
                }).then(async res => {
                    debugger;
                     console.log(SYMBLConfig.clientSdk.oauth2.activeToken);
                    console.log('SDK Initialized.'+res);
                    const uniqueMeetingId = 1212121212;
                    const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/1?access_token=`+SYMBLConfig.clientSdk.oauth2.activeToken;
                    const ws = new WebSocket(symblEndpoint);
                    ws.onmessage = (event) => {
                        // You can find the conversationId in event.message.data.conversationId;
                        const data = JSON.parse(event.data);
                        if (data.type === 'message' && data.message.hasOwnProperty('data')) {
                            console.log('conversationId', data.message.data.conversationId);
                        }
                        if (data.type === 'message_response') {
                            for (let message of data.messages) {
                                console.log('Transcript (more accurate): ', message.payload.content);
                            }
                        }
                        if (data.type === 'topic_response') {
                            for (let topic of data.topics) {
                                console.log('Topic detected: ', topic.phrases)
                            }
                        }
                        if (data.type === 'topic_response') {
                            for (let topic of data.topics) {
                                console.log('Topic detected: ', topic.phrases)
                            }
                        }
                        if (data.type === 'insight_response') {
                            for (let insight of data.insights) {
                                console.log('Insight detected: ', insight.payload.content);
                            }
                        }
                        if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) {
                            console.log('Live transcript (less accurate): ', data.message.punctuated.transcript)
                        }
                        console.log(`Response type: ${data.type}. Object: `, data);
                    };

        // Fired when the WebSocket closes unexpectedly due to an error or lost connetion
                    ws.onerror  = (err) => {
                        console.error(err);
                    };

        // Fired when the WebSocket connection has been closed
                    ws.onclose = (event) => {
                        console.info('Connection to websocket closed');
                    };

        // Fired when the connection succeeds.
                    ws.onopen = (event) => {
                        ws.send(JSON.stringify({
                            type: 'start_request',
                            meetingTitle: 'Websockets How-to', // Conversation name
                            insightTypes: ['question', 'action_item'], // Will enable insight generation
                            config: {
                                confidenceThreshold: 0.5,
                                languageCode: 'en-US',
                                speechRecognition: {
                                    encoding: 'LINEAR16',
                                    sampleRateHertz: 44100,
                                }
                            },
                            speaker: {
                                userId: 'example@symbl.ai',
                                name: 'Example Sample',
                            }
                        }));
                    };
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

                    /**
                     * The callback function which fires after a user gives the browser permission to use
                     * the computer's microphone. Starts a recording session which sends the audio stream to
                     * the WebSocket endpoint for processing.
                     */
                    const handleSuccess = (stream) => {
                        const AudioContext = window.AudioContext;
                        const context = new AudioContext();
                        const source = context.createMediaStreamSource(stream);
                        const processor = context.createScriptProcessor(1024, 1, 1);
                        const gainNode = context.createGain();
                        source.connect(gainNode);
                        gainNode.connect(processor);
                        processor.connect(context.destination);
                        processor.onaudioprocess = (e) => {
                            // convert to 16-bit payload
                            const inputData = e.inputBuffer.getChannelData(0) ;
                            const targetBuffer = new Int16Array(inputData.length);
                            for (let index = inputData.length; index > 0; index--) {
                                targetBuffer[index] = 32767 * Math.min(1, inputData[index]);
                            }
                            // Send audio stream to websocket.
                            if (ws.readyState === WebSocket.OPEN) {
                                ws.send(targetBuffer.buffer);
                            }
                        };
                    };


                    handleSuccess(stream);

                });

            }
            private constructor(appId:string,appSecret:string,basePath:string,logLevel:string) {
                this.appId = appId;
                this.appSecret = appSecret;
                this.basePath = basePath;
                this.logLevel = logLevel;
            }
        }
