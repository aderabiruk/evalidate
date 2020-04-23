import AbstractValidator from "./abstract";
import { isString } from "../utils/validators";
import { BOOLEAN_VALIDATOR_TYPES, TYPES } from "../utils/constants";
import { string_type_error_message, boolean_type_error_message } from "../utils/errors";
import { boolean_equal_error_message, boolean_required_error_message } from "../messages/boolean";

/**
 * Boolean Validator Class
 * 
 * @method equals
 * @method required
 */
export class BooleanValidator extends AbstractValidator {

    constructor() {
        super();
        this.validators.push({validator: TYPES.BOOLEAN, type: BOOLEAN_VALIDATOR_TYPES.TYPE, message: boolean_type_error_message("${{}}")});
    }

    /**
     * Equals Validator
     * 
     * @param {Boolean} value 
     * @param {String} message 
     */
    equals(value: boolean, message?: string): BooleanValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.BOOLEAN, type: BOOLEAN_VALIDATOR_TYPES.EQUAL, value: value, message: message || boolean_equal_error_message()});
        return this;
    }

    /**
     * Reuired Validator
     * 
     * @param {String} message 
     */
    required(message?: string): BooleanValidator {
        if (message && !isString(message)) {
            throw new Error(string_type_error_message("message"));
        }
        this.validators.push({validator: TYPES.BOOLEAN, type: BOOLEAN_VALIDATOR_TYPES.REQUIRED, message: message || boolean_required_error_message()});
        return this;
    }
}

export default (): BooleanValidator => {
    return new BooleanValidator();
};

