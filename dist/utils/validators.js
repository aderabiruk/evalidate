"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var moment = require("moment");
/**
 * Check if object is string
 *
 * @param {Object} value
 */
exports.isString = function (value) {
    return _.isString(value);
};
/**
 * Check if object is boolean
 *
 * @param {Object} value
 */
exports.isArray = function (value) {
    return _.isArray(value);
};
/**
 * Check if object is an integer
 *
 * @param {Object} value
 */
exports.isInteger = function (value) {
    return _.isInteger(value);
};
/**
 * Check if object is boolean
 *
 * @param {Object} value
 */
exports.isBoolean = function (value) {
    return _.isBoolean(value);
};
/**
 * Check if object is date
 *
 * @param {Object} value
 */
exports.isDate = function (value) {
    return moment(value).isValid();
};
/**
 * Check if object is number
 *
 * @param {Object} value
 */
exports.isNumber = function (value) {
    return _.isNumber(value);
};
