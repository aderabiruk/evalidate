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
var boolean_1 = require("../messages/boolean");
/**
 * Boolean Validator Class
 *
 * @method equals
 * @method required
 */
var BooleanValidator = /** @class */ (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator() {
        var _this = _super.call(this) || this;
        _this.validators.push({ validator: constants_1.TYPES.BOOLEAN, type: constants_1.BOOLEAN_VALIDATOR_TYPES.TYPE, message: errors_1.boolean_type_error_message("${{}}") });
        return _this;
    }
    /**
     * Equals Validator
     *
     * @param {Boolean} value
     * @param {String} message
     */
    BooleanValidator.prototype.equals = function (value, message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.BOOLEAN, type: constants_1.BOOLEAN_VALIDATOR_TYPES.EQUAL, value: value, message: message || boolean_1.boolean_equal_error_message() });
        return this;
    };
    /**
     * Reuired Validator
     *
     * @param {String} message
     */
    BooleanValidator.prototype.required = function (message) {
        if (message && !validators_1.isString(message)) {
            throw new Error(errors_1.string_type_error_message("message"));
        }
        this.validators.push({ validator: constants_1.TYPES.BOOLEAN, type: constants_1.BOOLEAN_VALIDATOR_TYPES.REQUIRED, message: message || boolean_1.boolean_required_error_message() });
        return this;
    };
    return BooleanValidator;
}(abstract_1.default));
exports.BooleanValidator = BooleanValidator;
exports.default = (function () {
    return new BooleanValidator();
});
