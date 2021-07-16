const EventsManager = require("./EventsManager");

test('adds 1 + 2 to equal 3', () => {
	const manager = new EventsManager();
	expect(manager.sum(1, 2)).toBe(3);
});