import AbstractValidator from "./abstract";
/**
 * Date Validator Class
 *
 * @method after
 * @method before
 * @method equals
 * @method required
 */
export declare class DateValidator extends AbstractValidator {
    constructor();
    /**
     * After Validator
     *
     * @param {Date} value
     * @param {String} message
     */
    after(value: any, message?: string): DateValidator;
    /**
     * Before Validator
     *
     * @param {Date} value
     * @param {String} message
     */
    before(value: any, message?: string): DateValidator;
    /**
     * Equal Validator
     *
     * @param {Date} value
     * @param {String} message
     */
    equals(value: any, message?: string): DateValidator;
    /**
     * Required Validator
     *
     * @param {String} message
     */
    required(message?: string): DateValidator;
}
declare const _default: () => DateValidator;
export default _default;
