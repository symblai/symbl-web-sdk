import { ID_REGEX } from "../../src/constants";
import { v4 } from "uuid";
export const uuid = v4;

// random id creator
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

test(
    "Six alphanumeric characters plus the hyphen should pass",
    async () => {
        const regex = new RegExp(
            ID_REGEX,
            "u"
        );
        const validSessionId = regex.test("abc12-");

 		expect(validSessionId).toBeTruthy();
	}
);

test(
    "Sixty-four alphanumeric characters plus the hyphen should pass",
    async () => {
        const regex = new RegExp(
            ID_REGEX,
            "u"
        );
        const validSessionId = regex.test(makeid(64));

 		expect(validSessionId).toBeTruthy();
	}
);

test(
    "UUID test should pass",
    async () => {
        const regex = new RegExp(
            ID_REGEX,
            "u"
        );
        const validSessionId = regex.test(uuid());

        expect (validSessionId).toBeTruthy();
    }
)


test(
    "Too few characters should fail",
    async () => {
        const regex = new RegExp(
            ID_REGEX,
            "u"
        );
        const validSessionId = regex.test("abc");

 		expect(validSessionId).toBeFalsy();
	}
);


test(
    "Too many characters should fail",
    async () => {
        const regex = new RegExp(
            ID_REGEX,
            "u"
        );
        const validSessionId = regex.test(makeid(65));

 		expect(validSessionId).toBeFalsy();
	}
);

test(
    "Any characters used other than alphanumeric or hyphen should fail",
    async () => {
        const regex = new RegExp(
            ID_REGEX,
            "u"
        );
        const validSessionId = regex.test("a-b$cd");

 		expect(validSessionId).toBeFalsy();
	}
);