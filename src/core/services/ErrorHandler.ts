export class ConnectionError extends Error {
	constructor(message) {
		super(message);
		this.name = "ConnectionError";
	}

}

export class HttpError extends Error {
	constructor(message) {
		super(message);
		this.name = "HttpError";
	}

}

export class NullError extends Error {
	constructor(message) {
		super(message);
		this.name = "NullError";
	}

}

export class ConfigError extends Error {
	constructor(message) {
		super(message);
		this.name = "ConfigError";
	}

}
