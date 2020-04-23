"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
/**
 * Handle Array Validations
 *
 * @param {String} field
 * @param {Validator} validator
 * @param {Object} value
 */
exports.handleArrayValidation = function (field, validator, value) {
    var errors = [];
    if (value !== null && value !== undefined && validators_1.isArray(value)) {
        switch (validator.type) {
            case constants_1.ARRAY_VALIDATOR_TYPES.CONTAINS:
                if (!value.includes(validator.value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.ARRAY_VALIDATOR_TYPES.EQUAL:
                if (!_.isEqual(_.sortBy(value), _.sortBy(validator.value))) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.ARRAY_VALIDATOR_TYPES.SIZE:
                if (value.length !== validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
        }
    }
    else if (value !== null && value !== undefined && !validators_1.isArray(value)) {
        if (validator.type == constants_1.ARRAY_VALIDATOR_TYPES.TYPE) {
            errors.push({ field: field, message: validator.message });
        }
    }
    else {
        if (validator.type == constants_1.ARRAY_VALIDATOR_TYPES.REQUIRED) {
            errors.push({ field: field, message: validator.message });
        }
    }
    return errors;
};
