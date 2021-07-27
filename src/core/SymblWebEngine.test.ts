import SymblWebEngine from "./SymblWebEngine";

test('Logger has methods from JS SDK', () => {
    let engine = new SymblWebEngine();
    expect(engine.logger.hasOwnProperty('getLevel'));
    expect(engine.logger.hasOwnProperty('setLevel'));
    expect(engine.logger.hasOwnProperty('setDefaultLevel'));
    expect(engine.logger.hasOwnProperty('trace'));
    expect(engine.logger.hasOwnProperty('debug'));
    expect(engine.logger.hasOwnProperty('log'));
    expect(engine.logger.hasOwnProperty('info'));
    expect(engine.logger.hasOwnProperty('warn'));
    expect(engine.logger.hasOwnProperty('error'));
})

test('ErrorHandler has methods from JS SDK', () => {
    let engine = new SymblWebEngine();
    expect(engine.logger.hasOwnProperty('getError'));
})