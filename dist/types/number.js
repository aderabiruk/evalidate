"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("./abstract");
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
var errors_1 = require("../utils/errors");
var number_1 = require("../messages/number");
/**
 * Number Validator Class
 *
 * @method equal
 * @method integer
 * @method max
 * @method min
 * @method required
 */
var NumberValidator = /** @class */ (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator() {
        var _this = _super.call(this) || this;
        _this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.TYPE, message: errors_1.number_type_error_message("${{}}") });
        return _this;
    }
    /**
     * Equals Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    NumberValidator.prototype.equals = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isNumber(value)) {
            throw new Error(errors_1.number_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.EQUAL, value: value, message: message || number_1.number_equal_error_message() });
        return this;
    };
    /**
     * In Validator
     *
     * @param {Array} value
     * @param {String} message
     */
    NumberValidator.prototype.in = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isArray(value)) {
            throw new Error(errors_1.array_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.IN, value: value, message: message || number_1.number_in_error_message() });
        return this;
    };
    /**
     * Integer Validator
     *
     * @param {String} message
     */
    NumberValidator.prototype.integer = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.INTEGER, message: message || number_1.number_integer_error_message() });
        return this;
    };
    /**
     * Maximum Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    NumberValidator.prototype.max = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isNumber(value)) {
            throw new Error(errors_1.number_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.MAX, value: value, message: message || number_1.number_max_error_message(value) });
        return this;
    };
    /**
     * Minimum Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    NumberValidator.prototype.min = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isNumber(value)) {
            throw new Error(errors_1.number_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.MIN, value: value, message: message || number_1.number_min_error_message(value) });
        return this;
    };
    /**
     * Required Validator
     *
     * @param {String} message
     */
    NumberValidator.prototype.required = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.NUMBER, type: constants_1.NUMBER_VALIDATOR_TYPES.REQUIRED, message: message || number_1.number_required_error_message() });
        return this;
    };
    return NumberValidator;
}(abstract_1.default));
exports.NumberValidator = NumberValidator;
exports.default = (function () {
    return new NumberValidator();
});
