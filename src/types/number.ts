import AbstractValidator from "./abstract";
import { isString, isNumber, isArray } from "../utils/validators";
import { NUMBER_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { string_type_error_message, number_type_error_message, array_type_error_message } from "../utils/errors";
import { number_equal_error_message, number_in_error_message, number_integer_error_message, number_max_error_message, number_min_error_message, number_required_error_message, number_latitude_error_message, number_longitude_error_message } from "../messages/number";

/**
 * Number Validator Class
 * 
 * @method equal
 * @method integer
 * @method max
 * @method min
 * @method required
 */
export class NumberValidator extends AbstractValidator {

    constructor() {
        super();
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.TYPE, message: number_type_error_message("${{}}")});
    }

    /**
     * Equals Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    equals(value: number, message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.EQUAL, value: value, message: message || number_equal_error_message()});
        return this;
    }

    /**
     * In Validator
     * 
     * @param {Array} value 
     * @param {String} message 
     */
    in(value: any[], message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isArray(value)) {
            throw new Error(array_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.IN, value: value, message: message || number_in_error_message()});
        return this;
    }

    /**
     * Integer Validator
     * 
     * @param {String} message 
     */
    integer(message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.INTEGER, message: message || number_integer_error_message()});
        return this;
    }

    /**
     * Latitude Validator
     * 
     * @param {String} message 
     */
    latitude(message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.LATITUDE, message: message || number_latitude_error_message()});
        return this;
    }

    /**
     * Longitude Validator
     * 
     * @param {String} message 
     */
    longitude(message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.LONGITUDE, message: message || number_longitude_error_message()});
        return this;
    }

    /**
     * Maximum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    max(value: number, message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.MAX, value: value, message: message || number_max_error_message(value)});
        return this;
    }

    /**
     * Minimum Validator
     * 
     * @param {Number} value 
     * @param {String} message 
     */
    min(value: number, message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        if (!isNumber(value)) {
            throw new Error(number_type_error_message("value"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.MIN, value: value, message: message || number_min_error_message(value)});
        return this;
    }

    /**
     * Required Validator
     * 
     * @param {String} message 
     */
    required(message?: string): NumberValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.NUMBER, type: NUMBER_VALIDATOR_TYPES.REQUIRED, message: message || number_required_error_message()});
        return this;
    }
}

export default (): NumberValidator => {
    return new NumberValidator();
};

