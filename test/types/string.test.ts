import String from '../../dist/types/string';
import { string_type_error_message } from '../../dist/utils/errors';
import { STRING_VALIDATOR_TYPES, TYPES } from '../../dist/utils/constants';
import { string_alphanumeric_error_message, string_credit_card_error_message, string_fqdn_error_message, string_isbn_error_message, string_url_error_message, string_numeric_error_message } from '../../src/messages/string';
import { string_email_error_message, string_equal_error_message, string_in_error_message, string_maxlength_error_message, string_minlength_error_message, string_required_error_message } from '../../dist/messages/string';

describe("StringValidator", () => {

    describe("alphanumeric", () => {
        it("Should add alphanumeric validator without message", () => {
            let validator = String();
            validator.alphanumeric();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_alphanumeric_error_message(), type: STRING_VALIDATOR_TYPES.ALPHANUMERIC});
        });

        it("Should add alphanumeric validator with message", () => {
            let validator = String();
            validator.alphanumeric("Alphanumeric Error!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Alphanumeric Error!", type: STRING_VALIDATOR_TYPES.ALPHANUMERIC});
        });
    });

    describe("credit_card", () => {
        it("Should add credit_card validator without message", () => {
            let validator = String();
            validator.credit_card();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_credit_card_error_message(), type: STRING_VALIDATOR_TYPES.CREDIT_CARD});
        });

        it("Should add credit_card validator with message", () => {
            let validator = String();
            validator.credit_card("Credit Card Error!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Credit Card Error!", type: STRING_VALIDATOR_TYPES.CREDIT_CARD});
        });
    });
    
    describe("email", () => {
        it("Should add email validator without message", () => {
            let validator = String();
            validator.email();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_email_error_message(), type: STRING_VALIDATOR_TYPES.EMAIL});
        });

        it("Should add email validator with message", () => {
            let validator = String();
            validator.email("Incorrect Email Address!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Incorrect Email Address!", type: STRING_VALIDATOR_TYPES.EMAIL});
        });
    });

    describe("equals", () => {
        it("Should add equals validator without message", () => {
            let validator = String();
            validator.equals("VALUE");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_equal_error_message(), value: "VALUE", type: STRING_VALIDATOR_TYPES.EQUAL});
        });

        it("Should add equals validator with message", () => {
            let validator = String();
            validator.equals("VALUE", "Equal Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Equal Error Message!", value: "VALUE", type: STRING_VALIDATOR_TYPES.EQUAL});
        });
    });

    describe("fqdn", () => {
        it("Should add fqdn validator without message", () => {
            let validator = String();
            validator.fqdn();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_fqdn_error_message(), type: STRING_VALIDATOR_TYPES.FQDN});
        });

        it("Should add fqdn validator with message", () => {
            let validator = String();
            validator.fqdn("Incorrect FQDN!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Incorrect FQDN!", type: STRING_VALIDATOR_TYPES.FQDN});
        });
    });

    describe("in", () => {
        it("Should add in validator without message", () => {
            let validator = String();
            validator.in(["A", "B"]);

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_in_error_message(), value: ["A", "B"], type: STRING_VALIDATOR_TYPES.IN});
        });

        it("Should add in validator with message", () => {
            let validator = String();
            validator.in(["A", "B"], "Equal Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Equal Error Message!", value: ["A", "B"], type: STRING_VALIDATOR_TYPES.IN});
        });
    });

    describe("isbn", () => {
        it("Should add isbn validator without message", () => {
            let validator = String();
            validator.isbn();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_isbn_error_message(), type: STRING_VALIDATOR_TYPES.ISBN});
        });

        it("Should add isbn validator with message", () => {
            let validator = String();
            validator.isbn("Incorrect ISBN!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Incorrect ISBN!", type: STRING_VALIDATOR_TYPES.ISBN});
        });
    });

    describe("maxlength", () => {
        it("Should add maxlength validator without message", () => {
            let validator = String();
            validator.maxlength(10);

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_maxlength_error_message(10), value: 10, type: STRING_VALIDATOR_TYPES.MAXLENGTH});
        });

        it("Should add maxlength validator with message", () => {
            let validator = String();
            validator.maxlength(10, "Max Length Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Max Length Error Message!", value: 10, type: STRING_VALIDATOR_TYPES.MAXLENGTH});
        });
    });

    describe("minlength", () => {
        it("Should add minlength validator without message", () => {
            let validator = String();
            validator.minlength(10);

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_minlength_error_message(10), value: 10, type: STRING_VALIDATOR_TYPES.MINLENGTH});
        });

        it("Should add minlength validator with message", () => {
            let validator = String();
            validator.minlength(10, "Max Length Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Max Length Error Message!", value: 10, type: STRING_VALIDATOR_TYPES.MINLENGTH});
        });
    });

    describe("numeric", () => {
        it("Should add numeric validator without message", () => {
            let validator = String();
            validator.numeric();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_numeric_error_message(), type: STRING_VALIDATOR_TYPES.NUMERIC});
        });

        it("Should add numeric validator with message", () => {
            let validator = String();
            validator.numeric("Numeric Error!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Numeric Error!", type: STRING_VALIDATOR_TYPES.NUMERIC});
        });
    });

    describe("required", () => {
        it("Should add required validator without message", () => {
            let validator = String();
            validator.required();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_required_error_message(), type: STRING_VALIDATOR_TYPES.REQUIRED});
        });

        it("Should add required validator with message", () => {
            let validator = String();
            validator.required("Required Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Required Error Message!", type: STRING_VALIDATOR_TYPES.REQUIRED});
        });
    });

    describe("url", () => {
        it("Should add url validator without message", () => {
            let validator = String();
            validator.url();

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_url_error_message(), type: STRING_VALIDATOR_TYPES.URL});
        });

        it("Should add url validator with message", () => {
            let validator = String();
            validator.url("Incorrect URL!");

            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: string_type_error_message("${{}}"), type: STRING_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.STRING, message: "Incorrect URL!", type: STRING_VALIDATOR_TYPES.URL});
        });
    });

});