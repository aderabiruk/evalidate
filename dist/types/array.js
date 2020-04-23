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
var constants_1 = require("../utils/constants");
var validators_1 = require("../utils/validators");
var errors_1 = require("../utils/errors");
var array_1 = require("../messages/array");
/**
 * Array Validator Class
 *
 * @method contains
 * @method equals
 * @method required
 * @method size
 */
var ArrayValidator = /** @class */ (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator() {
        var _this = _super.call(this) || this;
        _this.validators.push({ validator: constants_1.TYPES.ARRAY, type: constants_1.ARRAY_VALIDATOR_TYPES.TYPE, message: errors_1.array_type_error_message("${{}}") });
        return _this;
    }
    /**
     * Contains Validator
     *
     * @param {Object} value
     * @param {String} message
     */
    ArrayValidator.prototype.contains = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.ARRAY, type: constants_1.ARRAY_VALIDATOR_TYPES.CONTAINS, value: value, message: message || array_1.array_contains_error_message(value) });
        return this;
    };
    /**
     * Equals Validator
     *
     * @param {Array} value
     * @param {String} message
     */
    ArrayValidator.prototype.equals = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isArray(value)) {
            throw new Error(errors_1.array_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.ARRAY, type: constants_1.ARRAY_VALIDATOR_TYPES.EQUAL, value: value, message: message || array_1.array_equal_error_message() });
        return this;
    };
    /**
     * Required Validator
     *
     * @param {String} message
     */
    ArrayValidator.prototype.required = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.ARRAY, type: constants_1.ARRAY_VALIDATOR_TYPES.REQUIRED, message: message || array_1.array_required_error_message() });
        return this;
    };
    /**
     * Size Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    ArrayValidator.prototype.size = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        if (!validators_1.isInteger(value)) {
            throw new Error(errors_1.integer_type_error_message("value"));
        }
        this.validators.push({ validator: constants_1.TYPES.ARRAY, type: constants_1.ARRAY_VALIDATOR_TYPES.SIZE, value: value, message: message || array_1.array_size_error_message(value) });
        return this;
    };
    return ArrayValidator;
}(abstract_1.default));
exports.ArrayValidator = ArrayValidator;
exports.default = (function () {
    return new ArrayValidator();
});
