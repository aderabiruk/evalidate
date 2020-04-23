"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
/**
 * Handle String Validations
 *
 * @param {String} field
 * @param {Object} validator
 * @param {Object} value
 */
exports.handleStringValidation = function (field, validator, value) {
    var errors = [];
    if (value && validators_1.isString(value)) {
        switch (validator.type) {
            case constants_1.STRING_VALIDATOR_TYPES.ALPHANUMERIC:
                if (!validator_1.default.isAlphanumeric(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.CREDIT_CARD:
                if (!validator_1.default.isCreditCard(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.EMAIL:
                if (!validator_1.default.isEmail(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.EQUAL:
                if (!validator_1.default.equals(value, validator.value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.FQDN:
                if (!validator_1.default.isFQDN(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.IN:
                if (!validator.value.includes(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.ISBN:
                if (!validator_1.default.isISBN(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.MAXLENGTH:
                if (value.length > validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.MINLENGTH:
                if (value.length < validator.value) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
            case constants_1.STRING_VALIDATOR_TYPES.URL:
                if (!validator_1.default.isURL(value)) {
                    errors.push({ field: field, message: validator.message });
                }
                break;
        }
    }
    else if (value && !validators_1.isString(value)) {
        if (validator.type == constants_1.STRING_VALIDATOR_TYPES.TYPE) {
            errors.push({ field: field, message: validator.message });
        }
    }
    else {
        if (validator.type == constants_1.STRING_VALIDATOR_TYPES.REQUIRED) {
            errors.push({ field: field, message: validator.message });
        }
    }
    return errors;
};
