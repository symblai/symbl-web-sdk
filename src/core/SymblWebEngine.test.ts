import SymblWebEngine from "./SymblWebEngine";

test('Logger has methods from JS SDK', () => {
    let engine = new SymblWebEngine();
    expect(engine.sdk.logger.hasOwnProperty('getLevel'));
    expect(engine.sdk.logger.hasOwnProperty('setLevel'));
    expect(engine.sdk.logger.hasOwnProperty('setDefaultLevel'));
    expect(engine.sdk.logger.hasOwnProperty('trace'));
    expect(engine.sdk.logger.hasOwnProperty('debug'));
    expect(engine.sdk.logger.hasOwnProperty('log'));
    expect(engine.sdk.logger.hasOwnProperty('info'));
    expect(engine.sdk.logger.hasOwnProperty('warn'));
    expect(engine.sdk.logger.hasOwnProperty('error'));
})

test('ErrorHandler has methods from JS SDK', () => {
    let engine = new SymblWebEngine();
    expect(engine.sdk.errorHandler.hasOwnProperty('getError'));
})