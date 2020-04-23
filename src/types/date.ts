import AbstractValidator from "./abstract";
import { isString, isDate } from "../utils/validators";
import { DATE_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { string_type_error_message, date_type_error_message } from "../utils/errors";
import { date_after_error_message, date_before_error_message, date_equal_error_message, date_required_error_message } from "../messages/date";

/**
 * Date Validator Class
 * 
 * @method after
 * @method before
 * @method equals
 * @method required
 */
export class DateValidator extends AbstractValidator {

    constructor() {
        super();
        this.validators.push({validator: TYPES.DATE, type: DATE_VALIDATOR_TYPES.TYPE, message: date_type_error_message("${{}}")});
    }

    /**
     * After Validator
     * 
     * @param {Date} value 
     * @param {String} message 
     */
    after(value: any, message?: string): DateValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!value || !isDate(value)) {
            throw new Error(date_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.DATE, type: DATE_VALIDATOR_TYPES.AFTER, message: message || date_after_error_message(value), value: value});
        return this;
    }

    /**
     * Before Validator
     * 
     * @param {Date} value 
     * @param {String} message 
     */
    before(value: any, message?: string): DateValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!value || !isDate(value)) {
            throw new Error(date_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.DATE, type: DATE_VALIDATOR_TYPES.BEFORE, value: value, message: message || date_before_error_message(value)});
        return this;
    }

    /**
     * Equal Validator
     * 
     * @param {Date} value 
     * @param {String} message 
     */
    equals(value: any, message?: string): DateValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!value || !isDate(value)) {
            throw new Error(date_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.DATE, type: DATE_VALIDATOR_TYPES.EQUAL, value: value, message: message || date_equal_error_message()});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message?: string): DateValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.DATE, type: DATE_VALIDATOR_TYPES.REQUIRED, message: message || date_required_error_message()});
        return this;
    }
}

export default (): DateValidator => {
    return new DateValidator();
};

