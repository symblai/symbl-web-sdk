export namespace ErrorHandler {
	class ConnectionError extends Error {
		constructor(message) {
			super(message);
			this.name = "ConnectionError";
		}

	}

	class HttpError extends Error {
		constructor(message) {
			super(message);
			this.name = "HttpError";
		}

	}

	class NullError extends Error {
		constructor(message) {
			super(message);
			this.name = "NullError";
		}

	}

	class ConfigError extends Error {
		constructor(message) {
			super(message);
			this.name = "ConfigError";
		}

	}
}