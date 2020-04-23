import * as moment from "moment";
import { isDate } from "../utils/validators";
import { Validator, ErrorMessage } from "../types/abstract";
import { DATE_VALIDATOR_TYPES } from "../utils/constants";

/**
 * Handle Date Validations
 * 
 * @param {String} field 
 * @param {Object} validator 
 * @param {Object} value
 */
export const handleDateValidation = (field: string, validator: Validator, value: any): ErrorMessage[] => {
    let errors: ErrorMessage[] = [];
    if (value && isDate(value)) {
        switch (validator.type) {
            case DATE_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case DATE_VALIDATOR_TYPES.AFTER:
                if (moment(value).isBefore(moment(validator.value))) {
                    errors.push({field: field, message: validator.message});
                }
                break;
            case DATE_VALIDATOR_TYPES.BEFORE:
                if (moment(value).isAfter(moment(validator.value))) {
                    errors.push({field: field, message: validator.message});
                }
                break;
        }
    }
    else if (value && !isDate(value)) {
        if (validator.type == DATE_VALIDATOR_TYPES.TYPE) {
            errors.push({field: field, message: validator.message});
        }
    }
    else {
        if (validator.type == DATE_VALIDATOR_TYPES.REQUIRED) {
            errors.push({field: field, message: validator.message});
        }
    }
    return errors;
};