import AbstractValidator from "./abstract";
/**
 * Number Validator Class
 *
 * @method equal
 * @method integer
 * @method max
 * @method min
 * @method required
 */
export declare class NumberValidator extends AbstractValidator {
    constructor();
    /**
     * Equals Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    equals(value: number, message?: string): NumberValidator;
    /**
     * In Validator
     *
     * @param {Array} value
     * @param {String} message
     */
    in(value: any[], message?: string): NumberValidator;
    /**
     * Integer Validator
     *
     * @param {String} message
     */
    integer(message?: string): NumberValidator;
    /**
     * Maximum Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    max(value: number, message?: string): NumberValidator;
    /**
     * Minimum Validator
     *
     * @param {Number} value
     * @param {String} message
     */
    min(value: number, message?: string): NumberValidator;
    /**
     * Required Validator
     *
     * @param {String} message
     */
    required(message?: string): NumberValidator;
}
declare const _default: () => NumberValidator;
export default _default;
