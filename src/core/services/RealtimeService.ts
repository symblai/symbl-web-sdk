import ParentService=require('./ParentService')
class RealtimeService extends ParentService{
    static  webSocketConnectionStatus = {
        notAvailable: 'not_available',
        notConnected: 'not_connected',
        connected: 'connected',
        error: 'error',
        closed: 'closed',
        connecting: 'connecting'
    };
    private webSocketStatus: any;
    private webSocketConnectionStatus: any;
    private webSocketUrl: string;
    private webSocket: WebSocket;
    private requestStartedResolve: any;
    private requestStoppedResolve: any;
    private requestErrorReject: any;
    private requestStarted: Boolean;
    private retryCount: number;
    private options: any;
    private callBackHandler: any;
    private realTimeRequest: any;
    constructor(  ) {
        super();
      //  this.realTimeRequest=realTimeRequest
    }
    onErrorWebSocket(err) {
        this.webSocketStatus = this.webSocketConnectionStatus.error;
    }
    onMessage(result) {
        if (result) {
            const data = JSON.parse(result);
            if (data.type === 'message') {
                const {message: {type}} = data;
                if (type === 'recognition_started') {
                    this.onRequestStart(data.message);
                } else if (type === 'recognition_result') {
                    this.onSpeechDetected(data.message);
                } else if (type === 'recognition_stopped') {
                    // console.log('Recognition stopped received');
                    // this.onRequestStop();
                } else if (type === 'conversation_completed') {
                    this.onRequestStop(data.message);
                } else if (type === 'error') {
                    this.onRequestError(data);
                }
            } else {
                if (data.type === 'message_response') {
                    this.onMessageResponse(data.messages);
                } else if (data.type === 'insight_response') {
                    this.onInsightResponse(data.insights);
                } else if (data.type === 'tracker_response') {
                    this.onTrackerResponse(data.trackers);
                } else if (data.type === 'topic_response') {
                    this.onTopicResponse(data.topics);
                }
            }
        }
    }
    onCloseWebSocket() {
        this.webSocketStatus = this.webSocketConnectionStatus.closed;
    }
    onConnectWebSocket() {
        this.webSocketStatus = this.webSocketConnectionStatus.connected;
    }
    connect() {
        this.webSocketStatus = this.webSocketConnectionStatus.connecting;
        this.webSocket = new WebSocket(this.webSocketUrl);
        this.webSocket.onopen = this.onConnectWebSocket;
        this.webSocket.onmessage = this.onMessage;
        this.webSocket.onerror = this.onErrorWebSocket;
        this.webSocket.onclose = this.onCloseWebSocket;
    }
    onRequestStart(message) {
        if (this.requestStartedResolve) {
            this.requestStartedResolve(message.data && message.data.conversationId);
            this.requestStartedResolve = undefined;
        }
    }
    onRequestStop(conversationData) {
        if (this.requestStoppedResolve) {
            this.requestStoppedResolve(conversationData);
            this.requestStoppedResolve = undefined;
        }
        this.webSocket.close();
        this.webSocket=null;
    }
    onRequestError(err) {
        if (this.requestErrorReject) {
            this.requestErrorReject(err);
            this.requestErrorReject = undefined;
        }
    }
    sendRequest(resolve, reject) {

        const {insightTypes, config, speaker, trackers, customVocabulary } = this.options;
        if (config) {
            const speechRecognition = {};
            if (!config.sampleRateHertz) {
                throw new Error("sampleRateHertz must be provided.")
            } else if (typeof config.sampleRateHertz !== 'number') {
                throw new Error("sampleRateHertz must be a valid number")
            }
            Object.keys(config).forEach(key => {
                switch (key) {
                    case 'engine':
                    case 'encoding':
                    case 'sampleRateHertz':
                    case 'interimResults':
                        speechRecognition[key] = config[key];
                        delete config[key];
                        break;
                    default:
                        break;
                }
            });

            if (Object.keys(speechRecognition).length > 0) {
                config['speechRecognition'] = speechRecognition;
            }
        }
        this.requestStartedResolve = resolve;
        this.onRequestError = reject;
        this.requestStarted = true;
        this.webSocket.send(JSON.stringify({
            type: 'start_request',
            insightTypes: insightTypes || [],
            config,
            speaker,
            trackers,
            customVocabulary,
        }));
    }

    startRequest() {
        return new Promise((resolve, reject) => {
            if (this.webSocketStatus === this.webSocketConnectionStatus.connected) {
                this.sendRequest(resolve, reject);
            } else {
                const retry = () => {
                    if (this.retryCount < 3 && !this.requestStarted) {
                        if (this.webSocketStatus === this.webSocketConnectionStatus.connected) {
                            this.sendRequest(resolve, reject);
                            this.retryCount = 0;
                        } else {
                            this.retryCount++;
                            setTimeout(retry.bind(this), 1000 * this.retryCount);
                        }
                    }
                };
                setTimeout(retry.bind(this), 500);
            }
        });
    }

    stopRequest() {
        return new Promise<void>((resolve, reject) => {
            if (this.webSocketStatus === this.webSocketConnectionStatus.connected) {
                this.requestStoppedResolve = resolve;
                this.onRequestError = reject;
                this.webSocket.send(JSON.stringify({
                    type: 'stop_request',
                }));
            } else {
                resolve();
            }
        });
    }

    sendAudio(data) {
        this.webSocket.send(data);
    }

    onSpeechDetected(data) {
        if (this.callBackHandler.onSpeechDetected) {
            setImmediate(() => {
                this.callBackHandler.onSpeechDetected(data);
            });
        }
    }

    onMessageResponse(messages) {
        if (this.callBackHandler.onMessageResponse) {
            setImmediate(() => {
                this.callBackHandler.onMessageResponse(messages);
            });
        }
    }

    onInsightResponse(messages) {
        if (this.callBackHandler.onInsightResponse) {
            setImmediate(() => {
                this.callBackHandler.onInsightResponse(messages);
            });
        }
    }

    onTrackerResponse(trackers) {
        if (this.callBackHandler.onTrackerResponse) {
            setImmediate(() => {
                this.callBackHandler.onTrackerResponse(trackers);
            });
        }
    }

    onTopicResponse(topics) {
        if (this.callBackHandler.onTopicResponse) {
            setImmediate(() => {
                this.callBackHandler.onTopicResponse(topics);
            });
        }
    }

}