var symbl =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AccessTokenExpiredError = exports.InvalidCredentialsError = exports.SymblError = void 0;
var SymblError_1 = __importDefault(__webpack_require__(6));
exports.SymblError = SymblError_1["default"];
var InvalidCredentialsError_1 = __importDefault(__webpack_require__(23));
exports.InvalidCredentialsError = InvalidCredentialsError_1["default"];
var AccessTokenExpiredError_1 = __importDefault(__webpack_require__(24));
exports.AccessTokenExpiredError = AccessTokenExpiredError_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(17), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var Logger = function () {
    function Logger(logLevel) {
        this.logger = console;
        this.setLevel(logLevel);
    }
    Logger.prototype.setLevel = function (level) {
        var options = {};
        if (level) {
            options.level = level;
            this.logLevel = level;
        }
    };
    Logger.prototype.getLevel = function () {
        return this.logLevel;
    };
    Logger.prototype.trace = function (msg, meta) {
        var _a;
        if (meta === void 0) {
            meta = {};
        }
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.trace.apply(null, [msg, meta]);
    };
    Logger.prototype.debug = function (msg, meta) {
        var _a;
        if (meta === void 0) {
            meta = {};
        }
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug.apply(null, [msg, meta]);
    };
    Logger.prototype.log = function (msg, meta) {
        var _a;
        if (meta === void 0) {
            meta = {};
        }
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log.apply(null, [msg, meta]);
    };
    Logger.prototype.info = function (msg, meta) {
        var _a;
        if (meta === void 0) {
            meta = {};
        }
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.info.apply(null, [msg, meta]);
    };
    Logger.prototype.warn = function (msg, meta) {
        var _a;
        if (meta === void 0) {
            meta = {};
        }
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.warn.apply(null, [msg, meta]);
    };
    Logger.prototype.error = function (msg, meta) {
        var _a;
        if (meta === void 0) {
            meta = {};
        }
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.error.apply(null, [msg, meta]);
    };
    return Logger;
}();
exports["default"] = Logger;
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(0), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(19), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AudioStream = void 0;
var error_1 = __webpack_require__(3);
var logger_1 = __importDefault(__webpack_require__(2));
var events_1 = __webpack_require__(1);
var AudioContext = window.AudioContext || window.webkitAudioContext;
var AudioStream = function (_super) {
    __extends(AudioStream, _super);
    function AudioStream(sourceNode) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.mediaStreamPromise = Promise.resolve();
        _this.logger = new logger_1["default"]();
        if (sourceNode) {
            _this.sourceNode = sourceNode;
            if (((_a = sourceNode.context) === null || _a === void 0 ? void 0 : _a.state) === "running" || ((_b = sourceNode.context) === null || _b === void 0 ? void 0 : _b.state) === "suspended") {
                _this.audioContext = sourceNode.context;
            }
            _this.mediaStream = _this.sourceNode.mediaStream;
        } else {
            _this.mediaStreamPromise = AudioStream.getMediaStream();
            _this.mediaStreamPromise.then(function (mediaStream) {
                _this.mediaStream = mediaStream;
                var sampleRate = _this.mediaStream.getAudioTracks()[0].getSettings().sampleRate;
                _this.audioContext = new AudioContext({ sampleRate: sampleRate });
                _this.sourceNode = _this.audioContext.createMediaStreamSource(_this.mediaStream);
            });
        }
        _this.attachAudioSourceElement = _this.attachAudioSourceElement.bind(_this);
        _this.detachAudioSourceElement = _this.detachAudioSourceElement.bind(_this);
        _this.updateAudioSourceElement = _this.updateAudioSourceElement.bind(_this);
        _this.attachAudioDevice = _this.attachAudioDevice.bind(_this);
        _this.detachAudioDevice = _this.detachAudioDevice.bind(_this);
        _this.updateAudioDevice = _this.updateAudioDevice.bind(_this);
        _this.attachAudioCallback = _this.attachAudioCallback.bind(_this);
        _this.attachAudioProcessor = _this.attachAudioProcessor.bind(_this);
        _this.processAudio = _this.processAudio.bind(_this);
        _this.onProcessedAudio = _this.onProcessedAudio.bind(_this);
        return _this;
    }
    AudioStream.getMediaStream = function (deviceId) {
        if (deviceId === void 0) {
            deviceId = "default";
        }
        return __awaiter(this, void 0, void 0, function () {
            var stream, devices, inputDevices, foundDevice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, navigator.mediaDevices.getUserMedia({
                            "audio": true,
                            "video": false
                        })];
                    case 1:
                        stream = _a.sent();
                        return [4, navigator.mediaDevices.enumerateDevices()];
                    case 2:
                        devices = _a.sent();
                        inputDevices = devices.filter(function (dev) {
                            return dev.kind === "audioinput";
                        });
                        if (inputDevices.length === 0) {
                            throw new error_1.NoAudioInputDeviceDetectedError("No input devices found.");
                        }
                        if (!deviceId) return [3, 4];
                        foundDevice = inputDevices.find(function (dev) {
                            return dev.deviceId === deviceId;
                        });
                        if (!foundDevice) {
                            if (deviceId === "default" && inputDevices.length) {
                                foundDevice = inputDevices[0];
                            } else {
                                throw new error_1.InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");
                            }
                        }
                        return [4, stream.getAudioTracks()[0].applyConstraints({
                            "deviceId": foundDevice.deviceId
                        })];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4:
                        throw new error_1.InvalidAudioInputDeviceError("Invalid deviceId passed as argument.");
                    case 5:
                        return [2, stream];
                }
            });
        });
    };
    AudioStream.prototype.getSampleRate = function () {
        return this.audioContext.sampleRate;
    };
    AudioStream.prototype.suspendAudioContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.audioContext.state === "running")) return [3, 2];
                        return [4, this.audioContext.suspend()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        this.logger.warn("Audio context is not running.");
                        _a.label = 3;
                    case 3:
                        return [2];
                }
            });
        });
    };
    AudioStream.prototype.resumeAudioContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.audioContext.state === "suspended")) return [3, 2];
                        return [4, this.audioContext.resume()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        return [2];
                }
            });
        });
    };
    AudioStream.prototype.attachAudioSourceElement = function (audioSourceDomElement) {
        return __awaiter(this, void 0, void 0, function () {
            var source, sourceNode, processorNode, event_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            if (!audioSourceDomElement) {
                                throw new error_1.InvalidAudioElementError("Element is null. Please pass in a valid audio source dom element.");
                            }
                            if (!["AUDIO", "VIDEO", "SOURCE"].includes(audioSourceDomElement.nodeName)) {
                                throw new error_1.InvalidAudioElementError("Please pass in a valid audio source dom element.");
                            }
                            if (audioSourceDomElement.nodeName === "SOURCE" && audioSourceDomElement.parentElement && !["AUDIO", "VIDEO"].includes(audioSourceDomElement.parentElement.nodeName)) {
                                throw new error_1.InvalidAudioElementError("Please ensure that audio and video element is the parent element of <source /> element.");
                            }
                            if (audioSourceDomElement.nodeName === "SOURCE" && !audioSourceDomElement.src) {
                                throw new error_1.InvalidAudioElementError("Element is missing its `src` property");
                            }
                            if (["AUDIO", "VIDEO"].includes(audioSourceDomElement.nodeName)) {
                                source = audioSourceDomElement.firstChild;
                                if (source && source.nodeName !== "SOURCE") {
                                    throw new error_1.InvalidAudioElementError("Child element must be a source element.");
                                } else if (source && source.nodeName === "SOURCE") {
                                    this.attachAudioSourceElement(source);
                                }
                            }
                        } catch (e) {
                            throw e;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4,, 5]);
                        if (!(this.audioContext && this.audioContext.state === "running")) return [3, 3];
                        return [4, this.detachAudioSourceElement()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        sourceNode = this.audioContext.createMediaElementSource(audioSourceDomElement);
                        processorNode = this.audioContext.createScriptProcessor(1024, 1, 1);
                        this.sourceNode = sourceNode;
                        this.processorNode = processorNode;
                        event_1 = new events_1.SymblEvent("audio_source_connected", this.audioContext.sampleRate);
                        this.dispatchEvent(event_1);
                        return [3, 5];
                    case 4:
                        e_1 = _a.sent();
                        throw e_1;
                    case 5:
                        return [2];
                }
            });
        });
    };
    AudioStream.prototype.detachAudioSourceElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.audioContext && this.audioContext.state !== "closed")) return [3, 2];
                        return [4, this.audioContext.close()];
                    case 1:
                        _a.sent();
                        if (this.sourceNode) {
                            this.sourceNode.disconnect();
                        }
                        if (this.processorNode) {
                            this.processorNode.disconnect();
                        }
                        this.dispatchEvent(new events_1.SymblEvent("audio_source_disconnected"));
                        return [3, 3];
                    case 2:
                        this.logger.warn("Your audio context is already closed.");
                        _a.label = 3;
                    case 3:
                        return [2];
                }
            });
        });
    };
    AudioStream.prototype.updateAudioSourceElement = function (audioSourceDomElement) {
        this.detachAudioSourceElement();
        this.attachAudioSourceElement(audioSourceDomElement);
    };
    AudioStream.prototype.attachAudioDevice = function (deviceId, mediaStream) {
        if (deviceId === void 0) {
            deviceId = "default";
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4,, 5]);
                        if (!mediaStream) return [3, 1];
                        this.mediaStream = mediaStream;
                        return [3, 3];
                    case 1:
                        if (!!this.mediaStream) return [3, 3];
                        _a = this;
                        return [4, AudioStream.getMediaStream(deviceId)];
                    case 2:
                        _a.mediaStream = _b.sent();
                        _b.label = 3;
                    case 3:
                        this.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
                        this.processorNode = this.audioContext.createScriptProcessor(1024, 1, 1);
                        this.gainNode = this.audioContext.createGain();
                        return [3, 5];
                    case 4:
                        e_2 = _b.sent();
                        throw e_2;
                    case 5:
                        return [2];
                }
            });
        });
    };
    AudioStream.prototype.detachAudioDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.audioContext && this.audioContext.state !== "closed")) return [3, 2];
                        return [4, this.audioContext.close()];
                    case 1:
                        _a.sent();
                        if (this.sourceNode) {
                            this.sourceNode.disconnect();
                        }
                        if (this.gainNode) {
                            this.gainNode.disconnect();
                        }
                        if (this.processorNode) {
                            this.processorNode.disconnect();
                        }
                        this.dispatchEvent(new events_1.SymblEvent("audio_source_disconnected"));
                        return [3, 3];
                    case 2:
                        this.logger.warn("Your audio context is already closed.");
                        _a.label = 3;
                    case 3:
                        return [2];
                }
            });
        });
    };
    AudioStream.prototype.updateAudioDevice = function (deviceId, mediaStream) {
        this.detachAudioDevice();
        this.attachAudioDevice(deviceId, mediaStream);
    };
    AudioStream.prototype.attachAudioCallback = function (audioCallback) {
        this.audioCallback = audioCallback;
    };
    AudioStream.prototype.attachAudioProcessor = function () {
        throw new TypeError("Not implemented!");
    };
    AudioStream.prototype.processAudio = function (audioEvent) {
        throw new TypeError("Not implemented!");
    };
    AudioStream.prototype.onProcessedAudio = function (audioData) {
        if (this.audioCallback) {
            this.audioCallback(audioData);
        } else {
            this.logger.warn("No audio callback attached. Audio not being proceessed.");
        }
    };
    return AudioStream;
}(events_1.DelegatedEventTarget);
exports.AudioStream = AudioStream;
//# sourceMappingURL=AudioStream.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(__webpack_require__(2));
var events_1 = __webpack_require__(1);
var SymblError = function (_super) {
    __extends(SymblError, _super);
    function SymblError(message, name) {
        var _this = _super.call(this, message) || this;
        _this.logger = new index_1["default"]();
        _this.message = message;
        _this.name = name;
        _this.logger.error(message);
        _this.logger.trace(message);
        var delegate = document.createDocumentFragment();
        delegate.dispatchEvent.apply(delegate, [new events_1.SymblEvent('error', _this)]);
        return _this;
    }
    return SymblError;
}(Error);
exports["default"] = SymblError;
//# sourceMappingURL=SymblError.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.uuid = void 0;
var uuid_1 = __webpack_require__(61);
exports.uuid = uuid_1.v4;
//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(52), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=202)}([function(e,t,n){(function(e){e.exports=function(){"use strict";var t,r;function s(){return t.apply(null,arguments)}function i(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(a(e,t))return!1;return!0}function u(e){return void 0===e}function c(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function l(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function _(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function h(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function m(e,t,n,r){return Tt(e,t,n,r,!0).utc()}function p(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){if(null==e._isValid){var t=p(e),n=r.call(t.parsedDateParts,(function(e){return null!=e})),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function y(e){var t=m(NaN);return null!=e?h(p(t),e):p(t).userInvalidated=!0,t}r=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),r=n.length>>>0;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var M=s.momentProperties=[],v=!1;function L(e,t){var n,r,s;if(u(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),u(t._i)||(e._i=t._i),u(t._f)||(e._f=t._f),u(t._l)||(e._l=t._l),u(t._strict)||(e._strict=t._strict),u(t._tzm)||(e._tzm=t._tzm),u(t._isUTC)||(e._isUTC=t._isUTC),u(t._offset)||(e._offset=t._offset),u(t._pf)||(e._pf=p(t)),u(t._locale)||(e._locale=t._locale),M.length>0)for(n=0;n<M.length;n++)u(s=t[r=M[n]])||(e[r]=s);return e}function g(e){L(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===v&&(v=!0,s.updateOffset(this),v=!1)}function Y(e){return e instanceof g||null!=e&&null!=e._isAMomentObject}function w(e){!1===s.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function k(e,t){var n=!0;return h((function(){if(null!=s.deprecationHandler&&s.deprecationHandler(null,e),n){var r,i,o,d=[];for(i=0;i<arguments.length;i++){if(r="","object"==typeof arguments[i]){for(o in r+="\n["+i+"] ",arguments[0])a(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[i];d.push(r)}w(e+"\nArguments: "+Array.prototype.slice.call(d).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var T,b={};function D(e,t){null!=s.deprecationHandler&&s.deprecationHandler(e,t),b[e]||(w(t),b[e]=!0)}function S(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function j(e,t){var n,r=h({},e);for(n in t)a(t,n)&&(o(e[n])&&o(t[n])?(r[n]={},h(r[n],e[n]),h(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)a(e,n)&&!a(t,n)&&o(e[n])&&(r[n]=h({},r[n]));return r}function H(e){null!=e&&this.set(e)}function O(e,t,n){var r=""+Math.abs(e),s=t-r.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+r}s.suppressDeprecationWarnings=!1,s.deprecationHandler=null,T=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)a(e,t)&&n.push(t);return n};var P=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,x=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,E={},I={};function A(e,t,n,r){var s=r;"string"==typeof r&&(s=function(){return this[r]()}),e&&(I[e]=s),t&&(I[t[0]]=function(){return O(s.apply(this,arguments),t[1],t[2])}),n&&(I[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function C(e,t){return e.isValid()?(t=W(t,e.localeData()),E[t]=E[t]||function(e){var t,n,r,s=e.match(P);for(t=0,n=s.length;t<n;t++)I[s[t]]?s[t]=I[s[t]]:s[t]=(r=s[t]).match(/\[[\s\S]/)?r.replace(/^\[|\]$/g,""):r.replace(/\\/g,"");return function(t){var r,i="";for(r=0;r<n;r++)i+=S(s[r])?s[r].call(t,e):s[r];return i}}(t),E[t](e)):e.localeData().invalidDate()}function W(e,t){var n=5;function r(e){return t.longDateFormat(e)||e}for(x.lastIndex=0;n>=0&&x.test(e);)e=e.replace(x,r),x.lastIndex=0,n-=1;return e}var R={};function F(e,t){var n=e.toLowerCase();R[n]=R[n+"s"]=R[t]=e}function z(e){return"string"==typeof e?R[e]||R[e.toLowerCase()]:void 0}function N(e){var t,n,r={};for(n in e)a(e,n)&&(t=z(n))&&(r[t]=e[n]);return r}var U={};function q(e,t){U[e]=t}function J(e){return e%4==0&&e%100!=0||e%400==0}function B(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function G(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=B(t)),n}function V(e,t){return function(n){return null!=n?($(this,e,n),s.updateOffset(this,t),this):K(this,e)}}function K(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function $(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&J(e.year())&&1===e.month()&&29===e.date()?(n=G(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Ye(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var Z,Q=/\d/,X=/\d\d/,ee=/\d{3}/,te=/\d{4}/,ne=/[+-]?\d{6}/,re=/\d\d?/,se=/\d\d\d\d?/,ie=/\d\d\d\d\d\d?/,oe=/\d{1,3}/,ae=/\d{1,4}/,de=/[+-]?\d{1,6}/,ue=/\d+/,ce=/[+-]?\d+/,le=/Z|[+-]\d\d:?\d\d/gi,_e=/Z|[+-]\d\d(?::?\d\d)?/gi,he=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function me(e,t,n){Z[e]=S(t)?t:function(e,r){return e&&n?n:t}}function pe(e,t){return a(Z,e)?Z[e](t._strict,t._locale):new RegExp(fe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,r,s){return t||n||r||s}))))}function fe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}Z={};var ye,Me={};function ve(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),c(t)&&(r=function(e,n){n[t]=G(e)}),n=0;n<e.length;n++)Me[e[n]]=r}function Le(e,t){ve(e,(function(e,n,r,s){r._w=r._w||{},t(e,r._w,r,s)}))}function ge(e,t,n){null!=t&&a(Me,e)&&Me[e](t,n._a,n,e)}function Ye(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,r=(t%(n=12)+n)%n;return e+=(t-r)/12,1===r?J(e)?29:28:31-r%7%2}ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},A("M",["MM",2],"Mo",(function(){return this.month()+1})),A("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),A("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),F("month","M"),q("month",8),me("M",re),me("MM",re,X),me("MMM",(function(e,t){return t.monthsShortRegex(e)})),me("MMMM",(function(e,t){return t.monthsRegex(e)})),ve(["M","MM"],(function(e,t){t[1]=G(e)-1})),ve(["MMM","MMMM"],(function(e,t,n,r){var s=n._locale.monthsParse(e,r,n._strict);null!=s?t[1]=s:p(n).invalidMonth=e}));var we="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ke="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Te=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,be=he,De=he;function Se(e,t,n){var r,s,i,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)i=m([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(i,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(s=ye.call(this._shortMonthsParse,o))?s:null:-1!==(s=ye.call(this._longMonthsParse,o))?s:null:"MMM"===t?-1!==(s=ye.call(this._shortMonthsParse,o))||-1!==(s=ye.call(this._longMonthsParse,o))?s:null:-1!==(s=ye.call(this._longMonthsParse,o))||-1!==(s=ye.call(this._shortMonthsParse,o))?s:null}function je(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=G(t);else if(!c(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Ye(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function He(e){return null!=e?(je(this,e),s.updateOffset(this,!0),this):K(this,"Month")}function Oe(){function e(e,t){return t.length-e.length}var t,n,r=[],s=[],i=[];for(t=0;t<12;t++)n=m([2e3,t]),r.push(this.monthsShort(n,"")),s.push(this.months(n,"")),i.push(this.months(n,"")),i.push(this.monthsShort(n,""));for(r.sort(e),s.sort(e),i.sort(e),t=0;t<12;t++)r[t]=fe(r[t]),s[t]=fe(s[t]);for(t=0;t<24;t++)i[t]=fe(i[t]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Pe(e){return J(e)?366:365}A("Y",0,0,(function(){var e=this.year();return e<=9999?O(e,4):"+"+e})),A(0,["YY",2],0,(function(){return this.year()%100})),A(0,["YYYY",4],0,"year"),A(0,["YYYYY",5],0,"year"),A(0,["YYYYYY",6,!0],0,"year"),F("year","y"),q("year",1),me("Y",ce),me("YY",re,X),me("YYYY",ae,te),me("YYYYY",de,ne),me("YYYYYY",de,ne),ve(["YYYYY","YYYYYY"],0),ve("YYYY",(function(e,t){t[0]=2===e.length?s.parseTwoDigitYear(e):G(e)})),ve("YY",(function(e,t){t[0]=s.parseTwoDigitYear(e)})),ve("Y",(function(e,t){t[0]=parseInt(e,10)})),s.parseTwoDigitYear=function(e){return G(e)+(G(e)>68?1900:2e3)};var xe=V("FullYear",!0);function Ee(e,t,n,r,s,i,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,s,i,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,s,i,o),a}function Ie(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ae(e,t,n){var r=7+t-n;return-(7+Ie(e,0,r).getUTCDay()-t)%7+r-1}function Ce(e,t,n,r,s){var i,o,a=1+7*(t-1)+(7+n-r)%7+Ae(e,r,s);return a<=0?o=Pe(i=e-1)+a:a>Pe(e)?(i=e+1,o=a-Pe(e)):(i=e,o=a),{year:i,dayOfYear:o}}function We(e,t,n){var r,s,i=Ae(e.year(),t,n),o=Math.floor((e.dayOfYear()-i-1)/7)+1;return o<1?r=o+Re(s=e.year()-1,t,n):o>Re(e.year(),t,n)?(r=o-Re(e.year(),t,n),s=e.year()+1):(s=e.year(),r=o),{week:r,year:s}}function Re(e,t,n){var r=Ae(e,t,n),s=Ae(e+1,t,n);return(Pe(e)-r+s)/7}function Fe(e,t){return e.slice(t,7).concat(e.slice(0,t))}A("w",["ww",2],"wo","week"),A("W",["WW",2],"Wo","isoWeek"),F("week","w"),F("isoWeek","W"),q("week",5),q("isoWeek",5),me("w",re),me("ww",re,X),me("W",re),me("WW",re,X),Le(["w","ww","W","WW"],(function(e,t,n,r){t[r.substr(0,1)]=G(e)})),A("d",0,"do","day"),A("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),A("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),A("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),A("e",0,0,"weekday"),A("E",0,0,"isoWeekday"),F("day","d"),F("weekday","e"),F("isoWeekday","E"),q("day",11),q("weekday",11),q("isoWeekday",11),me("d",re),me("e",re),me("E",re),me("dd",(function(e,t){return t.weekdaysMinRegex(e)})),me("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),me("dddd",(function(e,t){return t.weekdaysRegex(e)})),Le(["dd","ddd","dddd"],(function(e,t,n,r){var s=n._locale.weekdaysParse(e,r,n._strict);null!=s?t.d=s:p(n).invalidWeekday=e})),Le(["d","e","E"],(function(e,t,n,r){t[r]=G(e)}));var ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ue="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),qe=he,Je=he,Be=he;function Ge(e,t,n){var r,s,i,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)i=m([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(i,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(s=ye.call(this._weekdaysParse,o))?s:null:"ddd"===t?-1!==(s=ye.call(this._shortWeekdaysParse,o))?s:null:-1!==(s=ye.call(this._minWeekdaysParse,o))?s:null:"dddd"===t?-1!==(s=ye.call(this._weekdaysParse,o))||-1!==(s=ye.call(this._shortWeekdaysParse,o))||-1!==(s=ye.call(this._minWeekdaysParse,o))?s:null:"ddd"===t?-1!==(s=ye.call(this._shortWeekdaysParse,o))||-1!==(s=ye.call(this._weekdaysParse,o))||-1!==(s=ye.call(this._minWeekdaysParse,o))?s:null:-1!==(s=ye.call(this._minWeekdaysParse,o))||-1!==(s=ye.call(this._weekdaysParse,o))||-1!==(s=ye.call(this._shortWeekdaysParse,o))?s:null}function Ve(){function e(e,t){return t.length-e.length}var t,n,r,s,i,o=[],a=[],d=[],u=[];for(t=0;t<7;t++)n=m([2e3,1]).day(t),r=fe(this.weekdaysMin(n,"")),s=fe(this.weekdaysShort(n,"")),i=fe(this.weekdays(n,"")),o.push(r),a.push(s),d.push(i),u.push(r),u.push(s),u.push(i);o.sort(e),a.sort(e),d.sort(e),u.sort(e),this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Ke(){return this.hours()%12||12}function $e(e,t){A(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function Ze(e,t){return t._meridiemParse}A("H",["HH",2],0,"hour"),A("h",["hh",2],0,Ke),A("k",["kk",2],0,(function(){return this.hours()||24})),A("hmm",0,0,(function(){return""+Ke.apply(this)+O(this.minutes(),2)})),A("hmmss",0,0,(function(){return""+Ke.apply(this)+O(this.minutes(),2)+O(this.seconds(),2)})),A("Hmm",0,0,(function(){return""+this.hours()+O(this.minutes(),2)})),A("Hmmss",0,0,(function(){return""+this.hours()+O(this.minutes(),2)+O(this.seconds(),2)})),$e("a",!0),$e("A",!1),F("hour","h"),q("hour",13),me("a",Ze),me("A",Ze),me("H",re),me("h",re),me("k",re),me("HH",re,X),me("hh",re,X),me("kk",re,X),me("hmm",se),me("hmmss",ie),me("Hmm",se),me("Hmmss",ie),ve(["H","HH"],3),ve(["k","kk"],(function(e,t,n){var r=G(e);t[3]=24===r?0:r})),ve(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),ve(["h","hh"],(function(e,t,n){t[3]=G(e),p(n).bigHour=!0})),ve("hmm",(function(e,t,n){var r=e.length-2;t[3]=G(e.substr(0,r)),t[4]=G(e.substr(r)),p(n).bigHour=!0})),ve("hmmss",(function(e,t,n){var r=e.length-4,s=e.length-2;t[3]=G(e.substr(0,r)),t[4]=G(e.substr(r,2)),t[5]=G(e.substr(s)),p(n).bigHour=!0})),ve("Hmm",(function(e,t,n){var r=e.length-2;t[3]=G(e.substr(0,r)),t[4]=G(e.substr(r))})),ve("Hmmss",(function(e,t,n){var r=e.length-4,s=e.length-2;t[3]=G(e.substr(0,r)),t[4]=G(e.substr(r,2)),t[5]=G(e.substr(s))}));var Qe,Xe=V("Hours",!0),et={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:we,monthsShort:ke,week:{dow:0,doy:6},weekdays:ze,weekdaysMin:Ue,weekdaysShort:Ne,meridiemParse:/[ap]\.?m?\.?/i},tt={},nt={};function rt(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function st(e){return e?e.toLowerCase().replace("_","-"):e}function it(t){var r=null;if(void 0===tt[t]&&void 0!==e&&e&&e.exports)try{r=Qe._abbr,n(251)("./"+t),ot(r)}catch(e){tt[t]=null}return tt[t]}function ot(e,t){var n;return e&&((n=u(t)?dt(e):at(e,t))?Qe=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Qe._abbr}function at(e,t){if(null!==t){var n,r=et;if(t.abbr=e,null!=tt[e])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=tt[e]._config;else if(null!=t.parentLocale)if(null!=tt[t.parentLocale])r=tt[t.parentLocale]._config;else{if(null==(n=it(t.parentLocale)))return nt[t.parentLocale]||(nt[t.parentLocale]=[]),nt[t.parentLocale].push({name:e,config:t}),null;r=n._config}return tt[e]=new H(j(r,t)),nt[e]&&nt[e].forEach((function(e){at(e.name,e.config)})),ot(e),tt[e]}return delete tt[e],null}function dt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Qe;if(!i(e)){if(t=it(e))return t;e=[e]}return function(e){for(var t,n,r,s,i=0;i<e.length;){for(t=(s=st(e[i]).split("-")).length,n=(n=st(e[i+1]))?n.split("-"):null;t>0;){if(r=it(s.slice(0,t).join("-")))return r;if(n&&n.length>=t&&rt(s,n)>=t-1)break;t--}i++}return Qe}(e)}function ut(e){var t,n=e._a;return n&&-2===p(e).overflow&&(t=n[1]<0||n[1]>11?1:n[2]<1||n[2]>Ye(n[0],n[1])?2:n[3]<0||n[3]>24||24===n[3]&&(0!==n[4]||0!==n[5]||0!==n[6])?3:n[4]<0||n[4]>59?4:n[5]<0||n[5]>59?5:n[6]<0||n[6]>999?6:-1,p(e)._overflowDayOfYear&&(t<0||t>2)&&(t=2),p(e)._overflowWeeks&&-1===t&&(t=7),p(e)._overflowWeekday&&-1===t&&(t=8),p(e).overflow=t),e}var ct=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,ht=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],mt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((-?\d+)/i,ft=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,yt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Mt(e){var t,n,r,s,i,o,a=e._i,d=ct.exec(a)||lt.exec(a);if(d){for(p(e).iso=!0,t=0,n=ht.length;t<n;t++)if(ht[t][1].exec(d[1])){s=ht[t][0],r=!1!==ht[t][2];break}if(null==s)return void(e._isValid=!1);if(d[3]){for(t=0,n=mt.length;t<n;t++)if(mt[t][1].exec(d[3])){i=(d[2]||" ")+mt[t][0];break}if(null==i)return void(e._isValid=!1)}if(!r&&null!=i)return void(e._isValid=!1);if(d[4]){if(!_t.exec(d[4]))return void(e._isValid=!1);o="Z"}e._f=s+(i||"")+(o||""),wt(e)}else e._isValid=!1}function vt(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Lt(e){var t,n,r,s,i,o,a,d,u=ft.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(u){if(n=u[4],r=u[3],s=u[2],i=u[5],o=u[6],a=u[7],d=[vt(n),ke.indexOf(r),parseInt(s,10),parseInt(i,10),parseInt(o,10)],a&&d.push(parseInt(a,10)),t=d,!function(e,t,n){return!e||Ne.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(p(n).weekdayMismatch=!0,n._isValid=!1,!1)}(u[1],t,e))return;e._a=t,e._tzm=function(e,t,n){if(e)return yt[e];if(t)return 0;var r=parseInt(n,10),s=r%100;return(r-s)/100*60+s}(u[8],u[9],u[10]),e._d=Ie.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),p(e).rfc2822=!0}else e._isValid=!1}function gt(e,t,n){return null!=e?e:null!=t?t:n}function Yt(e){var t,n,r,i,o,a=[];if(!e._d){for(r=function(e){var t=new Date(s.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}(e),e._w&&null==e._a[2]&&null==e._a[1]&&function(e){var t,n,r,s,i,o,a,d,u;null!=(t=e._w).GG||null!=t.W||null!=t.E?(i=1,o=4,n=gt(t.GG,e._a[0],We(bt(),1,4).year),r=gt(t.W,1),((s=gt(t.E,1))<1||s>7)&&(d=!0)):(i=e._locale._week.dow,o=e._locale._week.doy,u=We(bt(),i,o),n=gt(t.gg,e._a[0],u.year),r=gt(t.w,u.week),null!=t.d?((s=t.d)<0||s>6)&&(d=!0):null!=t.e?(s=t.e+i,(t.e<0||t.e>6)&&(d=!0)):s=i),r<1||r>Re(n,i,o)?p(e)._overflowWeeks=!0:null!=d?p(e)._overflowWeekday=!0:(a=Ce(n,r,s,i,o),e._a[0]=a.year,e._dayOfYear=a.dayOfYear)}(e),null!=e._dayOfYear&&(o=gt(e._a[0],r[0]),(e._dayOfYear>Pe(o)||0===e._dayOfYear)&&(p(e)._overflowDayOfYear=!0),n=Ie(o,0,e._dayOfYear),e._a[1]=n.getUTCMonth(),e._a[2]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=r[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,e._a[3]=0),e._d=(e._useUTC?Ie:Ee).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[3]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(p(e).weekdayMismatch=!0)}}function wt(e){if(e._f!==s.ISO_8601)if(e._f!==s.RFC_2822){e._a=[],p(e).empty=!0;var t,n,r,i,o,a,d=""+e._i,u=d.length,c=0;for(r=W(e._f,e._locale).match(P)||[],t=0;t<r.length;t++)i=r[t],(n=(d.match(pe(i,e))||[])[0])&&((o=d.substr(0,d.indexOf(n))).length>0&&p(e).unusedInput.push(o),d=d.slice(d.indexOf(n)+n.length),c+=n.length),I[i]?(n?p(e).empty=!1:p(e).unusedTokens.push(i),ge(i,n,e)):e._strict&&!n&&p(e).unusedTokens.push(i);p(e).charsLeftOver=u-c,d.length>0&&p(e).unusedInput.push(d),e._a[3]<=12&&!0===p(e).bigHour&&e._a[3]>0&&(p(e).bigHour=void 0),p(e).parsedDateParts=e._a.slice(0),p(e).meridiem=e._meridiem,e._a[3]=function(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((r=e.isPM(n))&&t<12&&(t+=12),r||12!==t||(t=0),t):t}(e._locale,e._a[3],e._meridiem),null!==(a=p(e).era)&&(e._a[0]=e._locale.erasConvertYear(a,e._a[0])),Yt(e),ut(e)}else Lt(e);else Mt(e)}function kt(e){var t=e._i,n=e._f;return e._locale=e._locale||dt(e._l),null===t||void 0===n&&""===t?y({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),Y(t)?new g(ut(t)):(l(t)?e._d=t:i(n)?function(e){var t,n,r,s,i,o,a=!1;if(0===e._f.length)return p(e).invalidFormat=!0,void(e._d=new Date(NaN));for(s=0;s<e._f.length;s++)i=0,o=!1,t=L({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[s],wt(t),f(t)&&(o=!0),i+=p(t).charsLeftOver,i+=10*p(t).unusedTokens.length,p(t).score=i,a?i<r&&(r=i,n=t):(null==r||i<r||o)&&(r=i,n=t,o&&(a=!0));h(e,n||t)}(e):n?wt(e):function(e){var t=e._i;u(t)?e._d=new Date(s.now()):l(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){var t=pt.exec(e._i);null===t?(Mt(e),!1===e._isValid&&(delete e._isValid,Lt(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:s.createFromInputFallback(e)))):e._d=new Date(+t[1])}(e):i(t)?(e._a=_(t.slice(0),(function(e){return parseInt(e,10)})),Yt(e)):o(t)?function(e){if(!e._d){var t=N(e._i),n=void 0===t.day?t.date:t.day;e._a=_([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),Yt(e)}}(e):c(t)?e._d=new Date(t):s.createFromInputFallback(e)}(e),f(e)||(e._d=null),e))}function Tt(e,t,n,r,s){var a,u={};return!0!==t&&!1!==t||(r=t,t=void 0),!0!==n&&!1!==n||(r=n,n=void 0),(o(e)&&d(e)||i(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=n,u._i=e,u._f=t,u._strict=r,(a=new g(ut(kt(u))))._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function bt(e,t,n,r){return Tt(e,t,n,r,!1)}s.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),s.ISO_8601=function(){},s.RFC_2822=function(){};var Dt=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:y()})),St=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:y()}));function jt(e,t){var n,r;if(1===t.length&&i(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}var Ht=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ot(e){var t=N(e),n=t.year||0,r=t.quarter||0,s=t.month||0,i=t.week||t.isoWeek||0,o=t.day||0,d=t.hour||0,u=t.minute||0,c=t.second||0,l=t.millisecond||0;this._isValid=function(e){var t,n,r=!1;for(t in e)if(a(e,t)&&(-1===ye.call(Ht,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<Ht.length;++n)if(e[Ht[n]]){if(r)return!1;parseFloat(e[Ht[n]])!==G(e[Ht[n]])&&(r=!0)}return!0}(t),this._milliseconds=+l+1e3*c+6e4*u+1e3*d*60*60,this._days=+o+7*i,this._months=+s+3*r+12*n,this._data={},this._locale=dt(),this._bubble()}function Pt(e){return e instanceof Ot}function xt(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Et(e,t){A(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+O(~~(e/60),2)+t+O(~~e%60,2)}))}Et("Z",":"),Et("ZZ",""),me("Z",_e),me("ZZ",_e),ve(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=At(_e,e)}));var It=/([\+\-]|\d\d)/gi;function At(e,t){var n,r,s=(t||"").match(e);return null===s?null:0===(r=60*(n=((s[s.length-1]||[])+"").match(It)||["-",0,0])[1]+G(n[2]))?0:"+"===n[0]?r:-r}function Ct(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Y(e)||l(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),s.updateOffset(n,!1),n):bt(e).local()}function Wt(e){return-Math.round(e._d.getTimezoneOffset())}function Rt(){return!!this.isValid()&&this._isUTC&&0===this._offset}s.updateOffset=function(){};var Ft=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,zt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Nt(e,t){var n,r,s,i,o,d,u=e,l=null;return Pt(e)?u={ms:e._milliseconds,d:e._days,M:e._months}:c(e)||!isNaN(+e)?(u={},t?u[t]=+e:u.milliseconds=+e):(l=Ft.exec(e))?(n="-"===l[1]?-1:1,u={y:0,d:G(l[2])*n,h:G(l[3])*n,m:G(l[4])*n,s:G(l[5])*n,ms:G(xt(1e3*l[6]))*n}):(l=zt.exec(e))?(n="-"===l[1]?-1:1,u={y:Ut(l[2],n),M:Ut(l[3],n),w:Ut(l[4],n),d:Ut(l[5],n),h:Ut(l[6],n),m:Ut(l[7],n),s:Ut(l[8],n)}):null==u?u={}:"object"==typeof u&&("from"in u||"to"in u)&&(i=bt(u.from),o=bt(u.to),s=i.isValid()&&o.isValid()?(o=Ct(o,i),i.isBefore(o)?d=qt(i,o):((d=qt(o,i)).milliseconds=-d.milliseconds,d.months=-d.months),d):{milliseconds:0,months:0},(u={}).ms=s.milliseconds,u.M=s.months),r=new Ot(u),Pt(e)&&a(e,"_locale")&&(r._locale=e._locale),Pt(e)&&a(e,"_isValid")&&(r._isValid=e._isValid),r}function Ut(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function qt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Jt(e,t){return function(n,r){var s;return null===r||isNaN(+r)||(D(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),Bt(this,Nt(n,r),e),this}}function Bt(e,t,n,r){var i=t._milliseconds,o=xt(t._days),a=xt(t._months);e.isValid()&&(r=null==r||r,a&&je(e,K(e,"Month")+a*n),o&&$(e,"Date",K(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&s.updateOffset(e,o||a))}Nt.fn=Ot.prototype,Nt.invalid=function(){return Nt(NaN)};var Gt=Jt(1,"add"),Vt=Jt(-1,"subtract");function Kt(e){return"string"==typeof e||e instanceof String}function $t(e){return Y(e)||l(e)||Kt(e)||c(e)||function(e){var t=i(e),n=!1;return t&&(n=0===e.filter((function(t){return!c(t)&&Kt(e)})).length),t&&n}(e)||function(e){var t,n,r=o(e)&&!d(e),s=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<i.length;t+=1)n=i[t],s=s||a(e,n);return r&&s}(e)||null==e}function Zt(e){var t,n=o(e)&&!d(e),r=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<s.length;t+=1)r=r||a(e,s[t]);return n&&r}function Qt(e,t){if(e.date()<t.date())return-Qt(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(n,"months");return-(n+(t-r<0?(t-r)/(r-e.clone().add(n-1,"months")):(t-r)/(e.clone().add(n+1,"months")-r)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=dt(e))&&(this._locale=t),this)}s.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",s.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var en=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function tn(){return this._locale}function nn(e,t){return(e%t+t)%t}function rn(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-126227808e5:new Date(e,t,n).valueOf()}function sn(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-126227808e5:Date.UTC(e,t,n)}function on(e,t){return t.erasAbbrRegex(e)}function an(){var e,t,n=[],r=[],s=[],i=[],o=this.eras();for(e=0,t=o.length;e<t;++e)r.push(fe(o[e].name)),n.push(fe(o[e].abbr)),s.push(fe(o[e].narrow)),i.push(fe(o[e].name)),i.push(fe(o[e].abbr)),i.push(fe(o[e].narrow));this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}function dn(e,t){A(0,[e,e.length],0,t)}function un(e,t,n,r,s){var i;return null==e?We(this,r,s).year:(t>(i=Re(e,r,s))&&(t=i),cn.call(this,e,t,n,r,s))}function cn(e,t,n,r,s){var i=Ce(e,t,n,r,s),o=Ie(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}A("N",0,0,"eraAbbr"),A("NN",0,0,"eraAbbr"),A("NNN",0,0,"eraAbbr"),A("NNNN",0,0,"eraName"),A("NNNNN",0,0,"eraNarrow"),A("y",["y",1],"yo","eraYear"),A("y",["yy",2],0,"eraYear"),A("y",["yyy",3],0,"eraYear"),A("y",["yyyy",4],0,"eraYear"),me("N",on),me("NN",on),me("NNN",on),me("NNNN",(function(e,t){return t.erasNameRegex(e)})),me("NNNNN",(function(e,t){return t.erasNarrowRegex(e)})),ve(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,n,r){var s=n._locale.erasParse(e,r,n._strict);s?p(n).era=s:p(n).invalidEra=e})),me("y",ue),me("yy",ue),me("yyy",ue),me("yyyy",ue),me("yo",(function(e,t){return t._eraYearOrdinalRegex||ue})),ve(["y","yy","yyy","yyyy"],0),ve(["yo"],(function(e,t,n,r){var s;n._locale._eraYearOrdinalRegex&&(s=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[0]=n._locale.eraYearOrdinalParse(e,s):t[0]=parseInt(e,10)})),A(0,["gg",2],0,(function(){return this.weekYear()%100})),A(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),dn("gggg","weekYear"),dn("ggggg","weekYear"),dn("GGGG","isoWeekYear"),dn("GGGGG","isoWeekYear"),F("weekYear","gg"),F("isoWeekYear","GG"),q("weekYear",1),q("isoWeekYear",1),me("G",ce),me("g",ce),me("GG",re,X),me("gg",re,X),me("GGGG",ae,te),me("gggg",ae,te),me("GGGGG",de,ne),me("ggggg",de,ne),Le(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,r){t[r.substr(0,2)]=G(e)})),Le(["gg","GG"],(function(e,t,n,r){t[r]=s.parseTwoDigitYear(e)})),A("Q",0,"Qo","quarter"),F("quarter","Q"),q("quarter",7),me("Q",Q),ve("Q",(function(e,t){t[1]=3*(G(e)-1)})),A("D",["DD",2],"Do","date"),F("date","D"),q("date",9),me("D",re),me("DD",re,X),me("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),ve(["D","DD"],2),ve("Do",(function(e,t){t[2]=G(e.match(re)[0])}));var ln=V("Date",!0);A("DDD",["DDDD",3],"DDDo","dayOfYear"),F("dayOfYear","DDD"),q("dayOfYear",4),me("DDD",oe),me("DDDD",ee),ve(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=G(e)})),A("m",["mm",2],0,"minute"),F("minute","m"),q("minute",14),me("m",re),me("mm",re,X),ve(["m","mm"],4);var _n=V("Minutes",!1);A("s",["ss",2],0,"second"),F("second","s"),q("second",15),me("s",re),me("ss",re,X),ve(["s","ss"],5);var hn,mn,pn=V("Seconds",!1);for(A("S",0,0,(function(){return~~(this.millisecond()/100)})),A(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),A(0,["SSS",3],0,"millisecond"),A(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),A(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),A(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),A(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),A(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),A(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),F("millisecond","ms"),q("millisecond",16),me("S",oe,Q),me("SS",oe,X),me("SSS",oe,ee),hn="SSSS";hn.length<=9;hn+="S")me(hn,ue);function fn(e,t){t[6]=G(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ve(hn,fn);mn=V("Milliseconds",!1),A("z",0,0,"zoneAbbr"),A("zz",0,0,"zoneName");var yn=g.prototype;function Mn(e){return e}yn.add=Gt,yn.calendar=function(e,t){1===arguments.length&&(arguments[0]?$t(arguments[0])?(e=arguments[0],t=void 0):Zt(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||bt(),r=Ct(n,this).startOf("day"),i=s.calendarFormat(this,r)||"sameElse",o=t&&(S(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,bt(n)))},yn.clone=function(){return new g(this)},yn.diff=function(e,t,n){var r,s,i;if(!this.isValid())return NaN;if(!(r=Ct(e,this)).isValid())return NaN;switch(s=6e4*(r.utcOffset()-this.utcOffset()),t=z(t)){case"year":i=Qt(this,r)/12;break;case"month":i=Qt(this,r);break;case"quarter":i=Qt(this,r)/3;break;case"second":i=(this-r)/1e3;break;case"minute":i=(this-r)/6e4;break;case"hour":i=(this-r)/36e5;break;case"day":i=(this-r-s)/864e5;break;case"week":i=(this-r-s)/6048e5;break;default:i=this-r}return n?i:B(i)},yn.endOf=function(e){var t,n;if(void 0===(e=z(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:rn,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1}return this._d.setTime(t),s.updateOffset(this,!0),this},yn.format=function(e){e||(e=this.isUtc()?s.defaultFormatUtc:s.defaultFormat);var t=C(this,e);return this.localeData().postformat(t)},yn.from=function(e,t){return this.isValid()&&(Y(e)&&e.isValid()||bt(e).isValid())?Nt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},yn.fromNow=function(e){return this.from(bt(),e)},yn.to=function(e,t){return this.isValid()&&(Y(e)&&e.isValid()||bt(e).isValid())?Nt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},yn.toNow=function(e){return this.to(bt(),e)},yn.get=function(e){return S(this[e=z(e)])?this[e]():this},yn.invalidAt=function(){return p(this).overflow},yn.isAfter=function(e,t){var n=Y(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=z(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},yn.isBefore=function(e,t){var n=Y(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=z(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},yn.isBetween=function(e,t,n,r){var s=Y(e)?e:bt(e),i=Y(t)?t:bt(t);return!!(this.isValid()&&s.isValid()&&i.isValid())&&(("("===(r=r||"()")[0]?this.isAfter(s,n):!this.isBefore(s,n))&&(")"===r[1]?this.isBefore(i,n):!this.isAfter(i,n)))},yn.isSame=function(e,t){var n,r=Y(e)?e:bt(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=z(t)||"millisecond")?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},yn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},yn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},yn.isValid=function(){return f(this)},yn.lang=en,yn.locale=Xt,yn.localeData=tn,yn.max=St,yn.min=Dt,yn.parsingFlags=function(){return h({},p(this))},yn.set=function(e,t){if("object"==typeof e){var n,r=function(e){var t,n=[];for(t in e)a(e,t)&&n.push({unit:t,priority:U[t]});return n.sort((function(e,t){return e.priority-t.priority})),n}(e=N(e));for(n=0;n<r.length;n++)this[r[n].unit](e[r[n].unit])}else if(S(this[e=z(e)]))return this[e](t);return this},yn.startOf=function(e){var t,n;if(void 0===(e=z(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:rn,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3)}return this._d.setTime(t),s.updateOffset(this,!0),this},yn.subtract=Vt,yn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},yn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},yn.toDate=function(){return new Date(this.valueOf())},yn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?C(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):S(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",C(n,"Z")):C(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},yn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,r="moment",s="";return this.isLocal()||(r=0===this.utcOffset()?"moment.utc":"moment.parseZone",s="Z"),e="["+r+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=s+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+n)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(yn[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),yn.toJSON=function(){return this.isValid()?this.toISOString():null},yn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},yn.unix=function(){return Math.floor(this.valueOf()/1e3)},yn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},yn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},yn.eraName=function(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].name;if(r[e].until<=n&&n<=r[e].since)return r[e].name}return""},yn.eraNarrow=function(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].narrow;if(r[e].until<=n&&n<=r[e].since)return r[e].narrow}return""},yn.eraAbbr=function(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].abbr;if(r[e].until<=n&&n<=r[e].since)return r[e].abbr}return""},yn.eraYear=function(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-s(i[e].since).year())*n+i[e].offset;return this.year()},yn.year=xe,yn.isLeapYear=function(){return J(this.year())},yn.weekYear=function(e){return un.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},yn.isoWeekYear=function(e){return un.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},yn.quarter=yn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},yn.month=He,yn.daysInMonth=function(){return Ye(this.year(),this.month())},yn.week=yn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},yn.isoWeek=yn.isoWeeks=function(e){var t=We(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},yn.weeksInYear=function(){var e=this.localeData()._week;return Re(this.year(),e.dow,e.doy)},yn.weeksInWeekYear=function(){var e=this.localeData()._week;return Re(this.weekYear(),e.dow,e.doy)},yn.isoWeeksInYear=function(){return Re(this.year(),1,4)},yn.isoWeeksInISOWeekYear=function(){return Re(this.isoWeekYear(),1,4)},yn.date=ln,yn.day=yn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}(e,this.localeData()),this.add(e-t,"d")):t},yn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},yn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},yn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},yn.hour=yn.hours=Xe,yn.minute=yn.minutes=_n,yn.second=yn.seconds=pn,yn.millisecond=yn.milliseconds=mn,yn.utcOffset=function(e,t,n){var r,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=At(_e,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(r=Wt(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),i!==e&&(!t||this._changeInProgress?Bt(this,Nt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,s.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Wt(this)},yn.utc=function(e){return this.utcOffset(0,e)},yn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Wt(this),"m")),this},yn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=At(le,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},yn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},yn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},yn.isLocal=function(){return!!this.isValid()&&!this._isUTC},yn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},yn.isUtc=Rt,yn.isUTC=Rt,yn.zoneAbbr=function(){return this._isUTC?"UTC":""},yn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},yn.dates=k("dates accessor is deprecated. Use date instead.",ln),yn.months=k("months accessor is deprecated. Use month instead",He),yn.years=k("years accessor is deprecated. Use year instead",xe),yn.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()})),yn.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){if(!u(this._isDSTShifted))return this._isDSTShifted;var e,t={};return L(t,this),(t=kt(t))._a?(e=t._isUTC?m(t._a):bt(t._a),this._isDSTShifted=this.isValid()&&function(e,t,n){var r,s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0;for(r=0;r<s;r++)(n&&e[r]!==t[r]||!n&&G(e[r])!==G(t[r]))&&o++;return o+i}(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}));var vn=H.prototype;function Ln(e,t,n,r){var s=dt(),i=m().set(r,t);return s[n](i,e)}function gn(e,t,n){if(c(e)&&(t=e,e=void 0),e=e||"",null!=t)return Ln(e,t,n,"month");var r,s=[];for(r=0;r<12;r++)s[r]=Ln(e,r,n,"month");return s}function Yn(e,t,n,r){"boolean"==typeof e?(c(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,c(t)&&(n=t,t=void 0),t=t||"");var s,i=dt(),o=e?i._week.dow:0,a=[];if(null!=n)return Ln(t,(n+o)%7,r,"day");for(s=0;s<7;s++)a[s]=Ln(t,(s+o)%7,r,"day");return a}vn.calendar=function(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return S(r)?r.call(t,n):r},vn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(P).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])},vn.invalidDate=function(){return this._invalidDate},vn.ordinal=function(e){return this._ordinal.replace("%d",e)},vn.preparse=Mn,vn.postformat=Mn,vn.relativeTime=function(e,t,n,r){var s=this._relativeTime[n];return S(s)?s(e,t,n,r):s.replace(/%d/i,e)},vn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return S(n)?n(t):n.replace(/%s/i,t)},vn.set=function(e){var t,n;for(n in e)a(e,n)&&(S(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},vn.eras=function(e,t){var n,r,i,o=this._eras||dt("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=s(o[n].since).startOf("day"),o[n].since=i.valueOf()}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=s(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf()}}return o},vn.erasParse=function(e,t,n){var r,s,i,o,a,d=this.eras();for(e=e.toUpperCase(),r=0,s=d.length;r<s;++r)if(i=d[r].name.toUpperCase(),o=d[r].abbr.toUpperCase(),a=d[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return d[r];break;case"NNNN":if(i===e)return d[r];break;case"NNNNN":if(a===e)return d[r]}else if([i,o,a].indexOf(e)>=0)return d[r]},vn.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?s(e.since).year():s(e.since).year()+(t-e.offset)*n},vn.erasAbbrRegex=function(e){return a(this,"_erasAbbrRegex")||an.call(this),e?this._erasAbbrRegex:this._erasRegex},vn.erasNameRegex=function(e){return a(this,"_erasNameRegex")||an.call(this),e?this._erasNameRegex:this._erasRegex},vn.erasNarrowRegex=function(e){return a(this,"_erasNarrowRegex")||an.call(this),e?this._erasNarrowRegex:this._erasRegex},vn.months=function(e,t){return e?i(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Te).test(t)?"format":"standalone"][e.month()]:i(this._months)?this._months:this._months.standalone},vn.monthsShort=function(e,t){return e?i(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Te.test(t)?"format":"standalone"][e.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},vn.monthsParse=function(e,t,n){var r,s,i;if(this._monthsParseExact)return Se.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(s=m([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(i="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[r]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}},vn.monthsRegex=function(e){return this._monthsParseExact?(a(this,"_monthsRegex")||Oe.call(this),e?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=De),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},vn.monthsShortRegex=function(e){return this._monthsParseExact?(a(this,"_monthsRegex")||Oe.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=be),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},vn.week=function(e){return We(e,this._week.dow,this._week.doy).week},vn.firstDayOfYear=function(){return this._week.doy},vn.firstDayOfWeek=function(){return this._week.dow},vn.weekdays=function(e,t){var n=i(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Fe(n,this._week.dow):e?n[e.day()]:n},vn.weekdaysMin=function(e){return!0===e?Fe(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},vn.weekdaysShort=function(e){return!0===e?Fe(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},vn.weekdaysParse=function(e,t,n){var r,s,i;if(this._weekdaysParseExact)return Ge.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(s=m([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(i="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[r]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}},vn.weekdaysRegex=function(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Ve.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},vn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Ve.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},vn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Ve.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},vn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},vn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},ot("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===G(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),s.lang=k("moment.lang is deprecated. Use moment.locale instead.",ot),s.langData=k("moment.langData is deprecated. Use moment.localeData instead.",dt);var wn=Math.abs;function kn(e,t,n,r){var s=Nt(t,n);return e._milliseconds+=r*s._milliseconds,e._days+=r*s._days,e._months+=r*s._months,e._bubble()}function Tn(e){return e<0?Math.floor(e):Math.ceil(e)}function bn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Sn(e){return function(){return this.as(e)}}var jn=Sn("ms"),Hn=Sn("s"),On=Sn("m"),Pn=Sn("h"),xn=Sn("d"),En=Sn("w"),In=Sn("M"),An=Sn("Q"),Cn=Sn("y");function Wn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Rn=Wn("milliseconds"),Fn=Wn("seconds"),zn=Wn("minutes"),Nn=Wn("hours"),Un=Wn("days"),qn=Wn("months"),Jn=Wn("years"),Bn=Math.round,Gn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Vn(e,t,n,r,s){return s.relativeTime(t||1,!!n,e,r)}var Kn=Math.abs;function $n(e){return(e>0)-(e<0)||+e}function Zn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r,s,i,o,a,d=Kn(this._milliseconds)/1e3,u=Kn(this._days),c=Kn(this._months),l=this.asSeconds();return l?(e=B(d/60),t=B(e/60),d%=60,e%=60,n=B(c/12),c%=12,r=d?d.toFixed(3).replace(/\.?0+$/,""):"",s=l<0?"-":"",i=$n(this._months)!==$n(l)?"-":"",o=$n(this._days)!==$n(l)?"-":"",a=$n(this._milliseconds)!==$n(l)?"-":"",s+"P"+(n?i+n+"Y":"")+(c?i+c+"M":"")+(u?o+u+"D":"")+(t||e||d?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(d?a+r+"S":"")):"P0D"}var Qn=Ot.prototype;return Qn.isValid=function(){return this._isValid},Qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},Qn.add=function(e,t){return kn(this,e,t,1)},Qn.subtract=function(e,t){return kn(this,e,t,-1)},Qn.as=function(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=z(e))||"quarter"===e||"year"===e)switch(t=this._days+r/864e5,n=this._months+bn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}},Qn.asMilliseconds=jn,Qn.asSeconds=Hn,Qn.asMinutes=On,Qn.asHours=Pn,Qn.asDays=xn,Qn.asWeeks=En,Qn.asMonths=In,Qn.asQuarters=An,Qn.asYears=Cn,Qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*G(this._months/12):NaN},Qn._bubble=function(){var e,t,n,r,s,i=this._milliseconds,o=this._days,a=this._months,d=this._data;return i>=0&&o>=0&&a>=0||i<=0&&o<=0&&a<=0||(i+=864e5*Tn(Dn(a)+o),o=0,a=0),d.milliseconds=i%1e3,e=B(i/1e3),d.seconds=e%60,t=B(e/60),d.minutes=t%60,n=B(t/60),d.hours=n%24,o+=B(n/24),s=B(bn(o)),a+=s,o-=Tn(Dn(s)),r=B(a/12),a%=12,d.days=o,d.months=a,d.years=r,this},Qn.clone=function(){return Nt(this)},Qn.get=function(e){return e=z(e),this.isValid()?this[e+"s"]():NaN},Qn.milliseconds=Rn,Qn.seconds=Fn,Qn.minutes=zn,Qn.hours=Nn,Qn.days=Un,Qn.weeks=function(){return B(this.days()/7)},Qn.months=qn,Qn.years=Jn,Qn.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,r,s=!1,i=Gn;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(s=e),"object"==typeof t&&(i=Object.assign({},Gn,t),null!=t.s&&null==t.ss&&(i.ss=t.s-1)),n=this.localeData(),r=function(e,t,n,r){var s=Nt(e).abs(),i=Bn(s.as("s")),o=Bn(s.as("m")),a=Bn(s.as("h")),d=Bn(s.as("d")),u=Bn(s.as("M")),c=Bn(s.as("w")),l=Bn(s.as("y")),_=i<=n.ss&&["s",i]||i<n.s&&["ss",i]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||d<=1&&["d"]||d<n.d&&["dd",d];return null!=n.w&&(_=_||c<=1&&["w"]||c<n.w&&["ww",c]),(_=_||u<=1&&["M"]||u<n.M&&["MM",u]||l<=1&&["y"]||["yy",l])[2]=t,_[3]=+e>0,_[4]=r,Vn.apply(null,_)}(this,!s,i,n),s&&(r=n.pastFuture(+this,r)),n.postformat(r)},Qn.toISOString=Zn,Qn.toString=Zn,Qn.toJSON=Zn,Qn.locale=Xt,Qn.localeData=tn,Qn.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Zn),Qn.lang=en,A("X",0,0,"unix"),A("x",0,0,"valueOf"),me("x",ce),me("X",/[+-]?\d+(\.\d{1,3})?/),ve("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e))})),ve("x",(function(e,t,n){n._d=new Date(G(e))})),
//! moment.js
s.version="2.29.1",t=bt,s.fn=yn,s.min=function(){var e=[].slice.call(arguments,0);return jt("isBefore",e)},s.max=function(){var e=[].slice.call(arguments,0);return jt("isAfter",e)},s.now=function(){return Date.now?Date.now():+new Date},s.utc=m,s.unix=function(e){return bt(1e3*e)},s.months=function(e,t){return gn(e,t,"months")},s.isDate=l,s.locale=ot,s.invalid=y,s.duration=Nt,s.isMoment=Y,s.weekdays=function(e,t,n){return Yn(e,t,n,"weekdays")},s.parseZone=function(){return bt.apply(null,arguments).parseZone()},s.localeData=dt,s.isDuration=Pt,s.monthsShort=function(e,t){return gn(e,t,"monthsShort")},s.weekdaysMin=function(e,t,n){return Yn(e,t,n,"weekdaysMin")},s.defineLocale=at,s.updateLocale=function(e,t){if(null!=t){var n,r,s=et;null!=tt[e]&&null!=tt[e].parentLocale?tt[e].set(j(tt[e]._config,t)):(null!=(r=it(e))&&(s=r._config),t=j(s,t),null==r&&(t.abbr=e),(n=new H(t)).parentLocale=tt[e],tt[e]=n),ot(e)}else null!=tt[e]&&(null!=tt[e].parentLocale?(tt[e]=tt[e].parentLocale,e===ot()&&ot(e)):null!=tt[e]&&delete tt[e]);return tt[e]},s.locales=function(){return T(tt)},s.weekdaysShort=function(e,t,n){return Yn(e,t,n,"weekdaysShort")},s.normalizeUnits=z,s.relativeTimeRounding=function(e){return void 0===e?Bn:"function"==typeof e&&(Bn=e,!0)},s.relativeTimeThreshold=function(e,t){return void 0!==Gn[e]&&(void 0===t?Gn[e]:(Gn[e]=t,"s"===e&&(Gn.ss=t-1),!0))},s.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},s.prototype=yn,s.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},s}()}).call(this,n(250)(e))},function(e,t,n){(function(r){var s,i,o;i=[n(208),n(215)],void 0===(o="function"==typeof(s=function(e,t){"use strict";var s=function(){this.basePath="https://api.symbl.ai".replace(/\/+$/,""),this.authentications={jwt:{type:"apiKey",in:"header",name:"X-API-KEY"}},this.defaultHeaders={},this.timeout=6e4,this.cache=!0,this.enableCookies=!1,"undefined"==typeof window&&(this.agent=new e.agent),this.requestAgent=null};return s.prototype.paramToString=function(e){return null==e||null==e?"":e instanceof Date?e.toJSON():e.toString()},s.prototype.buildUrl=function(e,t){e.match(/^\//)||(e="/"+e);var n=this.basePath+e,r=this;return n=n.replace(/\{([\w-]+)\}/g,(function(e,n){var s;return s=t.hasOwnProperty(n)?r.paramToString(t[n]):e,encodeURIComponent(s)}))},s.prototype.isJsonMime=function(e){return Boolean(null!=e&&e.match(/^application\/json(;.*)?$/i))},s.prototype.jsonPreferredMime=function(e){for(var t=0;t<e.length;t++)if(this.isJsonMime(e[t]))return e[t];return e[0]},s.prototype.isFileParam=function(e){var t;try{t=n(!function(){var e=new Error("Cannot find module 'fs'");throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}return!!(t&&t.ReadStream&&e instanceof t.ReadStream)||"function"==typeof r&&e instanceof r||"function"==typeof Blob&&e instanceof Blob||"function"==typeof File&&e instanceof File},s.prototype.normalizeParams=function(e){var t={};for(var n in e)if(e.hasOwnProperty(n)&&null!=e[n]&&null!=e[n]){var r=e[n];this.isFileParam(r)||Array.isArray(r)?t[n]=r:t[n]=this.paramToString(r)}return t},s.CollectionFormatEnum={CSV:",",SSV:" ",TSV:"\t",PIPES:"|",MULTI:"multi"},s.prototype.buildCollectionParam=function(e,t){if(null==e)return null;switch(t){case"csv":return e.map(this.paramToString).join(",");case"ssv":return e.map(this.paramToString).join(" ");case"tsv":return e.map(this.paramToString).join("\t");case"pipes":return e.map(this.paramToString).join("|");case"multi":return e.map(this.paramToString);default:throw new Error("Unknown collection format: "+t)}},s.prototype.applyAuthToRequest=function(e,t){var n=this;t.forEach((function(t){var r=n.authentications[t];switch(r.type){case"basic":(r.username||r.password)&&e.auth(r.username||"",r.password||"");break;case"apiKey":if(r.apiKey){var s={};r.apiKeyPrefix?s[r.name]=r.apiKeyPrefix+" "+r.apiKey:s[r.name]=r.apiKey,"header"===r.in?e.set(s):e.query(s)}break;case"oauth2":r.accessToken&&e.set({Authorization:"Bearer "+r.accessToken});break;default:throw new Error("Unknown authentication type: "+r.type)}}))},s.prototype.deserialize=function(e,t){if(null==e||null==t||204==e.status)return null;var n=e.body;return(null==n||"object"==typeof n&&void 0===n.length&&!Object.keys(n).length)&&(n=e.text),s.convertToType(n,t)},s.prototype.callApi=function(n,r,s,i,o,a,d,u,c,l,_,h,m){var p=this,f=this.buildUrl(n,s),y=e(r,f);for(var M in this.applyAuthToRequest(y,c),o)if(o.hasOwnProperty(M)){var v=o[M];if("csv"===v.collectionFormat){if(null!=v.value){var L=v.value.map(this.paramToString).map(encodeURIComponent).join(",");y.query(encodeURIComponent(M)+"="+L)}}else i[M]=this.buildCollectionParam(v.value,v.collectionFormat)}"GET"===r.toUpperCase()&&!1===this.cache&&(i._=(new Date).getTime()),y.query(this.normalizeParams(i)),y.set(this.defaultHeaders).set(this.normalizeParams(a)),this.requestAgent&&y.agent(this.requestAgent),y.timeout(this.timeout);var g=this.jsonPreferredMime(l);if(g?"multipart/form-data"!=g&&y.type(g):y.header["Content-Type"]||y.type("application/json"),"application/x-www-form-urlencoded"===g)y.send(t.stringify(this.normalizeParams(d)));else if("multipart/form-data"==g){var Y=this.normalizeParams(d);for(var M in Y)Y.hasOwnProperty(M)&&(this.isFileParam(Y[M])?y.attach(M,Y[M]):y.field(M,Y[M]))}else u&&y.send(u);var w=this.jsonPreferredMime(_);return w&&y.accept(w),"Blob"===h?y.responseType("blob"):"String"===h&&y.responseType("string"),this.enableCookies&&("undefined"==typeof window?this.agent.attachCookies(y):y.withCredentials()),y.end((function(e,t){if(m){var n=null;if(!e)try{n=p.deserialize(t,h),p.enableCookies&&"undefined"==typeof window&&p.agent.saveCookies(t)}catch(t){e=t}m(e,n,t)}})),y},s.parseDate=function(e){return new Date(e.replace(/T/i," "))},s.convertToType=function(e,t){if(null==e)return e;switch(t){case"Boolean":return Boolean(e);case"Integer":return parseInt(e,10);case"Number":return parseFloat(e);case"String":return String(e);case"Date":return this.parseDate(String(e));case"Blob":return e;default:if(t===Object)return e;if("function"==typeof t)return t.constructFromObject(e);if(Array.isArray(t)){var n=t[0];return e.map((function(e){return s.convertToType(e,n)}))}if("object"==typeof t){var r,i;for(var o in t)if(t.hasOwnProperty(o)){r=o,i=t[o];break}var a={};for(var o in e)if(e.hasOwnProperty(o)){var d=s.convertToType(o,r),u=s.convertToType(e[o],i);a[d]=u}return a}return e}},s.constructFromObject=function(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e.hasOwnProperty(r)&&(t[r]=s.convertToType(e[r],n));else for(var i in e)e.hasOwnProperty(i)&&(t[i]=s.convertToType(e[i],n))},s.instance=new s,s})?s.apply(t,i):s)||(e.exports=o)}).call(this,n(27).Buffer)},function(e,t,n){"use strict";(function(e){t.__esModule=!0,t.Logger=void 0;var r=n(236),s=n(63),i=function(){function t(){this.initializeLogger(),this.trace=this.trace.bind(this),this.debug=this.debug.bind(this),this.log=this.log.bind(this),this.info=this.info.bind(this),this.warn=this.warn.bind(this),this.error=this.error.bind(this)}return t.prototype.initializeLogger=function(){s.default?e.clientSdkLogger?this.logger=e.clientSdkLogger:(this.logger=r,e.clientSdkLogger=this.logger):"undefined"!=typeof window?window.clientSdkLogger?this.logger=window.clientSdkLogger:(this.logger=r,window.clientSdkLogger=this.logger):this.logger=r},t.prototype.setLevel=function(e){this.logger.setLevel.apply(null,[e])},t.prototype.getLevel=function(){return this.logger.getLevel.apply(null,[])},t.prototype.setDefaultLevel=function(e){this.logger.setDefaultLevel.apply(null,[e])},t.prototype.trace=function(e,t){void 0===t&&(t={}),this.logger.trace.apply(null,[e,t])},t.prototype.debug=function(e,t){void 0===t&&(t={}),this.logger.debug.apply(null,[e,t])},t.prototype.log=function(e,t){void 0===t&&(t={}),this.logger.log.apply(null,[e,t])},t.prototype.info=function(e,t){void 0===t&&(t={}),this.logger.info.apply(null,[e,t])},t.prototype.warn=function(e,t){void 0===t&&(t={}),this.logger.warn.apply(null,[e,t])},t.prototype.error=function(e,t){void 0===t&&(t={}),this.logger.error.apply(null,[e,t])},t}();t.Logger=i;var o=new i;o.setDefaultLevel("warn"),t.default=o}).call(this,n(5))},function(e,t,n){var r,s,i;s=[n(1),n(30)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("beginOffset")&&(s.beginOffset=e.convertToType(r.beginOffset,"Number")),r.hasOwnProperty("value")&&(s.value=t.constructFromObject(r.value))),s},n.prototype.type=void 0,n.prototype.text=void 0,n.prototype.beginOffset=void 0,n.prototype.value=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(32),n(4)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r=function(e,t){this.name=e,this.userId=t};return r.constructFromObject=function(s,i){return s&&(i=i||new r,s.hasOwnProperty("id")&&(i.id=e.convertToType(s.id,"String")),s.hasOwnProperty("name")&&(i.name=e.convertToType(s.name,"String")),s.hasOwnProperty("userId")&&(i.userId=e.convertToType(s.userId,"String")),s.hasOwnProperty("preferredGender")&&(i.preferredGender=e.convertToType(s.preferredGender,"String")),s.hasOwnProperty("role")&&(i.role=e.convertToType(s.role,"String")),s.hasOwnProperty("avatar")&&(i.avatar=t.constructFromObject(s.avatar)),s.hasOwnProperty("additionalUsers")&&(i.additionalUsers=e.convertToType(s.additionalUsers,[n]))),i},r.prototype.id=void 0,r.prototype.name=void 0,r.prototype.userId=void 0,r.prototype.preferredGender=void 0,r.prototype.role=void 0,r.prototype.avatar=void 0,r.prototype.additionalUsers=void 0,r.PreferredGenderEnum={male:"male",female:"female",unknown:"unknown"},r})?r.apply(t,s):r)||(e.exports=i)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("name")&&(r.name=e.convertToType(n.name,"String")),n.hasOwnProperty("email")&&(r.email=e.convertToType(n.email,"String")),n.hasOwnProperty("phone")&&(r.phone=e.convertToType(n.phone,"String"))),r},t.prototype.name=void 0,t.prototype.email=void 0,t.prototype.phone=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("code")&&(r.code=e.convertToType(n.code,"String")),n.hasOwnProperty("message")&&(r.message=e.convertToType(n.message,"String")),n.hasOwnProperty("url")&&(r.url=e.convertToType(n.url,"String"))),r},t.prototype.code=void 0,t.prototype.message=void 0,t.prototype.url=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(28),n(11),n(31),n(32),n(33),n(34),n(29),n(35),n(36),n(37),n(38),n(39),n(40),n(12),n(41),n(42),n(49),n(43),n(7),n(51),n(14),n(52),n(53),n(54),n(15),n(16),n(18),n(55),n(57),n(47),n(20),n(48),n(44),n(21),n(6),n(19),n(22),n(17),n(56),n(23),n(58),n(59),n(13),n(46),n(50),n(3),n(45),n(60),n(24),n(4),n(30),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230)],void 0===(i="function"==typeof(r=function(e,t,n,r,s,i,o,a,d,u,c,l,_,h,m,p,f,y,M,v,L,g,Y,w,k,T,b,D,S,j,H,O,P,x,E,I,A,C,W,R,F,z,N,U,q,J,B,G,V,K,$,Z,Q,X,ee,te,ne,re,se,ie,oe,ae,de,ue,ce){"use strict";return{ApiClient:e,Action:t,ActionItemListResponse:n,AudioConfig:r,Avatar:s,ChannelTrunc:i,Conversation:o,ConversationActionItem:a,ConversationFollowUp:d,ConversationInsightItem:u,ConversationIntent:c,ConversationMessage:l,ConversationQuestion:_,ConversationTopic:h,DueBy:m,Endpoint:p,EndpointConnectRequest:f,EndpointConnectResponse:y,EndpointRequestData:M,Error:v,ExternalEvent:L,FollowUpListResponse:g,Grant:Y,Hint:w,InsightConfig:k,InsightItem:T,InsightType:b,InsightsListResponse:D,InsightsRequest:S,InsightsResponse:j,Intent:H,IntentListResponse:O,Language:P,LocationTrunc:x,MemberListResponse:E,MembersInfo:I,Message:A,MessageListResponse:C,Metadata:W,Payload:R,QuestionListResponse:F,RefreshTokenRequest:z,RevokeTokenRequest:N,SessionTrunc:U,SessionUser:q,SummaryInfo:J,Tag:B,TimeZone:G,Token:V,TopicListResponse:K,UserTrunc:$,Value:Z,ActionItemsApi:Q,AuthenticationApi:X,ConnectionToEndpointApi:ee,ConversationsApi:te,ExternalEventWebHookApi:ne,FollowUpsApi:re,InsightsApi:se,IntentsApi:ie,LanguageInsightsApi:oe,MembersApi:ae,MessagesApi:de,QuestionsApi:ue,TopicsApi:ce}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){"use strict";t.__esModule=!0,t.default={authBasePath:"https://api.symbl.ai",basePath:"https://api.symbl.ai"}},function(e,t){e.exports=function(e){return null!==e&&"object"==typeof e}},function(e,t,n){var r,s,i;s=[n(1),n(29)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.actionItems=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("actionItems")&&(s.actionItems=e.convertToType(r.actionItems,[t]))),s},n.prototype.actionItems=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("value")&&(r.value=e.convertToType(n.value,"Date")),n.hasOwnProperty("start")&&(r.start=e.convertToType(n.start,"Date")),n.hasOwnProperty("end")&&(r.end=e.convertToType(n.end,"Date"))),r},t.prototype.value=void 0,t.prototype.start=void 0,t.prototype.end=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(44),n(46)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r=function(){};return r.constructFromObject=function(s,i){return s&&(i=i||new r,s.hasOwnProperty("id")&&(i.id=e.convertToType(s.id,"String")),s.hasOwnProperty("name")&&(i.name=e.convertToType(s.name,"String")),s.hasOwnProperty("type")&&(i.type=e.convertToType(s.type,"String")),s.hasOwnProperty("users")&&(i.users=e.convertToType(s.users,[n])),s.hasOwnProperty("location")&&(i.location=t.constructFromObject(s.location))),i},r.prototype.id=void 0,r.prototype.name=void 0,r.prototype.type=void 0,r.prototype.users=void 0,r.prototype.location=void 0,r})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(35)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.followUps=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("followUps")&&(s.followUps=e.convertToType(r.followUps,[t]))),s},n.prototype.followUps=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(12),n(53),n(16),n(17),n(3),n(4)],void 0===(i="function"==typeof(r=function(e,t,n,r,s,i,o){"use strict";var a=function(){};return a.constructFromObject=function(d,u){return d&&(u=u||new a,d.hasOwnProperty("type")&&(u.type=r.constructFromObject(d.type)),d.hasOwnProperty("text")&&(u.text=e.convertToType(d.text,"String")),d.hasOwnProperty("confidence")&&(u.confidence=e.convertToType(d.confidence,"Number")),d.hasOwnProperty("hints")&&(u.hints=e.convertToType(d.hints,[n])),d.hasOwnProperty("tags")&&(u.tags=e.convertToType(d.tags,[i])),d.hasOwnProperty("from")&&(u.from=o.constructFromObject(d.from)),d.hasOwnProperty("metadata")&&(u.metadata=s.constructFromObject(d.metadata)),d.hasOwnProperty("assignee")&&(u.assignee=o.constructFromObject(d.assignee)),d.hasOwnProperty("dueBy")&&(u.dueBy=t.constructFromObject(d.dueBy))),u},a.prototype.type=void 0,a.prototype.text=void 0,a.prototype.confidence=void 0,a.prototype.hints=void 0,a.prototype.tags=void 0,a.prototype.from=void 0,a.prototype.metadata=void 0,a.prototype.assignee=void 0,a.prototype.dueBy=void 0,a})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t={action_item:"action_item",idea:"idea",event:"event",information:"information",follow_up:"follow_up",decision:"decision",question:"question",topic:"topic",intent:"intent",constructFromObject:function(e){return e}};return t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(15),n(3)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r=function(){return this};return r.constructFromObject=function(s,i){return s&&(i=i||new r,e.constructFromObject(s,i,"Object"),s.hasOwnProperty("timezoneOffset")&&(i.timezoneOffset=e.convertToType(s.timezoneOffset,"Number")),s.hasOwnProperty("originalMessageId")&&(i.originalMessageId=e.convertToType(s.originalMessageId,"String")),s.hasOwnProperty("originalContent")&&(i.originalContent=e.convertToType(s.originalContent,"String")),s.hasOwnProperty("words")&&(i.words=e.convertToType(s.words,"String")),s.hasOwnProperty("entities")&&(i.entities=e.convertToType(s.entities,[n])),s.hasOwnProperty("disablePunctuation")&&(i.disablePunctuation=e.convertToType(s.disablePunctuation,"Boolean")),s.hasOwnProperty("insight_items")&&(i.insight_items=e.convertToType(s.insight_items,[t]))),i},r.prototype.timezoneOffset=void 0,r.prototype.originalMessageId=void 0,r.prototype.originalContent=void 0,r.prototype.words=void 0,r.prototype.entities=void 0,r.prototype.disablePunctuation=void 0,r.prototype.insight_items=void 0,r})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(36)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.insights=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("insights")&&(s.insights=e.convertToType(r.insights,[t]))),s},n.prototype.insights=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(33),n(17),n(56),n(13),n(4)],void 0===(i="function"==typeof(r=function(e,t,n,r,s,i){"use strict";var o=function(e,t,n){this.session=e,this.from=t,this.payload=n};return o.constructFromObject=function(a,d){return a&&(d=d||new o,a.hasOwnProperty("id")&&(d.id=e.convertToType(a.id,"String")),a.hasOwnProperty("session")&&(d.session=s.constructFromObject(a.session)),a.hasOwnProperty("from")&&(d.from=i.constructFromObject(a.from)),a.hasOwnProperty("to")&&(d.to=e.convertToType(a.to,[i])),a.hasOwnProperty("payload")&&(d.payload=r.constructFromObject(a.payload)),a.hasOwnProperty("channel")&&(d.channel=t.constructFromObject(a.channel)),a.hasOwnProperty("metadata")&&(d.metadata=n.constructFromObject(a.metadata))),d},o.prototype.id=void 0,o.prototype.session=void 0,o.prototype.from=void 0,o.prototype.to=void 0,o.prototype.payload=void 0,o.prototype.channel=void 0,o.prototype.metadata=void 0,o})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(37)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.intents=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("intents")&&(s.intents=e.convertToType(r.intents,[t]))),s},n.prototype.intents=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(6)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.members=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("members")&&(s.members=e.convertToType(r.members,[t]))),s},n.prototype.members=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(38)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.messages=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("messages")&&(s.messages=e.convertToType(r.messages,[t]))),s},n.prototype.messages=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(39)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.questions=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("questions")&&(s.questions=e.convertToType(r.questions,[t]))),s},n.prototype.questions=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(40)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.topics=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("topics")&&(s.topics=e.convertToType(r.topics,[t]))),s},n.prototype.topics=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){"use strict";t.__esModule=!0;var r=n(232),s=n(2),i=function(){function e(e){if(void 0===e&&(e={}),!e.url)throw new Error("url is required in the options.");this.url=e.url,this.accessToken=e.accessToken,this.options=e,this.isConnected=!1,this.pongTimeoutRef=null,this.pingIntervalRef=null,this.logEntries=[],this.connect=this.connect.bind(this),this.onConnect=this.onConnect.bind(this),this.onError=this.onError.bind(this),this.onMessage=this.onMessage.bind(this),this.onClose=this.onClose.bind(this),this.send=this.send.bind(this),this.disconnect=this.disconnect.bind(this),this.pongTimeout=this.pongTimeout.bind(this),this.ping=this.ping.bind(this),this.clearPongTimeout=this.clearPongTimeout.bind(this),this.clearPingInterval=this.clearPingInterval.bind(this),this.logRecurring=this.logRecurring.bind(this),this.connect()}return e.prototype.ping=function(){var e=this;1===this.webSocket.readyState&&(this.send("__PING__",null),this.pongTimeoutRef=setTimeout((function(){e.pongTimeout()}),4500))},e.prototype.pongTimeout=function(){s.default.warn("PONG failed to receive in ".concat(4500,"ms, closing WebSocket connection")),this.clearPongTimeout(),this.options.onForceClose&&this.options.onForceClose(this.options.referenceId),this.webSocket.close(3006,"Connection closure due to failure in receiving pong within configured threshold")},e.prototype.clearPongTimeout=function(){this.pongTimeoutRef&&clearTimeout(this.pongTimeoutRef)},e.prototype.clearPingInterval=function(){this.pingIntervalRef&&clearInterval(this.pingIntervalRef)},e.prototype.onError=function(e){this.isConnected?(this.clearPingInterval(),this.clearPongTimeout(),this.options.onError&&this.options.onError(e)):s.default.error("Failed to establish the initial handshake: ".concat(e&&e.message),e)},e.prototype.onMessage=function(e){var t=e.data;"__PONG__"!==t?this.options.onMessage&&this.options.onMessage(t):this.clearPongTimeout()},e.prototype.onClose=function(e){!this.isConnected&&e&&1006===e.code&&(e.handshakeFailed=!0),this.clearPingInterval(),this.clearPongTimeout(),this.options.onClose&&this.options.onClose(e)},e.prototype.onConnect=function(e){var t=this;this.isConnected=!0,this.webSocketConnection=e,this.options.reconnectOnError&&(this.pingIntervalRef=setInterval((function(){t.ping()}),5e3)),this.options.onConnectSuccess?this.options.onConnectSuccess(e):s.default.info("Connection established successfully"),this.options.onConnect?this.options.onConnect(e):s.default.info("Connection established.")},e.prototype.connect=function(){var e="".concat(this.url,"?access_token=").concat(this.accessToken);this.webSocket=new r.w3cwebsocket(e,null,null,{"X-API-KEY":this.accessToken}),this.webSocket.binaryType="arraybuffer",this.webSocket.onerror=this.onError,this.webSocket.onmessage=this.onMessage,this.webSocket.onclose=this.onClose,this.webSocket.onopen=this.onConnect},e.prototype.logRecurring=function(e,t){var n=this;if(void 0===t&&(t="info"),!this.logEntries[e]){switch(this.logEntries[e]=e,t){case"warn":s.default.warn(e);break;case"error":s.default.error(e);break;case"debug":s.default.debug(e);break;case"info":default:s.default.info(e)}setTimeout((function(){delete n.logEntries[e]}),5e3)}},e.prototype.send=function(e,t){if(e)try{1===this.webSocket.readyState?this.webSocket.send(e):this.logRecurring("WebSocket Connection not open. Couldn't send data.","warn")}catch(e){s.default.error("Error while sending the data.",e)}else t&&t({message:"undefined data detected."})},e.prototype.disconnect=function(){this.clearPingInterval(),this.clearPongTimeout(),this.webSocket.close(1e3)},e}();t.default=i},function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var d,u=[],c=!1,l=-1;function _(){c&&d&&(c=!1,d.length?u=d.concat(u):l=-1,u.length&&h())}function h(){if(!c){var e=a(_);c=!0;for(var t=u.length;t;){for(d=u,u=[];++l<t;)d&&d[l].run();l=-1,t=u.length}d=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||c||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=n(205),s=n(206),i=n(207);function o(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(o()<t)throw new RangeError("Invalid typed array length");return d.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=d.prototype:(null===e&&(e=new d(t)),e.length=t),e}function d(e,t,n){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return l(this,e)}return u(this,e,t,n)}function u(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r);d.TYPED_ARRAY_SUPPORT?(e=t).__proto__=d.prototype:e=_(e,t);return e}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!d.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|m(t,n),s=(e=a(e,r)).write(t,n);s!==r&&(e=e.slice(0,s));return e}(e,t,n):function(e,t){if(d.isBuffer(t)){var n=0|h(t.length);return 0===(e=a(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?a(e,0):_(e,t);if("Buffer"===t.type&&i(t.data))return _(e,t.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function c(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function l(e,t){if(c(t),e=a(e,t<0?0:0|h(t)),!d.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function _(e,t){var n=t.length<0?0:0|h(t.length);e=a(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function h(e){if(e>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|e}function m(e,t){if(d.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return F(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return z(e).length;default:if(r)return F(e).length;t=(""+t).toLowerCase(),r=!0}}function p(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return j(this,t,n);case"utf8":case"utf-8":return b(this,t,n);case"ascii":return D(this,t,n);case"latin1":case"binary":return S(this,t,n);case"base64":return T(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function f(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function y(e,t,n,r,s){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=s?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(s)return-1;n=e.length-1}else if(n<0){if(!s)return-1;n=0}if("string"==typeof t&&(t=d.from(t,r)),d.isBuffer(t))return 0===t.length?-1:M(e,t,n,r,s);if("number"==typeof t)return t&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):M(e,[t],n,r,s);throw new TypeError("val must be string, number or Buffer")}function M(e,t,n,r,s){var i,o=1,a=e.length,d=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,d/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(s){var c=-1;for(i=n;i<a;i++)if(u(e,i)===u(t,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===d)return c*o}else-1!==c&&(i-=i-c),c=-1}else for(n+d>a&&(n=a-d),i=n;i>=0;i--){for(var l=!0,_=0;_<d;_++)if(u(e,i+_)!==u(t,_)){l=!1;break}if(l)return i}return-1}function v(e,t,n,r){n=Number(n)||0;var s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;var i=t.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var o=0;o<r;++o){var a=parseInt(t.substr(2*o,2),16);if(isNaN(a))return o;e[n+o]=a}return o}function L(e,t,n,r){return N(F(t,e.length-n),e,n,r)}function g(e,t,n,r){return N(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function Y(e,t,n,r){return g(e,t,n,r)}function w(e,t,n,r){return N(z(t),e,n,r)}function k(e,t,n,r){return N(function(e,t){for(var n,r,s,i=[],o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,s=n%256,i.push(s),i.push(r);return i}(t,e.length-n),e,n,r)}function T(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function b(e,t,n){n=Math.min(e.length,n);for(var r=[],s=t;s<n;){var i,o,a,d,u=e[s],c=null,l=u>239?4:u>223?3:u>191?2:1;if(s+l<=n)switch(l){case 1:u<128&&(c=u);break;case 2:128==(192&(i=e[s+1]))&&(d=(31&u)<<6|63&i)>127&&(c=d);break;case 3:i=e[s+1],o=e[s+2],128==(192&i)&&128==(192&o)&&(d=(15&u)<<12|(63&i)<<6|63&o)>2047&&(d<55296||d>57343)&&(c=d);break;case 4:i=e[s+1],o=e[s+2],a=e[s+3],128==(192&i)&&128==(192&o)&&128==(192&a)&&(d=(15&u)<<18|(63&i)<<12|(63&o)<<6|63&a)>65535&&d<1114112&&(c=d)}null===c?(c=65533,l=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),s+=l}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}t.Buffer=d,t.SlowBuffer=function(e){+e!=e&&(e=0);return d.alloc(+e)},t.INSPECT_MAX_BYTES=50,d.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=o(),d.poolSize=8192,d._augment=function(e){return e.__proto__=d.prototype,e},d.from=function(e,t,n){return u(null,e,t,n)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&d[Symbol.species]===d&&Object.defineProperty(d,Symbol.species,{value:null,configurable:!0})),d.alloc=function(e,t,n){return function(e,t,n,r){return c(t),t<=0?a(e,t):void 0!==n?"string"==typeof r?a(e,t).fill(n,r):a(e,t).fill(n):a(e,t)}(null,e,t,n)},d.allocUnsafe=function(e){return l(null,e)},d.allocUnsafeSlow=function(e){return l(null,e)},d.isBuffer=function(e){return!(null==e||!e._isBuffer)},d.compare=function(e,t){if(!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,s=0,i=Math.min(n,r);s<i;++s)if(e[s]!==t[s]){n=e[s],r=t[s];break}return n<r?-1:r<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=d.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){var o=e[n];if(!d.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,s),s+=o.length}return r},d.byteLength=m,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)f(this,t,t+1);return this},d.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)f(this,t,t+3),f(this,t+1,t+2);return this},d.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)f(this,t,t+7),f(this,t+1,t+6),f(this,t+2,t+5),f(this,t+3,t+4);return this},d.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?b(this,0,e):p.apply(this,arguments)},d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},d.prototype.compare=function(e,t,n,r,s){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===s&&(s=this.length),t<0||n>e.length||r<0||s>this.length)throw new RangeError("out of range index");if(r>=s&&t>=n)return 0;if(r>=s)return-1;if(t>=n)return 1;if(this===e)return 0;for(var i=(s>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0),a=Math.min(i,o),u=this.slice(r,s),c=e.slice(t,n),l=0;l<a;++l)if(u[l]!==c[l]){i=u[l],o=c[l];break}return i<o?-1:o<i?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return y(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return y(this,e,t,n,!1)},d.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var s=this.length-t;if((void 0===n||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return v(this,e,t,n);case"utf8":case"utf-8":return L(this,e,t,n);case"ascii":return g(this,e,t,n);case"latin1":case"binary":return Y(this,e,t,n);case"base64":return w(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function D(e,t,n){var r="";n=Math.min(e.length,n);for(var s=t;s<n;++s)r+=String.fromCharCode(127&e[s]);return r}function S(e,t,n){var r="";n=Math.min(e.length,n);for(var s=t;s<n;++s)r+=String.fromCharCode(e[s]);return r}function j(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var s="",i=t;i<n;++i)s+=R(e[i]);return s}function H(e,t,n){for(var r=e.slice(t,n),s="",i=0;i<r.length;i+=2)s+=String.fromCharCode(r[i]+256*r[i+1]);return s}function O(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,n,r,s,i){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<i)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function x(e,t,n,r){t<0&&(t=65535+t+1);for(var s=0,i=Math.min(e.length-n,2);s<i;++s)e[n+s]=(t&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function E(e,t,n,r){t<0&&(t=4294967295+t+1);for(var s=0,i=Math.min(e.length-n,4);s<i;++s)e[n+s]=t>>>8*(r?s:3-s)&255}function I(e,t,n,r,s,i){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function A(e,t,n,r,i){return i||I(e,0,n,4),s.write(e,t,n,r,23,4),n+4}function C(e,t,n,r,i){return i||I(e,0,n,8),s.write(e,t,n,r,52,8),n+8}d.prototype.slice=function(e,t){var n,r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),d.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=d.prototype;else{var s=t-e;n=new d(s,void 0);for(var i=0;i<s;++i)n[i]=this[i+e]}return n},d.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var r=this[e],s=1,i=0;++i<t&&(s*=256);)r+=this[e+i]*s;return r},d.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var r=this[e+--t],s=1;t>0&&(s*=256);)r+=this[e+--t]*s;return r},d.prototype.readUInt8=function(e,t){return t||O(e,1,this.length),this[e]},d.prototype.readUInt16LE=function(e,t){return t||O(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUInt16BE=function(e,t){return t||O(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUInt32LE=function(e,t){return t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUInt32BE=function(e,t){return t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var r=this[e],s=1,i=0;++i<t&&(s*=256);)r+=this[e+i]*s;return r>=(s*=128)&&(r-=Math.pow(2,8*t)),r},d.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var r=t,s=1,i=this[e+--r];r>0&&(s*=256);)i+=this[e+--r]*s;return i>=(s*=128)&&(i-=Math.pow(2,8*t)),i},d.prototype.readInt8=function(e,t){return t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){t||O(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){t||O(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readFloatLE=function(e,t){return t||O(e,4,this.length),s.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return t||O(e,4,this.length),s.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return t||O(e,8,this.length),s.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return t||O(e,8,this.length),s.read(this,e,!1,52,8)},d.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||P(this,e,t,n,Math.pow(2,8*n)-1,0);var s=1,i=0;for(this[t]=255&e;++i<n&&(s*=256);)this[t+i]=e/s&255;return t+n},d.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||P(this,e,t,n,Math.pow(2,8*n)-1,0);var s=n-1,i=1;for(this[t+s]=255&e;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+n},d.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,1,255,0),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):x(this,e,t,!0),t+2},d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):x(this,e,t,!1),t+2},d.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):E(this,e,t,!0),t+4},d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):E(this,e,t,!1),t+4},d.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var s=Math.pow(2,8*n-1);P(this,e,t,n,s-1,-s)}var i=0,o=1,a=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+n},d.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var s=Math.pow(2,8*n-1);P(this,e,t,n,s-1,-s)}var i=n-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,1,127,-128),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):x(this,e,t,!0),t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):x(this,e,t,!1),t+2},d.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):E(this,e,t,!0),t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):E(this,e,t,!1),t+4},d.prototype.writeFloatLE=function(e,t,n){return A(this,e,t,!0,n)},d.prototype.writeFloatBE=function(e,t,n){return A(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return C(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return C(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var s,i=r-n;if(this===e&&n<t&&t<r)for(s=i-1;s>=0;--s)e[s+t]=this[s+n];else if(i<1e3||!d.TYPED_ARRAY_SUPPORT)for(s=0;s<i;++s)e[s+t]=this[s+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+i),t);return i},d.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var s=e.charCodeAt(0);s<256&&(e=s)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!d.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{var o=d.isBuffer(e)?e:F(new d(e,r).toString()),a=o.length;for(i=0;i<n-t;++i)this[i+t]=o[i%a]}return this};var W=/[^+\/0-9A-Za-z-_]/g;function R(e){return e<16?"0"+e.toString(16):e.toString(16)}function F(e,t){var n;t=t||1/0;for(var r=e.length,s=null,i=[],o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!s){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&i.push(239,191,189);continue}s=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),s=n;continue}n=65536+(s-55296<<10|n-56320)}else s&&(t-=3)>-1&&i.push(239,191,189);if(s=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function z(e){return r.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(W,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function N(e,t,n,r){for(var s=0;s<r&&!(s+n>=t.length||s>=e.length);++s)t[s+n]=e[s];return s}}).call(this,n(5))},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(e,t){this.invokeOn=e,this.name=t};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("invokeOn")&&(r.invokeOn=e.convertToType(n.invokeOn,"String")),n.hasOwnProperty("name")&&(r.name=e.convertToType(n.name,"String")),n.hasOwnProperty("parameters")&&(r.parameters=e.convertToType(n.parameters,Object))),r},t.prototype.invokeOn=void 0,t.prototype.name=void 0,t.prototype.parameters=void 0,t.InvokeOnEnum={start:"start",stop:"stop"},t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(12),n(6),n(3)],void 0===(i="function"==typeof(r=function(e,t,n,r){"use strict";var s=function(){};return s.constructFromObject=function(i,o){return i&&(o=o||new s,i.hasOwnProperty("id")&&(o.id=e.convertToType(i.id,"String")),i.hasOwnProperty("text")&&(o.text=e.convertToType(i.text,"String")),i.hasOwnProperty("type")&&(o.type=e.convertToType(i.type,"String")),i.hasOwnProperty("score")&&(o.score=e.convertToType(i.score,"Number")),i.hasOwnProperty("messageIds")&&(o.messageIds=e.convertToType(i.messageIds,["String"])),i.hasOwnProperty("entities")&&(o.entities=e.convertToType(i.entities,[r])),i.hasOwnProperty("assignee")&&(o.assignee=n.constructFromObject(i.assignee)),i.hasOwnProperty("dueBy")&&(o.dueBy=t.constructFromObject(i.dueBy))),o},s.prototype.id=void 0,s.prototype.text=void 0,s.prototype.type=void 0,s.prototype.score=void 0,s.prototype.messageIds=void 0,s.prototype.entities=void 0,s.prototype.assignee=void 0,s.prototype.dueBy=void 0,s})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("type")&&(r.type=e.convertToType(n.type,"String")),n.hasOwnProperty("value")&&(r.value=e.convertToType(n.value,Object)),n.hasOwnProperty("start")&&(r.start=e.convertToType(n.start,"String")),n.hasOwnProperty("end")&&(r.end=e.convertToType(n.end,"String"))),r},t.prototype.type=void 0,t.prototype.value=void 0,t.prototype.start=void 0,t.prototype.end=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("encoding")&&(r.encoding=e.convertToType(n.encoding,"String")),n.hasOwnProperty("sampleRate")&&(r.sampleRate=e.convertToType(n.sampleRate,"Number")),n.hasOwnProperty("sampleSize")&&(r.sampleSize=e.convertToType(n.sampleSize,"Number")),n.hasOwnProperty("payloadType")&&(r.payloadType=e.convertToType(n.payloadType,"Number"))),r},t.prototype.encoding=void 0,t.prototype.sampleRate=void 0,t.prototype.sampleSize=void 0,t.prototype.payloadType=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("color")&&(r.color=e.convertToType(n.color,"String"))),r},t.prototype.color=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("id")&&(r.id=e.convertToType(n.id,"String")),n.hasOwnProperty("name")&&(r.name=e.convertToType(n.name,"String"))),r},t.prototype.id=void 0,t.prototype.name=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(6)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("name")&&(s.name=e.convertToType(r.name,"String")),r.hasOwnProperty("startTime")&&(s.startTime=e.convertToType(r.startTime,"Date")),r.hasOwnProperty("endTime")&&(s.endTime=e.convertToType(r.endTime,"Date")),r.hasOwnProperty("transcriptId")&&(s.transcriptId=e.convertToType(r.transcriptId,"String")),r.hasOwnProperty("members")&&(s.members=e.convertToType(r.members,[t]))),s},n.prototype.id=void 0,n.prototype.type=void 0,n.prototype.name=void 0,n.prototype.startTime=void 0,n.prototype.endTime=void 0,n.prototype.transcriptId=void 0,n.prototype.members=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(3)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("score")&&(s.score=e.convertToType(r.score,"Number")),r.hasOwnProperty("messageIds")&&(s.messageIds=e.convertToType(r.messageIds,["String"])),r.hasOwnProperty("entities")&&(s.entities=e.convertToType(r.entities,[t])),r.hasOwnProperty("channel")&&(s.channel=e.convertToType(r.channel,"String"))),s},n.prototype.id=void 0,n.prototype.text=void 0,n.prototype.type=void 0,n.prototype.score=void 0,n.prototype.messageIds=void 0,n.prototype.entities=void 0,n.prototype.channel=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(3)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("score")&&(s.score=e.convertToType(r.score,"Number")),r.hasOwnProperty("messageIds")&&(s.messageIds=e.convertToType(r.messageIds,["String"])),r.hasOwnProperty("entities")&&(s.entities=e.convertToType(r.entities,[t]))),s},n.prototype.id=void 0,n.prototype.text=void 0,n.prototype.type=void 0,n.prototype.score=void 0,n.prototype.messageIds=void 0,n.prototype.entities=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(3)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("score")&&(s.score=e.convertToType(r.score,"Number")),r.hasOwnProperty("messageIds")&&(s.messageIds=e.convertToType(r.messageIds,["String"])),r.hasOwnProperty("intent")&&(s.intent=e.convertToType(r.intent,"String")),r.hasOwnProperty("alternatives")&&(s.alternatives=e.convertToType(r.alternatives,[Object])),r.hasOwnProperty("entities")&&(s.entities=e.convertToType(r.entities,[t]))),s},n.prototype.id=void 0,n.prototype.text=void 0,n.prototype.type=void 0,n.prototype.score=void 0,n.prototype.messageIds=void 0,n.prototype.intent=void 0,n.prototype.alternatives=void 0,n.prototype.entities=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(6)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("from")&&(s.from=t.constructFromObject(r.from)),r.hasOwnProperty("startTime")&&(s.startTime=e.convertToType(r.startTime,"Date")),r.hasOwnProperty("endTime")&&(s.endTime=e.convertToType(r.endTime,"Date")),r.hasOwnProperty("transcriptId")&&(s.transcriptId=e.convertToType(r.transcriptId,"String")),r.hasOwnProperty("conversationId")&&(s.conversationId=e.convertToType(r.conversationId,"String"))),s},n.prototype.id=void 0,n.prototype.text=void 0,n.prototype.from=void 0,n.prototype.startTime=void 0,n.prototype.endTime=void 0,n.prototype.transcriptId=void 0,n.prototype.conversationId=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(3)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("score")&&(s.score=e.convertToType(r.score,"Number")),r.hasOwnProperty("messageIds")&&(s.messageIds=e.convertToType(r.messageIds,["String"])),r.hasOwnProperty("entities")&&(s.entities=e.convertToType(r.entities,[t]))),s},n.prototype.id=void 0,n.prototype.text=void 0,n.prototype.type=void 0,n.prototype.score=void 0,n.prototype.messageIds=void 0,n.prototype.entities=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(3)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("id")&&(s.id=e.convertToType(r.id,"String")),r.hasOwnProperty("text")&&(s.text=e.convertToType(r.text,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("score")&&(s.score=e.convertToType(r.score,"Number")),r.hasOwnProperty("messageIds")&&(s.messageIds=e.convertToType(r.messageIds,["String"])),r.hasOwnProperty("entities")&&(s.entities=e.convertToType(r.entities,[t]))),s},n.prototype.id=void 0,n.prototype.text=void 0,n.prototype.type=void 0,n.prototype.score=void 0,n.prototype.messageIds=void 0,n.prototype.entities=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(31)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("uri")&&(s.uri=e.convertToType(r.uri,"String")),r.hasOwnProperty("providerName")&&(s.providerName=e.convertToType(r.providerName,"String")),r.hasOwnProperty("phoneNumber")&&(s.phoneNumber=e.convertToType(r.phoneNumber,"String")),r.hasOwnProperty("dtmf")&&(s.dtmf=e.convertToType(r.dtmf,"String")),r.hasOwnProperty("language")&&(s.language=e.convertToType(r.language,"String")),r.hasOwnProperty("audioConfig")&&(s.audioConfig=t.constructFromObject(r.audioConfig)),r.hasOwnProperty("timezoneOffset")&&(s.timezoneOffset=e.convertToType(r.timezoneOffset,"Number")),r.hasOwnProperty("idleTimeout")&&(s.idleTimeout=e.convertToType(r.idleTimeout,"Number")),r.hasOwnProperty("transportConfig")&&(s.transportConfig=e.convertToType(r.transportConfig,"String"))),s},n.prototype.type=void 0,n.prototype.uri=void 0,n.prototype.providerName=void 0,n.prototype.phoneNumber=void 0,n.prototype.dtmf=void 0,n.prototype.language=void 0,n.prototype.audioConfig=void 0,n.prototype.timezoneOffset=void 0,n.prototype.idleTimeout=void 0,n.prototype.transportConfig=void 0,n.TypeEnum={sip:"sip",pstn:"pstn"},n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(28),n(41),n(43),n(47),n(48)],void 0===(i="function"==typeof(r=function(e,t,n,r,s,i){"use strict";var o=function(e,t){this.operation=e,this.endpoint=t};return o.constructFromObject=function(a,d){return a&&(d=d||new o,a.hasOwnProperty("connectionId")&&(d.connectionId=e.convertToType(a.connectionId,"String")),a.hasOwnProperty("operation")&&(d.operation=e.convertToType(a.operation,"String")),a.hasOwnProperty("endpoint")&&(d.endpoint=n.constructFromObject(a.endpoint)),a.hasOwnProperty("intents")&&(d.intents=e.convertToType(a.intents,[s])),a.hasOwnProperty("endpointWebhookUrl")&&(d.endpointWebhookUrl=e.convertToType(a.endpointWebhookUrl,"String")),a.hasOwnProperty("callbackUrl")&&(d.callbackUrl=e.convertToType(a.callbackUrl,"String")),a.hasOwnProperty("headers")&&(d.headers=e.convertToType(a.headers,Object)),a.hasOwnProperty("actions")&&(d.actions=e.convertToType(a.actions,[t])),a.hasOwnProperty("languages")&&(d.languages=e.convertToType(a.languages,[i])),a.hasOwnProperty("validationToken")&&(d.validationToken=e.convertToType(a.validationToken,"String")),a.hasOwnProperty("data")&&(d.data=r.constructFromObject(a.data))),d},o.prototype.connectionId=void 0,o.prototype.operation=void 0,o.prototype.endpoint=void 0,o.prototype.intents=void 0,o.prototype.endpointWebhookUrl=void 0,o.prototype.callbackUrl=void 0,o.prototype.headers=void 0,o.prototype.actions=void 0,o.prototype.languages=void 0,o.prototype.validationToken=void 0,o.prototype.data=void 0,o.OperationEnum={start:"start",stop:"stop"},o})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(13)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(e,r){return e&&(r=r||new n,e.hasOwnProperty("session")&&(r.session=t.constructFromObject(e.session))),r},n.prototype.session=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(45)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(e,r){return e&&(r=r||new n,e.hasOwnProperty("timeZone")&&(r.timeZone=t.constructFromObject(e.timeZone))),r},n.prototype.timeZone=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("name")&&(r.name=e.convertToType(n.name,"String")),n.hasOwnProperty("offset")&&(r.offset=e.convertToType(n.offset,"Number"))),r},t.prototype.name=void 0,t.prototype.offset=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(4)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("user")&&(s.user=t.constructFromObject(r.user)),r.hasOwnProperty("status")&&(s.status=e.convertToType(r.status,"String")),r.hasOwnProperty("mode")&&(s.mode=e.convertToType(r.mode,"String"))),s},n.prototype.user=void 0,n.prototype.status=void 0,n.prototype.mode=void 0,n.StatusEnum={joined:"joined",not_joined:"not_joined",left:"left"},n.ModeEnum={native:"native",external:"external",custom:"custom"},n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(e){this.intent=e};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("intent")&&(r.intent=e.convertToType(n.intent,"String")),n.hasOwnProperty("silenceTimeout")&&(r.silenceTimeout=e.convertToType(n.silenceTimeout,"Number"))),r},t.prototype.intent=void 0,t.prototype.silenceTimeout=void 0,t.IntentEnum={answering_machine:"answering_machine",do_not_call:"do_not_call",not_interested:"not_interested",interested:"interested"},t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("code")&&(r.code=e.convertToType(n.code,"String"))),r},t.prototype.code=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(50)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e){this.connectionId=e};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("connectionId")&&(s.connectionId=e.convertToType(r.connectionId,"String")),r.hasOwnProperty("eventUrl")&&(s.eventUrl=e.convertToType(r.eventUrl,"String")),r.hasOwnProperty("resultWebSocketUrl")&&(s.resultWebSocketUrl=e.convertToType(r.resultWebSocketUrl,"String")),r.hasOwnProperty("conversationId")&&(s.conversationId=e.convertToType(r.conversationId,"String")),r.hasOwnProperty("summaryInfo")&&(s.summaryInfo=e.convertToType(r.summaryInfo,[t]))),s},n.prototype.connectionId=void 0,n.prototype.eventUrl=void 0,n.prototype.resultWebSocketUrl=void 0,n.prototype.conversationId=void 0,n.prototype.summaryInfo=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(4)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(){};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("user")&&(s.user=t.constructFromObject(r.user)),r.hasOwnProperty("url")&&(s.url=e.convertToType(r.url,"String"))),s},n.prototype.user=void 0,n.prototype.url=void 0,n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(4)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n=function(e,t){this.type=e,this.user=t};return n.constructFromObject=function(r,s){return r&&(s=s||new n,r.hasOwnProperty("topic")&&(s.topic=e.convertToType(r.topic,"String")),r.hasOwnProperty("type")&&(s.type=e.convertToType(r.type,"String")),r.hasOwnProperty("user")&&(s.user=t.constructFromObject(r.user))),s},n.prototype.topic=void 0,n.prototype.type=void 0,n.prototype.user=void 0,n.TopicEnum={speaker:"speaker"},n})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(e){this.type=e};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("type")&&(r.type=e.convertToType(n.type,"String")),n.hasOwnProperty("username")&&(r.username=e.convertToType(n.username,"String")),n.hasOwnProperty("password")&&(r.password=e.convertToType(n.password,"String")),n.hasOwnProperty("appId")&&(r.appId=e.convertToType(n.appId,"String")),n.hasOwnProperty("appSecret")&&(r.appSecret=e.convertToType(n.appSecret,"String"))),r},t.prototype.type=void 0,t.prototype.username=void 0,t.prototype.password=void 0,t.prototype.appId=void 0,t.prototype.appSecret=void 0,t.TypeEnum={password:"password",application:"application"},t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("key")&&(r.key=e.convertToType(n.key,"String")),n.hasOwnProperty("value")&&(r.value=e.convertToType(n.value,"String"))),r},t.prototype.key=void 0,t.prototype.value=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("conversationSetting")&&(r.conversationSetting=e.convertToType(n.conversationSetting,"String")),n.hasOwnProperty("confidenceThreshold")&&(r.confidenceThreshold=e.convertToType(n.confidenceThreshold,"Number")),n.hasOwnProperty("disablePunctuation")&&(r.disablePunctuation=e.convertToType(n.disablePunctuation,"Boolean")),n.hasOwnProperty("language")&&(r.language=e.convertToType(n.language,"String")),n.hasOwnProperty("timezoneOffset")&&(r.timezoneOffset=e.convertToType(n.timezoneOffset,"Number"))),r},t.prototype.conversationSetting=void 0,t.prototype.confidenceThreshold=void 0,t.prototype.disablePunctuation=!0,t.prototype.language=void 0,t.prototype.timezoneOffset=void 0,t.ConversationSettingEnum={general:"general",meeting:"meeting",interview:"interview"},t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(54),n(16),n(19)],void 0===(i="function"==typeof(r=function(e,t,n,r){"use strict";var s=function(e,t){this.insightTypes=e,this.messages=t};return s.constructFromObject=function(i,o){return i&&(o=o||new s,i.hasOwnProperty("insightTypes")&&(o.insightTypes=e.convertToType(i.insightTypes,[n])),i.hasOwnProperty("messages")&&(o.messages=e.convertToType(i.messages,[r])),i.hasOwnProperty("config")&&(o.config=t.constructFromObject(i.config))),o},s.prototype.insightTypes=void 0,s.prototype.messages=void 0,s.prototype.config=void 0,s})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("content")&&(r.content=e.convertToType(n.content,"String")),n.hasOwnProperty("contentType")&&(r.contentType=e.convertToType(n.contentType,"String"))),r},t.prototype.content=void 0,t.prototype.contentType=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(7),n(15),n(19)],void 0===(i="function"==typeof(r=function(e,t,n,r){"use strict";var s=function(){};return s.constructFromObject=function(i,o){return i&&(o=o||new s,i.hasOwnProperty("insights")&&(o.insights=e.convertToType(i.insights,[n])),i.hasOwnProperty("messages")&&(o.messages=e.convertToType(i.messages,[r])),i.hasOwnProperty("errors")&&(o.errors=e.convertToType(i.errors,[t]))),o},s.prototype.insights=void 0,s.prototype.messages=void 0,s.prototype.errors=void 0,s})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("appId")&&(r.appId=e.convertToType(n.appId,"String")),n.hasOwnProperty("appSecret")&&(r.appSecret=e.convertToType(n.appSecret,"String")),n.hasOwnProperty("refreshToken")&&(r.refreshToken=e.convertToType(n.refreshToken,"String"))),r},t.prototype.appId=void 0,t.prototype.appSecret=void 0,t.prototype.refreshToken=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("appId")&&(r.appId=e.convertToType(n.appId,"String")),n.hasOwnProperty("appSecret")&&(r.appSecret=e.convertToType(n.appSecret,"String"))),r},t.prototype.appId=void 0,t.prototype.appSecret=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1)],void 0===(i="function"==typeof(r=function(e){"use strict";var t=function(){};return t.constructFromObject=function(n,r){return n&&(r=r||new t,n.hasOwnProperty("accessToken")&&(r.accessToken=e.convertToType(n.accessToken,"String")),n.hasOwnProperty("refershToken")&&(r.refershToken=e.convertToType(n.refershToken,"String")),n.hasOwnProperty("expiresIn")&&(r.expiresIn=e.convertToType(n.expiresIn,"Number"))),r},t.prototype.accessToken=void 0,t.prototype.refershToken=void 0,t.prototype.expiresIn=void 0,t})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){"use strict";t.__esModule=!0;var r="Unrecognized error has occurred, please report this issue or contact the support - support@rammer.ai",s="Error occurred in the remote system. If the problem doesn't resolve in sometime, contact the support immediately - support@rammer.ai",i="Error occurred in client sdk. please report this issue or contact the support - support@rammer.ai",o="Your app is not authorized to perform this operation. Please make sure that the credentials are provided using init(), and are valid.",a="Your app doesn't have enough permissions to perform this operation.",d="The requested resource was not found.",u="The request syntax is not valid.",c="You don't have enough balance to perform this operation.",l=function(){function e(){}return e.getError=function(e){var t=r;if(e.internalError)return{internalError:e};if(e&&e.status&&e.response){var n=e.status,l=e.response;if(n)if(n>=500&&n<=511)t=s;else if(n>=400&&n<=451)switch(n){case 400:t=u;break;case 401:t=o;break;case 402:t=c;break;case 403:t=a;break;case 404:t=d;break;default:t=i}if(l&&l.body){var _=JSON.stringify(l.body,null,2);t="".concat(t,"\n").concat(_)}}return{internalError:e,message:t}},e}();t.default=l},function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}d((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var i=n(25),o=n(2),a=n(237),d={notAvailable:"not_available",notConnected:"not_connected",isConnecting:"is_connecting",connected:"connected",error:"error",closed:"closed"},u=function(){function e(e,t,n){var r=this;if(void 0===n&&(n={}),!e.webSocketUrl||!e.eventUrl)throw new Error("At least one of webSocketUrl and eventUrl is required in connection.");if(!t)throw new Error("apiClient is required for EventApi");this.webSocketUrl=e.webSocketUrl,this.eventUrl=e.eventUrl,this.options=n,this.connection=e,this.eventsQueue=new a.default({concurrency:1}),this.eventCount=0,this.eventsQueue.on("active",(function(){o.default.trace("Working on event #".concat(++r.eventCount,", Size: ").concat(r.eventsQueue.size,", Pending: ").concat(r.eventsQueue.pending))})),this.connectWebSocket=this.connectWebSocket.bind(this),this.onConnectWebSocket=this.onConnectWebSocket.bind(this),this.onErrorWebSocket=this.onErrorWebSocket.bind(this),this.onMessageWebSocket=this.onMessageWebSocket.bind(this),this.onCloseWebSocket=this.onCloseWebSocket.bind(this),this.publishResults=this.publishResults.bind(this),this.apiClient=t,this.maxWaitTimeForWebSocketConnectionEstablishmentInSeconds=60,this.webSocketConnectionEstablishmentPollInterval=250,this.webSocketUrl?(this.webSocketStatus=d.notConnected,this.options.pushSpeakerEvents&&this.connectWebSocket(this.webSocketUrl)):this.eventUrl&&(this.webSocketStatus=d.notAvailable)}return e.prototype.onErrorWebSocket=function(e){this.webSocketStatus=d.error,o.default.error(e)},e.getWebSocketConnectionStatuses=function(){return d},e.prototype.onMessageWebSocket=function(e){this.publishResults(e)},e.prototype.onCloseWebSocket=function(){this.webSocketStatus=d.closed},e.prototype.onConnectWebSocket=function(){this.webSocketStatus=d.connected},e.prototype.connectWebSocket=function(e){this.webSocketStatus=d.isConnecting,o.default.trace("Establishing Events WebSocket Connection"),this.webSocket=new i.default({url:e,accessToken:this.apiClient.authentications.jwt.apiKey,onError:this.onErrorWebSocket,onClose:this.onCloseWebSocket,onMessage:this.onMessageWebSocket,onConnect:this.onConnectWebSocket})},e.prototype.enqueueEvent=function(e){return r(this,void 0,void 0,(function(){var t=this;return s(this,(function(n){switch(n.label){case 0:return e.timestamp||(e.timestamp=(new Date).toISOString()),[4,this.eventsQueue.add((function(){return t.sendEvent(e)}))];case 1:return n.sent(),[2]}}))}))},e.prototype.sendEvent=function(e){var t=this;if(this.webSocketStatus===d.notConnected||this.webSocketStatus===d.isConnecting)return new Promise((function(n,r){var s=1e3*t.maxWaitTimeForWebSocketConnectionEstablishmentInSeconds/t.webSocketConnectionEstablishmentPollInterval,i=setInterval((function(){if(t.webSocketStatus===d.connected){clearInterval(i),i=null;var a=JSON.stringify(e);o.default.trace("Sending event on Events WebSocket after WebSocket connection status changed to ".concat(d.connected),a),t.webSocket.send(a),n()}if(s<=0){var u="Events WebSocket connection was in ".concat(t.webSocketStatus," state after ").concat(t.maxWaitTimeForWebSocketConnectionEstablishmentInSeconds," seconds.");clearInterval(i),o.default.error(u),r(u)}--s}),t.webSocketConnectionEstablishmentPollInterval)}));if(this.webSocketStatus===d.connected){var n=JSON.stringify(e);return o.default.trace("Sending event on Events WebSocket connection",n),this.webSocket.send(n),Promise.resolve()}if(this.webSocketStatus===d.error){var r="Cannot send events as WebSocket connection was closed with error";return o.default.error(r),Promise.reject(r)}r="Cannot send events as WebSocket connection was already closed or not established";return o.default.error(r),Promise.reject(r)},e.prototype.pushEvent=function(e,t){this.webSocketStatus===d.notConnected&&this.connectWebSocket(this.webSocketUrl),this.webSocketStatus===d.connected||this.webSocketStatus===d.isConnecting||this.webSocketStatus===d.notConnected?this.enqueueEvent(e):this.webSocketStatus===d.notAvailable||this.webSocketStatus===d.error||t&&t({message:"Connection is already closed."})},e.prototype.publishResults=function(e){this.connection.publish(e)},e}();t.default=u},function(e,t){e.exports=!1},function(e,t,n){"use strict";(function(e){t.__esModule=!0;var r=n(243),s=function(){function e(){this.cacheStore=new r.default,this.get=this.get.bind(this),this.set=this.set.bind(this),this.remove=this.remove.bind(this),this.contains=this.contains.bind(this)}return e.prototype.contains=function(e){return this.cacheStore.contains(e)},e.prototype.get=function(e){return this.cacheStore.get(e)},e.prototype.set=function(e,t){this.cacheStore.set(e,t)},e.prototype.remove=function(e){this.cacheStore.remove(e)},e}();t.default=s}).call(this,n(5))},function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}d((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var i=n(2),o=function(){function e(e,t,n,r){void 0===e&&(e=5e3),void 0===t&&(t=100),void 0===n&&(n=.9),void 0===r&&(r=20),e<=t&&i.default.error("Maximum delay must be greater than minimum delay."),(n>=1||n<=0)&&i.default.error("Factor must be between 0 and 1."),r<=0&&i.default.error("Maximum retries must be greater than 0."),this.max=e,this.min=t,this.factor=n,this.retries=r,this.nextDelay=e,this.reset=this.reset.bind(this),this.run=this.run.bind(this)}return e.prototype.reset=function(){this.max=5e3,this.min=100,this.factor=.9,this.retries=20,this.nextDelay=5e3},e.prototype.run=function(e,t,n,o){return void 0===t&&(t=null),void 0===n&&(n=[]),void 0===o&&(o=!1),r(this,void 0,void 0,(function(){var r,a,d,u=this;return s(this,(function(s){switch(s.label){case 0:if(!e||"function"!=typeof e)return r="Please provide a callback function to be run after the inverse exponential backoff delay.",i.default.error(r),[2,Promise.reject(r)];if(n&&!Array.isArray(n)&&i.default.error("No valid arguments passed in args"),0===this.retries)throw i.default.error("No retries remaining."),new Error("No retries remaining.");s.label=1;case 1:return s.trys.push([1,5,,6]),o?[3,3]:[4,new Promise((function(e){return setTimeout(e,u.nextDelay)}))];case 2:s.sent(),this.retries-=1,(a=this.nextDelay*this.factor)>this.min?this.nextDelay=a:this.nextDelay=this.min,s.label=3;case 3:return[4,e.apply(t,n)];case 4:return[2,s.sent()];case 5:if(d=s.sent(),this.retries<=0)throw i.default.error(d),d;return i.default.warn("Execution failed with exception: ".concat(d&&d.message," -- Retrying"),d),[2,this.run(e,t,n)];case 6:return[2]}}))}))},e}();t.default=o},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},s={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(e){return function(t,n,i,o){var a=r(t),d=s[e][r(t)];return 2===a&&(d=d[n?0:1]),d.replace(/%d/i,t)}},o=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),ss:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(e){return n[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]})).replace(/,/g,"،")},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},n={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},r=function(e){return function(r,s,i,o){var a=t(r),d=n[e][t(r)];return 2===a&&(d=d[s?0:1]),d.replace(/%d/i,r)}},s=["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar-dz",{months:s,monthsShort:s,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:r("s"),ss:r("s"),m:r("m"),mm:r("m"),h:r("h"),hh:r("h"),d:r("d"),dd:r("d"),M:r("M"),MM:r("M"),y:r("y"),yy:r("y")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:0,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},s=function(e){return function(t,s,i,o){var a=n(t),d=r[e][n(t)];return 2===a&&(d=d[s?0:1]),d.replace(/%d/i,t)}},i=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar-ly",{months:i,monthsShort:i,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:s("s"),ss:s("s"),m:s("m"),mm:s("m"),h:s("h"),hh:s("h"),d:s("d"),dd:s("d"),M:s("M"),MM:s("M"),y:s("y"),yy:s("y")},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]})).replace(/,/g,"،")},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(e){return n[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]})).replace(/,/g,"،")},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"bir neçə saniyə",ss:"%d saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var n=e%10;return e+(t[n]||t[e%100-n]||t[e>=100?100:null])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){var r,s;return"m"===n?t?"хвіліна":"хвіліну":"h"===n?t?"гадзіна":"гадзіну":e+" "+(r=+e,s={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:t?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"}[n].split("_"),r%10==1&&r%100!=11?s[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?s[1]:s[2])}e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:t,mm:t,h:t,hh:t,d:"дзень",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Миналата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[Миналия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",w:"седмица",ww:"%d седмици",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};e.defineLocale("bn",{months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&e<5||"বিকাল"===t?e+12:e},meridiem:function(e,t,n){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};e.defineLocale("bn-bd",{months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t?e<4?e:e+12:"ভোর"===t||"সকাল"===t?e:"দুপুর"===t?e>=3?e:e+12:"বিকাল"===t||"সন্ধ্যা"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"রাত":e<6?"ভোর":e<12?"সকাল":e<15?"দুপুর":e<18?"বিকাল":e<20?"সন্ধ্যা":"রাত"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),monthsShortRegex:/^(ཟླ་\d{1,2})/,monthsParseExact:!0,weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",ss:"%d སྐར་ཆ།",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&e<5||"དགོང་དག"===t?e+12:e},meridiem:function(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){return e+" "+function(e,t){return 2===t?function(e){var t={m:"v",b:"v",d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1)}(e):e}({mm:"munutenn",MM:"miz",dd:"devezh"}[n],e)}var n=[/^gen/i,/^c[ʼ\']hwe/i,/^meu/i,/^ebr/i,/^mae/i,/^(mez|eve)/i,/^gou/i,/^eos/i,/^gwe/i,/^her/i,/^du/i,/^ker/i],r=/^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,s=[/^Su/i,/^Lu/i,/^Me([^r]|$)/i,/^Mer/i,/^Ya/i,/^Gw/i,/^Sa/i];e.defineLocale("br",{months:"Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParse:s,fullWeekdaysParse:[/^sul/i,/^lun/i,/^meurzh/i,/^merc[ʼ\']her/i,/^yaou/i,/^gwener/i,/^sadorn/i],shortWeekdaysParse:[/^Sul/i,/^Lun/i,/^Meu/i,/^Mer/i,/^Yao/i,/^Gwe/i,/^Sad/i],minWeekdaysParse:s,monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,monthsShortStrictRegex:/^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY HH:mm",LLLL:"dddd, D [a viz] MMMM YYYY HH:mm"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warcʼhoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Decʼh da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s ʼzo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:function(e){switch(function e(t){return t>9?e(t%10):t}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){return e+(1===e?"añ":"vet")},week:{dow:1,doy:4},meridiemParse:/a.m.|g.m./,isPM:function(e){return"g.m."===e},meridiem:function(e,t,n){return e<12?"a.m.":"g.m."}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),n="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),r=[/^led/i,/^úno/i,/^bře/i,/^dub/i,/^kvě/i,/^(čvn|červen$|června)/i,/^(čvc|červenec|července)/i,/^srp/i,/^zář/i,/^říj/i,/^lis/i,/^pro/i],s=/^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;function i(e){return e>1&&e<5&&1!=~~(e/10)}function o(e,t,n,r){var s=e+" ";switch(n){case"s":return t||r?"pár sekund":"pár sekundami";case"ss":return t||r?s+(i(e)?"sekundy":"sekund"):s+"sekundami";case"m":return t?"minuta":r?"minutu":"minutou";case"mm":return t||r?s+(i(e)?"minuty":"minut"):s+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?s+(i(e)?"hodiny":"hodin"):s+"hodinami";case"d":return t||r?"den":"dnem";case"dd":return t||r?s+(i(e)?"dny":"dní"):s+"dny";case"M":return t||r?"měsíc":"měsícem";case"MM":return t||r?s+(i(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return t||r?"rok":"rokem";case"yy":return t||r?s+(i(e)?"roky":"let"):s+"lety"}}e.defineLocale("cs",{months:t,monthsShort:n,monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:o,ss:o,m:o,mm:o,h:o,hh:o,d:o,dd:o,M:o,MM:o,y:o,yy:o},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){return e+(/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран")},past:"%s каялла",s:"пӗр-ик ҫеккунт",ss:"%d ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var t="";return e>20?t=40===e||50===e||60===e||80===e||100===e?"fed":"ain":e>0&&(t=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][e]),e+t},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?s[n][0]:s[n][1]}e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,w:t,ww:"%d Wochen",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?s[n][0]:s[n][1]}e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,w:t,ww:"%d Wochen",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?s[n][0]:s[n][1]}e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,w:t,ww:"%d Wochen",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];e.defineLocale("dv",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,t,n){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",ss:"d% ސިކުންތު",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return e?"string"==typeof t&&/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var n,r=this._calendarEl[e],s=t&&t.hours();return n=r,("undefined"!=typeof Function&&n instanceof Function||"[object Function]"===Object.prototype.toString.call(n))&&(r=r.apply(t)),r.replace("{}",s%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:0,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-in",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("en-sg",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"[la] D[-an de] MMMM, YYYY",LLL:"[la] D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",llll:"ddd, [la] D[-an de] MMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd[n je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasintan] dddd[n je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"kelkaj sekundoj",ss:"%d sekundoj",m:"unu minuto",mm:"%d minutoj",h:"unu horo",hh:"%d horoj",d:"unu tago",dd:"%d tagoj",M:"unu monato",MM:"%d monatoj",y:"unu jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],s=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4},invalidDate:"Fecha inválida"})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],s=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],s=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-mx",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:4},invalidDate:"Fecha inválida"})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],s=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?s[n][2]?s[n][2]:s[n][1]:r?s[n][0]:s[n][1]}e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,t,n){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"%d ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,(function(e){return n[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]})).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),n=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",t[7],t[8],t[9]];function r(e,r,s,i){var o="";switch(s){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"ss":o=i?"sekunnin":"sekuntia";break;case"m":return i?"minuutin":"minuutti";case"mm":o=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":o=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":o=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":o=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":o=i?"vuoden":"vuotta"}return o=function(e,r){return e<10?r?n[e]:t[e]:e}(e,i)+" "+o}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("fil",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",ss:"%d sekundir",m:"ein minuttur",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaður",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,n=[/^janv/i,/^févr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^août/i,/^sept/i,/^oct/i,/^nov/i,/^déc/i];e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsRegex:t,monthsShortRegex:t,monthsStrictRegex:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,monthsShortStrictRegex:/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,t){switch(t){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ga",{months:["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig"],monthsShort:["Ean","Feabh","Márt","Aib","Beal","Meith","Iúil","Lún","M.F.","D.F.","Samh","Noll"],monthsParseExact:!0,weekdays:["Dé Domhnaigh","Dé Luain","Dé Máirt","Dé Céadaoin","Déardaoin","Dé hAoine","Dé Sathairn"],weekdaysShort:["Domh","Luan","Máirt","Céad","Déar","Aoine","Sath"],weekdaysMin:["Do","Lu","Má","Cé","Dé","A","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Inniu ag] LT",nextDay:"[Amárach ag] LT",nextWeek:"dddd [ag] LT",lastDay:"[Inné ag] LT",lastWeek:"dddd [seo caite] [ag] LT",sameElse:"L"},relativeTime:{future:"i %s",past:"%s ó shin",s:"cúpla soicind",ss:"%d soicind",m:"nóiméad",mm:"%d nóiméad",h:"uair an chloig",hh:"%d uair an chloig",d:"lá",dd:"%d lá",M:"mí",MM:"%d míonna",y:"bliain",yy:"%d bliain"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],monthsShort:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],monthsParseExact:!0,weekdays:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={s:["थोडया सॅकंडांनी","थोडे सॅकंड"],ss:[e+" सॅकंडांनी",e+" सॅकंड"],m:["एका मिणटान","एक मिनूट"],mm:[e+" मिणटांनी",e+" मिणटां"],h:["एका वरान","एक वर"],hh:[e+" वरांनी",e+" वरां"],d:["एका दिसान","एक दीस"],dd:[e+" दिसांनी",e+" दीस"],M:["एका म्हयन्यान","एक म्हयनो"],MM:[e+" म्हयन्यानी",e+" म्हयने"],y:["एका वर्सान","एक वर्स"],yy:[e+" वर्सांनी",e+" वर्सां"]};return r?s[n][0]:s[n][1]}e.defineLocale("gom-deva",{months:{standalone:"जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),format:"जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),weekdaysShort:"आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),weekdaysMin:"आ_सो_मं_बु_ब्रे_सु_शे".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [वाजतां]",LTS:"A h:mm:ss [वाजतां]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [वाजतां]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [वाजतां]",llll:"ddd, D MMM YYYY, A h:mm [वाजतां]"},calendar:{sameDay:"[आयज] LT",nextDay:"[फाल्यां] LT",nextWeek:"[फुडलो] dddd[,] LT",lastDay:"[काल] LT",lastWeek:"[फाटलो] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s आदीं",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}(वेर)/,ordinal:function(e,t){switch(t){case"D":return e+"वेर";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:0,doy:3},meridiemParse:/राती|सकाळीं|दनपारां|सांजे/,meridiemHour:function(e,t){return 12===e&&(e=0),"राती"===t?e<4?e:e+12:"सकाळीं"===t?e:"दनपारां"===t?e>12?e:e+12:"सांजे"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"राती":e<12?"सकाळीं":e<16?"दनपारां":e<20?"सांजे":"राती"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={s:["thoddea sekondamni","thodde sekond"],ss:[e+" sekondamni",e+" sekond"],m:["eka mintan","ek minut"],mm:[e+" mintamni",e+" mintam"],h:["eka voran","ek vor"],hh:[e+" voramni",e+" voram"],d:["eka disan","ek dis"],dd:[e+" disamni",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineamni",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsamni",e+" vorsam"]};return r?s[n][0]:s[n][1]}e.defineLocale("gom-latn",{months:{standalone:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),format:"Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Fuddlo] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fattlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,t){switch(t){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:0,doy:3},meridiemParse:/rati|sokallim|donparam|sanje/,meridiemHour:function(e,t){return 12===e&&(e=0),"rati"===t?e<4?e:e+12:"sokallim"===t?e:"donparam"===t?e>12?e:e+12:"sanje"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"rati":e<12?"sokallim":e<16?"donparam":e<20?"sanje":"rati"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"};e.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પહેલા",s:"અમુક પળો",ss:"%d સેકંડ",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function(e){return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function(e,t){return 12===e&&(e=0),"રાત"===t?e<4?e:e+12:"સવાર"===t?e:"બપોર"===t?e>=10?e:e+12:"સાંજ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"રાત":e<10?"સવાર":e<17?"બપોર":e<20?"સાંજ":"રાત"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,t,n){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?n?'לפנה"צ':"לפני הצהריים":e<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},r=[/^जन/i,/^फ़र|फर/i,/^मार्च/i,/^अप्रै/i,/^मई/i,/^जून/i,/^जुल/i,/^अग/i,/^सितं|सित/i,/^अक्टू/i,/^नव|नवं/i,/^दिसं|दिस/i];e.defineLocale("hi",{months:{format:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),standalone:"जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")},monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},monthsParse:r,longMonthsParse:r,shortMonthsParse:[/^जन/i,/^फ़र/i,/^मार्च/i,/^अप्रै/i,/^मई/i,/^जून/i,/^जुल/i,/^अग/i,/^सित/i,/^अक्टू/i,/^नव/i,/^दिस/i],monthsRegex:/^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,monthsShortRegex:/^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,monthsStrictRegex:/^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,monthsShortStrictRegex:/^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"Do MMMM YYYY",LLL:"Do MMMM YYYY H:mm",LLLL:"dddd, Do MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:return"[prošlu] [nedjelju] [u] LT";case 3:return"[prošlu] [srijedu] [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,t,n,r){var s=e;switch(n){case"s":return r||t?"néhány másodperc":"néhány másodperce";case"ss":return s+(r||t)?" másodperc":" másodperce";case"m":return"egy"+(r||t?" perc":" perce");case"mm":return s+(r||t?" perc":" perce");case"h":return"egy"+(r||t?" óra":" órája");case"hh":return s+(r||t?" óra":" órája");case"d":return"egy"+(r||t?" nap":" napja");case"dd":return s+(r||t?" nap":" napja");case"M":return"egy"+(r||t?" hónap":" hónapja");case"MM":return s+(r||t?" hónap":" hónapja");case"y":return"egy"+(r||t?" év":" éve");case"yy":return s+(r||t?" év":" éve")}return""}function r(e){return(e?"":"[múlt] ")+"["+t[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return r.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return r.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",ss:"%d վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e){return e%100==11||e%10!=1}function n(e,n,r,s){var i=e+" ";switch(r){case"s":return n||s?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return t(e)?i+(n||s?"sekúndur":"sekúndum"):i+"sekúnda";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?i+(n||s?"mínútur":"mínútum"):n?i+"mínúta":i+"mínútu";case"hh":return t(e)?i+(n||s?"klukkustundir":"klukkustundum"):i+"klukkustund";case"d":return n?"dagur":s?"dag":"degi";case"dd":return t(e)?n?i+"dagar":i+(s?"daga":"dögum"):n?i+"dagur":i+(s?"dag":"degi");case"M":return n?"mánuður":s?"mánuð":"mánuði";case"MM":return t(e)?n?i+"mánuðir":i+(s?"mánuði":"mánuðum"):n?i+"mánuður":i+(s?"mánuð":"mánuði");case"y":return n||s?"ár":"ári";case"yy":return t(e)?i+(n||s?"ár":"árum"):i+(n||s?"ár":"ári")}}e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:function(){return"[Oggi a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextDay:function(){return"[Domani a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextWeek:function(){return"dddd [a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastDay:function(){return"[Ieri a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastWeek:function(){switch(this.day()){case 0:return"[La scorsa] dddd [a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT";default:return"[Lo scorso] dddd [a"+(this.hours()>1?"lle ":0===this.hours()?" ":"ll'")+"]LT"}},sameElse:"L"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",w:"una settimana",ww:"%d settimane",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("it-ch",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ja",{eras:[{since:"2019-05-01",offset:1,name:"令和",narrow:"㋿",abbr:"R"},{since:"1989-01-08",until:"2019-04-30",offset:1,name:"平成",narrow:"㍻",abbr:"H"},{since:"1926-12-25",until:"1989-01-07",offset:1,name:"昭和",narrow:"㍼",abbr:"S"},{since:"1912-07-30",until:"1926-12-24",offset:1,name:"大正",narrow:"㍽",abbr:"T"},{since:"1873-01-01",until:"1912-07-29",offset:6,name:"明治",narrow:"㍾",abbr:"M"},{since:"0001-01-01",until:"1873-12-31",offset:1,name:"西暦",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"紀元前",narrow:"BC",abbr:"BC"}],eraYearOrdinalRegex:/(元|\d+)年/,eraYearOrdinalParse:function(e,t){return"元"===t[1]?1:parseInt(t[1]||e,10)},months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,n){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function(e){return e.week()!==this.week()?"[来週]dddd LT":"dddd LT"},lastDay:"[昨日] LT",lastWeek:function(e){return this.week()!==e.week()?"[先週]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(e,t){switch(t){case"y":return 1===e?"元年":e+"年";case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ka",{months:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,(function(e,t,n){return"ი"===n?t+"ში":t+n+"ში"}))},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):e},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){return e+(t[e]||t[e%10]||t[e>=100?100:null])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩",0:"០"},n={"១":"1","២":"2","៣":"3","៤":"4","៥":"5","៦":"6","៧":"7","៨":"8","៩":"9","០":"0"};e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ព្រឹក|ល្ងាច/,isPM:function(e){return"ល្ងាច"===e},meridiem:function(e,t,n){return e<12?"ព្រឹក":"ល្ងាច"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",ss:"%d វិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},dayOfMonthOrdinalParse:/ទី\d{1,2}/,ordinal:"ទី%d",preparse:function(e){return e.replace(/[១២៣៤៥៦៧៨៩០]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"};e.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",ss:"%d ಸೆಕೆಂಡುಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function(e){return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ರಾತ್ರಿ"===t?e<4?e:e+12:"ಬೆಳಿಗ್ಗೆ"===t?e:"ಮಧ್ಯಾಹ್ನ"===t?e>=10?e:e+12:"ಸಂಜೆ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ರಾತ್ರಿ":e<10?"ಬೆಳಿಗ್ಗೆ":e<17?"ಮಧ್ಯಾಹ್ನ":e<20?"ಸಂಜೆ":"ರಾತ್ರಿ"},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function(e){return e+"ನೇ"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"일";case"M":return e+"월";case"w":case"W":return e+"주";default:return e}},meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,n){return e<12?"오전":"오후"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=["کانونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمموز","ئاب","ئەیلوول","تشرینی یەكەم","تشرینی دووەم","كانونی یەکەم"];e.defineLocale("ku",{months:r,monthsShort:r,weekdays:"یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),weekdaysShort:"یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),weekdaysMin:"ی_د_س_چ_پ_ه_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ئێواره‌|به‌یانی/,isPM:function(e){return/ئێواره‌/.test(e)},meridiem:function(e,t,n){return e<12?"به‌یانی":"ئێواره‌"},calendar:{sameDay:"[ئه‌مرۆ كاتژمێر] LT",nextDay:"[به‌یانی كاتژمێر] LT",nextWeek:"dddd [كاتژمێر] LT",lastDay:"[دوێنێ كاتژمێر] LT",lastWeek:"dddd [كاتژمێر] LT",sameElse:"L"},relativeTime:{future:"له‌ %s",past:"%s",s:"چه‌ند چركه‌یه‌ك",ss:"چركه‌ %d",m:"یه‌ك خوله‌ك",mm:"%d خوله‌ك",h:"یه‌ك كاتژمێر",hh:"%d كاتژمێر",d:"یه‌ك ڕۆژ",dd:"%d ڕۆژ",M:"یه‌ك مانگ",MM:"%d مانگ",y:"یه‌ك ساڵ",yy:"%d ساڵ"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(e){return n[e]})).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]})).replace(/,/g,"،")},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кечээ саат] LT",lastWeek:"[Өткөн аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",ss:"%d секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){return e+(t[e]||t[e%10]||t[e>=100?100:null])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?s[n][0]:s[n][1]}function n(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10;return n(0===t?e/10:t)}if(e<1e4){for(;e>=10;)e/=10;return n(e)}return n(e/=1e3)}e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return n(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return n(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",ss:"%d Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,t,n){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",ss:"%d ວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};function n(e,t,n,r){return t?s(n)[0]:r?s(n)[1]:s(n)[2]}function r(e){return e%10==0||e>10&&e<20}function s(e){return t[e].split("_")}function i(e,t,i,o){var a=e+" ";return 1===e?a+n(0,t,i[0],o):t?a+(r(e)?s(i)[1]:s(i)[0]):o?a+s(i)[1]:a+(r(e)?s(i)[1]:s(i)[2])}e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function(e,t,n,r){return t?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"},ss:i,m:n,mm:i,h:n,hh:i,d:n,dd:i,M:n,MM:i,y:n,yy:i},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function n(e,t,n){return n?t%10==1&&t%100!=11?e[2]:e[3]:t%10==1&&t%100!=11?e[0]:e[1]}function r(e,r,s){return e+" "+n(t[s],e,r)}function s(e,r,s){return n(t[s],e,r)}e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:function(e,t){return t?"dažas sekundes":"dažām sekundēm"},ss:r,m:s,mm:r,h:s,hh:r,d:s,dd:r,M:s,MM:r,y:s,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var s=t.words[r];return 1===r.length?n?s[0]:s[1]:e+" "+t.correctGrammaticalCase(e,s)}};e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mjesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",ss:"%d hēkona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"за %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"една минута",mm:"%d минути",h:"еден час",hh:"%d часа",d:"еден ден",dd:"%d дена",M:"еден месец",MM:"%d месеци",y:"една година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",ss:"%d സെക്കൻഡ്",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e},meridiem:function(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){switch(n){case"s":return t?"хэдхэн секунд":"хэдхэн секундын";case"ss":return e+(t?" секунд":" секундын");case"m":case"mm":return e+(t?" минут":" минутын");case"h":case"hh":return e+(t?" цаг":" цагийн");case"d":case"dd":return e+(t?" өдөр":" өдрийн");case"M":case"MM":return e+(t?" сар":" сарын");case"y":case"yy":return e+(t?" жил":" жилийн");default:return e}}e.defineLocale("mn",{months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),monthsParseExact:!0,weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:function(e){return"ҮХ"===e},meridiem:function(e,t,n){return e<12?"ҮӨ":"ҮХ"},calendar:{sameDay:"[Өнөөдөр] LT",nextDay:"[Маргааш] LT",nextWeek:"[Ирэх] dddd LT",lastDay:"[Өчигдөр] LT",lastWeek:"[Өнгөрсөн] dddd LT",sameElse:"L"},relativeTime:{future:"%s дараа",past:"%s өмнө",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+" өдөр";default:return e}}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};function r(e,t,n,r){var s="";if(t)switch(n){case"s":s="काही सेकंद";break;case"ss":s="%d सेकंद";break;case"m":s="एक मिनिट";break;case"mm":s="%d मिनिटे";break;case"h":s="एक तास";break;case"hh":s="%d तास";break;case"d":s="एक दिवस";break;case"dd":s="%d दिवस";break;case"M":s="एक महिना";break;case"MM":s="%d महिने";break;case"y":s="एक वर्ष";break;case"yy":s="%d वर्षे"}else switch(n){case"s":s="काही सेकंदां";break;case"ss":s="%d सेकंदां";break;case"m":s="एका मिनिटा";break;case"mm":s="%d मिनिटां";break;case"h":s="एका तासा";break;case"hh":s="%d तासां";break;case"d":s="एका दिवसा";break;case"dd":s="%d दिवसां";break;case"M":s="एका महिन्या";break;case"MM":s="%d महिन्यां";break;case"y":s="एका वर्षा";break;case"yy":s="%d वर्षां"}return s.replace(/%d/i,e)}e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,meridiemHour:function(e,t){return 12===e&&(e=0),"पहाटे"===t||"सकाळी"===t?e:"दुपारी"===t||"सायंकाळी"===t||"रात्री"===t?e>=12?e:e+12:void 0},meridiem:function(e,t,n){return e>=0&&e<6?"पहाटे":e<12?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[Għada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-bieraħ fil-]LT",lastWeek:"dddd [li għadda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",ss:"%d စက္ကန့်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",w:"en uke",ww:"%d uker",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,t){return 12===e&&(e=0),"राति"===t?e<4?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",ss:"%d सेकेण्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],s=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",w:"één week",ww:"%d weken",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],s=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"su._må._ty._on._to._fr._lau.".split("_"),weekdaysMin:"su_må_ty_on_to_fr_la".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",w:"ei veke",ww:"%d veker",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("oc-lnc",{months:{standalone:"genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),format:"de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dm._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:"[uèi a] LT",nextDay:"[deman a] LT",nextWeek:"dddd [a] LT",lastDay:"[ièr a] LT",lastWeek:"dddd [passat a] LT",sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"unas segondas",ss:"%d segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};e.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"[ਅਗਲਾ] dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",ss:"%d ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?e<4?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),r=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^paź/i,/^lis/i,/^gru/i];function s(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function i(e,t,n){var r=e+" ";switch(n){case"ss":return r+(s(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return r+(s(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return r+(s(e)?"godziny":"godzin");case"ww":return r+(s(e)?"tygodnie":"tygodni");case"MM":return r+(s(e)?"miesiące":"miesięcy");case"yy":return r+(s(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,r){return e?/D MMMM/.test(r)?n[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:i,m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",w:"tydzień",ww:i,M:"miesiąc",MM:i,y:"rok",yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",w:"uma semana",ww:"%d semanas",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",invalidDate:"Data inválida"})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){var r=" ";return(e%100>=20||e>=100&&e%100==0)&&(r=" de "),e+r+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",ww:"săptămâni",MM:"luni",yy:"ani"}[n]}e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:t,m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,w:"o săptămână",ww:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){var r,s;return"m"===n?t?"минута":"минуту":e+" "+(r=+e,s={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",ww:"неделя_недели_недель",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[n].split("_"),r%10==1&&r%100!=11?s[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?s[1]:s[2])}var n=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:t,m:t,mm:t,h:"час",hh:t,d:"день",dd:t,w:"неделя",ww:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"];e.defineLocale("sd",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",ss:"%d سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",ss:"තත්පර %d",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,t,n){return e>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function r(e){return e>1&&e<5}function s(e,t,n,s){var i=e+" ";switch(n){case"s":return t||s?"pár sekúnd":"pár sekundami";case"ss":return t||s?i+(r(e)?"sekundy":"sekúnd"):i+"sekundami";case"m":return t?"minúta":s?"minútu":"minútou";case"mm":return t||s?i+(r(e)?"minúty":"minút"):i+"minútami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?i+(r(e)?"hodiny":"hodín"):i+"hodinami";case"d":return t||s?"deň":"dňom";case"dd":return t||s?i+(r(e)?"dni":"dní"):i+"dňami";case"M":return t||s?"mesiac":"mesiacom";case"MM":return t||s?i+(r(e)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":return t||s?"rok":"rokom";case"yy":return t||s?i+(r(e)?"roky":"rokov"):i+"rokmi"}}e.defineLocale("sk",{months:t,monthsShort:n,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:s,ss:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"ss":return s+=1===e?t?"sekundo":"sekundi":2===e?t||r?"sekundi":"sekundah":e<5?t||r?"sekunde":"sekundah":"sekund";case"m":return t?"ena minuta":"eno minuto";case"mm":return s+=1===e?t?"minuta":"minuto":2===e?t||r?"minuti":"minutama":e<5?t||r?"minute":"minutami":t||r?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return s+=1===e?t?"ura":"uro":2===e?t||r?"uri":"urama":e<5?t||r?"ure":"urami":t||r?"ur":"urami";case"d":return t||r?"en dan":"enim dnem";case"dd":return s+=1===e?t||r?"dan":"dnem":2===e?t||r?"dni":"dnevoma":t||r?"dni":"dnevi";case"M":return t||r?"en mesec":"enim mesecem";case"MM":return s+=1===e?t||r?"mesec":"mesecem":2===e?t||r?"meseca":"mesecema":e<5?t||r?"mesece":"meseci":t||r?"mesecev":"meseci";case"y":return t||r?"eno leto":"enim letom";case"yy":return s+=1===e?t||r?"leto":"letom":2===e?t||r?"leti":"letoma":e<5?t||r?"leta":"leti":t||r?"let":"leti"}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var s=t.words[r];return 1===r.length?n?s[0]:s[1]:e+" "+t.correctGrammaticalCase(e,s)}};e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={words:{ss:["секунда","секунде","секунди"],m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var s=t.words[r];return 1===r.length?n?s[0]:s[1]:e+" "+t.correctGrammaticalCase(e,s)}};e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,t,n){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(\:e|\:a)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?":e":1===t||2===t?":a":":e")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"hh:mm A",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"siku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",ss:"%d விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,(function(e){return n[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return t[e]}))},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t||"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",ss:"%d సెకన్లు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,t){return 12===e&&(e=0),"రాత్రి"===t?e<4?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"segundu balun",ss:"segundu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={0:"-ум",1:"-ум",2:"-юм",3:"-юм",4:"-ум",5:"-ум",6:"-ум",7:"-ум",8:"-ум",9:"-ум",10:"-ум",12:"-ум",13:"-ум",20:"-ум",30:"-юм",40:"-ум",50:"-ум",60:"-ум",70:"-ум",80:"-ум",90:"-ум",100:"-ум"};e.defineLocale("tg",{months:{format:"январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),standalone:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")},monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Имрӯз соати] LT",nextDay:"[Фардо соати] LT",lastDay:"[Дирӯз соати] LT",nextWeek:"dddd[и] [ҳафтаи оянда соати] LT",lastWeek:"dddd[и] [ҳафтаи гузашта соати] LT",sameElse:"L"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"},meridiemParse:/шаб|субҳ|рӯз|бегоҳ/,meridiemHour:function(e,t){return 12===e&&(e=0),"шаб"===t?e<4?e:e+12:"субҳ"===t?e:"рӯз"===t?e>=11?e:e+12:"бегоҳ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"шаб":e<11?"субҳ":e<16?"рӯз":e<19?"бегоҳ":"шаб"},dayOfMonthOrdinalParse:/\d{1,2}-(ум|юм)/,ordinal:function(e){return e+(t[e]||t[e%10]||t[e>=100?100:null])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",w:"1 สัปดาห์",ww:"%d สัปดาห์",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"'inji",5:"'inji",8:"'inji",70:"'inji",80:"'inji",2:"'nji",7:"'nji",20:"'nji",50:"'nji",3:"'ünji",4:"'ünji",100:"'ünji",6:"'njy",9:"'unjy",10:"'unjy",30:"'unjy",60:"'ynjy",90:"'ynjy"};e.defineLocale("tk",{months:"Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),monthsShort:"Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),weekdays:"Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),weekdaysShort:"Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),weekdaysMin:"Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün sagat] LT",nextDay:"[ertir sagat] LT",nextWeek:"[indiki] dddd [sagat] LT",lastDay:"[düýn] LT",lastWeek:"[geçen] dddd [sagat] LT",sameElse:"L"},relativeTime:{future:"%s soň",past:"%s öň",s:"birnäçe sekunt",m:"bir minut",mm:"%d minut",h:"bir sagat",hh:"%d sagat",d:"bir gün",dd:"%d gün",M:"bir aý",MM:"%d aý",y:"bir ýyl",yy:"%d ýyl"},ordinal:function(e,n){switch(n){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'unjy";var r=e%10;return e+(t[r]||t[e%100-r]||t[e>=100?100:null])}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function n(e,n,r,s){var i=function(e){var n=Math.floor(e%1e3/100),r=Math.floor(e%100/10),s=e%10,i="";return n>0&&(i+=t[n]+"vatlh"),r>0&&(i+=(""!==i?" ":"")+t[r]+"maH"),s>0&&(i+=(""!==i?" ":"")+t[s]),""===i?"pagh":i}(e);switch(r){case"ss":return i+" lup";case"mm":return i+" tup";case"hh":return i+" rep";case"dd":return i+" jaj";case"MM":return i+" jar";case"yy":return i+" DIS"}}e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"leS":-1!==e.indexOf("jar")?t.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?t.slice(0,-3)+"nem":t+" pIq"},past:function(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?t.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?t.slice(0,-3)+"ben":t+" ret"},s:"puS lup",ss:n,m:"wa’ tup",mm:n,h:"wa’ rep",hh:n,d:"wa’ jaj",dd:n,M:"wa’ jar",MM:n,y:"wa’ DIS",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),meridiem:function(e,t,n){return e<12?n?"öö":"ÖÖ":n?"ös":"ÖS"},meridiemParse:/öö|ÖÖ|ös|ÖS/,isPM:function(e){return"ös"===e||"ÖS"===e},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",w:"bir hafta",ww:"%d hafta",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(e,n){switch(n){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'ıncı";var r=e%10;return e+(t[r]||t[e%100-r]||t[e>=100?100:null])}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n,r){var s={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return r||t?s[n][0]:s[n][1]}e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",ss:"%d ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("ug-cn",{months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},meridiemParse:/يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,meridiemHour:function(e,t){return 12===e&&(e=0),"يېرىم كېچە"===t||"سەھەر"===t||"چۈشتىن بۇرۇن"===t?e:"چۈشتىن كېيىن"===t||"كەچ"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"يېرىم كېچە":r<900?"سەھەر":r<1130?"چۈشتىن بۇرۇن":r<1230?"چۈش":r<1800?"چۈشتىن كېيىن":"كەچ"},calendar:{sameDay:"[بۈگۈن سائەت] LT",nextDay:"[ئەتە سائەت] LT",nextWeek:"[كېلەركى] dddd [سائەت] LT",lastDay:"[تۆنۈگۈن] LT",lastWeek:"[ئالدىنقى] dddd [سائەت] LT",sameElse:"L"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",ss:"%d سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"},dayOfMonthOrdinalParse:/\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"-كۈنى";case"w":case"W":return e+"-ھەپتە";default:return e}},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
function t(e,t,n){var r,s;return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+(r=+e,s={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[n].split("_"),r%10==1&&r%100!=11?s[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?s[1]:s[2])}function n(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return!0===e?n.nominative.slice(1,7).concat(n.nominative.slice(0,1)):e?n[/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"][e.day()]:n.nominative},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:n("[Сьогодні "),nextDay:n("[Завтра "),lastDay:n("[Вчора "),nextWeek:n("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return n("[Минулої] dddd [").call(this);case 1:case 2:case 4:return n("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:t,m:t,mm:t,h:"годину",hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
var t=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];e.defineLocale("ur",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",ss:"%d سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",ss:"%d фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần trước lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",w:"một tuần",ww:"%d tuần",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",ss:"aayá %d",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:function(e){return e.week()!==this.week()?"[下]dddLT":"[本]dddLT"},lastDay:"[昨天]LT",lastWeek:function(e){return this.week()!==e.week()?"[上]dddLT":"[本]dddLT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s后",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",w:"1 周",ww:"%d 周",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1200?"上午":1200===r?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("zh-mo",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"D/M/YYYY",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})}(n(0))},function(e,t,n){!function(e){"use strict";
//! moment.js locale configuration
e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})}(n(0))},function(e,t,n){"use strict";var r;n.r(t),n.d(t,"v1",(function(){return p})),n.d(t,"v3",(function(){return T})),n.d(t,"v4",(function(){return b})),n.d(t,"v5",(function(){return j})),n.d(t,"NIL",(function(){return H})),n.d(t,"version",(function(){return O})),n.d(t,"validate",(function(){return a})),n.d(t,"stringify",(function(){return _})),n.d(t,"parse",(function(){return f}));var s=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(e){return"string"==typeof e&&o.test(e)},d=[],u=0;u<256;++u)d.push((u+256).toString(16).substr(1));var c,l,_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n},h=0,m=0;var p=function(e,t,n){var r=t&&n||0,s=t||new Array(16),o=(e=e||{}).node||c,a=void 0!==e.clockseq?e.clockseq:l;if(null==o||null==a){var d=e.random||(e.rng||i)();null==o&&(o=c=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==a&&(a=l=16383&(d[6]<<8|d[7]))}var u=void 0!==e.msecs?e.msecs:Date.now(),p=void 0!==e.nsecs?e.nsecs:m+1,f=u-h+(p-m)/1e4;if(f<0&&void 0===e.clockseq&&(a=a+1&16383),(f<0||u>h)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");h=u,m=p,l=a;var y=(1e4*(268435455&(u+=122192928e5))+p)%4294967296;s[r++]=y>>>24&255,s[r++]=y>>>16&255,s[r++]=y>>>8&255,s[r++]=255&y;var M=u/4294967296*1e4&268435455;s[r++]=M>>>8&255,s[r++]=255&M,s[r++]=M>>>24&15|16,s[r++]=M>>>16&255,s[r++]=a>>>8|128,s[r++]=255&a;for(var v=0;v<6;++v)s[r+v]=o[v];return t||_(s)};var f=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};var y=function(e,t,n){function r(e,r,s,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=f(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+e.length);if(o.set(r),o.set(e,r.length),(o=n(o))[6]=15&o[6]|t,o[8]=63&o[8]|128,s){i=i||0;for(var a=0;a<16;++a)s[i+a]=o[a];return s}return _(o)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function M(e){return 14+(e+64>>>9<<4)+1}function v(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function L(e,t,n,r,s,i){return v((o=v(v(t,e),v(r,i)))<<(a=s)|o>>>32-a,n);var o,a}function g(e,t,n,r,s,i,o){return L(t&n|~t&r,e,t,s,i,o)}function Y(e,t,n,r,s,i,o){return L(t&r|n&~r,e,t,s,i,o)}function w(e,t,n,r,s,i,o){return L(t^n^r,e,t,s,i,o)}function k(e,t,n,r,s,i,o){return L(n^(t|~r),e,t,s,i,o)}var T=y("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r=0;r<n;r+=8){var s=e[r>>5]>>>r%32&255,i=parseInt("0123456789abcdef".charAt(s>>>4&15)+"0123456789abcdef".charAt(15&s),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[M(t)-1]=t;for(var n=1732584193,r=-271733879,s=-1732584194,i=271733878,o=0;o<e.length;o+=16){var a=n,d=r,u=s,c=i;n=g(n,r,s,i,e[o],7,-680876936),i=g(i,n,r,s,e[o+1],12,-389564586),s=g(s,i,n,r,e[o+2],17,606105819),r=g(r,s,i,n,e[o+3],22,-1044525330),n=g(n,r,s,i,e[o+4],7,-176418897),i=g(i,n,r,s,e[o+5],12,1200080426),s=g(s,i,n,r,e[o+6],17,-1473231341),r=g(r,s,i,n,e[o+7],22,-45705983),n=g(n,r,s,i,e[o+8],7,1770035416),i=g(i,n,r,s,e[o+9],12,-1958414417),s=g(s,i,n,r,e[o+10],17,-42063),r=g(r,s,i,n,e[o+11],22,-1990404162),n=g(n,r,s,i,e[o+12],7,1804603682),i=g(i,n,r,s,e[o+13],12,-40341101),s=g(s,i,n,r,e[o+14],17,-1502002290),r=g(r,s,i,n,e[o+15],22,1236535329),n=Y(n,r,s,i,e[o+1],5,-165796510),i=Y(i,n,r,s,e[o+6],9,-1069501632),s=Y(s,i,n,r,e[o+11],14,643717713),r=Y(r,s,i,n,e[o],20,-373897302),n=Y(n,r,s,i,e[o+5],5,-701558691),i=Y(i,n,r,s,e[o+10],9,38016083),s=Y(s,i,n,r,e[o+15],14,-660478335),r=Y(r,s,i,n,e[o+4],20,-405537848),n=Y(n,r,s,i,e[o+9],5,568446438),i=Y(i,n,r,s,e[o+14],9,-1019803690),s=Y(s,i,n,r,e[o+3],14,-187363961),r=Y(r,s,i,n,e[o+8],20,1163531501),n=Y(n,r,s,i,e[o+13],5,-1444681467),i=Y(i,n,r,s,e[o+2],9,-51403784),s=Y(s,i,n,r,e[o+7],14,1735328473),r=Y(r,s,i,n,e[o+12],20,-1926607734),n=w(n,r,s,i,e[o+5],4,-378558),i=w(i,n,r,s,e[o+8],11,-2022574463),s=w(s,i,n,r,e[o+11],16,1839030562),r=w(r,s,i,n,e[o+14],23,-35309556),n=w(n,r,s,i,e[o+1],4,-1530992060),i=w(i,n,r,s,e[o+4],11,1272893353),s=w(s,i,n,r,e[o+7],16,-155497632),r=w(r,s,i,n,e[o+10],23,-1094730640),n=w(n,r,s,i,e[o+13],4,681279174),i=w(i,n,r,s,e[o],11,-358537222),s=w(s,i,n,r,e[o+3],16,-722521979),r=w(r,s,i,n,e[o+6],23,76029189),n=w(n,r,s,i,e[o+9],4,-640364487),i=w(i,n,r,s,e[o+12],11,-421815835),s=w(s,i,n,r,e[o+15],16,530742520),r=w(r,s,i,n,e[o+2],23,-995338651),n=k(n,r,s,i,e[o],6,-198630844),i=k(i,n,r,s,e[o+7],10,1126891415),s=k(s,i,n,r,e[o+14],15,-1416354905),r=k(r,s,i,n,e[o+5],21,-57434055),n=k(n,r,s,i,e[o+12],6,1700485571),i=k(i,n,r,s,e[o+3],10,-1894986606),s=k(s,i,n,r,e[o+10],15,-1051523),r=k(r,s,i,n,e[o+1],21,-2054922799),n=k(n,r,s,i,e[o+8],6,1873313359),i=k(i,n,r,s,e[o+15],10,-30611744),s=k(s,i,n,r,e[o+6],15,-1560198380),r=k(r,s,i,n,e[o+13],21,1309151649),n=k(n,r,s,i,e[o+4],6,-145523070),i=k(i,n,r,s,e[o+11],10,-1120210379),s=k(s,i,n,r,e[o+2],15,718787259),r=k(r,s,i,n,e[o+9],21,-343485551),n=v(n,a),r=v(r,d),s=v(s,u),i=v(i,c)}return[n,r,s,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(M(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))}));var b=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var s=0;s<16;++s)t[n+s]=r[s];return t}return _(r)};function D(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function S(e,t){return e<<t|e>>>32-t}var j=y("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var s=0;s<r.length;++s)e.push(r.charCodeAt(s))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,o=Math.ceil(i/16),a=new Array(o),d=0;d<o;++d){for(var u=new Uint32Array(16),c=0;c<16;++c)u[c]=e[64*d+4*c]<<24|e[64*d+4*c+1]<<16|e[64*d+4*c+2]<<8|e[64*d+4*c+3];a[d]=u}a[o-1][14]=8*(e.length-1)/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=8*(e.length-1)&4294967295;for(var l=0;l<o;++l){for(var _=new Uint32Array(80),h=0;h<16;++h)_[h]=a[l][h];for(var m=16;m<80;++m)_[m]=S(_[m-3]^_[m-8]^_[m-14]^_[m-16],1);for(var p=n[0],f=n[1],y=n[2],M=n[3],v=n[4],L=0;L<80;++L){var g=Math.floor(L/20),Y=S(p,5)+D(g,f,y,M)+v+t[g]+_[L]>>>0;v=M,M=y,y=S(f,30)>>>0,f=p,p=Y}n[0]=n[0]+p>>>0,n[1]=n[1]+f>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+M>>>0,n[4]=n[4]+v>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),H="00000000-0000-0000-0000-000000000000";var O=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},function(e,t,n){"use strict";t.__esModule=!0,t.Logger=t.SpeakerEvent=t.sdk=t.SDK=void 0;var r=n(203);t.SDK=r.default;var s=n(2);t.Logger=s.Logger;var i=n(252);t.SpeakerEvent=i.default;var o=new r.default;t.sdk=o,"undefined"!=typeof window&&(window.ClientSDK=r.default,window.rammerSdk=o,window.SpeakerEvent=i.default,window.Logger=s.Logger)},function(e,t,n){"use strict";(function(e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},i=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}d((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var a=n(204),d=n(244),u=n(247),c=n(248),l=n(249),_=n(64),h=n(2),m=n(63),p=n(8),f=n(62),y=function(){function t(e){void 0===e&&(e={}),this.oauth2=new l.default,this.apiClient=null,this.cache=new _.default,this.logger=h.default}return t.prototype.setOffline=function(e){void 0===e&&(e=!1),d.default.isOffline=e,u.default.isOffline=e},t.prototype.setNetworkConnectivityDispatcher=function(e){e&&e.hasOwnProperty("forceCheckNetworkConnectivity")&&(d.default.setNetworkConnectivityDispatcher(e),u.default.setNetworkConnectivityDispatcher(e))},t.prototype.init=function(t){return i(this,void 0,void 0,(function(){var n,r,s,i,d,u,c,l=this;return o(this,(function(o){switch(o.label){case 0:if(!t)throw new Error("options with appId and appSecret must be provided.");return[4,t];case 1:if(n=o.sent(),r=n.appId,s=n.appSecret,i=n.logLevel,d=n.tlsAuth,u=n.basePath,c=n.accessToken,!r&&!c)throw new Error("appId is required.");if(!s&&!c)throw new Error("appSecret is required.");return i&&h.default.setLevel(i),!d&&m.default&&(e.env.NODE_TLS_REJECT_UNAUTHORIZED="0"),this.basePath=u,h.default.trace("Initializing SDK with options: ",t),[2,new Promise((function(e,n){l.oauth2.init(t.appId,t.appSecret,t.accessToken).then((function(){var t=new p.ApiClient;(u||u&&u!==l.oauth2.apiClient.basePath)&&(t.basePath=u),t.authentications=l.oauth2.apiClient.authentications,l.endpointClient=new a.default({},t),e()})).catch((function(e){return n(e)}))}))]}}))}))},t.prototype.createStream=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,n=this;return o(this,(function(a){if(!this.oauth2)throw new Error("SDK is not initialized or failed during initialization.");return e.basePath=e.basePath||this.basePath,e.id||(h.default.warn("No 'id' detected. Generating a UUID. Reference 'connectionId' property of the resolved object."),e.id=v4()),(t=this.cache.get(e.id))||(t=new d.default(e,this.oauth2,!1,{onClose:function(){n.cache.remove(e.id)}}),this.cache.set(e.id,t)),[2,new Promise((function(a,d){var u=0;setTimeout(function c(){return i(n,void 0,void 0,(function(){var n=this;return o(this,(function(l){switch(l.label){case 0:return u<4?(h.default.info("Retry attempt: ",u,this.oauth2),this.oauth2&&this.oauth2.activeToken?[4,this.oauth2.refreshAuthToken()]:[3,2]):[3,4];case 1:return l.sent(),t.connect((function(u){return i(n,void 0,void 0,(function(){var n=this;return o(this,(function(c){return u?d(u):a({stop:function(){return i(n,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,t.stopRequest()];case 1:return(e=n.sent())?(h.default.info("Realtime request stopped."),delete e.type,[2,e]):[2,{}];case 2:throw n.sent();case 3:return[2]}}))}))},start:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&(t.options=s(s({},t.options||{}),e)),new Promise((function(e,n){t.sendStart(e,n)}))},sendAudio:function(e){t.sendAudio(e)},close:function(){t.webSocket.disconnect(),n.cache.remove(e.id)},connectionId:t.id,conversationId:t.conversationId}),[2]}))}))})),[3,3];case 2:h.default.info("Active Token not found."),u++,setTimeout(c.bind(this),1e3*u),l.label=3;case 3:return[3,5];case 4:d({message:"Could not connect to real-time api after 4 retries."}),l.label=5;case 5:return[2]}}))}))}.bind(n),0)}))]}))}))},t.prototype.startRealtimeRequest=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,n,r=this;return o(this,(function(s){if(!this.oauth2)throw new Error("SDK is not initialized or failed during initialization.");return e.basePath=e.basePath||this.basePath,(t=this.cache.get(e.id))||(t=new d.default(e,this.oauth2,!0,{_onClose:function(){r.cache.remove(e.id)}}),this.cache.set(e.id,t)),n=function(n,s){h.default.info("Starting request."),t.startRequest().then((function(s){h.default.info("Realtime request started: ".concat(s)),n({stop:function(){return new Promise((function(n,s){t.stopRequest().then((function(t){h.default.info("Realtime request stopped."),t&&delete t.type,r.cache.remove(e.id),n(t)})).catch((function(t){r.cache.remove(e.id),s(t)}))}))},sendAudio:function(e){t.sendAudio(e)},connectionId:t.id,conversationId:s})})).catch((function(e){s(e)}))},[2,new Promise((function(e,s){var a=0;setTimeout(function d(){return i(r,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return a<4?(h.default.info("Retry attempt: ",a,this.oauth2),this.oauth2&&this.oauth2.activeToken?[4,this.oauth2.refreshAuthToken()]:[3,2]):[3,4];case 1:return r.sent(),t.connect(),n(e,s),[3,3];case 2:h.default.info("Active Token not found."),a++,setTimeout(d.bind(this),1e3*a),r.label=3;case 3:return[3,5];case 4:s({message:"Could not connect to real-time api after 4 retries."}),r.label=5;case 5:return[2]}}))}))}.bind(r),0)}))]}))}))},t.prototype.startEndpoint=function(e,t){return i(this,void 0,void 0,(function(){var n,r,s,a,d,c,l,_,h,m,p,f,y=this;return o(this,(function(M){if(!e)throw new Error("options must be provided.");if(n=e.endpoint,r=e.validationToken,s=e.actions,a=e.intents,d=e.enableEvents,c=e.data,l=e.endpointWebhookUrl,_=e.headers,h=e.pushSpeakerEvents,m=e.languages,p=e.timezone,!n)throw new Error("endpoint is required.");if(!this.endpointClient)throw new Error("SDK is not initialized or failed during initialization.");return m&&m.length>0&&(f=m.map((function(e){return{code:e}}))),p&&(c||(c={session:{}}),c.session.location={timeZone:{name:p}}),[2,new Promise((function(e,m){return i(y,void 0,void 0,(function(){var i=this;return o(this,(function(o){switch(o.label){case 0:return[4,this.oauth2.refreshAuthToken()];case 1:return o.sent(),this.endpointClient.startEndpoint({endpoint:n,validationToken:r,actions:s,intents:a,enableEvents:d,data:c,endpointWebhookUrl:l,headers:_,pushSpeakerEvents:h,languages:f}).then((function(n){t&&new u.default({callback:t,id:n.connectionId,basePath:i.basePath},i.oauth2).connect();e(n)})).catch((function(e){m(e)})),[2]}}))}))}))]}))}))},t.prototype.stopEndpoint=function(e){return i(this,void 0,void 0,(function(){var t,n,r,s,i=this;return o(this,(function(o){switch(o.label){case 0:return[4,this.oauth2.refreshAuthToken()];case 1:if(o.sent(),!e)throw new Error("options must be provided.");if(t=e.connectionId,n=e.actions,r=e.data,!t)throw new Error("connectionId is required to stop the endpoint connection.");if(!this.endpointClient)throw new Error("SDK is not initialized or was failed during initialization.");return this.cache.contains(t)&&(s=this.cache.get(t))&&s.eventApi.webSocketStatus===f.default.getWebSocketConnectionStatuses().connected&&this.pushEventOnConnection(t,new c.default({timestamp:(new Date).toISOString(),topic:c.default.topics().speaker}).toJSON()),[2,new Promise((function(e,s){i.endpointClient.stopEndpoint({connectionId:t,actions:n,data:r}).then((function(t){e(t)})).catch((function(e){s(e)}))}))]}}))}))},t.prototype.subscribeToConnection=function(e,t){return i(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return"function"==typeof t&&(t={handlers:{onMessage:t}}),n=new u.default({options:t,id:e,basePath:this.basePath,isStreaming:!1},this.oauth2),[4,this.oauth2.refreshAuthToken()];case 1:return r.sent(),[2,n.connect()]}}))}))},t.prototype.subscribeToStream=function(e,t){return i(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return"function"==typeof t&&(t={handlers:{onMessage:t}}),n=new u.default({options:t,id:e,basePath:this.basePath,isStreaming:!0},this.oauth2),[4,this.oauth2.refreshAuthToken()];case 1:return r.sent(),[4,new Promise((function(e){n.connect(e)}))];case 2:return r.sent(),[2,{close:function(){return n.disconnect()}}]}}))}))},t.prototype.pushEventOnConnection=function(e,t,n){return i(this,void 0,void 0,(function(){var r=this;return o(this,(function(s){return[2,new Promise((function(s,i){if(r.cache.contains(e)){var o=r.cache.get(e);if(o)if("active"===o.status)o.pushEvent(t,(function(e){e?(n&&n(e),i(e)):(n&&n(),s())}));else if("closed"===o.status){var a={message:"Connection with connectionId '".concat(e,"' has been stopped. Cannot push an event on the stopped connection.")};n&&n(a),i(a)}else{a={message:"Connection with connectionId '".concat(e,"' is in unexpected state.")};n&&n(a),i(a)}else{a={message:"Invalid connection by connectionId '".concat(e,"' detected.")};n&&n(a),i(a)}}else{a={message:"No connection by connectionId '".concat(e,"' found.")};n&&n(a),i(a)}}))]}))}))},t}();t.default=y}).call(this,n(26))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(8),s=n(61),i=n(231),o=n(64),a=n(8),d=n(9),u=n(2),c=function(){function e(e,t){void 0===e&&(e={}),t?this.apiClient=t:(this.apiClient=new a.ApiClient,this.apiClient.basePath=e.basePath||d.default.basePath),this.connectionToEndpointApi=new r.ConnectionToEndpointApi(this.apiClient),this.cache=new o.default}return e.validateActions=function(e){if(!e||!Array.isArray(e))throw new Error("actions should be an array.");var t=e.filter((function(e){return!e.invokeOn||!e.name}));if(t.length>0)throw new Error(JSON.stringify({message:"Invalid actions detected. Count: ".concat(t.length),invalidActions:t},null,2))},e.prototype.startEndpoint=function(e){var t=this;if(!e)throw new Error("endpoint configuration is required.");var n=e.endpoint,r=e.actions,o=e.intents,a=e.data,d=e.validationToken,u=e.endpointWebhookUrl,c=e.headers,l=e.pushSpeakerEvents,_=e.languages;if(!n.type)throw new Error("endpoint type is required.");if("pstn"===n.type.toLowerCase()){if(!n.phoneNumber)throw new Error("phoneNumber is required when type = 'pstn'.")}else{if("sip"!==n.type.toLowerCase())throw new Error("endpoint.type = '".concat(n.type,"' is not valid. Supported types are ['pstn' , 'sip']"));if(!n.uri)throw new Error("uri is required when type = 'sip'.");n.providerName||(n.providerName="AnyMeeting"),n.transportConfig||(n.transportConfig="transport=UDP;providerName=".concat(n.providerName,";audioTransport=RTP"))}return new Promise((function(e,h){t.connectToEndpoint("start",n,r,o,a,null,d,u,c,_).then((function(n){var r=n.connectionId,s=n.resultWebSocketUrl,o=n.eventUrl,a=n.conversationId;if(r){var d=new i.default({connectionId:r,webSocketUrl:s,conversationId:a,eventUrl:o,apiClient:t.apiClient,status:i.status.active,pushSpeakerEvents:l});t.cache.set(r,d),e(d)}else h({message:"No connectionId detected in successful response."})})).catch((function(e){h(s.default.getError(e))}))}))},e.prototype.stopEndpoint=function(e){var t=this;if(!e)throw new Error("endpoint configuration is required.");var n=e.endpoint,r=e.actions,s=e.data,o=e.connectionId;return new Promise((function(e,a){t.connectToEndpoint("stop",n,r,null,s,o).then((function(n){var r=n.connectionId,s=n.summaryInfo,o=n.conversationId;if(r)if(t.cache.contains(r)){var d=t.cache.get(r);d.summaryInfo=s,d.conversationId=o,d.status=i.status.closed,e(d)}else e({summaryInfo:s,conversationId:o,connectionId:r});else a({message:"No connectionId detected in successful response."})})).catch((function(e){a(e)}))}))},e.prototype.connectToEndpoint=function(t,n,i,o,a,d,c,l,_,h){var m,p=this;if(!t)throw new Error("operation is required.");i&&e.validateActions(i),m=d?{connectionId:d,operation:t,endpoint:n,validationToken:c,actions:i,data:a}:{operation:t,endpoint:n,actions:i,validationToken:c,endpointWebhookUrl:l,intents:o,headers:_,data:a,languages:h};var f=r.EndpointConnectRequest.constructFromObject(m);return new Promise((function(e,t){try{p.connectionToEndpointApi.connectToEndpoint(f,(function(n,r,i){n?t(s.default.getError(n)):r?e(r):t(s.default.getError())}))}catch(e){u.default.trace(e)}}))},e}();t.default=c},function(e,t,n){"use strict";t.byteLength=function(e){var t=u(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,r=u(e),o=r[0],a=r[1],d=new i(function(e,t,n){return 3*(t+n)/4-n}(0,o,a)),c=0,l=a>0?o-4:o;for(n=0;n<l;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],d[c++]=t>>16&255,d[c++]=t>>8&255,d[c++]=255&t;2===a&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,d[c++]=255&t);1===a&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,d[c++]=t>>8&255,d[c++]=255&t);return d},t.fromByteArray=function(e){for(var t,n=e.length,s=n%3,i=[],o=0,a=n-s;o<a;o+=16383)i.push(c(e,o,o+16383>a?a:o+16383));1===s?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===s&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],s=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,d=o.length;a<d;++a)r[a]=o[a],s[o.charCodeAt(a)]=a;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function c(e,t,n){for(var s,i,o=[],a=t;a<n;a+=3)s=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(r[(i=s)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},function(e,t){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.read=function(e,t,n,r,s){var i,o,a=8*s-r-1,d=(1<<a)-1,u=d>>1,c=-7,l=n?s-1:0,_=n?-1:1,h=e[t+l];for(l+=_,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+e[t+l],l+=_,c-=8);for(o=i&(1<<-c)-1,i>>=-c,c+=r;c>0;o=256*o+e[t+l],l+=_,c-=8);if(0===i)i=1-u;else{if(i===d)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,r),i-=u}return(h?-1:1)*o*Math.pow(2,i-r)},t.write=function(e,t,n,r,s,i){var o,a,d,u=8*i-s-1,c=(1<<u)-1,l=c>>1,_=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,m=r?1:-1,p=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-o))<1&&(o--,d*=2),(t+=o+l>=1?_/d:_*Math.pow(2,1-l))*d>=2&&(o++,d/=2),o+l>=c?(a=0,o=c):o+l>=1?(a=(t*d-1)*Math.pow(2,s),o+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,s),o=0));s>=8;e[n+h]=255&a,h+=m,a/=256,s-=8);for(o=o<<s|a,u+=s;u>0;e[n+h]=255&o,h+=m,o/=256,u-=8);e[n+h-m]|=128*p}},function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(e,t,n){var r;"undefined"!=typeof window?r=window:"undefined"!=typeof self?r=self:(console.warn("Using browser-only version of superagent in non-browser environment"),r=this);var s=n(209),i=n(210),o=n(10),a=n(211),d=n(212),u=n(214);function c(){}var l=t=e.exports=function(e,n){return"function"==typeof n?new t.Request("GET",e).end(n):1==arguments.length?new t.Request("GET",e):new t.Request(e,n)};t.Request=M,l.getXHR=function(){if(!(!r.XMLHttpRequest||r.location&&"file:"==r.location.protocol&&r.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only verison of superagent could not find XHR")};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};function h(e){if(!o(e))return e;var t=[];for(var n in e)m(t,n,e[n]);return t.join("&")}function m(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach((function(n){m(e,t,n)}));else if(o(n))for(var r in n)m(e,t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t))}function p(e){for(var t,n,r={},s=e.split("&"),i=0,o=s.length;i<o;++i)-1==(n=(t=s[i]).indexOf("="))?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function f(e){return/[\/+]json\b/.test(e)}function y(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.header=this.headers=function(e){var t,n,r,s,i=e.split(/\r?\n/),o={};i.pop();for(var a=0,d=i.length;a<d;++a)t=(n=i[a]).indexOf(":"),r=n.slice(0,t).toLowerCase(),s=_(n.slice(t+1)),o[r]=s;return o}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function M(e,t){var n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",(function(){var e,t=null,r=null;try{r=new y(n)}catch(e){return(t=new Error("Parser is unable to parse the response")).parse=!0,t.original=e,n.xhr?(t.rawResponse=void 0===n.xhr.responseType?n.xhr.responseText:n.xhr.response,t.status=n.xhr.status?n.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),n.callback(t)}n.emit("response",r);try{n._isResponseOK(r)||((e=new Error(r.statusText||"Unsuccessful HTTP response")).original=t,e.response=r,e.status=r.status)}catch(t){e=t}e?n.callback(e,r):n.callback(null,r)}))}function v(e,t,n){var r=l("DELETE",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}l.serializeObject=h,l.parseString=p,l.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},l.serialize={"application/x-www-form-urlencoded":h,"application/json":JSON.stringify},l.parse={"application/x-www-form-urlencoded":p,"application/json":JSON.parse},d(y.prototype),y.prototype._parseBody=function(e){var t=l.parse[this.type];return this.req._parser?this.req._parser(this,e):(!t&&f(this.type)&&(t=l.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null)},y.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",s=new Error(r);return s.status=this.status,s.method=t,s.url=n,s},l.Response=y,s(M.prototype),i(M.prototype),M.prototype.type=function(e){return this.set("Content-Type",l.types[e]||e),this},M.prototype.accept=function(e){return this.set("Accept",l.types[e]||e),this},M.prototype.auth=function(e,t,n){switch("object"==typeof t&&null!==t&&(n=t),n||(n={type:"function"==typeof btoa?"basic":"auto"}),n.type){case"basic":this.set("Authorization","Basic "+btoa(e+":"+t));break;case"auto":this.username=e,this.password=t;break;case"bearer":this.set("Authorization","Bearer "+e)}return this},M.prototype.query=function(e){return"string"!=typeof e&&(e=h(e)),e&&this._query.push(e),this},M.prototype.attach=function(e,t,n){if(t){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(e,t,n||t.name)}return this},M.prototype._getFormData=function(){return this._formData||(this._formData=new r.FormData),this._formData},M.prototype.callback=function(e,t){if(this._maxRetries&&this._retries++<this._maxRetries&&u(e,t))return this._retry();var n=this._callback;this.clearTimeout(),e&&(this._maxRetries&&(e.retries=this._retries-1),this.emit("error",e)),n(e,t)},M.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},M.prototype.buffer=M.prototype.ca=M.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},M.prototype.pipe=M.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},M.prototype._appendQueryString=function(){var e=this._query.join("&");if(e&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+e),this._sort){var t=this.url.indexOf("?");if(t>=0){var n=this.url.substring(t+1).split("&");a(this._sort)?n.sort(this._sort):n.sort(),this.url=this.url.substring(0,t)+"?"+n.join("&")}}},M.prototype._isHost=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&"[object Object]"!==Object.prototype.toString.call(e)},M.prototype.end=function(e){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=e||c,this._appendQueryString(),this._end()},M.prototype._end=function(){var e=this,t=this.xhr=l.getXHR(),n=this._formData||this._data;this._setTimeouts(),t.onreadystatechange=function(){var n=t.readyState;if(n>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4==n){var r;try{r=t.status}catch(e){r=0}if(!r){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end")}};var r=function(t,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=t,e.emit("progress",n)};if(this.hasListeners("progress"))try{t.onprogress=r.bind(null,"download"),t.upload&&(t.upload.onprogress=r.bind(null,"upload"))}catch(e){}try{this.username&&this.password?t.open(this.method,this.url,!0,this.username,this.password):t.open(this.method,this.url,!0)}catch(e){return this.callback(e)}if(this._withCredentials&&(t.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){var s=this._header["content-type"],i=this._serializer||l.serialize[s?s.split(";")[0]:""];!i&&f(s)&&(i=l.serialize["application/json"]),i&&(n=i(n))}for(var o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&t.setRequestHeader(o,this.header[o]);return this._responseType&&(t.responseType=this._responseType),this.emit("request",this),t.send(void 0!==n?n:null),this},l.get=function(e,t,n){var r=l("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},l.head=function(e,t,n){var r=l("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},l.options=function(e,t,n){var r=l("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},l.del=v,l.delete=v,l.patch=function(e,t,n){var r=l("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},l.post=function(e,t,n){var r=l("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},l.put=function(e,t,n){var r=l("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}},function(e,t,n){function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}(e)}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var s=0;s<r.length;s++)if((n=r[s])===t||n.fn===t){r.splice(s,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var s=(n=n.slice(0)).length;r<s;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,t,n){var r=n(10);function s(e){if(e)return function(e){for(var t in s.prototype)e[t]=s.prototype[t];return e}(e)}e.exports=s,s.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},s.prototype.parse=function(e){return this._parser=e,this},s.prototype.responseType=function(e){return this._responseType=e,this},s.prototype.serialize=function(e){return this._serializer=e,this},s.prototype.timeout=function(e){if(!e||"object"!=typeof e)return this._timeout=e,this._responseTimeout=0,this;for(var t in e)switch(t){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;default:console.warn("Unknown timeout option",t)}return this},s.prototype.retry=function(e){return 0!==arguments.length&&!0!==e||(e=1),e<=0&&(e=0),this._maxRetries=e,this._retries=0,this},s.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},s.prototype.then=function(e,t){if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise((function(e,t){n.end((function(n,r){n?t(n):e(r)}))}))}return this._fullfilledPromise.then(e,t)},s.prototype.catch=function(e){return this.then(void 0,e)},s.prototype.use=function(e){return e(this),this},s.prototype.ok=function(e){if("function"!=typeof e)throw Error("Callback required");return this._okCallback=e,this},s.prototype._isResponseOK=function(e){return!!e&&(this._okCallback?this._okCallback(e):e.status>=200&&e.status<300)},s.prototype.get=function(e){return this._header[e.toLowerCase()]},s.prototype.getHeader=s.prototype.get,s.prototype.set=function(e,t){if(r(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},s.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},s.prototype.field=function(e,t){if(null==e)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),r(e)){for(var n in e)this.field(n,e[n]);return this}if(Array.isArray(t)){for(var s in t)this.field(e,t[s]);return this}if(null==t)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof t&&(t=""+t),this._getFormData().append(e,t),this},s.prototype.abort=function(){return this._aborted||(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort")),this},s.prototype.withCredentials=function(e){return null==e&&(e=!0),this._withCredentials=e,this},s.prototype.redirects=function(e){return this._maxRedirects=e,this},s.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},s.prototype.send=function(e){var t=r(e),n=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(t&&r(this._data))for(var s in e)this._data[s]=e[s];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+e:e:(this._data||"")+e):this._data=e;return!t||this._isHost(e)||n||this.type("json"),this},s.prototype.sortQuery=function(e){return this._sort=void 0===e||e,this},s.prototype._timeoutError=function(e,t,n){if(!this._aborted){var r=new Error(e+t+"ms exceeded");r.timeout=t,r.code="ECONNABORTED",r.errno=n,this.timedout=!0,this.abort(),this.callback(r)}},s.prototype._setTimeouts=function(){var e=this;this._timeout&&!this._timer&&(this._timer=setTimeout((function(){e._timeoutError("Timeout of ",e._timeout,"ETIME")}),this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout((function(){e._timeoutError("Response timeout of ",e._responseTimeout,"ETIMEDOUT")}),this._responseTimeout))}},function(e,t,n){var r=n(10);e.exports=function(e){return"[object Function]"===(r(e)?Object.prototype.toString.call(e):"")}},function(e,t,n){var r=n(213);function s(e){if(e)return function(e){for(var t in s.prototype)e[t]=s.prototype[t];return e}(e)}e.exports=s,s.prototype.get=function(e){return this.header[e.toLowerCase()]},s.prototype._setHeaderProperties=function(e){var t=e["content-type"]||"";this.type=r.type(t);var n=r.params(t);for(var s in n)this[s]=n[s];this.links={};try{e.link&&(this.links=r.parseLinks(e.link))}catch(e){}},s.prototype._setStatusProperties=function(e){var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.redirect=3==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.forbidden=403==e,this.notFound=404==e}},function(e,t){t.type=function(e){return e.split(/ *; */).shift()},t.params=function(e){return e.split(/ *; */).reduce((function(e,t){var n=t.split(/ *= */),r=n.shift(),s=n.shift();return r&&s&&(e[r]=s),e}),{})},t.parseLinks=function(e){return e.split(/ *, */).reduce((function(e,t){var n=t.split(/ *; */),r=n[0].slice(1,-1);return e[n[1].split(/ *= */)[1].slice(1,-1)]=r,e}),{})},t.cleanHeader=function(e,t){return delete e["content-type"],delete e["content-length"],delete e["transfer-encoding"],delete e.host,t&&delete e.cookie,e}},function(e,t){var n=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];e.exports=function(e,t){return!!(e&&e.code&&~n.indexOf(e.code))||(!!(t&&t.status&&t.status>=500)||(!(!e||!("timeout"in e)||"ECONNABORTED"!=e.code)||!(!e||!("crossDomain"in e))))}},function(e,t,n){"use strict";t.decode=t.parse=n(216),t.encode=t.stringify=n(217)},function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var a=/\+/g;e=e.split(t);var d=1e3;i&&"number"==typeof i.maxKeys&&(d=i.maxKeys);var u=e.length;d>0&&u>d&&(u=d);for(var c=0;c<u;++c){var l,_,h,m,p=e[c].replace(a,"%20"),f=p.indexOf(n);f>=0?(l=p.substr(0,f),_=p.substr(f+1)):(l=p,_=""),h=decodeURIComponent(l),m=decodeURIComponent(_),r(o,h)?s(o[h])?o[h].push(m):o[h]=[o[h],m]:o[h]=m}return o};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?i(o(e),(function(o){var a=encodeURIComponent(r(o))+n;return s(e[o])?i(e[o],(function(e){return a+encodeURIComponent(r(e))})).join(t):a+encodeURIComponent(r(e[o]))})).join(t):a?encodeURIComponent(r(a))+n+encodeURIComponent(r(e)):""};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},function(e,t,n){var r,s,i;s=[n(1),n(11)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getActionItemsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getActionItemsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/action-items","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(7),n(52),n(58),n(59),n(60)],void 0===(i="function"==typeof(r=function(e,t,n,r,s,i){"use strict";return function(n){this.apiClient=n||e.instance,this.generateToken=function(e,n){var r=e;if(null==e)throw new t("Missing the required parameter 'body' when calling generateToken");var s=i;return this.apiClient.callApi("/oauth2/token:generate","POST",{},{},{},{},{},r,[],["application/json"],["application/json"],s,n)},this.refreshToken=function(e,n){var r=e;if(null==e)throw new t("Missing the required parameter 'body' when calling refreshToken");var s=i;return this.apiClient.callApi("/oauth2/token:refresh","POST",{},{},{},{},{},r,["jwt"],["application/json"],["application/json"],s,n)},this.revokeToken=function(e,n){var r=e;if(null==e)throw new t("Missing the required parameter 'body' when calling revokeToken");return this.apiClient.callApi("/oauth2/token:revoke","DELETE",{},{},{},{},{},r,["jwt"],["application/json"],["application/json"],null,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(42),n(49),n(7)],void 0===(i="function"==typeof(r=function(e,t,n,r){"use strict";return function(t){this.apiClient=t||e.instance,this.connectToEndpoint=function(e,t){var s=e;if(null==e)throw new r("Missing the required parameter 'body' when calling connectToEndpoint");var i=n;return this.apiClient.callApi("/v1/endpoint:connect","POST",{},{},{},{},{},s,["jwt"],["application/json"],["application/json"],i,t)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(11),n(34),n(14),n(18),n(20),n(21),n(22),n(23),n(24)],void 0===(i="function"==typeof(r=function(e,t,n,r,s,i,o,a,d,u){"use strict";return function(c){this.apiClient=c||e.instance,this.getActionItemsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getActionItemsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/action-items","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)},this.getConversationById=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getConversationById");var r={conversationId:e},s=n;return this.apiClient.callApi("/v1/conversations/{conversationId}","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,t)},this.getFollowUpsByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getFollowUpsByConversationId");var n={conversationId:e},s=r;return this.apiClient.callApi("/v1/conversations/{conversationId}/follow-ups","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,t)},this.getInsightsByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getInsightsByConversationId");var n={conversationId:e},r=s;return this.apiClient.callApi("/v1/conversations/{conversationId}/insights","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],r,t)},this.getIntentsByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getIntentsByConversationId");var n={conversationId:e},r=i;return this.apiClient.callApi("/v1/conversations/{conversationId}/intents","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],r,t)},this.getMembersByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getMembersByConversationId");var n={conversationId:e},r=o;return this.apiClient.callApi("/v1/conversations/{conversationId}/members","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],r,t)},this.getMessagesByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getMessagesByConversationId");var n={conversationId:e},r=a;return this.apiClient.callApi("/v1/conversations/{conversationId}/messages","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],r,t)},this.getQuestionsByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getQuestionsByConversationId");var n={conversationId:e},r=d;return this.apiClient.callApi("/v1/conversations/{conversationId}/questions","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],r,t)},this.getTopicsByConversationId=function(e,t){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getTopicsByConversationId");var n={conversationId:e},r=u;return this.apiClient.callApi("/v1/conversations/{conversationId}/topics","GET",n,{},{},{},{},null,["jwt"],["application/json"],["application/json"],r,t)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(7),n(51)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";return function(n){this.apiClient=n||e.instance,this.externalEventWebHook=function(e,n,r){var s=n;if(null==e)throw new t("Missing the required parameter 'connectionId' when calling externalEventWebHook");if(null==n)throw new t("Missing the required parameter 'body' when calling externalEventWebHook");var i={connectionId:e};return this.apiClient.callApi("/v1/event/{connectionId}","POST",i,{},{},{},{},s,["jwt"],["application/json"],["application/json"],null,r)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(14)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getFollowUpsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getFollowUpsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/follow-ups","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(18)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getInsightsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getInsightsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/insights","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(20)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getIntentsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getIntentsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/intents","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(55),n(57)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";return function(t){this.apiClient=t||e.instance,this.generateInsights=function(e,t){var r=e;if(null==e)throw new Error("Missing the required parameter 'body' when calling generateInsights");var s=n;return this.apiClient.callApi("/v1/insights","POST",{},{},{},{},{},r,["jwt"],["application/json"],["application/json"],s,t)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(21)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getMembersByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getMembersByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/members","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(22)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getMessagesByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getMessagesByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/messages","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(23)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getQuestionsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getQuestionsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/questions","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){var r,s,i;s=[n(1),n(24)],void 0===(i="function"==typeof(r=function(e,t){"use strict";return function(n){this.apiClient=n||e.instance,this.getTopicsByConversationId=function(e,n){if(null==e)throw new Error("Missing the required parameter 'conversationId' when calling getTopicsByConversationId");var r={conversationId:e},s=t;return this.apiClient.callApi("/v1/conversations/{conversationId}/topics","GET",r,{},{},{},{},null,["jwt"],["application/json"],["application/json"],s,n)}}})?r.apply(t,s):r)||(e.exports=i)},function(e,t,n){"use strict";t.__esModule=!0,t.status=void 0;var r=n(62),s=n(2);t.status={active:"active",inactive:"inactive",interrupted:"interrupted",closed:"closed"};var i=function(){function e(e){if(void 0===e&&(e={}),!e.connectionId)throw new Error("connectionId is required");this._connectionId=e.connectionId,this._webSocketUrl=e.webSocketUrl,this._eventUrl=e.eventUrl,this._status=e.status||t.status.inactive,this._summaryInfo=e.summaryInfo||null,this._conversationId=e.conversationId||null,this._subscribers={},this._pushSpeakerEvents=e.pushSpeakerEvents||!1;try{this._eventApi=new r.default(this,e.apiClient,{pushSpeakerEvents:this._pushSpeakerEvents})}catch(e){s.default.trace(e)}}return Object.defineProperty(e.prototype,"connectionId",{get:function(){return this._connectionId},set:function(e){this._connectionId=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"webSocketUrl",{get:function(){return this._webSocketUrl},set:function(e){this._webSocketUrl=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventUrl",{get:function(){return this._eventUrl},set:function(e){this._eventUrl=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"status",{get:function(){return this._status},set:function(e){this._status=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"summaryInfo",{get:function(){return this._summaryInfo},set:function(e){this._summaryInfo=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"conversationId",{get:function(){return this._conversationId},set:function(e){this._conversationId=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventApi",{get:function(){return this._eventApi},enumerable:!1,configurable:!0}),e.prototype.pushEvent=function(e,t){this._eventApi.pushEvent(e,t)},e.prototype.publish=function(e){var t=this;e&&this._subscribers.length>0&&this._subscribers.keys().forEach((function(n){return t._subscribers[n](e)}))},e.prototype.subscribe=function(e,t){1===arguments.length&&e,t&&"function"==typeof t&&(this._subscribers[e]=t)},e.prototype.unsubscribe=function(e){e?delete this._subscribers[e]:delete this._subscribers.default},e}();t.default=i},function(e,t,n){var r;if("object"==typeof globalThis)r=globalThis;else try{r=n(233)}catch(e){}finally{if(r||"undefined"==typeof window||(r=window),!r)throw new Error("Could not determine global this")}var s=r.WebSocket||r.MozWebSocket,i=n(234);function o(e,t){return t?new s(e,t):new s(e)}s&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(o,e,{get:function(){return s[e]}})})),e.exports={w3cwebsocket:s?o:null,version:i}},function(e,t){var n=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"==typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()},function(e,t,n){e.exports=n(235).version},function(e){e.exports=JSON.parse('{"_args":[["websocket@1.0.34","/Users/arjun_chouhan/IdeaProjects/symbl-js-sdk"]],"_from":"websocket@1.0.34","_id":"websocket@1.0.34","_inBundle":false,"_integrity":"sha512-PRDso2sGwF6kM75QykIesBijKSVceR6jL2G8NGYyq2XrItNC2P5/qL5XeR056GhA+Ly7JMFvJb9I312mJfmqnQ==","_location":"/websocket","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"websocket@1.0.34","name":"websocket","escapedName":"websocket","rawSpec":"1.0.34","saveSpec":null,"fetchSpec":"1.0.34"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/websocket/-/websocket-1.0.34.tgz","_spec":"1.0.34","_where":"/Users/arjun_chouhan/IdeaProjects/symbl-js-sdk","author":{"name":"Brian McKelvey","email":"theturtle32@gmail.com","url":"https://github.com/theturtle32"},"browser":"lib/browser.js","bugs":{"url":"https://github.com/theturtle32/WebSocket-Node/issues"},"config":{"verbose":false},"contributors":[{"name":"Iñaki Baz Castillo","email":"ibc@aliax.net","url":"http://dev.sipdoc.net"}],"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint":"^2.0.0","jshint-stylish":"^2.2.1","tape":"^4.9.1"},"directories":{"lib":"./lib"},"engines":{"node":">=4.0.0"},"homepage":"https://github.com/theturtle32/WebSocket-Node","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"license":"Apache-2.0","main":"index","name":"websocket","repository":{"type":"git","url":"git+https://github.com/theturtle32/WebSocket-Node.git"},"scripts":{"gulp":"gulp","test":"tape test/unit/*.js"},"version":"1.0.34"}')},function(e,t,n){var r,s;!function(i,o){"use strict";void 0===(s="function"==typeof(r=function(){var e=function(){},t="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&t?s:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):e)}function o(t,r){for(var s=0;s<n.length;s++){var i=n[s];this[i]=s<t?e:this.methodFactory(i,t,r)}this.log=this.debug}function a(e,t,n){return function(){"undefined"!=typeof console&&(o.call(this,t,n),this[e].apply(this,arguments))}}function d(e,t,n){return i(e)||a.apply(this,arguments)}function u(e,t,r){var s,i=this;t=null==t?"WARN":t;var a="loglevel";function u(){var e;if("undefined"!=typeof window&&a){try{e=window.localStorage[a]}catch(e){}if(void 0===e)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(a)+"=");-1!==n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?a+=":"+e:"symbol"==typeof e&&(a=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=r||d,i.getLevel=function(){return s},i.setLevel=function(t,r){if("string"==typeof t&&void 0!==i.levels[t.toUpperCase()]&&(t=i.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(s=t,!1!==r&&function(e){var t=(n[e]||"silent").toUpperCase();if("undefined"!=typeof window&&a){try{return void(window.localStorage[a]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"="+t+";"}catch(e){}}}(t),o.call(i,t,e),"undefined"==typeof console&&t<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){t=e,u()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(t,!1),function(){if("undefined"!=typeof window&&a){try{return void window.localStorage.removeItem(a)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var c=u();null==c&&(c=t),i.setLevel(c,!1)}var c=new u,l={};c.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=l[e];return t||(t=l[e]=new u(e,c.getLevel(),c.methodFactory)),t};var _="undefined"!=typeof window?window.log:void 0;return c.noConflict=function(){return"undefined"!=typeof window&&window.log===c&&(window.log=_),c},c.getLoggers=function(){return l},c.default=c,c})?r.call(t,n,t,e):r)||(e.exports=s)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(238),s=n(239),i=n(241),o=()=>{},a=new s.TimeoutError;t.default=class extends r{constructor(e){var t,n,r,s;if(super(),this._intervalCount=0,this._intervalEnd=0,this._pendingCount=0,this._resolveEmpty=o,this._resolveIdle=o,!("number"==typeof(e=Object.assign({carryoverConcurrencyCount:!1,intervalCap:1/0,interval:0,concurrency:1/0,autoStart:!0,queueClass:i.default},e)).intervalCap&&e.intervalCap>=1))throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null!==(n=null===(t=e.intervalCap)||void 0===t?void 0:t.toString())&&void 0!==n?n:""}\` (${typeof e.intervalCap})`);if(void 0===e.interval||!(Number.isFinite(e.interval)&&e.interval>=0))throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null!==(s=null===(r=e.interval)||void 0===r?void 0:r.toString())&&void 0!==s?s:""}\` (${typeof e.interval})`);this._carryoverConcurrencyCount=e.carryoverConcurrencyCount,this._isIntervalIgnored=e.intervalCap===1/0||0===e.interval,this._intervalCap=e.intervalCap,this._interval=e.interval,this._queue=new e.queueClass,this._queueClass=e.queueClass,this.concurrency=e.concurrency,this._timeout=e.timeout,this._throwOnTimeout=!0===e.throwOnTimeout,this._isPaused=!1===e.autoStart}get _doesIntervalAllowAnother(){return this._isIntervalIgnored||this._intervalCount<this._intervalCap}get _doesConcurrentAllowAnother(){return this._pendingCount<this._concurrency}_next(){this._pendingCount--,this._tryToStartAnother(),this.emit("next")}_resolvePromises(){this._resolveEmpty(),this._resolveEmpty=o,0===this._pendingCount&&(this._resolveIdle(),this._resolveIdle=o,this.emit("idle"))}_onResumeInterval(){this._onInterval(),this._initializeIntervalIfNeeded(),this._timeoutId=void 0}_isIntervalPaused(){const e=Date.now();if(void 0===this._intervalId){const t=this._intervalEnd-e;if(!(t<0))return void 0===this._timeoutId&&(this._timeoutId=setTimeout(()=>{this._onResumeInterval()},t)),!0;this._intervalCount=this._carryoverConcurrencyCount?this._pendingCount:0}return!1}_tryToStartAnother(){if(0===this._queue.size)return this._intervalId&&clearInterval(this._intervalId),this._intervalId=void 0,this._resolvePromises(),!1;if(!this._isPaused){const e=!this._isIntervalPaused();if(this._doesIntervalAllowAnother&&this._doesConcurrentAllowAnother){const t=this._queue.dequeue();return!!t&&(this.emit("active"),t(),e&&this._initializeIntervalIfNeeded(),!0)}}return!1}_initializeIntervalIfNeeded(){this._isIntervalIgnored||void 0!==this._intervalId||(this._intervalId=setInterval(()=>{this._onInterval()},this._interval),this._intervalEnd=Date.now()+this._interval)}_onInterval(){0===this._intervalCount&&0===this._pendingCount&&this._intervalId&&(clearInterval(this._intervalId),this._intervalId=void 0),this._intervalCount=this._carryoverConcurrencyCount?this._pendingCount:0,this._processQueue()}_processQueue(){for(;this._tryToStartAnother(););}get concurrency(){return this._concurrency}set concurrency(e){if(!("number"==typeof e&&e>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);this._concurrency=e,this._processQueue()}async add(e,t={}){return new Promise((n,r)=>{this._queue.enqueue(async()=>{this._pendingCount++,this._intervalCount++;try{const i=void 0===this._timeout&&void 0===t.timeout?e():s.default(Promise.resolve(e()),void 0===t.timeout?this._timeout:t.timeout,()=>{(void 0===t.throwOnTimeout?this._throwOnTimeout:t.throwOnTimeout)&&r(a)});n(await i)}catch(e){r(e)}this._next()},t),this._tryToStartAnother(),this.emit("add")})}async addAll(e,t){return Promise.all(e.map(async e=>this.add(e,t)))}start(){return this._isPaused?(this._isPaused=!1,this._processQueue(),this):this}pause(){this._isPaused=!0}clear(){this._queue=new this._queueClass}async onEmpty(){if(0!==this._queue.size)return new Promise(e=>{const t=this._resolveEmpty;this._resolveEmpty=()=>{t(),e()}})}async onIdle(){if(0!==this._pendingCount||0!==this._queue.size)return new Promise(e=>{const t=this._resolveIdle;this._resolveIdle=()=>{t(),e()}})}get size(){return this._queue.size}sizeBy(e){return this._queue.filter(e).length}get pending(){return this._pendingCount}get isPaused(){return this._isPaused}get timeout(){return this._timeout}set timeout(e){this._timeout=e}}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,s="~";function i(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,r,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new o(n,r||e,i),d=s?s+t:t;return e._events[d]?e._events[d].fn?e._events[d]=[e._events[d],a]:e._events[d].push(a):(e._events[d]=a,e._eventsCount++),e}function d(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function u(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(s=!1)),u.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(s?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},u.prototype.listeners=function(e){var t=s?s+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,o=new Array(i);r<i;r++)o[r]=n[r].fn;return o},u.prototype.listenerCount=function(e){var t=s?s+e:e,n=this._events[t];return n?n.fn?1:n.length:0},u.prototype.emit=function(e,t,n,r,i,o){var a=s?s+e:e;if(!this._events[a])return!1;var d,u,c=this._events[a],l=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,i),!0;case 6:return c.fn.call(c.context,t,n,r,i,o),!0}for(u=1,d=new Array(l-1);u<l;u++)d[u-1]=arguments[u];c.fn.apply(c.context,d)}else{var _,h=c.length;for(u=0;u<h;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,r);break;default:if(!d)for(_=1,d=new Array(l-1);_<l;_++)d[_-1]=arguments[_];c[u].fn.apply(c[u].context,d)}}return!0},u.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,n,r){var i=s?s+e:e;if(!this._events[i])return this;if(!t)return d(this,i),this;var o=this._events[i];if(o.fn)o.fn!==t||r&&!o.once||n&&o.context!==n||d(this,i);else{for(var a=0,u=[],c=o.length;a<c;a++)(o[a].fn!==t||r&&!o[a].once||n&&o[a].context!==n)&&u.push(o[a]);u.length?this._events[i]=1===u.length?u[0]:u:d(this,i)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=s?s+e:e,this._events[t]&&d(this,t)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=s,u.EventEmitter=u,e.exports=u},function(e,t,n){"use strict";const r=n(240);class s extends Error{constructor(e){super(e),this.name="TimeoutError"}}const i=(e,t,n)=>new Promise((i,o)=>{if("number"!=typeof t||t<0)throw new TypeError("Expected `milliseconds` to be a positive number");if(t===1/0)return void i(e);const a=setTimeout(()=>{if("function"==typeof n){try{i(n())}catch(e){o(e)}return}const r=n instanceof Error?n:new s("string"==typeof n?n:`Promise timed out after ${t} milliseconds`);"function"==typeof e.cancel&&e.cancel(),o(r)},t);r(e.then(i,o),()=>{clearTimeout(a)})});e.exports=i,e.exports.default=i,e.exports.TimeoutError=s},function(e,t,n){"use strict";e.exports=(e,t)=>(t=t||(()=>{}),e.then(e=>new Promise(e=>{e(t())}).then(()=>e),e=>new Promise(e=>{e(t())}).then(()=>{throw e})))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(242);t.default=class{constructor(){this._queue=[]}enqueue(e,t){const n={priority:(t=Object.assign({priority:0},t)).priority,run:e};if(this.size&&this._queue[this.size-1].priority>=t.priority)return void this._queue.push(n);const s=r.default(this._queue,n,(e,t)=>t.priority-e.priority);this._queue.splice(s,0,n)}dequeue(){const e=this._queue.shift();return null==e?void 0:e.run}filter(e){return this._queue.filter(t=>t.priority===e.priority).map(e=>e.run)}get size(){return this._queue.length}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){let r=0,s=e.length;for(;s>0;){const i=s/2|0;let o=r+i;n(e[o],t)<=0?(r=++o,s-=i+1):s=i}return r}},function(e,t,n){"use strict";(function(e){t.__esModule=!0;var n=function(){function t(){void 0!==e?e.clientSdkStore?this.store=e.clientSdkStore:(this.store={},e.clientSdkStore=this.store):"undefined"!=typeof window&&(window.clientSdkStore?this.store=window.clientSdkStore:(this.store={},window.clientSdkStore=this.store)),this.get=this.get.bind(this),this.set=this.set.bind(this),this.remove=this.remove.bind(this)}return t.prototype.contains=function(e){return this.store.hasOwnProperty(e)},t.prototype.get=function(e){return this.store[e]},t.prototype.set=function(e,t){this.store[e]=t},t.prototype.remove=function(e){delete this.store[e]},t}();t.default=n}).call(this,n(5))},function(e,t,n){"use strict";(function(e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},i=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}d((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var a=n(9),d=n(65),u=n(25),c=n(2),l=n(201),_="closed",h="connected",m="connecting",p="error",f=function(){function t(e,t,n,r){var i=this;void 0===e&&(e={}),void 0===n&&(n=!1),void 0===r&&(r={});var o=e.basePath||a.default.basePath;o=o.replace(/^http/,"ws");var u="".concat(o,"/v1/realtime/insights");if(!t)throw new Error("oauth2 is required for Real-time API.");var c=e.id;this.id=c||(0,l.v4)(),this.usePreviousGenerationResponses=n,e.backoff?this.backoff=new d.default(e.backoff.max,e.backoff.min,e.backoff.factor,e.backoff.maxRetries):this.backoff=new d.default,this.webSocketUrl="".concat(u,"/").concat(this.id),this.options=e,this.referenceIds=[(0,l.v4)()],this.connect=this.connect.bind(this),this._connect=this._connect.bind(this),this.reConnect=this.reConnect.bind(this),this.onConnectWebSocket=this.onConnectWebSocket.bind(this),this.onErrorWebSocket=this.onErrorWebSocket.bind(this),this.onMessageWebSocket=this.onMessageWebSocket.bind(this),this.onCloseWebSocket=this.onCloseWebSocket.bind(this),this.onForceClose=this.onForceClose.bind(this),this.onStartedListening=this.onStartedListening.bind(this),this.onSpeechDetected=this.onSpeechDetected.bind(this),this.onRequestStart=this.onRequestStart.bind(this),this.onRequestStop=this.onRequestStop.bind(this),this.onMessageResponse=this.onMessageResponse.bind(this),this.onInsightResponse=this.onInsightResponse.bind(this),this.onTrackerResponse=this.onTrackerResponse.bind(this),this.onTopicResponse=this.onTopicResponse.bind(this),this.onDataReceived=this.onDataReceived.bind(this),this.sendAudio=this.sendAudio.bind(this),this.sendStart=this.sendStart.bind(this),this.startRequest=this.startRequest.bind(this),this.oauth2=t,this.handlers=s(s({},this.options.handlers||{}),r),this.retryCount=0,this.requestStarted=!1,this.conversationId=new Promise((function(e,t){i.conversationIdSuccess=e,i.conversationIdError=t}))}return t.setNetworkConnectivityDispatcher=function(e){t.networkConnectivityDispatcher=e},t.prototype.onErrorWebSocket=function(e){this.webSocketStatus=p,c.default.error(e),this.onConnectCallback&&("function"==typeof this.onConnectCallback?this.onConnectCallback(e):c.default.warn("onConnectCallback is not a function"))},t.prototype.onMessageWebSocket=function(t){var n=this;if(t){var r=JSON.parse(t);if("message"===r.type)switch(r.message.type){case"recognition_started":this.requestStarted||(this.requestStarted=!0),this.onRequestStart(r.message);break;case"recognition_result":this.onSpeechDetected(r.message);break;case"started_listening":this.requestStarted=!0,this.onStartedListening(r.message);break;case"recognition_stopped":this.onRequestStop();break;case"conversation_completed":this.onRequestStop(r.message),this.handlers.onConversationCompleted&&e((function(){n.handlers.onConversationCompleted(r)}));break;case"error":this.onRequestError(r)}else switch(r.type){case"message_response":this.onMessageResponse(r.messages);break;case"insight_response":this.onInsightResponse(r.insights);break;case"tracker_response":this.onTrackerResponse(r);break;case"topic_response":this.onTopicResponse(r.topics)}this.onDataReceived(r)}},t.prototype.connect=function(e){return i(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.backoff.run(this._connect,this,[e,this.referenceIds[this.referenceIds.length-1]],!0)];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),c.default.error("Exception caught while retrying to connect: ".concat(t&&t.message),t),this.handlers.onReconnectFail&&"function"==typeof this.handlers.onReconnectFail&&this.handlers.onReconnectFail(t),[3,3];case 3:return[2]}}))}))},t.prototype.reConnect=function(e){return void 0===e&&(e=!1),i(this,void 0,void 0,(function(){var n,r,s,i=this;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),this.backoff.reset(),e&&t.networkConnectivityDispatcher&&(c.default.info("Rechecking network connectivity"),t.isOffline=!0,t.networkConnectivityDispatcher.forceCheckNetworkConnectivity()),t.isOffline?[3,2]:[4,this.oauth2.refreshAuthToken()];case 1:return o.sent(),this.referenceIds.push((0,l.v4)()),this.connect(this.onConnectCallback).then((function(){i.requestStarted&&i.startRequest()})),[3,3];case 2:n=900,r=setInterval((function(){if(t.isOffline)if(n>0)n-=1;else{clearInterval(r);var e="Max attempts to reconnect exceeded! Not attempting reconnection";c.default.error(e),i.handlers.onReconnectFail&&"function"==typeof i.handlers.onReconnectFail&&i.handlers.onReconnectFail(new Error(e))}else clearInterval(r),i.reConnect()}),2e3),o.label=3;case 3:return[3,5];case 4:return s=o.sent(),c.default.error("Exception caught while reconnecting: ".concat(s&&s.message),s),[3,5];case 5:return[2]}}))}))},t.prototype.onForceClose=function(e){this.webSocketStatus=_,c.default.info("Force closed WebSocket due to network issues -- Attempting to reconnect"),this.options.reconnectOnError?this.referenceIds.includes(e)?(c.default.debug("Attempting reconnect after error."),this.referenceIds.splice(this.referenceIds.indexOf(e),1),this.reConnect(!0)):c.default.debug("Reconnection already handled for socket with connectionId: ".concat(this.id)):c.default.debug("Reconnection not enabled for socket with connectionId: ".concat(this.id))},t.prototype.onCloseWebSocket=function(t){var n=this;return function(r){n.webSocketStatus=_,c.default.info("WebSocket connection closed",r),!n.options.reconnectOnError||!1!==r.wasClean&&1005!==r.code&&3006!==r.code?(c.default.debug("WebSocket Closed."),n.handlers&&n.handlers.onClose&&e((function(){n.handlers.onClose(r)}))):n.referenceIds.includes(t)?(c.default.debug("Attempting reconnect after error."),n.referenceIds.splice(n.referenceIds.indexOf(t),1),n.reConnect(r.handshakeFailed)):c.default.debug("Reconnection already handled for socket with connectionId: ".concat(n.id))}},t.prototype.onConnectWebSocket=function(){c.default.debug("WebSocket Connected."),this.webSocketStatus=h,this.onConnectCallback&&(c.default.debug("Invoking this.onConnectCallback",r(this.onConnectCallback)),"function"==typeof this.onConnectCallback?(this.onConnectCallback(null),this.onConnectCallback=null):c.default.warn("onConnectCallback is not a function"))},t.prototype._connect=function(e,t){var n=this;return new Promise((function(r){n.webSocketStatus!==h?(c.default.debug("WebSocket Connecting."),n.webSocketStatus!==m&&(n.webSocketStatus=m),e&&(n.onConnectCallback=e),n.webSocket=new u.default({accessToken:n.oauth2.activeToken,onClose:n.onCloseWebSocket(t),onConnect:n.onConnectWebSocket,onError:n.onErrorWebSocket,onMessage:n.onMessageWebSocket,url:n.webSocketUrl,onConnectSuccess:r,onForceClose:n.onForceClose,reconnectOnError:n.options.reconnectOnError,referenceId:t})):n.webSocketStatus===h&&r()}))},t.prototype.onStartedListening=function(t){var n=this;this.usePreviousGenerationResponses?c.default.info("Using the older version of 'createStream' - 'startRealtimeRequest'. 'startRealtimeRequest' will be deprecated in the future in favor of new function 'createStream' that provides lower latencies in processing events."):this.requestStartedResolve&&(this.requestStartedResolve(),this.requestStartedResolve=null),this.handlers.onStartedListening&&e((function(){n.handlers.onStartedListening(t)}))},t.prototype.onRequestStart=function(t){var n=this;if(this.usePreviousGenerationResponses)this.requestStartedResolve&&(this.conversationIdSuccess(t.data&&t.data.conversationId),this.requestStartedResolve(t.data&&t.data.conversationId),this.requestStartedResolve=null);else{var r=t.data&&t.data.conversationId;r&&this.conversationIdSuccess(r)}this.handlers.onRequestStart&&e((function(){n.handlers.onRequestStart(t)}))},t.prototype.onRequestStop=function(t){var n=this;this.usePreviousGenerationResponses?this.requestStoppedResolve&&t&&(this.requestStoppedResolve(t),this.requestStoppedResolve=null):this.requestStoppedResolve&&(this.requestStoppedResolve(),this.requestStoppedResolve=null),!1!==this.options.disconnectOnStopRequest&&this.webSocket.disconnect(),this.handlers.onRequestStop&&e((function(){n.handlers.onRequestStop(t)}))},t.prototype.onRequestError=function(t){var n=this;this.requestErrorReject&&(this.requestErrorReject(t),this.requestErrorReject=null),this.handlers.onRequestError&&e((function(){n.handlers.onRequestError(t)}))},t.prototype.sendStart=function(e,t){var n=this.options,r=n.insightTypes,s=n.config,i=n.speaker,o=n.trackers,a=n.customVocabulary,d=n.disconnectOnStopRequest,u=n.disconnectOnStopRequestTimeout,l=n.noConnectionTimeout;if(s&&!s.speechRecognition){var _={};if(!s.sampleRateHertz)throw new Error("sampleRateHertz must be provided.");if("number"!=typeof s.sampleRateHertz)throw new Error("sampleRateHertz must be a valid number");Object.keys(s).forEach((function(e){switch(e){case"engine":case"encoding":case"sampleRateHertz":case"interimResults":_[e]=s[e],delete s[e]}})),Object.keys(_).length>0&&(s.speechRecognition=_)}c.default.debug("Send start request."),this.requestStartedResolve=e,this.onRequestError=t;var h={type:"start_request",insightTypes:r||[],config:s,speaker:i,trackers:o,customVocabulary:a};void 0!==d&&void 0!==u&&(h.disconnectOnStopRequest=d,h.disconnectOnStopRequestTimeout=u),void 0!==l&&(h.noConnectionTimeout=l),this.webSocket.send(JSON.stringify(h))},t.prototype.startRequest=function(){var e=this;return new Promise((function(t,n){if(e.backoff.reset(),e.webSocketStatus===h)e.sendStart(t,n);else{c.default.info("WebSocket is connecting. Retry will be attempted.",e.webSocketStatus);var r=function r(){return i(e,void 0,void 0,(function(){return o(this,(function(e){if(!this.requestStarted)if(c.default.info("Retry attempt: ",this.retryCount),this.webSocketStatus===h)this.sendStart(t,n);else try{this.backoff.run(r.bind(this),this)}catch(e){n("Too many retries attempted. Try again later.")}return this.retryCount+=1,[2]}))}))};try{setTimeout((function(){return i(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,r()];case 1:return e.sent(),[4,this.backoff.run(r.bind(this),this)];case 2:return e.sent(),[2]}}))}))}),500)}catch(e){n("Too many retries attempted. Try again later.")}}}))},t.prototype.stopRequest=function(){var e=this;return new Promise((function(t,n){if(e.webSocketStatus===h){if(!e.requestStarted)return c.default.warn("Invoked stopRequest() on an idle stream for id: ".concat(e.id)),void t();c.default.debug("Send stop request."),e.requestStoppedResolve=t,e.onRequestError=n,e.webSocket.send(JSON.stringify({type:"stop_request"}))}else c.default.warn("WebSocket connection is not connected. No stop request sent."),t();!1===e.options.disconnectOnStopRequest&&e._cleanForReconnect()}))},t.prototype._cleanForReconnect=function(){this.requestStarted=!1},t.prototype.sendAudio=function(e){this.requestStarted&&this.webSocket.send(e)},t.prototype.onSpeechDetected=function(t){var n=this;this.handlers.onSpeechDetected&&e((function(){n.handlers.onSpeechDetected(t)}))},t.prototype.onDataReceived=function(t){var n=this;this.handlers.onDataReceived&&e((function(){n.handlers.onDataReceived(t)}))},t.prototype.onMessageResponse=function(t){var n=this;this.handlers.onMessageResponse&&e((function(){n.handlers.onMessageResponse(t)}))},t.prototype.onInsightResponse=function(t){var n=this;this.handlers.onInsightResponse&&e((function(){n.handlers.onInsightResponse(t)}))},t.prototype.onTrackerResponse=function(t){var n=this;this.handlers.onTrackerResponse&&e((function(){n.handlers.onTrackerResponse(t)}))},t.prototype.onTopicResponse=function(t){var n=this;this.handlers.onTopicResponse&&e((function(){n.handlers.onTopicResponse(t)}))},t.isOffline=!1,t}();t.default=f}).call(this,n(245).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(s.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(s.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(246),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(5))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,s,i,o,a,d=1,u={},c=!1,l=e.document,_=Object.getPrototypeOf&&Object.getPrototypeOf(e);_=_&&_.setTimeout?_:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(o="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&m(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(o+t,"*")}),_.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return u[d]=s,r(d),d++},_.clearImmediate=h}function h(e){delete u[e]}function m(e){if(c)setTimeout(m,0,e);else{var t=u[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(5),n(26))},function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}d((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var i=n(65),o=n(25),a=n(9),d=n(2),u=n(201),c="connected",l="error",_="closed",h="connecting",m=function(){function e(e,t){this.connectionOptions=e.options;var n=this.connectionOptions.handlers.onMessage,r=e.isStreaming;if(!n||"function"!=typeof n)throw new Error("onMessage function is required for establishing connection with Session-Manger Websocket.");var s=e.basePath||a.default.basePath;s=s.replace(/^http/,"ws");var o="session";r&&(o="v1");var d="".concat(s,"/").concat(o,"/subscribe");if(!t)throw new Error("oauth2 is required for Session-Manager API.");var c=e.id;if(!c)throw new Error("id is required for establishing connection.");this.backoff=new i.default,this.oauth2=t,this.id=c,this.onMessage=n,this.webSocketUrl="".concat(d,"/").concat(this.id),this.options=e,this.referenceIds=[(0,u.v4)()],this.connect=this.connect.bind(this),this._connect=this._connect.bind(this),this.reConnect=this.reConnect.bind(this),this.onConnectWebSocket=this.onConnectWebSocket.bind(this),this.onErrorWebSocket=this.onErrorWebSocket.bind(this),this.onMessageWebSocket=this.onMessageWebSocket.bind(this),this.onCloseWebSocket=this.onCloseWebSocket.bind(this),this.disconnect=this.disconnect.bind(this),this.onForceClose=this.onForceClose.bind(this)}return e.setNetworkConnectivityDispatcher=function(t){e.networkConnectivityDispatcher=t},e.prototype.reConnect=function(t){return void 0===t&&(t=!1),r(this,void 0,void 0,(function(){var n,r,i,o=this;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,,5]),this.backoff.reset(),t&&e.networkConnectivityDispatcher&&(d.default.info("Rechecking network connectivity"),e.isOffline=!0,e.networkConnectivityDispatcher.forceCheckNetworkConnectivity()),e.isOffline?[3,2]:[4,this.oauth2.refreshAuthToken()];case 1:return s.sent(),this.referenceIds.push((0,u.v4)()),this.connect(this.onConnectCallback),[3,3];case 2:n=900,r=setInterval((function(){if(e.isOffline)if(n>0)n-=1;else{clearInterval(r);var t="Max attempts to reconnect exceeded! Not attempting reconnection";d.default.error(t),o.connectionOptions.handlers.onReconnectFail&&"function"==typeof o.connectionOptions.handlers.onReconnectFail&&o.connectionOptions.handlers.onReconnectFail(new Error(t))}else clearInterval(r),o.reConnect()}),2e3),s.label=3;case 3:return[3,5];case 4:return i=s.sent(),d.default.error("Exception caught while reconnecting: ".concat(i&&i.message),i),[3,5];case 5:return[2]}}))}))},e.prototype.onForceClose=function(e){this.webSocketStatus=_,d.default.info("Force closed WebSocket due to network issues -- Attempting to reconnect"),this.connectionOptions.reconnectOnError?this.referenceIds.includes(e)?(d.default.debug("Attempting reconnect after error."),this.referenceIds.splice(this.referenceIds.indexOf(e),1),this.reConnect(!0)):d.default.debug("Reconnection already handled for socket with connectionId: ".concat(this.id)):d.default.debug("Reconnection not enabled for socket with connectionId: ".concat(this.id))},e.prototype.onCloseWebSocket=function(e){var t=this;return function(n){t.webSocketStatus=_,d.default.info("WebSocket connection closed",n),!t.connectionOptions.reconnectOnError||!1!==n.wasClean&&1005!==n.code&&3006!==n.code?(d.default.debug((new Date).toISOString(),"WebSocket Closed."),t.connectionOptions.handlers.onClose&&"function"==typeof t.connectionOptions.handlers.onClose&&t.connectionOptions.handlers.onClose()):t.referenceIds.includes(e)?(d.default.debug("Attempting reconnect after error."),t.referenceIds.splice(t.referenceIds.indexOf(e),1),t.reConnect(n.handshakeFailed)):d.default.debug("Reconnection already handled for socket with connectionId: ".concat(t.id))}},e.prototype.onConnectWebSocket=function(){d.default.debug("WebSocket Connected."),this.webSocketStatus=c,this.onConnectCallback&&"function"==typeof this.onConnectCallback&&(this.onConnectCallback(),this.onConnectCallback=null),this.connectionOptions.handlers.onSubscribe&&"function"==typeof this.connectionOptions.handlers.onSubscribe&&this.connectionOptions.handlers.onSubscribe()},e.prototype.onErrorWebSocket=function(e){this.webSocketStatus=l,d.default.error(e)},e.prototype.onMessageWebSocket=function(e){if(e){var t=JSON.parse(e);d.default.debug("Websocket Message: ",{data:t}),this.onMessage(t)}},e.prototype._connect=function(e,t){var n=this;return new Promise((function(r){n.webSocketStatus!==c?(d.default.debug("WebSocket Connecting on: ".concat(n.webSocketUrl)),n.webSocketStatus!==h&&(n.webSocketStatus=h),e&&(n.onConnectCallback=e),n.webSocket=new o.default({url:n.webSocketUrl,accessToken:n.oauth2.activeToken,onError:n.onErrorWebSocket,onClose:n.onCloseWebSocket(t),onMessage:n.onMessageWebSocket,onConnect:n.onConnectWebSocket,onConnectSuccess:r,onForceClose:n.onForceClose,reconnectOnError:n.connectionOptions.reconnectOnError,referenceId:t})):n.webSocketStatus===c&&r()}))},e.prototype.connect=function(e){return r(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.backoff.run(this._connect,this,[e,this.referenceIds[this.referenceIds.length-1]],!0)];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),d.default.error("Exception caught while retrying to connect: ".concat(t&&t.message),t),[3,3];case 3:return[2]}}))}))},e.prototype.disconnect=function(){d.default.debug("Disconnecting WebSocket Connection"),this.webSocket.disconnect()},e.isOffline=!1,e}();t.default=m},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e){if(void 0===e&&(e={}),!e)throw new Error("StopProcessing configuration required");this._timestamp=e.timestamp,this._topic=e.topic,this._type="stopped"}return e.topics=function(){return{speaker:"speaker"}},e.types=function(){return{stopped:"stopped"}},Object.defineProperty(e.prototype,"timestamp",{get:function(){return this._timestamp},set:function(e){this._timestamp=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topic",{get:function(){return this._topic},set:function(e){this._topic=e},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return{topic:this._topic,type:this._type,timestamp:this._timestamp}},e}();t.default=r},function(e,t,n){"use strict";(function(e){var r=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}d((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var i=n(8),o=n(9),a=n(61),d=n(0),u=n(2),c=function(){function t(e){void 0===e&&(e={}),this.apiClient=new i.ApiClient,this.apiClient.basePath=e.authBasePath||o.default.authBasePath||e.basePath||o.default.basePath,this.authenticationApi=new i.AuthenticationApi(this.apiClient),this.activeToken=null,this.updatedOn=null,this.expiresOn=null,this.expiresIn=null,e.hasOwnProperty("automaticallyRefreshToken")?this.automaticallyRefreshToken=e.automaticallyRefreshToken:this.automaticallyRefreshToken=!0,this.refreshTimeBeforeExpiry=e.refreshTimeBeforeExpiry||o.default.refreshTimeBeforeExpiry||300,this.refreshOn=null,this.refreshTimeoutRef=null,this.init=this.init.bind(this),this.processTokenResult=this.processTokenResult.bind(this),this.validateToken=this.validateToken.bind(this),this.refreshAuthToken=this.refreshAuthToken.bind(this)}return t.prototype.getApiClient=function(){return this.apiClient},t.prototype.processTokenResult=function(e){var t=this,n=e.accessToken,r=e.expiresIn;if(this.activeToken=n,u.default.trace("Token received."),this.apiClient.authentications.jwt.apiKey=this.activeToken,this.expiresIn=r,u.default.trace("Token will expire in seconds: ",this.expiresIn),this.updatedOn=d(),u.default.trace("Token updated on: ",this.updatedOn),this.expiresOn=this.updatedOn.add(this.expiresIn,"seconds"),u.default.trace("Token will expire on : ",this.expiresOn),this.automaticallyRefreshToken){this.refreshOn=this.expiresOn.subtract(this.refreshTimeBeforeExpiry,"seconds"),u.default.trace("Token will be refreshed on: ",this.refreshOn);var s=1e3*(this.expiresIn-this.refreshTimeBeforeExpiry);u.default.trace("Refresh is scheduled in millis: ",s),s<0&&(s=1e3*this.expiresIn),this.refreshTimeoutRef&&clearTimeout(this.refreshTimeoutRef),this.refreshTimeoutRef=setTimeout((function(){t.init(t.appId,t.appSecret).then((function(){u.default.trace("Token refreshed")})).catch((function(e){u.default.error(e)}))}),s)}},t.prototype.refreshAuthToken=function(){return this.validateToken(this.activeToken)},t.prototype.validateToken=function(t){var n=this;return new Promise((function(i,o){return r(n,void 0,void 0,(function(){var n,r,a,d,c,l;return s(this,(function(s){switch(s.label){case 0:if(s.trys.push([0,12,,13]),!t)return[3,10];if(!(n=JSON.parse(e.from(t.split(".")[1],"base64").toString())).exp)return[3,8];if(!((r=Math.floor(n.exp-Date.now()/1e3))<=60))return[3,7];if(!this.appId||!this.appSecret)return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.init(this.appId,this.appSecret)];case 2:return a=s.sent(),this.processTokenResult(a),i(a),[3,4];case 3:return d=s.sent(),u.default.error("Exception caught while refreshing token: ".concat(d&&d.message)),o({message:"The authentication token failed with exception: ".concat(d&&d.message)}),[3,4];case 4:return[2];case 5:o({message:"Provided token has expired"}),s.label=6;case 6:return[2];case 7:return c={accessToken:t,expiresIn:r},this.processTokenResult(c),i(c),[3,9];case 8:o({message:"Provided token is invalid"}),s.label=9;case 9:return[3,11];case 10:o({message:"Provided token was empty, undefined or null"}),s.label=11;case 11:return[3,13];case 12:return l=s.sent(),u.default.warn("Token regeneration failed with error: ".concat(l&&l.message)),i(),[3,13];case 13:return[2]}}))}))}))},t.prototype.init=function(e,t,n){var r=this;if(arguments.length<2)throw new Error("Expected number of arguments 2, detected: ".concat(arguments.length));if(!e&&!n)throw new Error("appId is required.");if(!t&&!n)throw new Error("appSecret is required.");if(!(e&&t||n))throw new Error("token or appId/appSecret pair is required");return this.appId=e,this.appSecret=t,n?this.validateToken(n):new Promise((function(n,s){u.default.trace("Initializing app with appId and appSecret",e,t);try{var o=i.Grant.constructFromObject({type:"application",appId:e,appSecret:t});r.authenticationApi.generateToken(o,(function(e,t){if(e)if(e.status&&401===e.status){var i="Combination of appId and appSecret is not valid.";u.default.info(i),s({message:i,internalError:e})}else s(a.default.getError(e));else if(t){r.processTokenResult(t);var o=t.accessToken,d=t.expiresIn;n({accessToken:o,expiresIn:d})}else s(a.default.getError())}))}catch(e){s(a.default.getError(e))}}))},t}();t.default=c}).call(this,n(27).Buffer)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r={"./af":66,"./af.js":66,"./ar":67,"./ar-dz":68,"./ar-dz.js":68,"./ar-kw":69,"./ar-kw.js":69,"./ar-ly":70,"./ar-ly.js":70,"./ar-ma":71,"./ar-ma.js":71,"./ar-sa":72,"./ar-sa.js":72,"./ar-tn":73,"./ar-tn.js":73,"./ar.js":67,"./az":74,"./az.js":74,"./be":75,"./be.js":75,"./bg":76,"./bg.js":76,"./bm":77,"./bm.js":77,"./bn":78,"./bn-bd":79,"./bn-bd.js":79,"./bn.js":78,"./bo":80,"./bo.js":80,"./br":81,"./br.js":81,"./bs":82,"./bs.js":82,"./ca":83,"./ca.js":83,"./cs":84,"./cs.js":84,"./cv":85,"./cv.js":85,"./cy":86,"./cy.js":86,"./da":87,"./da.js":87,"./de":88,"./de-at":89,"./de-at.js":89,"./de-ch":90,"./de-ch.js":90,"./de.js":88,"./dv":91,"./dv.js":91,"./el":92,"./el.js":92,"./en-au":93,"./en-au.js":93,"./en-ca":94,"./en-ca.js":94,"./en-gb":95,"./en-gb.js":95,"./en-ie":96,"./en-ie.js":96,"./en-il":97,"./en-il.js":97,"./en-in":98,"./en-in.js":98,"./en-nz":99,"./en-nz.js":99,"./en-sg":100,"./en-sg.js":100,"./eo":101,"./eo.js":101,"./es":102,"./es-do":103,"./es-do.js":103,"./es-mx":104,"./es-mx.js":104,"./es-us":105,"./es-us.js":105,"./es.js":102,"./et":106,"./et.js":106,"./eu":107,"./eu.js":107,"./fa":108,"./fa.js":108,"./fi":109,"./fi.js":109,"./fil":110,"./fil.js":110,"./fo":111,"./fo.js":111,"./fr":112,"./fr-ca":113,"./fr-ca.js":113,"./fr-ch":114,"./fr-ch.js":114,"./fr.js":112,"./fy":115,"./fy.js":115,"./ga":116,"./ga.js":116,"./gd":117,"./gd.js":117,"./gl":118,"./gl.js":118,"./gom-deva":119,"./gom-deva.js":119,"./gom-latn":120,"./gom-latn.js":120,"./gu":121,"./gu.js":121,"./he":122,"./he.js":122,"./hi":123,"./hi.js":123,"./hr":124,"./hr.js":124,"./hu":125,"./hu.js":125,"./hy-am":126,"./hy-am.js":126,"./id":127,"./id.js":127,"./is":128,"./is.js":128,"./it":129,"./it-ch":130,"./it-ch.js":130,"./it.js":129,"./ja":131,"./ja.js":131,"./jv":132,"./jv.js":132,"./ka":133,"./ka.js":133,"./kk":134,"./kk.js":134,"./km":135,"./km.js":135,"./kn":136,"./kn.js":136,"./ko":137,"./ko.js":137,"./ku":138,"./ku.js":138,"./ky":139,"./ky.js":139,"./lb":140,"./lb.js":140,"./lo":141,"./lo.js":141,"./lt":142,"./lt.js":142,"./lv":143,"./lv.js":143,"./me":144,"./me.js":144,"./mi":145,"./mi.js":145,"./mk":146,"./mk.js":146,"./ml":147,"./ml.js":147,"./mn":148,"./mn.js":148,"./mr":149,"./mr.js":149,"./ms":150,"./ms-my":151,"./ms-my.js":151,"./ms.js":150,"./mt":152,"./mt.js":152,"./my":153,"./my.js":153,"./nb":154,"./nb.js":154,"./ne":155,"./ne.js":155,"./nl":156,"./nl-be":157,"./nl-be.js":157,"./nl.js":156,"./nn":158,"./nn.js":158,"./oc-lnc":159,"./oc-lnc.js":159,"./pa-in":160,"./pa-in.js":160,"./pl":161,"./pl.js":161,"./pt":162,"./pt-br":163,"./pt-br.js":163,"./pt.js":162,"./ro":164,"./ro.js":164,"./ru":165,"./ru.js":165,"./sd":166,"./sd.js":166,"./se":167,"./se.js":167,"./si":168,"./si.js":168,"./sk":169,"./sk.js":169,"./sl":170,"./sl.js":170,"./sq":171,"./sq.js":171,"./sr":172,"./sr-cyrl":173,"./sr-cyrl.js":173,"./sr.js":172,"./ss":174,"./ss.js":174,"./sv":175,"./sv.js":175,"./sw":176,"./sw.js":176,"./ta":177,"./ta.js":177,"./te":178,"./te.js":178,"./tet":179,"./tet.js":179,"./tg":180,"./tg.js":180,"./th":181,"./th.js":181,"./tk":182,"./tk.js":182,"./tl-ph":183,"./tl-ph.js":183,"./tlh":184,"./tlh.js":184,"./tr":185,"./tr.js":185,"./tzl":186,"./tzl.js":186,"./tzm":187,"./tzm-latn":188,"./tzm-latn.js":188,"./tzm.js":187,"./ug-cn":189,"./ug-cn.js":189,"./uk":190,"./uk.js":190,"./ur":191,"./ur.js":191,"./uz":192,"./uz-latn":193,"./uz-latn.js":193,"./uz.js":192,"./vi":194,"./vi.js":194,"./x-pseudo":195,"./x-pseudo.js":195,"./yo":196,"./yo.js":196,"./zh-cn":197,"./zh-cn.js":197,"./zh-hk":198,"./zh-hk.js":198,"./zh-mo":199,"./zh-mo.js":199,"./zh-tw":200,"./zh-tw.js":200};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=251},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e){if(void 0===e&&(e={}),!e)throw new Error("SpeakerEvent configuration is required.");if(!e.type)throw new Error("'type' is required parameter for speaker event");if(!e.user)throw new Error("'user' is required parameter for speaker event");if(!e.user.userId)throw new Error("'userId' is required parameter in 'user' for speaker event");this.topic="speaker",this._type=e.type,this._user=e.user,this._timestamp=e.timestamp?new Date(e.timestamp).toISOString():e._timestamp?new Date(e._timestamp).toISOString():(new Date).toISOString()}return Object.defineProperty(e,"types",{get:function(){return{startedSpeaking:"started_speaking",stoppedSpeaking:"stopped_speaking",joined:"joined",left:"left"}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"user",{get:function(){return this._user},set:function(e){this._user=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timestamp",{get:function(){return this._timestamp},set:function(e){this._timestamp=e},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return{topic:this.topic,type:this._type,user:this._user,timestamp:this._timestamp}},e}();t.default=r}]);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var NetworkConnectivityDetector_1 = __webpack_require__(18);
var logger_1 = __importDefault(__webpack_require__(2));
var offlineEventListenerRegistered = false,
    onlineEventListenerRegistered = false;
var networkConnectivityDetector;
var registerNetworkConnectivityDetector = function registerNetworkConnectivityDetector(sdk) {
    var connectivityCheckIntervalRef;
    var logger = new logger_1["default"]();
    if (window) {
        if (!networkConnectivityDetector) {
            networkConnectivityDetector = new NetworkConnectivityDetector_1.NetworkConnectivityDetector(sdk);
        }
        if (!offlineEventListenerRegistered) {
            window.addEventListener('offline', function (e) {
                sdk.setOffline(true);
                if (connectivityCheckIntervalRef) clearInterval(connectivityCheckIntervalRef);
                logger.debug("Connection offline");
            });
            offlineEventListenerRegistered = true;
        }
        if (!onlineEventListenerRegistered) {
            window.addEventListener('online', function (e) {
                networkConnectivityDetector.onlineDetector();
            });
            onlineEventListenerRegistered = true;
        }
        networkConnectivityDetector.onlineDetector();
    }
};
exports["default"] = registerNetworkConnectivityDetector;
//# sourceMappingURL=index.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(20), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Symbl = void 0;
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(7), exports);
var symbl_1 = __importDefault(__webpack_require__(54));
exports.Symbl = symbl_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(15), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.StreamingAPIConnection = void 0;
var connection_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(7);
var events_1 = __webpack_require__(1);
var types_1 = __webpack_require__(8);
var error_1 = __webpack_require__(3);
var constants_1 = __webpack_require__(51);
var validateInsightTypes = function validateInsightTypes(insightTypes) {
    if (!Array.isArray(insightTypes)) {
        return false;
    }
    for (var _i = 0, insightTypes_1 = insightTypes; _i < insightTypes_1.length; _i++) {
        var insight = insightTypes_1[_i];
        if (!constants_1.VALID_INSIGHT_TYPES.includes(insight)) {
            return false;
        }
    }
    return true;
};
var StreamingAPIConnection = function (_super) {
    __extends(StreamingAPIConnection, _super);
    function StreamingAPIConnection(config, audioStream) {
        var _this = _super.call(this, config.id) || this;
        _this.connectionState = types_1.ConnectionState.DISCONNECTED;
        _this.processingState = types_1.ConnectionProcessingState.NOT_PROCESSING;
        _this._isProcessing = false;
        _this._isConnected = false;
        _this.restartProcessing = false;
        _this.connectionType = types_1.SymblConnectionType.STREAMING;
        _this.config = config;
        _this.config.handlers = {
            onDataReceived: _this.onDataReceived
        };
        _this.audioStream = audioStream;
        _this.onDataReceived = _this.onDataReceived.bind(_this);
        _this.sendAudio = _this.sendAudio.bind(_this);
        return _this;
    }
    StreamingAPIConnection.validateConfig = function (config) {
        var id = config.id,
            insightTypes = config.insightTypes,
            configObj = config.config,
            speaker = config.speaker,
            reconnectOnError = config.reconnectOnError,
            disconnectOnStopRequest = config.disconnectOnStopRequest,
            disconnectOnStopRequestTimeout = config.disconnectOnStopRequestTimeout,
            noConnectionTimeout = config.noConnectionTimeout;
        if (id && typeof id !== 'string') {
            throw new error_1.InvalidValueError("StreamingAPIConnectionConfig argument 'id' field should be a type string.");
        } else if (!id) {
            config.id = (0, utils_1.uuid)();
        }
        if (insightTypes) {
            if (!validateInsightTypes(insightTypes)) {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'insightTypes' should be an array of valid insightType strings - " + constants_1.VALID_INSIGHT_TYPES);
            }
        }
        if (configObj) {
            var confidenceThreshold = configObj.confidenceThreshold,
                meetingTitle = configObj.meetingTitle,
                encoding = configObj.encoding,
                sampleRateHertz = configObj.sampleRateHertz;
            if (confidenceThreshold && typeof confidenceThreshold !== 'number') {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'config.confidenceThreshold' field should be a type number.");
            }
            if (meetingTitle && typeof meetingTitle !== 'string') {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'config.meetingTitle' field should be a type string.");
            }
            if (sampleRateHertz && typeof sampleRateHertz !== 'number') {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'config.sampleRateHertz' field should be a type number.");
            }
            if (!encoding) {
                encoding = constants_1.DEFAULT_ENCODING_TYPE;
            }
            if (encoding) {
                if (typeof encoding !== 'string') {
                    throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'config.encoding' field should be a type string.");
                }
                if (!constants_1.VALID_ENCODING.includes(encoding.toUpperCase())) {
                    throw new error_1.NotSupportedAudioEncodingError("StreamingAPIConnectionConfig: 'config.encoding' only supports the following types - " + constants_1.VALID_ENCODING + ".");
                }
                if (sampleRateHertz) {
                    if (encoding.toUpperCase() === 'LINEAR16' && !constants_1.LINEAR16_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {
                        throw new error_1.NotSupportedSampleRateError("StreamingAPIConnectionConfig: For LINEAR16 encoding, supported sample rates are " + constants_1.LINEAR16_SAMPLE_RATE_HERTZ + ".");
                    }
                    if (encoding.toUpperCase() === 'OPUS' && !constants_1.OPUS_SAMPLE_RATE_HERTZ.includes(sampleRateHertz)) {
                        throw new error_1.NotSupportedSampleRateError("StreamingAPIConnectionConfig: For Opus encoding, supported sample rates are " + constants_1.OPUS_SAMPLE_RATE_HERTZ + ".");
                    }
                }
            }
        }
        if (speaker) {
            var userId = speaker.userId,
                name_1 = speaker.name;
            if (userId && typeof userId !== 'string') {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'speaker.userId' field should be a type string.");
            }
            if (name_1 && typeof name_1 !== 'string') {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'speaker.name' field should be a type string.");
            }
        }
        if (reconnectOnError && typeof reconnectOnError !== 'boolean') {
            throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'reconnectOnError' field should be a type boolean.");
        }
        if (!!disconnectOnStopRequest && typeof disconnectOnStopRequest !== 'boolean') {
            throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'disconnectOnStopRequest' field should be a type boolean.");
        }
        if (disconnectOnStopRequest === false) {
            if (typeof disconnectOnStopRequestTimeout !== 'number' || disconnectOnStopRequestTimeout < 0 || disconnectOnStopRequestTimeout > 3600) {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: Please specify 'disconnectOnStopRequestTimeout' field with a positive integer between 0 and 3600.");
            }
        }
        if (noConnectionTimeout) {
            if (typeof noConnectionTimeout !== 'number' || noConnectionTimeout < 0 || noConnectionTimeout > 3600) {
                throw new error_1.InvalidValueError("StreamingAPIConnectionConfig: 'noConnectionTimeout' optional field should be a type number.");
            }
        }
        return config;
    };
    StreamingAPIConnection.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var copyConfig, _a, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === types_1.ConnectionState.CONNECTED)) return [3, 1];
                        this.logger.warn('A connection attempt is being made on an already open connection.');
                        return [3, 5];
                    case 1:
                        _b.trys.push([1, 4,, 5]);
                        this.connectionState = types_1.ConnectionState.CONNECTING;
                        if (this.config.config && this.config.config.encoding) {
                            this.config.config.encoding = this.config.config.encoding.toUpperCase();
                        }
                        copyConfig = Object.assign({}, this.config);
                        _a = this;
                        return [4, this.sdk.createStream(copyConfig)];
                    case 2:
                        _a.stream = _b.sent();
                        this.attachAudioStream(this.audioStream);
                        return [4, this.audioStream.attachAudioDevice()];
                    case 3:
                        _b.sent();
                        this.connectionState = types_1.ConnectionState.CONNECTED;
                        this._isConnected = true;
                        window.setTimeout(function () {
                            _this.dispatchEvent(new events_1.SymblEvent('connected'));
                        }, 1);
                        return [2, this];
                    case 4:
                        e_1 = _b.sent();
                        this.connectionState = types_1.ConnectionState.TERMINATED;
                        this._isConnected = false;
                        return [3, 5];
                    case 5:
                        return [2];
                }
            });
        });
    };
    StreamingAPIConnection.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.connectionState === types_1.ConnectionState.DISCONNECTED)) return [3, 1];
                        this.logger.warn('A connection closure attempt is being made on an already closed connection.');
                        return [3, 5];
                    case 1:
                        if (!(this.connectionState === types_1.ConnectionState.TERMINATED)) return [3, 2];
                        this.logger.warn('A connection closure attempt is being made on an already terminated connection.');
                        return [3, 5];
                    case 2:
                        _a.trys.push([2, 4,, 5]);
                        this.connectionState = types_1.ConnectionState.DISCONNECTING;
                        return [4, this.stream.close()];
                    case 3:
                        _a.sent();
                        this.connectionState = types_1.ConnectionState.DISCONNECTED;
                        this._isConnected = false;
                        this.dispatchEvent(new events_1.SymblEvent('disconnected'));
                        return [3, 5];
                    case 4:
                        e_2 = _a.sent();
                        this.connectionState = types_1.ConnectionState.TERMINATED;
                        this._isConnected = false;
                        throw e_2;
                    case 5:
                        return [2];
                }
            });
        });
    };
    StreamingAPIConnection.prototype.startProcessing = function (startRequestData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, copiedData, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState !== types_1.ConnectionState.CONNECTED) {
                            throw new error_1.NoConnectionError('No connection available. You need to call `.connect()` before you can start processing.');
                        }
                        if (startRequestData) {
                            try {
                                StreamingAPIConnection.validateConfig(startRequestData);
                            } catch (e) {
                                throw e;
                            }
                        }
                        if (!(this.processingState === types_1.ConnectionProcessingState.PROCESSING || this.processingState === types_1.ConnectionProcessingState.ATTEMPTING)) return [3, 1];
                        this.logger.warn('An attempt to `startProcessing` on a connection that is already processing or has already initiated the call');
                        return [3, 5];
                    case 1:
                        _a.trys.push([1, 4,, 5]);
                        this.processingState = types_1.ConnectionProcessingState.ATTEMPTING;
                        data = startRequestData ? startRequestData : this.config;
                        copiedData = Object.assign({}, data);
                        return [4, this.audioStream.resumeAudioContext()];
                    case 2:
                        _a.sent();
                        return [4, this.stream.start(copiedData)];
                    case 3:
                        _a.sent();
                        this.processingState = types_1.ConnectionProcessingState.PROCESSING;
                        this._isProcessing = true;
                        this.dispatchEvent(new events_1.SymblEvent('processing_started'));
                        return [3, 5];
                    case 4:
                        e_3 = _a.sent();
                        throw e_3;
                    case 5:
                        return [2, this];
                }
            });
        });
    };
    StreamingAPIConnection.prototype.stopProcessing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_4, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connectionState !== types_1.ConnectionState.CONNECTED) {
                            throw new error_1.NoConnectionError("There is no established connection with the websocket.");
                        }
                        if (!(this.processingState === types_1.ConnectionProcessingState.NOT_PROCESSING || this.processingState === types_1.ConnectionProcessingState.STOPPING)) return [3, 1];
                        this.logger.warn("An attempt to `stopProcessing` on a connection that is already not processing or has already initiated the call.");
                        return [3, 5];
                    case 1:
                        _a.trys.push([1, 4,, 5]);
                        this.processingState = types_1.ConnectionProcessingState.STOPPING;
                        return [4, this.audioStream.suspendAudioContext()];
                    case 2:
                        _a.sent();
                        return [4, this.stream.stop()];
                    case 3:
                        _a.sent();
                        this.processingState = types_1.ConnectionProcessingState.NOT_PROCESSING;
                        this._isProcessing = false;
                        this.dispatchEvent(new events_1.SymblEvent('processing_stopped'));
                        return [3, 5];
                    case 4:
                        e_4 = _a.sent();
                        throw e_4;
                    case 5:
                        if (!this.restartProcessing) return [3, 9];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8,, 9]);
                        return [4, this.startProcessing()];
                    case 7:
                        _a.sent();
                        return [3, 9];
                    case 8:
                        e_5 = _a.sent();
                        throw e_5;
                    case 9:
                        return [2, this];
                }
            });
        });
    };
    StreamingAPIConnection.prototype.onAudioSourceChanged = function (audioSourceChangedEvent) {
        if (this._isConnected) {
            if (this._isProcessing && audioSourceChangedEvent.type === 'audio_source_disconnected') {
                this.restartProcessing = true;
                this.stopProcessing();
            } else if (!this._isProcessing && audioSourceChangedEvent.type === 'audio_source_connected' && this.restartProcessing) {
                this.restartProcessing = false;
                this.startProcessing();
            }
        } else {
            this.restartProcessing = false;
        }
    };
    StreamingAPIConnection.prototype.isProcessing = function () {
        return this._isProcessing;
    };
    StreamingAPIConnection.prototype.isConnected = function () {
        return this._isConnected;
    };
    StreamingAPIConnection.prototype.onDataReceived = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.emitEvents.call(this, data);
                return [2];
            });
        });
    };
    StreamingAPIConnection.prototype.sendAudio = function (audioData) {
        this.stream.sendAudio(audioData);
    };
    StreamingAPIConnection.prototype.sendJSON = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.stream.sendAudio(JSON.stringify(data));
                return [2];
            });
        });
    };
    StreamingAPIConnection.prototype.registerAudioStreamCallback = function () {
        if (this.audioStream) {
            this.audioStream.attachAudioCallback(this.sendAudio);
        }
    };
    StreamingAPIConnection.prototype.attachAudioStream = function (audioStream) {
        this.audioStream = audioStream;
        this.on('audio_source_connected', this.onAudioSourceChanged);
        this.on('audio_source_disconnected', this.onAudioSourceChanged);
        this.registerAudioStreamCallback();
    };
    StreamingAPIConnection.prototype.updateAudioStream = function (audioStream) {
        return __awaiter(this, void 0, void 0, function () {
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!audioStream) return [3, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3,, 4]);
                        return [4, this.stopProcessing()];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        e_6 = _a.sent();
                        throw e_6;
                    case 4:
                        this.attachAudioStream(audioStream);
                        return [2];
                }
            });
        });
    };
    return StreamingAPIConnection;
}(connection_1.BaseConnection);
exports.StreamingAPIConnection = StreamingAPIConnection;
//# sourceMappingURL=StreamingAPIConnection.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
exports.BaseConnection = void 0;
var events_1 = __webpack_require__(1);
var logger_1 = __importDefault(__webpack_require__(2));
var client_sdk_min_1 = __webpack_require__(10);
var network_1 = __importDefault(__webpack_require__(11));
var BaseConnection = function (_super) {
    __extends(BaseConnection, _super);
    function BaseConnection(sessionId) {
        var _this = _super.call(this) || this;
        _this.sdk = client_sdk_min_1.sdk;
        _this.logger = new logger_1["default"]();
        _this.sessionId = sessionId;
        _this.logger = new logger_1["default"]();
        _this.on = _this.on.bind(_this);
        _this.emitEvents = _this.emitEvents.bind(_this);
        _this.connect = _this.connect.bind(_this);
        _this.disconnect = _this.disconnect.bind(_this);
        _this.onDataReceived = _this.onDataReceived.bind(_this);
        _this.getSessionId = _this.getSessionId.bind(_this);
        (0, network_1["default"])(_this.sdk);
        return _this;
    }
    BaseConnection.prototype.on = function (eventName, callback) {
        this.addEventListener(eventName, function (data) {
            return callback(data.detail);
        });
    };
    BaseConnection.prototype.emitEvents = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var eventNameMapper, eventData, _i, _a, insight;
            return __generator(this, function (_b) {
                eventNameMapper = function eventNameMapper(data) {
                    var eventNameMap = {
                        "message_response": {
                            name: "message",
                            data: data.messages
                        },
                        "topic_response": {
                            name: "topic",
                            data: data.topics
                        },
                        "insight_response": {
                            name: null,
                            data: data
                        },
                        "message": {
                            name: data.message ? data.message.type : null,
                            data: data
                        },
                        "tracker_response": {
                            name: "tracker",
                            data: data.trackers
                        }
                    };
                    var eventType = eventNameMap[data.type];
                    if (eventType.name === "recognition_result") {
                        eventType.name = "speech_recognition";
                    }
                    return eventType;
                };
                eventData = eventNameMapper(data);
                if (eventData.name) {
                    this.dispatchEvent(new events_1.SymblEvent(eventData.name, eventData.data.message ? eventData.data.message : eventData.data));
                } else if (!eventData.name && data.type === "insight_response") {
                    for (_i = 0, _a = data.insights; _i < _a.length; _i++) {
                        insight = _a[_i];
                        this.dispatchEvent(new events_1.SymblEvent(insight.type, insight));
                    }
                } else {
                    this.logger.warn("The data had no type", data);
                }
                return [2];
            });
        });
    };
    BaseConnection.prototype.connect = function () {
        throw new TypeError("Function not implemented!");
    };
    BaseConnection.prototype.disconnect = function () {
        throw new TypeError("Function not implemented!");
    };
    BaseConnection.prototype.onDataReceived = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new TypeError("Function not implemented!");
            });
        });
    };
    BaseConnection.prototype.getSessionId = function () {
        return this.sessionId;
    };
    return BaseConnection;
}(events_1.DelegatedEventTarget);
exports.BaseConnection = BaseConnection;
//# sourceMappingURL=BaseConnection.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.NetworkEvent = exports.SymblEvent = exports.DelegatedEventTarget = void 0;
var DelegatedEventTarget = function () {
    function DelegatedEventTarget() {
        this.delegate = document.createDocumentFragment();
    }
    DelegatedEventTarget.prototype.addEventListener = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.delegate.addEventListener.apply(this.delegate, args);
    };
    DelegatedEventTarget.prototype.dispatchEvent = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.delegate.dispatchEvent.apply(this.delegate, args);
    };
    DelegatedEventTarget.prototype.removeEventListener = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.delegate.removeEventListener.apply(this.delegate, args);
    };
    return DelegatedEventTarget;
}();
exports.DelegatedEventTarget = DelegatedEventTarget;
var SymblEvent = function () {
    function SymblEvent(eventType, data) {
        var detail = {
            "detail": data
        };
        return new CustomEvent(eventType, detail);
    }
    return SymblEvent;
}();
exports.SymblEvent = SymblEvent;
var NetworkEvent = function (_super) {
    __extends(NetworkEvent, _super);
    function NetworkEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NetworkEvent;
}(SymblEvent);
exports.NetworkEvent = NetworkEvent;
//# sourceMappingURL=SymblEvent.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NetworkConnectivityDetector = void 0;
var logger_1 = __importDefault(__webpack_require__(2));
var events_1 = __webpack_require__(1);
var NetworkConnectivityDetector = function (_super) {
    __extends(NetworkConnectivityDetector, _super);
    function NetworkConnectivityDetector(sdk) {
        var _this = _super.call(this) || this;
        _this.logger = new logger_1["default"]();
        _this.sdk = sdk;
        _this.sdk.setNetworkConnectivityDispatcher(_this);
        return _this;
    }
    NetworkConnectivityDetector.prototype.forceCheckNetworkConnectivity = function () {
        this.onlineDetector();
    };
    NetworkConnectivityDetector.prototype.onlineDetector = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connectivityCheckIntervalRef;
            var _this = this;
            return __generator(this, function (_a) {
                this.maxRetries = 1200;
                this.checkInterval = 3000;
                if (this.connectivityCheckIntervalRef) {
                    clearInterval(this.connectivityCheckIntervalRef);
                }
                connectivityCheckIntervalRef = setInterval(function () {
                    return __awaiter(_this, void 0, void 0, function () {
                        var response, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(this.maxRetries > 0)) return [3, 5];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3,, 4]);
                                    return [4, fetch("https://symbl-sdk-cdn-bucket.storage.googleapis.com")];
                                case 2:
                                    response = _a.sent();
                                    if (response.ok) {
                                        this.dispatchEvent(new events_1.NetworkEvent("offline", false));
                                        if (this.connectivityCheckIntervalRef) {
                                            clearInterval(this.connectivityCheckIntervalRef);
                                        }
                                    } else {
                                        this.dispatchEvent(new events_1.NetworkEvent("offline", true));
                                        this.maxRetries -= 1;
                                    }
                                    return [3, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    this.dispatchEvent(new events_1.NetworkEvent("offline", true));
                                    this.maxRetries -= 1;
                                    return [3, 4];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    this.logger.warn("Max retries to check for active internet connection exceeded! Please refresh the page when the internet is back online.");
                                    if (connectivityCheckIntervalRef) {
                                        clearInterval(connectivityCheckIntervalRef);
                                    }
                                    _a.label = 6;
                                case 6:
                                    return [2];
                            }
                        });
                    });
                }, this.checkInterval);
                return [2];
            });
        });
    };
    return NetworkConnectivityDetector;
}(events_1.DelegatedEventTarget);
exports.NetworkConnectivityDetector = NetworkConnectivityDetector;
//# sourceMappingURL=NetworkConnectivityDetector.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ConnectionFactory = void 0;
var audio_1 = __webpack_require__(12);
var api_1 = __webpack_require__(9);
var error_1 = __webpack_require__(3);
var AudioContext = window.AudioContext || window.webkitAudioContext;
var ConnectionFactory = function () {
    function ConnectionFactory() {}
    ConnectionFactory.prototype.instantiateConnection = function (connectionType, config, audioStream) {
        return __awaiter(this, void 0, void 0, function () {
            var ConnectionClass, connection, encoding, symblConfig, opusConfig;
            return __generator(this, function (_a) {
                switch (connectionType) {
                    case "streaming":
                        api_1.StreamingAPIConnection.validateConfig(config);
                        if (!audioStream) {
                            try {
                                encoding = void 0;
                                symblConfig = config;
                                if (symblConfig.config && symblConfig.config.encoding) {
                                    encoding = symblConfig.config.encoding.toLowerCase();
                                } else {
                                    encoding = "linear16";
                                }
                                switch (encoding) {
                                    case "opus":
                                        opusConfig = {
                                            "encoderComplexity": 6,
                                            "encoderFrameSize": 20,
                                            "encoderSampleRate": 48000,
                                            "maxFramesPerPage": 40,
                                            "numberOfChannels": 1,
                                            "rawOpus": true,
                                            "streamPages": true
                                        };
                                        audioStream = new audio_1.OpusAudioStream(null, opusConfig);
                                        break;
                                    case "linear16":
                                    default:
                                        audioStream = new audio_1.PCMAudioStream();
                                }
                            } catch (e) {
                                throw e;
                            }
                        }
                        try {
                            connection = new api_1.StreamingAPIConnection(config, audioStream);
                            return [2, connection];
                        } catch (e) {
                            throw e;
                        }
                    case "subscribe":
                        try {
                            connection = new api_1.SubscribeAPIConnection(config);
                            return [2, connection];
                        } catch (e) {
                            throw e;
                        }
                    default:
                        throw new error_1.InvalidValueError("`connectionType` must be one of 'streaming' or 'subscribe'.");
                }
                return [2];
            });
        });
    };
    return ConnectionFactory;
}();
exports.ConnectionFactory = ConnectionFactory;
//# sourceMappingURL=ConnectionFactory.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.InvalidAudioInputDeviceError = void 0;
var symbl_1 = __webpack_require__(0);
var InvalidAudioInputDeviceError = function (_super) {
    __extends(InvalidAudioInputDeviceError, _super);
    function InvalidAudioInputDeviceError(message) {
        return _super.call(this, message, "InvalidAudioInputDeviceError") || this;
    }
    return InvalidAudioInputDeviceError;
}(symbl_1.SymblError);
exports.InvalidAudioInputDeviceError = InvalidAudioInputDeviceError;
//# sourceMappingURL=InvalidAudioInputDeviceError.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var SymblError_1 = __importDefault(__webpack_require__(6));
var InvalidCredentialsError = function (_super) {
    __extends(InvalidCredentialsError, _super);
    function InvalidCredentialsError(message) {
        return _super.call(this, message, "InvalidCredentialsError") || this;
    }
    return InvalidCredentialsError;
}(SymblError_1["default"]);
exports["default"] = InvalidCredentialsError;
//# sourceMappingURL=InvalidCredentialsError.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var SymblError_1 = __importDefault(__webpack_require__(6));
var AccessTokenExpiredError = function (_super) {
    __extends(AccessTokenExpiredError, _super);
    function AccessTokenExpiredError(message) {
        return _super.call(this, message, "AccessTokenExpiredError") || this;
    }
    return AccessTokenExpiredError;
}(SymblError_1["default"]);
exports["default"] = AccessTokenExpiredError;
//# sourceMappingURL=AccessTokenExpiredError.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.InvalidAudioElementError = void 0;
var symbl_1 = __webpack_require__(0);
var InvalidAudioElementError = function (_super) {
    __extends(InvalidAudioElementError, _super);
    function InvalidAudioElementError(message) {
        return _super.call(this, message, "InvalidAudioElementError") || this;
    }
    return InvalidAudioElementError;
}(symbl_1.SymblError);
exports.InvalidAudioElementError = InvalidAudioElementError;
//# sourceMappingURL=InvalidAudioElementError.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.InvalidDeviceOperationError = void 0;
var symbl_1 = __webpack_require__(0);
var InvalidDeviceOperationError = function (_super) {
    __extends(InvalidDeviceOperationError, _super);
    function InvalidDeviceOperationError(message) {
        return _super.call(this, message, "InvalidDeviceOperationError") || this;
    }
    return InvalidDeviceOperationError;
}(symbl_1.SymblError);
exports.InvalidDeviceOperationError = InvalidDeviceOperationError;
//# sourceMappingURL=InvalidDeviceOperationError.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.NoAudioInputDeviceDetectedError = void 0;
var symbl_1 = __webpack_require__(0);
var NoAudioInputDeviceDetectedError = function (_super) {
    __extends(NoAudioInputDeviceDetectedError, _super);
    function NoAudioInputDeviceDetectedError(message) {
        return _super.call(this, message, "NoAudioInputDeviceDetectedError") || this;
    }
    return NoAudioInputDeviceDetectedError;
}(symbl_1.SymblError);
exports.NoAudioInputDeviceDetectedError = NoAudioInputDeviceDetectedError;
//# sourceMappingURL=NoAudioInputDeviceDetectedError.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.InvalidValueError = void 0;
var symbl_1 = __webpack_require__(0);
var InvalidValueError = function (_super) {
    __extends(InvalidValueError, _super);
    function InvalidValueError(message) {
        return _super.call(this, message, "InvalidValueError") || this;
    }
    return InvalidValueError;
}(symbl_1.SymblError);
exports.InvalidValueError = InvalidValueError;
//# sourceMappingURL=InvalidValueError.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.NotSupportedAudioEncodingError = void 0;
var symbl_1 = __webpack_require__(0);
var NotSupportedAudioEncodingError = function (_super) {
    __extends(NotSupportedAudioEncodingError, _super);
    function NotSupportedAudioEncodingError(message) {
        return _super.call(this, message, "NotSupportedAudioEncodingError") || this;
    }
    return NotSupportedAudioEncodingError;
}(symbl_1.SymblError);
exports.NotSupportedAudioEncodingError = NotSupportedAudioEncodingError;
//# sourceMappingURL=NotSupportedAudioEncodingError.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.NotSupportedSampleRateError = void 0;
var symbl_1 = __webpack_require__(0);
var NotSupportedSampleRateError = function (_super) {
    __extends(NotSupportedSampleRateError, _super);
    function NotSupportedSampleRateError(message) {
        return _super.call(this, message, "NotSupportedSampleRateError") || this;
    }
    return NotSupportedSampleRateError;
}(symbl_1.SymblError);
exports.NotSupportedSampleRateError = NotSupportedSampleRateError;
//# sourceMappingURL=NotSupportedSampleRateError.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.RequiredParameterAbsentError = void 0;
var symbl_1 = __webpack_require__(0);
var RequiredParameterAbsentError = function (_super) {
    __extends(RequiredParameterAbsentError, _super);
    function RequiredParameterAbsentError(message) {
        return _super.call(this, message, "RequiredParameterAbsentError") || this;
    }
    return RequiredParameterAbsentError;
}(symbl_1.SymblError);
exports.RequiredParameterAbsentError = RequiredParameterAbsentError;
//# sourceMappingURL=RequiredParameterAbsentError.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.SessionIDNotUniqueError = void 0;
var symbl_1 = __webpack_require__(0);
var SessionIDNotUniqueError = function (_super) {
    __extends(SessionIDNotUniqueError, _super);
    function SessionIDNotUniqueError(message) {
        return _super.call(this, message, "SessionIDNotUniqueError") || this;
    }
    return SessionIDNotUniqueError;
}(symbl_1.SymblError);
exports.SessionIDNotUniqueError = SessionIDNotUniqueError;
//# sourceMappingURL=SessionIDNotUniqueError.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(39), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(36), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.HttpError = void 0;
var symbl_1 = __webpack_require__(0);
var HttpError = function (_super) {
    __extends(HttpError, _super);
    function HttpError(message) {
        return _super.call(this, message, "HttpError") || this;
    }
    return HttpError;
}(symbl_1.SymblError);
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(38), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.HandshakeError = void 0;
var symbl_1 = __webpack_require__(0);
var HandshakeError = function (_super) {
    __extends(HandshakeError, _super);
    function HandshakeError(message) {
        return _super.call(this, message, "HandshakeError") || this;
    }
    return HandshakeError;
}(symbl_1.SymblError);
exports.HandshakeError = HandshakeError;
//# sourceMappingURL=HandshakeError.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
exports.NoConnectionError = void 0;
var symbl_1 = __webpack_require__(0);
var NoConnectionError = function (_super) {
    __extends(NoConnectionError, _super);
    function NoConnectionError(message) {
        return _super.call(this, message, "NoConnectionError") || this;
    }
    return NoConnectionError;
}(symbl_1.SymblError);
exports.NoConnectionError = NoConnectionError;
//# sourceMappingURL=NoConnectionError.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PCMAudioStream = void 0;
var AudioStream_1 = __webpack_require__(5);
var events_1 = __webpack_require__(1);
var PCMAudioStream = function (_super) {
    __extends(PCMAudioStream, _super);
    function PCMAudioStream(sourceNode) {
        return _super.call(this, sourceNode) || this;
    }
    PCMAudioStream.prototype.processAudio = function (audioEvent) {
        var inputData = audioEvent.inputBuffer.getChannelData(0);
        var targetBuffer = new Int16Array(inputData.length);
        for (var index = inputData.length; index > 0; index -= 1) {
            targetBuffer[index] = 32767 * Math.min(1, inputData[index]);
        }
        try {
            _super.prototype.onProcessedAudio.call(this, targetBuffer.buffer);
        } catch (err) {
            throw err;
        }
    };
    PCMAudioStream.prototype.attachAudioProcessor = function () {
        if (this.processorNode) {
            this.sourceNode.connect(this.gainNode);
            this.gainNode.connect(this.processorNode);
            this.processorNode.connect(this.audioContext.destination);
            this.processorNode.onaudioprocess = this.processAudio;
        } else {
            console.log('audio processor not attached');
        }
    };
    PCMAudioStream.prototype.attachAudioSourceElement = function (audioSourceDomElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.attachAudioSourceElement.call(this, audioSourceDomElement);
                this.attachAudioProcessor();
                return [2];
            });
        });
    };
    PCMAudioStream.prototype.detachAudioSourceElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.detachAudioSourceElement.call(this);
                return [2];
            });
        });
    };
    PCMAudioStream.prototype.updateAudioSourceElement = function (audioSourceDomElement) {
        _super.prototype.updateAudioSourceElement.call(this, audioSourceDomElement);
        this.attachAudioProcessor();
    };
    PCMAudioStream.prototype.attachAudioDevice = function (deviceId, mediaStream) {
        return __awaiter(this, void 0, void 0, function () {
            var event;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, _super.prototype.attachAudioDevice.call(this, deviceId, mediaStream)];
                    case 1:
                        _a.sent();
                        this.attachAudioProcessor();
                        event = new events_1.SymblEvent("audio_source_connected", this.audioContext.sampleRate);
                        this.dispatchEvent(event);
                        return [2];
                }
            });
        });
    };
    PCMAudioStream.prototype.detachAudioDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.detachAudioDevice.call(this);
                return [2];
            });
        });
    };
    PCMAudioStream.prototype.updateAudioDevice = function (deviceId, mediaStream) {
        _super.prototype.updateAudioDevice.call(this, deviceId, mediaStream);
    };
    return PCMAudioStream;
}(AudioStream_1.AudioStream);
exports.PCMAudioStream = PCMAudioStream;
//# sourceMappingURL=PCMAudioStream.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OpusAudioStream = void 0;
var AudioStream_1 = __webpack_require__(5);
var symbl_opus_encdec_1 = __webpack_require__(42);
var OpusAudioStream = function (_super) {
    __extends(OpusAudioStream, _super);
    function OpusAudioStream(sourceNode, config) {
        var _this = _super.call(this, sourceNode) || this;
        _this.mediaStreamPromise.then(function () {
            _this.config = config;
            _this.config.sourceNode = _this.sourceNode;
            _this.opusEncoder = new symbl_opus_encdec_1.Recorder(_this.config);
        });
        _this.processAudio = _this.processAudio.bind(_this);
        _this.attachAudioProcessor = _this.attachAudioProcessor.bind(_this);
        _this.attachAudioSourceElement = _this.attachAudioSourceElement.bind(_this);
        _this.attachAudioDevice = _this.attachAudioDevice.bind(_this);
        _this.attachAudioCallback = _this.attachAudioCallback.bind(_this);
        return _this;
    }
    OpusAudioStream.prototype.processAudio = function (audioData) {
        _super.prototype.onProcessedAudio.call(this, audioData);
    };
    OpusAudioStream.prototype.attachAudioProcessor = function (reInitialise) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (reInitialise) {
                            this.config.sourceNode = this.audioContext.createMediaStreamSource(this.mediaStream);
                            this.opusEncoder = new symbl_opus_encdec_1.Recorder(this.config);
                        }
                        if (!this.opusEncoder) return [3, 2];
                        return [4, this.opusEncoder.start()];
                    case 1:
                        _a.sent();
                        this.opusEncoder.ondataavailable = this.processAudio;
                        _a.label = 2;
                    case 2:
                        return [2];
                }
            });
        });
    };
    OpusAudioStream.prototype.attachAudioSourceElement = function (audioSourceDomElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.attachAudioSourceElement.call(this, audioSourceDomElement);
                        return [4, this.attachAudioProcessor(true)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OpusAudioStream.prototype.detachAudioSourceElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.detachAudioSourceElement.call(this);
                return [2];
            });
        });
    };
    OpusAudioStream.prototype.updateAudioSourceElement = function (audioSourceDomElement) {
        _super.prototype.updateAudioSourceElement.call(this, audioSourceDomElement);
    };
    OpusAudioStream.prototype.attachAudioDevice = function (deviceId, mediaStream) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, _super.prototype.attachAudioDevice.call(this, deviceId, mediaStream)];
                    case 1:
                        _a.sent();
                        return [4, this.attachAudioProcessor(true)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OpusAudioStream.prototype.detachAudioDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.detachAudioDevice.call(this);
                return [2];
            });
        });
    };
    OpusAudioStream.prototype.updateAudioDevice = function (deviceId, mediaStream) {
        _super.prototype.updateAudioDevice.call(this, deviceId, mediaStream);
    };
    OpusAudioStream.prototype.attachAudioCallback = function (audioCallback) {
        _super.prototype.attachAudioCallback.call(this, audioCallback);
    };
    return OpusAudioStream;
}(AudioStream_1.AudioStream);
exports.OpusAudioStream = OpusAudioStream;
//# sourceMappingURL=OpusAudioStream.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioContext = window.AudioContext || window.webkitAudioContext;

var getWorkerURL = function(url) {
  const content = `importScripts("${url}");`;
  return URL.createObjectURL(new Blob([ content ], { type: "text/javascript" }));
}

// Constructor
var Recorder = function( config = {} ){

  if ( !Recorder.isRecordingSupported() ) {
    throw new Error("Recording is not supported in this browser");
  }

  this.state = "inactive";
  this.config = Object.assign({
    bufferLength: 4096,
    encoderApplication: 2049,
    encoderFrameSize: 20,
    encoderPath: 'https://symbl-sdk-cdn-bucket.storage.googleapis.com/js/ga/symbl-opus-encdec/0.1.2/dist/encoderWorker.min.js',
    encoderSampleRate: 48000,
    maxFramesPerPage: 40,
    mediaTrackConstraints: true,
    monitorGain: 0,
    numberOfChannels: 1,
    recordingGain: 1,
    resampleQuality: 3,
    streamPages: false,
    wavBitDepth: 16,
    sourceNode: { context: null },
  }, config);

  this.encodedSamplePosition = 0;
  this.initAudioContext();
  this.encoderWorkerUrl = getWorkerURL(this.config.encoderPath);
  this.initialize = this.initWorklet().then(() => this.initEncoder());
};


// Static Methods
Recorder.isRecordingSupported = function(){
  const getUserMediaSupported = window.navigator && window.navigator.mediaDevices && window.navigator.mediaDevices.getUserMedia;
  return AudioContext && getUserMediaSupported && window.WebAssembly;
};

Recorder.version = '0.1.2';


// Instance Methods
Recorder.prototype.clearStream = function(){
  if ( this.stream ){

    if ( this.stream.getTracks ) {
      this.stream.getTracks().forEach(track => track.stop());
    }

    else {
      this.stream.stop();
    }
  }
};

Recorder.prototype.close = function() {
  this.monitorGainNode.disconnect();
  this.recordingGainNode.disconnect();

  if (this.sourceNode) {
    this.sourceNode.disconnect();
  }

  this.clearStream();

  if (this.encoder) {
    this.encoderNode.disconnect();
    this.encoder.postMessage({ command: "close" });
  }

  if ( !this.config.sourceNode.context ){
    return this.audioContext.close();
  }

  URL.revokeObjectURL(this.encoderWorkerUrl);

  return Promise.resolve();
}

Recorder.prototype.encodeBuffers = function( inputBuffer ){
  if ( this.state === "recording" ) {
    var buffers = [];
    for ( var i = 0; i < inputBuffer.numberOfChannels; i++ ) {
      buffers[i] = inputBuffer.getChannelData(i);
    }

    this.encoder.postMessage({
      command: "encode",
      buffers: buffers
    });
  }
};

Recorder.prototype.initAudioContext = function(){
  this.audioContext = this.config.sourceNode.context ? this.config.sourceNode.context : new AudioContext();

  this.monitorGainNode = this.audioContext.createGain();
  this.setMonitorGain( this.config.monitorGain );

  this.recordingGainNode = this.audioContext.createGain();
  this.setRecordingGain( this.config.recordingGain );
};

Recorder.prototype.initEncoder = function() {

  if (typeof registerProcessor === 'function') {
    this.encoderNode = new AudioWorkletNode(this.audioContext, 'encoder-worklet', { numberOfOutputs: 0 });
    this.encoder = this.encoderNode.port;
  }

  else {
    // Skip the first buffer
    // this.encodeBuffers = () => delete this.encodeBuffers;

    this.encoderNode = this.audioContext.createScriptProcessor( this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels );
    this.encoderNode.onaudioprocess = ({ inputBuffer }) => this.encodeBuffers( inputBuffer );
    this.encoderNode.connect( this.audioContext.destination ); // Requires connection to destination to process audio
    this.encoder = new window.Worker(this.encoderWorkerUrl);
  }
};

Recorder.prototype.initSourceNode = function(){
  if ( this.config.sourceNode.context ) {
    this.sourceNode = this.config.sourceNode;
    return Promise.resolve();
  }

  return window.navigator.mediaDevices.getUserMedia({ audio : this.config.mediaTrackConstraints }).then( stream => {
    this.stream = stream;
    this.sourceNode = this.audioContext.createMediaStreamSource( stream );
  });
};

Recorder.prototype.initWorker = function(){
  var onPage = (this.config.streamPages ? this.streamPage : this.storePage).bind(this);

  this.recordedPages = [];
  this.totalLength = 0;

//  console.log('Returning initWorker promise, streamPages:', this.config.streamPages);
  return new Promise(resolve => {
    var callback = ({ data }) => {
      switch( data['message'] ){
        case 'ready':
          resolve();
          break;
        case 'page':
          this.encodedSamplePosition = data['samplePosition'];
          onPage(data['page']);
          break;
        case 'done':
          this.encoder.removeEventListener( "message", callback );
          this.finish();
          break;
        default:
          if (data['page']) {
            onPage(data['page']);
          }
      }
    };

    this.encoder.addEventListener( "message", callback );

    // must call start for messagePort messages
    if( this.encoder.start ) {
      this.encoder.start()
    }

    // exclude sourceNode
    const {sourceNode, ...config} = this.config;

    this.encoder.postMessage( Object.assign({
      command: 'init',
      originalSampleRate: this.audioContext.sampleRate,
      wavSampleRate: this.audioContext.sampleRate
    }, config));
  });
};

Recorder.prototype.initWorklet = function() {
  if (typeof registerProcessor === 'function') {
    return this.audioContext.audioWorklet.addModule(this.encoderWorkerUrl);
  }

  return Promise.resolve();
}

Recorder.prototype.pause = function( flush ) {
  if ( this.state === "recording" ) {

    this.state = "paused";
    this.recordingGainNode.disconnect();

    if ( flush && this.config.streamPages ) {
      return new Promise(resolve => {

        var callback = ({ data }) => {
          if ( data["message"] === 'flushed' ) {
            this.encoder.removeEventListener( "message", callback );
            this.onpause();
            resolve();
          }
        };
        this.encoder.addEventListener( "message", callback );

        // must call start for messagePort messages
        if ( this.encoder.start ) {
          this.encoder.start()
        }

        this.encoder.postMessage( { command: "flush" } );
      });
    }
    this.onpause();
    return Promise.resolve();
  }
};

Recorder.prototype.resume = function() {
  if ( this.state === "paused" ) {
    this.state = "recording";
    this.recordingGainNode.connect(this.encoderNode);
    this.onresume();
  }
};

Recorder.prototype.setRecordingGain = function( gain ){
  this.config.recordingGain = gain;

  if ( this.recordingGainNode && this.audioContext ) {
    this.recordingGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);
  }
};

Recorder.prototype.setMonitorGain = function( gain ){
  this.config.monitorGain = gain;

  if ( this.monitorGainNode && this.audioContext ) {
    this.monitorGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);
  }
};

Recorder.prototype.start = function(){
  if ( this.state === "inactive" ) {
    this.state = 'loading';
    this.encodedSamplePosition = 0;

    return this.audioContext.resume()
      .then(() => this.initialize)
      .then(() => Promise.all([this.initSourceNode(), this.initWorker()]))
      .then(() => {
        this.state = "recording";
        this.encoder.postMessage({ command: 'getHeaderPages' });
        this.sourceNode.connect( this.monitorGainNode );
        this.sourceNode.connect( this.recordingGainNode );
        this.monitorGainNode.connect( this.audioContext.destination );
        this.recordingGainNode.connect( this.encoderNode );
        this.onstart();
      })
      .catch(error => {
        console.log(`Setting state to inactive`);
        this.state = 'inactive';
        throw error;
      });
  }
  return Promise.resolve();
};

Recorder.prototype.stop = function(){
  if ( this.state === "paused" || this.state === "recording" ) {
    this.state = "inactive";

    // macOS and iOS requires the source to remain connected (in case stopped while paused)
    this.recordingGainNode.connect( this.encoderNode );

    this.monitorGainNode.disconnect();
    this.clearStream();

    return new Promise(resolve => {
      var callback = ({ data }) => {
        if ( data["message"] === 'done' ) {
          this.encoder.removeEventListener( "message", callback );
          resolve();
        }
      };

      this.encoder.addEventListener( "message", callback );

      // must call start for messagePort messages
      if( this.encoder.start ) {
        this.encoder.start()
      }

      this.encoder.postMessage({ command: "done" });
    });
  }
  return Promise.resolve();
};

Recorder.prototype.storePage = function( page ) {
  this.recordedPages.push( page );
  this.totalLength += page.length;
};

Recorder.prototype.streamPage = function( page ) {
  this.ondataavailable( page );
};

Recorder.prototype.finish = function() {
  if( !this.config.streamPages ) {
    var outputData = new Uint8Array( this.totalLength );
    this.recordedPages.reduce( function( offset, page ){
      outputData.set( page, offset );
      return offset + page.length;
    }, 0);

    this.ondataavailable( outputData );
  }
  this.onstop();
};


// Callback Handlers
Recorder.prototype.ondataavailable = function(){};
Recorder.prototype.onpause = function(){};
Recorder.prototype.onresume = function(){};
Recorder.prototype.onstart = function(){};
Recorder.prototype.onstop = function(){};


if(true){
  exports.Recorder = Recorder;
} else {}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
;
//# sourceMappingURL=index.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ConnectionProcessingState = exports.ConnectionState = exports.SymblConnectionType = void 0;
var SymblConnectionType;
(function (SymblConnectionType) {
    SymblConnectionType["STREAMING"] = "streaming";
    SymblConnectionType["SUBSCRIBE"] = "subscribe";
})(SymblConnectionType || (SymblConnectionType = {}));
exports.SymblConnectionType = SymblConnectionType;
;
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["CONNECTING"] = 0] = "CONNECTING";
    ConnectionState[ConnectionState["CONNECTED"] = 1] = "CONNECTED";
    ConnectionState[ConnectionState["DISCONNECTING"] = 2] = "DISCONNECTING";
    ConnectionState[ConnectionState["DISCONNECTED"] = 3] = "DISCONNECTED";
    ConnectionState[ConnectionState["TERMINATED"] = 4] = "TERMINATED";
})(ConnectionState || (ConnectionState = {}));
exports.ConnectionState = ConnectionState;
;
var ConnectionProcessingState;
(function (ConnectionProcessingState) {
    ConnectionProcessingState[ConnectionProcessingState["PROCESSING"] = 0] = "PROCESSING";
    ConnectionProcessingState[ConnectionProcessingState["ATTEMPTING"] = 1] = "ATTEMPTING";
    ConnectionProcessingState[ConnectionProcessingState["NOT_PROCESSING"] = 2] = "NOT_PROCESSING";
    ConnectionProcessingState[ConnectionProcessingState["STOPPING"] = 3] = "STOPPING";
})(ConnectionProcessingState || (ConnectionProcessingState = {}));
exports.ConnectionProcessingState = ConnectionProcessingState;
//# sourceMappingURL=index.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//# sourceMappingURL=types.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TimeUnit = void 0;
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["MS"] = "ms";
    TimeUnit["S"] = "s";
    TimeUnit["M"] = "m";
})(TimeUnit || (TimeUnit = {}));
exports.TimeUnit = TimeUnit;
//# sourceMappingURL=TimeUnit.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//# sourceMappingURL=handlers.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//# sourceMappingURL=index.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//# sourceMappingURL=index.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PASSWORD_REGEX = exports.OPUS_SAMPLE_RATE_HERTZ = exports.LINEAR16_SAMPLE_RATE_HERTZ = exports.VALID_ENCODING = exports.VALID_INSIGHT_TYPES = exports.DEFAULT_ENCODING_TYPE = exports.DEFAULT_SAMPLE_RATE_HERTZ = void 0;
exports.DEFAULT_SAMPLE_RATE_HERTZ = 16000;
exports.DEFAULT_ENCODING_TYPE = 'LINEAR16';
exports.VALID_INSIGHT_TYPES = ['action_item', 'question', 'follow_up'];
exports.VALID_ENCODING = ['LINEAR16', 'OPUS'];
exports.LINEAR16_SAMPLE_RATE_HERTZ = [8000, 16000, 24000, 44100, 48000];
exports.OPUS_SAMPLE_RATE_HERTZ = [8000, 16000, 24000, 48000];
exports.PASSWORD_REGEX = /^[a-zA-Z0-9-]{6,64}$/;
//# sourceMappingURL=index.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function get() {
            return m[k];
        } });
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = undefined && undefined.__exportStar || function (m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
};
exports.__esModule = true;
__exportStar(__webpack_require__(53), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SubscribeAPIConnection = void 0;
var connection_1 = __webpack_require__(4);
var events_1 = __webpack_require__(1);
var types_1 = __webpack_require__(8);
var SubscribeAPIConnection = function (_super) {
    __extends(SubscribeAPIConnection, _super);
    function SubscribeAPIConnection(config) {
        var _this = _super.call(this, config.id) || this;
        _this.connectionState = types_1.ConnectionState.DISCONNECTED;
        _this._isConnected = false;
        _this.connectionType = types_1.SymblConnectionType.SUBSCRIBE;
        _this.config = config;
        _this.onDataReceived = _this.onDataReceived.bind(_this);
        return _this;
    }
    SubscribeAPIConnection.validateConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, config];
            });
        });
    };
    SubscribeAPIConnection.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === types_1.ConnectionState.CONNECTED)) return [3, 1];
                        this.logger.warn("A connection attempt is being made on an already open connection.");
                        return [3, 4];
                    case 1:
                        _b.trys.push([1, 3,, 4]);
                        this.connectionState = types_1.ConnectionState.CONNECTING;
                        _a = this;
                        return [4, this.sdk.subscribeToStream(this.config.sessionId || this.config.id, {
                            handlers: {
                                onMessage: this.onDataReceived
                            }
                        })];
                    case 2:
                        _a.stream = _b.sent();
                        this.connectionState = types_1.ConnectionState.CONNECTED;
                        this._isConnected = true;
                        window.setTimeout(function () {
                            _this.dispatchEvent(new events_1.SymblEvent("subscribed"));
                        }, 1);
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.connectionState = types_1.ConnectionState.TERMINATED;
                        this._isConnected = false;
                        throw e_1;
                    case 4:
                        return [2];
                }
            });
        });
    };
    SubscribeAPIConnection.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.connectionState === types_1.ConnectionState.DISCONNECTED)) return [3, 1];
                        this.logger.warn("A connection closure attempt is being made on an already closed connection.");
                        return [3, 5];
                    case 1:
                        if (!(this.connectionState === types_1.ConnectionState.TERMINATED)) return [3, 2];
                        this.logger.warn("A connection closure attempt is being made on an already terminated connection.");
                        return [3, 5];
                    case 2:
                        _a.trys.push([2, 4,, 5]);
                        this.connectionState = types_1.ConnectionState.DISCONNECTING;
                        return [4, this.stream.close()];
                    case 3:
                        _a.sent();
                        this.connectionState = types_1.ConnectionState.DISCONNECTED;
                        this._isConnected = false;
                        this.dispatchEvent(new events_1.SymblEvent('unsubscribed'));
                        return [3, 5];
                    case 4:
                        e_2 = _a.sent();
                        throw e_2;
                    case 5:
                        return [2];
                }
            });
        });
    };
    SubscribeAPIConnection.prototype.isConnected = function () {
        return this._isConnected;
    };
    SubscribeAPIConnection.prototype.onDataReceived = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, _super.prototype.emitEvents.call(this, data)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return SubscribeAPIConnection;
}(connection_1.BaseConnection);
exports.SubscribeAPIConnection = SubscribeAPIConnection;
//# sourceMappingURL=SubscribeAPIConnection.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var error_1 = __webpack_require__(3);
var types_1 = __webpack_require__(8);
var connection_1 = __webpack_require__(4);
var logger_1 = __importDefault(__webpack_require__(2));
var configs_1 = __webpack_require__(60);
var client_sdk_min_1 = __webpack_require__(10);
var utils_1 = __webpack_require__(7);
var network_1 = __importDefault(__webpack_require__(11));
var Symbl = function () {
    function Symbl(symblConfig) {
        this.sdk = client_sdk_min_1.sdk;
        if (symblConfig) {
            try {
                this._validateSymblConfig(symblConfig);
            } catch (e) {
                throw e;
            }
        }
        this.symblConfig = symblConfig;
        this.logger = new logger_1["default"]();
        this._validateSymblConfig = this._validateSymblConfig.bind(this);
        this.init = this.init.bind(this);
        this.createConnection = this.createConnection.bind(this);
        this.createAndStartNewConnection = this.createAndStartNewConnection.bind(this);
        this.subscribeToConnection = this.subscribeToConnection.bind(this);
        (0, network_1["default"])(this.sdk);
    }
    Symbl.prototype._validateSymblConfig = function (symblConfig) {
        if (!symblConfig) {
            throw new error_1.InvalidCredentialsError("No credentials were passed");
        }
        var appId = symblConfig.appId,
            accessToken = symblConfig.accessToken,
            appSecret = symblConfig.appSecret,
            logLevel = symblConfig.logLevel;
        if (logLevel && configs_1.VALID_LOG_LEVELS.indexOf(logLevel) === -1) {}
        var alphaNumericRegex = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
        if (!appId && !appSecret && !accessToken) {
            throw new error_1.InvalidCredentialsError("Please provide an AppID & AppSecret or an AccessToken");
        }
        if (accessToken && (appId || appSecret)) {
            throw new error_1.InvalidCredentialsError("You must use `accessToken` or an `appId`/`appSecret` pair separately.");
        }
        if (!appId && !accessToken) {
            throw new error_1.InvalidCredentialsError("AppID is missing");
        }
        if (appId && (appId.length !== 64 || !appId.match(alphaNumericRegex))) {
            throw new error_1.InvalidCredentialsError("AppID is not valid");
        }
        if (appId && !appSecret && !accessToken) {
            throw new error_1.InvalidCredentialsError("AppSecret is missing");
        }
        if (appSecret && (appSecret.length !== 128 || !appSecret.match(alphaNumericRegex))) {
            throw new error_1.InvalidCredentialsError("AppSecret is not valid");
        }
        if (accessToken) {
            var tokenPayload = JSON.parse(Buffer.from(accessToken.split(".")[1], "base64").toString());
            var expiry = Math.floor(tokenPayload.exp - Date.now() / 1000);
            if (expiry <= 0) {
                throw new error_1.AccessTokenExpiredError("Provided token as expired");
            }
        }
        return true;
    };
    Symbl.prototype.init = function (symblConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var initConfig, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!symblConfig && this.symblConfig) {
                            symblConfig = this.symblConfig;
                        }
                        try {
                            this._validateSymblConfig(symblConfig);
                        } catch (e) {
                            throw e;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3,, 4]);
                        initConfig = {};
                        if (symblConfig.accessToken) {
                            initConfig.accessToken = symblConfig.accessToken;
                        } else {
                            initConfig.appId = symblConfig.appId;
                            initConfig.appSecret = symblConfig.appSecret;
                        }
                        initConfig.basePath = symblConfig.basePath || "https://api.symbl.ai";
                        console.log("this.sdk", symblConfig);
                        return [4, this.sdk.init(symblConfig)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("error", err_1);
                        throw new error_1.HttpError(err_1.message);
                    case 4:
                        return [2];
                }
            });
        });
    };
    Symbl.prototype.createConnection = function (options, audioStream) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.id) {} else {
                            options.id = (0, utils_1.uuid)();
                        }
                        if (!options.config) {
                            options.config = {};
                        }
                        if (!options.config.sampleRateHertz) {
                            options.config.sampleRateHertz = 48000;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4,, 5]);
                        return [4, new connection_1.ConnectionFactory().instantiateConnection(types_1.SymblConnectionType.STREAMING, options, audioStream)];
                    case 2:
                        connection = _a.sent();
                        return [4, connection.connect()];
                    case 3:
                        _a.sent();
                        return [2, connection];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        throw e_1;
                    case 5:
                        return [2];
                }
            });
        });
    };
    Symbl.prototype.createAndStartNewConnection = function (options, audioStream) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3,, 4]);
                        return [4, this.createConnection(options, audioStream)];
                    case 1:
                        connection = _a.sent();
                        return [4, connection.startProcessing()];
                    case 2:
                        _a.sent();
                        return [2, connection];
                    case 3:
                        e_2 = _a.sent();
                        throw e_2;
                    case 4:
                        return [2];
                }
            });
        });
    };
    Symbl.prototype.subscribeToConnection = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!sessionId) {
                            throw new error_1.RequiredParameterAbsentError("sessionId is required.");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4,, 5]);
                        return [4, new connection_1.ConnectionFactory().instantiateConnection(types_1.SymblConnectionType.SUBSCRIBE, { sessionId: sessionId })];
                    case 2:
                        connection = _a.sent();
                        return [4, connection.connect()];
                    case 3:
                        _a.sent();
                        return [2, connection];
                    case 4:
                        e_3 = _a.sent();
                        throw e_3;
                    case 5:
                        return [2];
                }
            });
        });
    };
    Symbl.wait = function (time, unit) {
        if (unit === void 0) {
            unit = types_1.TimeUnit.MS;
        }
        var timeout;
        switch (unit) {
            case types_1.TimeUnit.S:
                timeout = time * 1000;
                break;
            case types_1.TimeUnit.M:
                timeout = time * 60000;
                break;
            case types_1.TimeUnit.MS:
                timeout = time;
                break;
            default:
                throw new error_1.InvalidValueError("Please provide a valid time unit of 'ms', 's', or 'm'");
        }
        if (timeout < 0) {
            throw new error_1.InvalidValueError("`time` must be >= 0.");
        }
        return new Promise(function (res) {
            setTimeout(function () {
                res();
            }, timeout);
        });
    };
    return Symbl;
}();
exports["default"] = Symbl;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(55).Buffer))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(57)
var ieee754 = __webpack_require__(58)
var isArray = __webpack_require__(59)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(56)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VALID_LOG_LEVELS = void 0;
exports.VALID_LOG_LEVELS = ['error', 'warn', 'debug', 'info', 'log', 'trace'];
//# sourceMappingURL=configs.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "v1", function() { return /* reexport */ esm_browser_v1; });
__webpack_require__.d(__webpack_exports__, "v3", function() { return /* reexport */ esm_browser_v3; });
__webpack_require__.d(__webpack_exports__, "v4", function() { return /* reexport */ esm_browser_v4; });
__webpack_require__.d(__webpack_exports__, "v5", function() { return /* reexport */ esm_browser_v5; });
__webpack_require__.d(__webpack_exports__, "NIL", function() { return /* reexport */ nil; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* reexport */ esm_browser_version; });
__webpack_require__.d(__webpack_exports__, "validate", function() { return /* reexport */ esm_browser_validate; });
__webpack_require__.d(__webpack_exports__, "stringify", function() { return /* reexport */ esm_browser_stringify; });
__webpack_require__.d(__webpack_exports__, "parse", function() { return /* reexport */ esm_browser_parse; });

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_browser_stringify(b);
}

/* harmony default export */ var esm_browser_v1 = (v1);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/parse.js


function parse(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ var esm_browser_parse = (parse);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ var v35 = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_browser_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/md5.js
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ var esm_browser_md5 = (md5);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v3.js


var v3 = v35('v3', 0x30, esm_browser_md5);
/* harmony default export */ var esm_browser_v3 = (v3);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/sha1.js
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ var esm_browser_sha1 = (sha1);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v5.js


var v5 = v35('v5', 0x50, esm_browser_sha1);
/* harmony default export */ var esm_browser_v5 = (v5);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/nil.js
/* harmony default export */ var nil = ('00000000-0000-0000-0000-000000000000');
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/version.js


function version_version(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ var esm_browser_version = (version_version);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/index.js










/***/ })
/******/ ]);