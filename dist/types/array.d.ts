import AbstractValidator from "./abstract";
/**
 * Array Validator Class
 *
 * @method contains
 * @method equals
 * @method required
 * @method size
 */
export declare class ArrayValidator extends AbstractValidator {
    constructor();
    /**
     * Contains Validator
     *
     * @param {Object} value
     * @param {String} message
     */
    contains(value: any, message?: string): ArrayValidator;
    /**
     * Equals Validator
     *
     * @param {Array} value
     * @param {String} message
     */
    equals(value: any[], message?: string): ArrayValidator;
    /**
     * Required Validator
     *
     * @param {String} message
     */
    required(message?: string): ArrayValidator;
    /**
     * Size Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    size(value: number, message?: string): ArrayValidator;
}
declare const _default: () => ArrayValidator;
export default _default;
