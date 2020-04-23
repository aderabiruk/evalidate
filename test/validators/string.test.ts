import string from '../../dist/types/string';
import { string_type_error_message } from '../../dist/utils/errors';
import { handleStringValidation } from '../../dist/validators/string';
import { string_alphanumeric_error_message, string_url_error_message } from '../../src/messages/string';
import { string_required_error_message, string_email_error_message, string_equal_error_message, string_maxlength_error_message, string_minlength_error_message, string_in_error_message, string_credit_card_error_message, string_fqdn_error_message, string_isbn_error_message } from '../../dist/messages/string';

describe("String Validator", () => {
    
    describe("handleStringValidation", () => {
        it("Should return error if value is not a string", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[0], [])).toContainEqual({
                field: "field", message: string_type_error_message("${{}}")
            });
        });

        it("Should return error if value is null and string is required", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[1], null)).toContainEqual({
                field: "field", message: string_required_error_message()
            });
        });

        it("Shouldn't return error if value is not null and string is required", () => {
            let validator = string().required();
            expect(handleStringValidation("field", validator.validators[1], 'null')).toEqual([]);
        });

        it("Should return error if invalid alphanumeric is provided", () => {
            let validator = string().alphanumeric();
            expect(handleStringValidation("field", validator.validators[1], '!@#$%^*(()')).toContainEqual({
                field: "field", message: string_alphanumeric_error_message()
            });
        });

        it("Shouldn't return error if valid alphanumeric is provided", () => {
            let validator = string().alphanumeric();
            expect(handleStringValidation("field", validator.validators[1], 'aderabiruk')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().alphanumeric();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if invalid credit_card is provided", () => {
            let validator = string().credit_card();
            expect(handleStringValidation("field", validator.validators[1], '!@#$%^*(()')).toContainEqual({
                field: "field", message: string_credit_card_error_message()
            });
        });

        it("Shouldn't return error if valid credit_card is provided", () => {
            let validator = string().credit_card();
            expect(handleStringValidation("field", validator.validators[1], '4768740555228001')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().credit_card();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if invalid email is provided", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_email_error_message()
            });
        });

        it("Shouldn't return error if valid email is provided", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[1], 'aderabiruk@gmail.com')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().email();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if invalid fqdn is provided", () => {
            let validator = string().fqdn();
            expect(handleStringValidation("field", validator.validators[1], 'invalid@')).toContainEqual({
                field: "field", message: string_fqdn_error_message()
            });
        });

        it("Shouldn't return error if valid fqdn is provided", () => {
            let validator = string().fqdn();
            expect(handleStringValidation("field", validator.validators[1], 'www.google.com')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().fqdn();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if value matches required value", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_equal_error_message()
            });
        });

        it("Shouldn't return error if value matches required value", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[1], '12345')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().equals("12345");
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if value is not in provided array", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_in_error_message()
            });
        });

        it("Shouldn't return error if value is in provided array", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[1], 'Stopped')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().in(["Running", "Stopped"]);
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if invalid isbn is provided", () => {
            let validator = string().isbn();
            expect(handleStringValidation("field", validator.validators[1], 'invalid')).toContainEqual({
                field: "field", message: string_isbn_error_message()
            });
        });

        it("Shouldn't return error if valid isbn is provided", () => {
            let validator = string().isbn();
            expect(handleStringValidation("field", validator.validators[1], '9781234567897')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().isbn();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if length is greater than maxlength", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[1], 'invalid-email')).toContainEqual({
                field: "field", message: string_maxlength_error_message(5)
            });
        });
        
        it("Should return error if length is less than maxlength", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[1], '12345')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().maxlength(5);
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if length is less than minlength", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[1], 'a')).toContainEqual({
                field: "field", message: string_minlength_error_message(5)
            });
        });
        
        it("Should return error if length is greater than minlength", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[1], '12345')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().minlength(5);
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

        it("Should return error if invalid url is provided", () => {
            let validator = string().url();
            expect(handleStringValidation("field", validator.validators[1], 'invalid')).toContainEqual({
                field: "field", message: string_url_error_message()
            });
        });

        it("Shouldn't return error if valid url is provided", () => {
            let validator = string().url();
            expect(handleStringValidation("field", validator.validators[1], 'http://www.google.com')).toEqual([]);
        });

        it("Shouldn't return error if input isn't required and value is not passed", () => {
            let validator = string().url();
            expect(handleStringValidation("field", validator.validators[1], null)).toEqual([]);
        });

    });

});