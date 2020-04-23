"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
/**
 * Handle Date Validations
 *
 * @param {String} field
 * @param {Object} validator
 * @param {Object} value
 */
exports.handleDateValidation = function (field, validator, value) {
    var errors = [];
    if (value && validators_1.isDate(value)) {
        switch (validator.type) {
            case constants_1.DATE_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.DATE_VALIDATOR_TYPES.AFTER:
                if (moment(value).isBefore(moment(validator.value))) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.DATE_VALIDATOR_TYPES.BEFORE:
                if (moment(value).isAfter(moment(validator.value))) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
        }
    }
    else if (value && !validators_1.isDate(value)) {
        if (validator.type == constants_1.DATE_VALIDATOR_TYPES.TYPE) {
            errors.push({ field: field, message: validator.message });
        }
    }
    else {
        if (validator.type == constants_1.DATE_VALIDATOR_TYPES.REQUIRED) {
            errors.push({ field: field, message: validator.message });
        }
    }
    return errors;
};
