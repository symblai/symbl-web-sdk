const { symblFetch, logger, defaultConfig, uuid } = require('./utils.js');

const webSocketConnectionStatus = {
    notAvailable: 'not_available',
    notConnected: 'not_connected',
    connected: 'connected',
    error: 'error',
    closed: 'closed',
    connecting: 'connecting'
};

class RealtimeApi {
    id: string;
    token: string;
    webSocketUrl: string;
    options: any;

    handlers: RealtimeHandlers;

    retryCount: number;
    requestStarted: boolean;
    webSocket: WebSocket;
    webSocketStatus: string;
    requestStoppedResolve: (value?: unknown) => void;
    requestStartedResolve: (value?: unknown) => void;
    requestErrorReject: (err: unknown) => void;

    constructor(token: string, options: any = {}) {
        this.id = options.id ? options.id : uuid();
        this.token = token;
        this.options = options;

        this.onConnectWebSocket = this.onConnectWebSocket.bind(this);
        this.onErrorWebSocket = this.onErrorWebSocket.bind(this);
        this.onMessageWebSocket = this.onMessageWebSocket.bind(this);
        this.onCloseWebSocket = this.onCloseWebSocket.bind(this);

        this.onSpeechDetected = this.onSpeechDetected.bind(this);
        this.onRequestStart = this.onRequestStart.bind(this);
        this.onRequestStop = this.onRequestStop.bind(this);
        this.onMessageResponse = this.onMessageResponse.bind(this);
        this.onInsightResponse = this.onInsightResponse.bind(this);

        this.sendAudio = this.sendAudio.bind(this);
        this.sendStart = this.sendStart.bind(this);

        this.handlers = this.options.handlers || {};

        this.retryCount = 0;
        this.requestStarted = false;
    }

    start() {
        return new Promise((resolve: (value?: unknown) => void, reject: (value?: unknown) => void) => {
            
            let basePath = this.options.basePath || defaultConfig.basePath;
            if (basePath.startsWith('https')) {
                basePath = basePath.replace('https', 'wss')
            } else if (basePath.startsWith('http')) {
                basePath = basePath.replace('http', 'ws');
            }
            const uri = `${basePath}/v1/realtime/insights`;

            this.webSocketUrl = `${uri}/${this.id}?access_token=${this.token}`;
            
            const retry = async () => {
                if (this.retryCount < 4) {
                    logger.info('Retry attempt: ', this.retryCount, this.token);
                    if (this.token) {
                        await this.connect();
                        if (this.webSocketStatus === webSocketConnectionStatus.connected) {
                            this.sendStart(resolve, reject);
                        }
                        
                    } else {
                        logger.info('Active Token not found.');
                        this.retryCount++;
                        window.setTimeout(retry.bind(this), 1000 * this.retryCount);
                    }
                } else {
                    reject({
                        message: 'Could not connect to real-time api after 4 retries.'
                    })
                }
            };
            window.setTimeout(retry.bind(this), 0);
        });
    }

    subscribe() {

    }

    onErrorWebSocket(err) {
        this.webSocketStatus = webSocketConnectionStatus.error;
        logger.error(err);
    }

    onMessageWebSocket(result) {
        // console.log(result);
        // Incoming results for this connection
        console.log('on message', result);
        if (result) {
            const data = JSON.parse(result.data);
            if (data.type === 'message') {
                const {
                    message: {
                        type
                    }
                } = data;

                if (type === 'recognition_started') {
                    this.onRequestStart();
                } else if (type === 'recognition_result') {
                    this.onSpeechDetected(data.message);
                } else if (type === 'recognition_stopped') {
                    // console.log('Recognition stopped received');
                    this.onRequestStop();
                } else if (type === 'error') {
                    this.onRequestError(data);
                }
            } else {
                if (data.type === 'message_response') {
                    this.onMessageResponse(data.messages);
                } else if (data.type === 'insight_response') {
                    this.onInsightResponse(data.insights);
                }
            }
        }
    }

    onCloseWebSocket() {
        logger.debug('WebSocket Closed.');
        this.webSocketStatus = webSocketConnectionStatus.closed;
    }

    onConnectWebSocket() {
        logger.debug('WebSocket Connected.');
        this.webSocketStatus = webSocketConnectionStatus.connected;
    }

    connect() {
        return new Promise((resolve, reject) => {
            logger.debug('WebSocket Connecting.');
            this.webSocketStatus = webSocketConnectionStatus.connecting;
            this.webSocket = new WebSocket(this.webSocketUrl);
            this.webSocket.onopen = () => {
                resolve(null);
                this.onConnectWebSocket();
            }
            this.webSocket.onmessage = this.onMessageWebSocket;
            this.webSocket.onerror = this.onErrorWebSocket;
            this.webSocket.onclose = this.onCloseWebSocket;
        })
    }

    onRequestStart() {
        console.log('yo');
        if (this.requestStartedResolve) {
            this.requestStartedResolve();
            this.requestStartedResolve = undefined;
        }
    }

    onRequestStop() {
        if (this.requestStoppedResolve) {
            this.requestStoppedResolve();
            this.requestStoppedResolve = undefined;
        }
        this.webSocket = null;
    }

    onRequestError(err) {
        if (this.requestErrorReject) {
            this.requestErrorReject(err);
            this.requestErrorReject = undefined;
        }
    }

    sendStart(resolve: (value?: unknown) => void, reject: (value?: unknown) => void) {
        const {
            insightTypes,
            config,
            speaker
        } = this.options;
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
        logger.debug('Send start request.');
        this.requestStartedResolve = resolve;
        this.onRequestError = reject;
        this.requestStarted = true;
        this.webSocket.send(JSON.stringify({
            type: 'start_request',
            insightTypes: insightTypes || [],
            config,
            speaker
        }));
    }

    stopRequest() {
        return new Promise((resolve: (value?: unknown) => void, reject: (value?: unknown) => void) => {
            if (this.webSocketStatus === webSocketConnectionStatus.connected) {
                logger.debug('Send stop request.');
                this.requestStoppedResolve = resolve;
                this.onRequestError = reject;
                this.webSocket.send(JSON.stringify({
                    type: 'stop_request',
                }));
            } else {
                logger.warn('WebSocket connection is not connected. No stop request sent.');
            }
        });
    }

    sendAudio(data) {
        this.webSocket.send(data);
    }

    onSpeechDetected(data) {
        if (this.handlers.onSpeechDetected) {
            window.setTimeout(() => {
                this.handlers.onSpeechDetected(data);
            });
        }
    }

    onMessageResponse(messages) {
        if (this.handlers.onMessageResponse) {
            window.setTimeout(() => {
                this.handlers.onMessageResponse(messages);
            });
        }
    }

    onInsightResponse(messages) {
        if (this.handlers.onInsightResponse) {
            window.setTimeout(() => {
                this.handlers.onInsightResponse(messages);
            });
        }
    }

}

export = RealtimeApi;