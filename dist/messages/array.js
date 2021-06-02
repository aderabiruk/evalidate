"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array_size_error_message = exports.array_required_error_message = exports.array_equal_error_message = exports.array_contains_error_message = void 0;
/**
 * Contain Error Message
 *
 * @param {String} value
 */
exports.array_contains_error_message = function (value) {
    return "${{}} must contain " + value;
};
/**
 * Equal Error Message
 */
exports.array_equal_error_message = function () {
    return "Invalid value provided for ${{}}";
};
/**
 * Required Error Message
 */
exports.array_required_error_message = function () {
    return "${{}} is required";
};
/**
 * Size Error Message
 *
 * @param {Number} value
 */
exports.array_size_error_message = function (value) {
    return "${{}} must have " + value + " elements";
};
