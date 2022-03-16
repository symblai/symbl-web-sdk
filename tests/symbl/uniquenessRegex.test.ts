import { PASSWORD_REGEX } from "../../src/constants";
import {v4 } from "uuid";
export const uuid = v4;

test(
    "Should pass",
    async () => {
        const regex = new RegExp(
            PASSWORD_REGEX,
            "u"
        );
        const validSessionId = regex.test("abc123-");

 		expect(validSessionId).toBeTruthy();
	}
);

test(
    "UUID test",
    async () => {
        const regex = new RegExp(
            PASSWORD_REGEX,
            "u"
        );
        const validSessionId = regex.test(uuid());

        expect (validSessionId).toBeTruthy();
    }
)


test(
    "Should fail",
    async () => {
        const regex = new RegExp(
            PASSWORD_REGEX,
            "u"
        );
        const validSessionId = regex.test("abc");

 		expect(validSessionId).toBeFalsy();
	}
);
