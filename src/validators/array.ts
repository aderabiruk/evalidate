import * as _ from 'lodash';
import { isArray } from '../utils/validators';
import { Validator, ErrorMessage } from '../types/abstract';
import { ARRAY_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Array Validations
 * 
 * @param {String} field 
 * @param {Validator} validator 
 * @param {Object} value
 */
export const handleArrayValidation = (field: string, validator: Validator, value: any): ErrorMessage[] => {
    let errors: ErrorMessage[] = [];
    if (value !== null && value !== undefined && isArray(value)) {
        switch (validator.type) {
            case ARRAY_VALIDATOR_TYPES.CONTAINS:
                if (!value.includes(validator.value)) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case ARRAY_VALIDATOR_TYPES.EQUAL:
                if (!_.isEqual(_.sortBy(value), _.sortBy(validator.value))) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case ARRAY_VALIDATOR_TYPES.SIZE:
                if (value.length !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
        }
    }
    else if (value !== null && value !== undefined && !isArray(value)) {
        if (validator.type == ARRAY_VALIDATOR_TYPES.TYPE) {
            errors.push({field: field, message: validator.message});
        }
    }
    else {
        if (validator.type == ARRAY_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};