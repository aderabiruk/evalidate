"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING_VALIDATOR_TYPES = exports.NUMBER_VALIDATOR_TYPES = exports.DATE_VALIDATOR_TYPES = exports.BOOLEAN_VALIDATOR_TYPES = exports.ARRAY_VALIDATOR_TYPES = exports.TYPES = void 0;
exports.TYPES = {
    ARRAY: "array",
    BOOLEAN: "boolean",
    DATE: "date",
    NUMBER: 'number',
    STRING: 'string'
};
exports.ARRAY_VALIDATOR_TYPES = {
    CONTAINS: "contains",
    EQUAL: "equal",
    REQUIRED: "required",
    SIZE: "size",
    TYPE: "type"
};
exports.BOOLEAN_VALIDATOR_TYPES = {
    EQUAL: "equal",
    REQUIRED: "required",
    TYPE: "type"
};
exports.DATE_VALIDATOR_TYPES = {
    AFTER: "after",
    BEFORE: "before",
    EQUAL: "equal",
    REQUIRED: "required",
    TYPE: "type"
};
exports.NUMBER_VALIDATOR_TYPES = {
    EQUAL: "equal",
    IN: "in",
    INTEGER: "integer",
    LATITUDE: "latitude",
    LONGITUDE: "longitude",
    MAX: "max",
    MIN: "min",
    REQUIRED: "required",
    TYPE: "type"
};
exports.STRING_VALIDATOR_TYPES = {
    ALPHANUMERIC: "alphanumeric",
    CREDIT_CARD: "creditcard",
    EMAIL: "email",
    EQUAL: "equal",
    FQDN: "fqdn",
    IN: "in",
    ISBN: "isbn",
    MAXLENGTH: "maxlength",
    MINLENGTH: "minlength",
    NUMERIC: "numeric",
    REQUIRED: "required",
    TYPE: "type",
    URL: "url"
};
