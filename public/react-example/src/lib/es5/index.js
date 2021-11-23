"use strict";

var Streaming = require("./streaming.js");
var Job = require("./job.js");
var Conversation = require("./conversation.js");
var TextApi = require('./async.js');
module.exports = function () {
    function Symbl(token) {
        if (!token) {
            throw new Error('SDK is not initialized or failed during initialization.');
        }
        this.token = token;
        this.text = new TextApi(token);
        var options = {};
        this.realtimeRequest = new Streaming(token, options);
    }
    return Symbl;
}();
//# sourceMappingURL=index.js.map