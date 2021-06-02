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
exports.DateValidator = void 0;
var abstract_1 = require("./abstract");
var validators_1 = require("../utils/validators");
var constants_1 = require("../utils/constants");
var errors_1 = require("../utils/errors");
var date_1 = require("../messages/date");
/**
 * Date Validator Class
 *
 * @method after
 * @method before
 * @method equals
 * @method required
 */
var DateValidator = /** @class */ (function (_super) {
    __extends(DateValidator, _super);
    function DateValidator() {
        var _this = _super.call(this) || this;
        _this.validators.push({ validator: constants_1.TYPES.DATE, type: constants_1.DATE_VALIDATOR_TYPES.TYPE, message: errors_1.date_type_error_message("${{}}") });
        return _this;
    }
    /**
     * After Validator
     *
     * @param {Date} value
     * @param {String} message
     */
    DateValidator.prototype.after = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!value || !validators_1.isDate(value)) {
            throw new Error(errors_1.date_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.DATE, type: constants_1.DATE_VALIDATOR_TYPES.AFTER, message: message || date_1.date_after_error_message(value), value: value });
        return this;
    };
    /**
     * Before Validator
     *
     * @param {Date} value
     * @param {String} message
     */
    DateValidator.prototype.before = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!value || !validators_1.isDate(value)) {
            throw new Error(errors_1.date_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.DATE, type: constants_1.DATE_VALIDATOR_TYPES.BEFORE, value: value, message: message || date_1.date_before_error_message(value) });
        return this;
    };
    /**
     * Equal Validator
     *
     * @param {Date} value
     * @param {String} message
     */
    DateValidator.prototype.equals = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!value || !validators_1.isDate(value)) {
            throw new Error(errors_1.date_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.DATE, type: constants_1.DATE_VALIDATOR_TYPES.EQUAL, value: value, message: message || date_1.date_equal_error_message() });
        return this;
    };
    /**
     * Required Validator
     *
     * @param {String} message
     */
    DateValidator.prototype.required = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.DATE, type: constants_1.DATE_VALIDATOR_TYPES.REQUIRED, message: message || date_1.date_required_error_message() });
        return this;
    };
    return DateValidator;
}(abstract_1.default));
exports.DateValidator = DateValidator;
exports.default = (function () {
    return new DateValidator();
});
