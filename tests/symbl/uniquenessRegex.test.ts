import { yourConstant } from "../../src/constants";

test(
    "Should pass",
    async () => {
        const regex = new RegExp(
            yourConstant,
            "u"
        );
        const validSessionId = regex.test("abc123");

 		expect(validSessionId).toBeTruthy();
	}
);


test(
    "Should fail",
    async () => {
        const regex = new RegExp(
            yourConstant,
            "u"
        );
        const validSessionId = regex.test("abc");

 		expect(validSessionId).toBeFalsy();
	}
);
