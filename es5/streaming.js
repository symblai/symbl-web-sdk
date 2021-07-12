"use strict";

var _a = require('./utils.js'),
    symblFetch = _a.symblFetch,
    logger = _a.logger,
    defaultConfig = _a.defaultConfig,
    uuid = _a.uuid;
var webSocketConnectionStatus = {
    notAvailable: 'not_available',
    notConnected: 'not_connected',
    connected: 'connected',
    error: 'error',
    closed: 'closed',
    connecting: 'connecting'
};
var RealtimeApi = function () {
    function RealtimeApi(token, options) {
        if (options === void 0) {
            options = {};
        }
        var basePath = options.basePath || defaultConfig.basePath;
        if (basePath.startsWith('https')) {
            basePath = basePath.replace('https', 'wss');
        } else if (basePath.startsWith('http')) {
            basePath = basePath.replace('http', 'ws');
        }
        var uri = basePath + "/v1/realtime/insights";
        this.id = options.id ? options.id : uuid();
        this.token = token;
        this.webSocketUrl = uri + "/" + this.id + "?access_token=" + this.token;
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
    RealtimeApi.prototype.start = function () {
        var _this = this;
        var startRequest = function startRequest(resolve, reject) {
            logger.info('Starting request.');
            _this.startRequest().then(function () {
                logger.info('Realtime request started.');
                resolve({
                    stop: function stop() {
                        return new Promise(function (resolve, reject) {
                            _this.stopRequest().then(function () {
                                logger.info('Realtime request stopped.');
                                resolve(null);
                            }).catch(function (err) {
                                reject(err);
                            });
                        });
                    },
                    sendAudio: function sendAudio(data) {
                        _this.sendAudio(data);
                    }
                });
            }).catch(function (err) {
                reject(err);
            });
        };
        return new Promise(function (resolve, reject) {
            var retryCount = 0;
            var retry = function retry() {
                if (retryCount < 4) {
                    logger.info('Retry attempt: ', retryCount, _this.token);
                    if (_this.token) {
                        _this.connect();
                        startRequest(resolve, reject);
                    } else {
                        logger.info('Active Token not found.');
                        retryCount++;
                        window.setTimeout(retry.bind(_this), 1000 * retryCount);
                    }
                } else {
                    reject({
                        message: 'Could not connect to real-time api after 4 retries.'
                    });
                }
            };
            window.setTimeout(retry.bind(_this), 0);
        });
    };
    RealtimeApi.prototype.onErrorWebSocket = function (err) {
        this.webSocketStatus = webSocketConnectionStatus.error;
        logger.error(err);
    };
    RealtimeApi.prototype.onMessageWebSocket = function (result) {
        if (result) {
            var data = JSON.parse(result.data);
            if (data.type === 'message') {
                var type = data.message.type;
                if (type === 'recognition_started') {
                    this.onRequestStart();
                } else if (type === 'recognition_result') {
                    this.onSpeechDetected(data.message);
                } else if (type === 'recognition_stopped') {
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
    };
    RealtimeApi.prototype.onCloseWebSocket = function () {
        logger.debug('WebSocket Closed.');
        this.webSocketStatus = webSocketConnectionStatus.closed;
    };
    RealtimeApi.prototype.onConnectWebSocket = function () {
        logger.debug('WebSocket Connected.');
        this.webSocketStatus = webSocketConnectionStatus.connected;
    };
    RealtimeApi.prototype.connect = function () {
        logger.debug('WebSocket Connecting.');
        this.webSocketStatus = webSocketConnectionStatus.connecting;
        this.webSocket = new WebSocket(this.webSocketUrl);
        this.webSocket.onopen = this.onConnectWebSocket;
        this.webSocket.onmessage = this.onMessageWebSocket;
        this.webSocket.onerror = this.onErrorWebSocket;
        this.webSocket.onclose = this.onCloseWebSocket;
    };
    RealtimeApi.prototype.onRequestStart = function () {
        if (this.requestStartedResolve) {
            this.requestStartedResolve();
            this.requestStartedResolve = undefined;
        }
    };
    RealtimeApi.prototype.onRequestStop = function () {
        if (this.requestStoppedResolve) {
            this.requestStoppedResolve();
            this.requestStoppedResolve = undefined;
        }
        this.webSocket.disconnect();
    };
    RealtimeApi.prototype.onRequestError = function (err) {
        if (this.requestErrorReject) {
            this.requestErrorReject(err);
            this.requestErrorReject = undefined;
        }
    };
    RealtimeApi.prototype.sendStart = function (resolve, reject) {
        var _a = this.options,
            insightTypes = _a.insightTypes,
            config = _a.config,
            speaker = _a.speaker;
        if (config) {
            var speechRecognition_1 = {};
            if (!config.sampleRateHertz) {
                throw new Error("sampleRateHertz must be provided.");
            } else if (typeof config.sampleRateHertz !== 'number') {
                throw new Error("sampleRateHertz must be a valid number");
            }
            Object.keys(config).forEach(function (key) {
                switch (key) {
                    case 'engine':
                    case 'encoding':
                    case 'sampleRateHertz':
                    case 'interimResults':
                        speechRecognition_1[key] = config[key];
                        delete config[key];
                        break;
                    default:
                        break;
                }
            });
            if (Object.keys(speechRecognition_1).length > 0) {
                config['speechRecognition'] = speechRecognition_1;
            }
        }
        logger.debug('Send start request.');
        this.requestStartedResolve = resolve;
        this.onRequestError = reject;
        this.requestStarted = true;
        this.webSocket.send(JSON.stringify({
            type: 'start_request',
            insightTypes: insightTypes || [],
            config: config,
            speaker: speaker
        }));
    };
    RealtimeApi.prototype.startRequest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.webSocketStatus === webSocketConnectionStatus.connected) {
                _this.sendStart(resolve, reject);
            } else {
                logger.info('WebSocket is connecting. Retry will be attempted.', _this.webSocketStatus);
                var retry_1 = function retry_1() {
                    if (_this.retryCount < 3 && !_this.requestStarted) {
                        logger.info('Retry attempt: ', _this.retryCount);
                        if (_this.webSocketStatus === webSocketConnectionStatus.connected) {
                            _this.sendStart(resolve, reject);
                            _this.retryCount = 0;
                        } else {
                            _this.retryCount++;
                            window.setTimeout(retry_1.bind(_this), 1000 * _this.retryCount);
                        }
                    }
                };
                window.setTimeout(retry_1.bind(_this), 500);
            }
        });
    };
    RealtimeApi.prototype.stopRequest = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.webSocketStatus === webSocketConnectionStatus.connected) {
                logger.debug('Send stop request.');
                _this.requestStoppedResolve = resolve;
                _this.onRequestError = reject;
                _this.webSocket.send(JSON.stringify({
                    type: 'stop_request'
                }));
            } else {
                logger.warn('WebSocket connection is not connected. No stop request sent.');
            }
        });
    };
    RealtimeApi.prototype.sendAudio = function (data) {
        this.webSocket.send(data);
    };
    RealtimeApi.prototype.onSpeechDetected = function (data) {
        var _this = this;
        if (this.handlers.onSpeechDetected) {
            window.setTimeout(function () {
                _this.handlers.onSpeechDetected(data);
            });
        }
    };
    RealtimeApi.prototype.onMessageResponse = function (messages) {
        var _this = this;
        if (this.handlers.onMessageResponse) {
            window.setTimeout(function () {
                _this.handlers.onMessageResponse(messages);
            });
        }
    };
    RealtimeApi.prototype.onInsightResponse = function (messages) {
        var _this = this;
        if (this.handlers.onInsightResponse) {
            window.setTimeout(function () {
                _this.handlers.onInsightResponse(messages);
            });
        }
    };
    return RealtimeApi;
}();
module.exports = RealtimeApi;
//# sourceMappingURL=streaming.js.map