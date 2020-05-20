"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Equal Error Message
 */
exports.number_equal_error_message = function () {
    return "Invalid value provided for ${{}}";
};
/**
 * In Error Message
 */
exports.number_in_error_message = function () {
    return "Invalid value provided for ${{}}";
};
/**
 * Integer Error Message
 */
exports.number_integer_error_message = function () {
    return "${{}} must be an integer";
};
/**
 * Latitude Error Message
 */
exports.number_latitude_error_message = function () {
    return "${{}} must be between -90 and 90 degrees";
};
/**
 * Longitude Error Message
 */
exports.number_longitude_error_message = function () {
    return "${{}} must be between -180 and 180 degrees";
};
/**
 * Max Error Message
 */
exports.number_max_error_message = function (value) {
    return "${{}} must be less than " + value;
};
/**
 * Min Error Message
 */
exports.number_min_error_message = function (value) {
    return "${{}} must be greater than " + value;
};
/**
 * Required Error Message
 */
exports.number_required_error_message = function () {
    return "${{}} is required";
};
