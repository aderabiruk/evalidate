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
var string_1 = require("../messages/string");
/**
 * String Validator Class
 *
 * @method alphanumeric
 * @method credit_card
 * @method email
 * @method equal
 * @method fqdn
 * @method in
 * @method isbn
 * @method maxlength
 * @method minlength
 * @method required
 * @method url
 */
var StringValidator = /** @class */ (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator() {
        var _this = _super.call(this) || this;
        _this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.TYPE, message: errors_1.string_type_error_message("${{}}") });
        return _this;
    }
    /**
     * Alphanumeric Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.alphanumeric = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.ALPHANUMERIC, message: message || string_1.string_alphanumeric_error_message() });
        return this;
    };
    /**
     * Credit Card Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.credit_card = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.CREDIT_CARD, message: message || string_1.string_credit_card_error_message() });
        return this;
    };
    /**
     * Email Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.email = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.EMAIL, message: message || string_1.string_email_error_message() });
        return this;
    };
    /**
     * Equal Validator
     *
     * @param {String} value
     * @param {String} message
     */
    StringValidator.prototype.equals = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isString(value)) {
            throw new Error(errors_1.string_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.EQUAL, value: value, message: message || string_1.string_equal_error_message() });
        return this;
    };
    /**
     * FQDN Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.fqdn = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.FQDN, message: message || string_1.string_fqdn_error_message() });
        return this;
    };
    /**
     * In Validator
     *
     * @param {Array} value
     * @param {String} message
     */
    StringValidator.prototype.in = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isArray(value)) {
            throw new Error(errors_1.array_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.IN, value: value, message: message || string_1.string_in_error_message() });
        return this;
    };
    /**
     * ISBN Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.isbn = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.ISBN, message: message || string_1.string_isbn_error_message() });
        return this;
    };
    /**
     * Maxlength Validator
     *
     * @param {String} value
     * @param {String} message
     */
    StringValidator.prototype.maxlength = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isNumber(value)) {
            throw new Error(errors_1.number_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.MAXLENGTH, value: value, message: message || string_1.string_maxlength_error_message(value) });
        return this;
    };
    /**
     * Minlength Validator
     *
     * @param {String} value
     * @param {String} message
     */
    StringValidator.prototype.minlength = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isNumber(value)) {
            throw new Error(errors_1.number_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.MINLENGTH, value: value, message: message || string_1.string_minlength_error_message(value) });
        return this;
    };
    /**
     * Numeric Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.numeric = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.NUMERIC, message: message || string_1.string_numeric_error_message() });
        return this;
    };
    /**
     * Required Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.required = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.REQUIRED, message: message || string_1.string_required_error_message() });
        return this;
    };
    /**
     * URL Validator
     *
     * @param {String} message
     */
    StringValidator.prototype.url = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.STRING, type: constants_1.STRING_VALIDATOR_TYPES.URL, message: message || string_1.string_url_error_message() });
        return this;
    };
    return StringValidator;
}(abstract_1.default));
exports.StringValidator = StringValidator;
exports.default = (function () {
    return new StringValidator();
});
