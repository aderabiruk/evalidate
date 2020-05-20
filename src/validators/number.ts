import { Validator, ErrorMessage } from "../types/abstract";
import { isNumber, isInteger } from "../utils/validators";
import { NUMBER_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Number Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleNumberValidation = (field: string, validator: Validator, value: any): ErrorMessage[] => {
    let errors: ErrorMessage[] = [];
    if (value !== null && value !== undefined && isNumber(value)) {
        switch (validator.type) {
            case NUMBER_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.IN:
                if (!validator.value.includes(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.INTEGER:
                if (!isInteger(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.LATITUDE:
                if (value < -90 || value > 90) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.LONGITUDE:
                if (value < -180 || value > 180) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.MAX:
                if (value > validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case NUMBER_VALIDATOR_TYPES.MIN:
                if (value < validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else if (value !== null && value !== undefined && !isNumber(value)) {
        if (validator.type == NUMBER_VALIDATOR_TYPES.TYPE) {
            errors.push({field: field, message: validator.message});
        }
    }
    else {
        if (validator.type == NUMBER_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};