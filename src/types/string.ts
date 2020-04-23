import AbstractValidator from "./abstract";
import { isString, isNumber, isArray } from "../utils/validators";
import { STRING_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { string_type_error_message, number_type_error_message, array_type_error_message } from "../utils/errors";
import { string_email_error_message, string_in_error_message, string_maxlength_error_message, string_minlength_error_message, string_required_error_message, string_equal_error_message, string_alphanumeric_error_message, string_credit_card_error_message, string_fqdn_error_message, string_isbn_error_message, string_url_error_message } from "../messages/string";

/**
 * String Validator Class
 * 
 * @method alphanumeric
 * @method credit_card
 * @method email
 * @method equal
 * @method fqdn
 * @method in
 * @method isbn
 * @method maxlength
 * @method minlength
 * @method required
 * @method url
 */
export class StringValidator extends AbstractValidator {

    constructor() {
        super();
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.TYPE, message: string_type_error_message("${{}}")});
    }

    /**
     * Alphanumeric Validator
     * 
     * @param {String} message 
     */
    alphanumeric(message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.ALPHANUMERIC, message: message || string_alphanumeric_error_message()});
        return this;
    }

    /**
     * Credit Card Validator
     * 
     * @param {String} message 
     */
    credit_card(message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.CREDIT_CARD, message: message || string_credit_card_error_message()});
        return this;
    }

    /**
     * Email Validator
     * 
     * @param {String} message 
     */
    email(message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.EMAIL, message: message || string_email_error_message()});
        return this;
    }

    /**
     * Equal Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    equals(value: any, message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isString(value)) {
            throw new Error(string_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.EQUAL, value: value, message: message || string_equal_error_message()});
        return this;
    }

    /**
     * FQDN Validator
     * 
     * @param {String} message 
     */
    fqdn(message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.FQDN, message: message || string_fqdn_error_message()});
        return this;
    }


    /**
     * In Validator
     * 
     * @param {Array} value 
     * @param {String} message 
     */
    in(value: any[], message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isArray(value)) {
            throw new Error(array_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.IN, value: value, message: message || string_in_error_message()});
        return this;
    }

    /**
     * ISBN Validator
     * 
     * @param {String} message 
     */
    isbn(message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.ISBN, message: message || string_isbn_error_message()});
        return this;
    }


    /**
     * Maxlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    maxlength(value: any, message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.MAXLENGTH, value: value, message: message || string_maxlength_error_message(value)});
        return this;
    }

    /**
     * Minlength Validator
     * 
     * @param {String} value 
     * @param {String} message 
     */
    minlength(value: any, message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.MINLENGTH, value: value, message: message || string_minlength_error_message(value)});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message?: string): StringValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.REQUIRED, message: message || string_required_error_message()});
        return this;
    }

    /**
     * URL Validator
     * 
     * @param {String} message 
     */
    url(message?: string) {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.STRING, type: STRING_VALIDATOR_TYPES.URL, message: message || string_url_error_message()});
        return this;
    }
}

export default (): StringValidator => {
    return new StringValidator();
};

