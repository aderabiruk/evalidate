import AbstractValidator from "./abstract";
/**
 * Boolean Validator Class
 *
 * @method equals
 * @method required
 */
export declare class BooleanValidator extends AbstractValidator {
    constructor();
    /**
     * Equals Validator
     *
     * @param {Boolean} value
     * @param {String} message
     */
    equals(value: boolean, message?: string): BooleanValidator;
    /**
     * Reuired Validator
     *
     * @param {String} message
     */
    required(message?: string): BooleanValidator;
}
declare const _default: () => BooleanValidator;
export default _default;
