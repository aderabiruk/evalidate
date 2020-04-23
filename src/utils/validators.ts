import * as _ from 'lodash';
import * as moment from 'moment';

/**
 * Check if object is string
 * 
 * @param {Object} value 
 */
export const isString = (value: any): boolean => {
    return _.isString(value);
};

/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */
export const isArray = (value: any): boolean => {
    return _.isArray(value);
};

/**
 * Check if object is an integer
 * 
 * @param {Object} value 
 */
export const isInteger = (value: any): boolean => {
    return _.isInteger(value);
};

/**
 * Check if object is boolean
 * 
 * @param {Object} value 
 */
export const isBoolean = (value: any): boolean => {
    return _.isBoolean(value);
};

/**
 * Check if object is date
 * 
 * @param {Object} value 
 */
export const isDate = (value: any): boolean => {

    return moment(value).isValid();
};

/**
 * Check if object is number
 * 
 * @param {Object} value 
 */
export const isNumber = (value: any): boolean => {
    return _.isNumber(value);
};