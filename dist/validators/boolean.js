"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
/**
 * Handle Boolean Validations
 *
 * @param {String} field
 * @param {Validator} validator
 * @param {Object} value
 */
exports.handleBooleanValidation = function (field, validator, value) {
    var errors = [];
    if (value !== null && value !== undefined && validators_1.isBoolean(value)) {
        switch (validator.type) {
            case constants_1.BOOLEAN_VALIDATOR_TYPES.EQUAL:
                if (value !== validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
        }
    }
    else if (value !== null && value !== undefined && !validators_1.isBoolean(value)) {
        if (validator.type == constants_1.BOOLEAN_VALIDATOR_TYPES.TYPE) {
            errors.push({ field: field, message: validator.message });
        }
    }
    else {
        if (validator.type == constants_1.BOOLEAN_VALIDATOR_TYPES.REQUIRED) {
            errors.push({ field: field, message: validator.message });
        }
    }
    return errors;
};
