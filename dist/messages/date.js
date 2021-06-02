"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date_required_error_message = exports.date_before_error_message = exports.date_after_error_message = exports.date_equal_error_message = void 0;
/**
 * Equal Error Message
 */
exports.date_equal_error_message = function () {
    return "Invalid value provided for ${{}}";
};
/**
 * After Error Message
 */
exports.date_after_error_message = function (value) {
    return "${{}} must be after " + value;
};
/**
 * Before Error Message
 */
exports.date_before_error_message = function (value) {
    return "${{}} must be before " + value;
};
/**
 * Required Error Message
 */
exports.date_required_error_message = function () {
    return "${{}} is required";
};
