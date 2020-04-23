import { Validator, ErrorMessage } from "../types/abstract";
import { isBoolean } from "../utils/validators";
import { BOOLEAN_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Boolean Validations
 * 
 * @param {String} field 
 * @param {Validator} validator 
 * @param {Object} value
 */
export const handleBooleanValidation = (field: string, validator: Validator, value: any): ErrorMessage[] => {
    let errors: ErrorMessage[] = [];
    if (value !== null && value !== undefined && isBoolean(value)) {
        switch (validator.type) {
            case BOOLEAN_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else if (value !== null && value !== undefined && !isBoolean(value)) {
        if (validator.type == BOOLEAN_VALIDATOR_TYPES.TYPE) {
            errors.push({field: field, message: validator.message});
        }
    }
    else {
        if (validator.type == BOOLEAN_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};