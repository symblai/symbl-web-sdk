export class ConnectionFactory {
    instantiateConnection(connectionType: SymblConnectionType, config: ConnectionConfig, audioStream?: AudioStream) {
        // Validate the `connectionType` to be a valid enum present in the `ConnectionType` enum
        // Validate the `config` against the specific type of `Connection` by calling `validateConfig` and return the instance if the config is valid
        // If the validation fails for `connectionType`, throw `InvalidValueError`
        // Validation of the `config` should be done in the respective class ingesting it. Appropriate error should be bubbled in case of failure in validation.
        // Return the instantiated `Connection` type
    }
}