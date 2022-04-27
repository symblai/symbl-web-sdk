import { DelegatedEventTarget } from '../../src/events';

test(
    "DelegatedEventTarget.on -- successfully attach callback to event listener",
    async () => {
        const delegatedEventTarget = new DelegatedEventTarget();
        const mockCallback = (data) => {
            return data;
        };

        const spyEventList = jest.spyOn(delegatedEventTarget, "addEventListener");

        await delegatedEventTarget.on("connected", mockCallback);

        expect(spyEventList).toBeCalled();

    }
);

test(
    "DelegatedEventTarget.off -- successfully attach callback to event listener",
    async () => {
        const delegatedEventTarget = new DelegatedEventTarget();
        const mockCallback = (data) => {
            return data;
        };

        const spyEventList = jest.spyOn(delegatedEventTarget, "removeEventListener");

        await delegatedEventTarget.off("connected", mockCallback);

        expect(spyEventList).toBeCalled();

    }
);