"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Alphanumeric Error Message
 */
exports.string_alphanumeric_error_message = function () {
    return "${{}} must be alphanumeric";
};
/**
 * Credit card Error Message
 */
exports.string_credit_card_error_message = function () {
    return "Credit card number is invalid";
};
/**
 * Email Error Message
 */
exports.string_email_error_message = function () {
    return "Email address is invalid";
};
/**
 * Equal Error Message
 *
 */
exports.string_equal_error_message = function () {
    return "Invalid value provided for ${{}}";
};
/**
 * FQDN Error Message
 */
exports.string_fqdn_error_message = function () {
    return "Invalid fully qualified domain name provided for ${{}}";
};
/**
 * In Error Message
 *
 */
exports.string_in_error_message = function () {
    return "Invalid value provided for ${{}}";
};
/**
 * ISBN Error Message
 *
 */
exports.string_isbn_error_message = function () {
    return "Invalid ISBN value provided for ${{}}";
};
/**
 * Maxlength Error Message
 *
 * @param {String} value
 */
exports.string_maxlength_error_message = function (value) {
    return "${{}} must have at most " + value + " characters";
};
/**
 * Minlength Error Message
 *
 * @param {String} value
 */
exports.string_minlength_error_message = function (value) {
    return "${{}} must have at least " + value + " characters";
};
/**
 * Required Error Message
 *
 */
exports.string_required_error_message = function () {
    return "${{}} is required";
};
/**
 * URL Error Message
 *
 */
exports.string_url_error_message = function () {
    return "Invalid url value provided for ${{}}";
};
