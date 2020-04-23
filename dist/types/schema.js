"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../utils/constants");
var object_1 = require("./object");
var date_1 = require("../validators/date");
var array_1 = require("../validators/array");
var number_1 = require("../validators/number");
var string_1 = require("../validators/string");
var boolean_1 = require("../validators/boolean");
/**
 * Schema Wrapper
 */
var Schema = /** @class */ (function () {
    function Schema(schema, parent) {
        this.errors = [];
        this.schema = schema;
        this.parent = parent || "";
    }
    /**
     * Validate data against schema
     *
     * @param {Object} data
     */
    Schema.prototype.validate = function (data) {
        data = data || {};
        this.init(data);
        return this.process(data);
    };
    /**
     * Initialize Schema
     */
    Schema.prototype.init = function (data) {
        var keys = Object.keys(this.schema);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (this.schema[key] instanceof object_1.ObjectValidator) {
                var parentSchema = this.parent ? this.parent + "." + key : key;
                this.errors = __spreadArrays(this.errors, new Schema(this.schema[key].schema, parentSchema).validate(data["" + key]).errors);
            }
            else {
                this.sanitizeMessages(key, this.schema[key].validators);
            }
        }
    };
    /**
     * Process data against schema
     *
     * @param {Object} data
     */
    Schema.prototype.process = function (data) {
        var keys = Object.keys(this.schema);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var field = keys_2[_i];
            for (var _a = 0, _b = this.schema[field].validators; _a < _b.length; _a++) {
                var validator = _b[_a];
                this.errors = __spreadArrays(this.errors, this.handleValidation(field, validator, data));
            }
        }
        return {
            isValid: this.errors.length == 0,
            errors: this.errors
        };
    };
    /**
     * Sanitize Error Messages
     *
     * @param {String} field
     * @param {Object} validators
     */
    Schema.prototype.sanitizeMessages = function (field, validators) {
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            if (validator.message) {
                this.populatePlaceholders(field, validator);
            }
        }
    };
    /**
     * Populate Placeholder
     *
     * @param {String} field
     * @param {Object} validator
     */
    Schema.prototype.populatePlaceholders = function (field, validator) {
        validator.message = validator.message.replace("${{}}", field);
    };
    /**
     * Handle Validation
     *
     * @param {String} field
     * @param {Object} validator
     * @param {Object} data
     */
    Schema.prototype.handleValidation = function (field, validator, data) {
        var fieldName = this.parent ? this.parent + "." + field : field;
        if (validator.validator === constants_1.TYPES.ARRAY) {
            return array_1.handleArrayValidation(fieldName, validator, data["" + field]);
        }
        if (validator.validator === constants_1.TYPES.BOOLEAN) {
            return boolean_1.handleBooleanValidation(fieldName, validator, data["" + field]);
        }
        else if (validator.validator === constants_1.TYPES.DATE) {
            return date_1.handleDateValidation(fieldName, validator, data["" + field]);
        }
        else if (validator.validator === constants_1.TYPES.NUMBER) {
            return number_1.handleNumberValidation(fieldName, validator, data["" + field]);
        }
        else if (validator.validator === constants_1.TYPES.STRING) {
            return string_1.handleStringValidation(fieldName, validator, data["" + field]);
        }
        else {
            return [];
        }
    };
    return Schema;
}());
exports.default = Schema;
