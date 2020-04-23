"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
/**
 * Handle Number Validations
 *
 * @param {String} field
 * @param {Object} validator
 * @param {Object} value
 */
exports.handleNumberValidation = function (field, validator, value) {
    var errors = [];
    if (value !== null && value !== undefined && validators_1.isNumber(value)) {
        switch (validator.type) {
            case constants_1.NUMBER_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.NUMBER_VALIDATOR_TYPES.IN:
                if (!validator.value.includes(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.NUMBER_VALIDATOR_TYPES.INTEGER:
                if (!validators_1.isInteger(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.NUMBER_VALIDATOR_TYPES.MAX:
                if (value > validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.NUMBER_VALIDATOR_TYPES.MIN:
                if (value < validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
        }
    }
    else if (value !== null && value !== undefined && !validators_1.isNumber(value)) {
        if (validator.type == constants_1.NUMBER_VALIDATOR_TYPES.TYPE) {
            errors.push({ field: field, message: validator.message });
        }
    }
    else {
        if (validator.type == constants_1.NUMBER_VALIDATOR_TYPES.REQUIRED) {
            errors.push({ field: field, message: validator.message });
        }
    }
    return errors;
};
