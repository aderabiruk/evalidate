import StringValidator from 'validator';
import { Validator, ErrorMessage } from '../types/abstract';
import { isString } from '../utils/validators';
import { STRING_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle String Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleStringValidation = (field: string, validator: Validator, value: any): ErrorMessage[] => {
    let errors: ErrorMessage[] = [];
    if (value && isString(value)) {
        switch (validator.type) {
            case STRING_VALIDATOR_TYPES.ALPHANUMERIC:
                if (!StringValidator.isAlphanumeric(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.CREDIT_CARD:
                if (!StringValidator.isCreditCard(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.EMAIL:
                if (!StringValidator.isEmail(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.EQUAL:
                if (!StringValidator.equals(value, validator.value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.FQDN:
                if (!StringValidator.isFQDN(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.IN:
                if (!validator.value.includes(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.ISBN:
                if (!StringValidator.isISBN(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.MAXLENGTH:
                if (value.length > validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.MINLENGTH:
                if (value.length < validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case STRING_VALIDATOR_TYPES.URL:
                if (!StringValidator.isURL(value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else if (value && !isString(value)) {
        if (validator.type == STRING_VALIDATOR_TYPES.TYPE) {
            errors.push({field: field, message: validator.message});
        }
    }
    else {
        if (validator.type == STRING_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};