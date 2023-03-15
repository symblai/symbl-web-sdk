

export const SYMBL_DEFAULTS = {
    "AUTH_REGEX": /^[\da-z]{64,128}$/i,
    "DEFAULT_ENCODING_TYPE": "LINEAR16",
    "DEFAULT_SAMPLE_RATE_HERTZ": 16000,
    "DISCONNECT_TIMEOUT_MAX": 1800,
    "DISCONNECT_TIMEOUT_MIN": 0,
    "ID_REGEX": /^[a-zA-Z0-9-]{6,64}$/,
    "LINEAR16_SAMPLE_RATE_HERTZ": [
        8000,
        16000,
        24000,
        44100,
        48000
    ],
    "NO_CONNECTION_TIMEOUT_MAX": 1800,
    "NO_CONNECTION_TIMEOUT_MIN": 0,
    "OPUS_SAMPLE_RATE_HERTZ": [
        8000,
        16000,
        24000,
        48000
    ],
    "SYMBL_BASE_PATH": "https://api.symbl.ai",
    "VALID_ENCODING": [
        "LINEAR16",
        "OPUS"
    ],
    "VALID_INSIGHT_TYPES": [
        "action_item",
        "question",
        "follow_up"
    ],
    "VALID_STREAMINGAPICONFIGOPTIONS_KEYS": [
        "confidenceThreshold",
        "meetingTitle",
        "encoding",
        "sampleRateHertz",
        "languageCode",
        "timezoneOffset",
        "sentiment",
        "trackers"
    ],
    "VALID_STREAMINGAPICONNECTIONCONFIG_KEYS": [
        "id",
        "insightTypes",
        "config",
        "speaker",
        "handlers",
        "reconnectOnError",
        "disconnectOnStopRequest",
        "disconnectOnStopRequestTimeout",
        "noConnectionTimeout",
        "trackers",
        "customVocabulary"
    ],
    "VALID_SUBSCRIPEAPICONNECTIONCONFIG_KEYS": [
        "id",
        "sessionId"
    ]
};
