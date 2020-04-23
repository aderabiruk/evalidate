import AbstractValidator from "./abstract";
/**
 * String Validator Class
 *
 * @method alphanumeric
 * @method credit_card
 * @method email
 * @method equal
 * @method fqdn
 * @method in
 * @method isbn
 * @method maxlength
 * @method minlength
 * @method required
 * @method url
 */
export declare class StringValidator extends AbstractValidator {
    constructor();
    /**
     * Alphanumeric Validator
     *
     * @param {String} message
     */
    alphanumeric(message?: string): StringValidator;
    /**
     * Credit Card Validator
     *
     * @param {String} message
     */
    credit_card(message?: string): StringValidator;
    /**
     * Email Validator
     *
     * @param {String} message
     */
    email(message?: string): StringValidator;
    /**
     * Equal Validator
     *
     * @param {String} value
     * @param {String} message
     */
    equals(value: any, message?: string): StringValidator;
    /**
     * FQDN Validator
     *
     * @param {String} message
     */
    fqdn(message?: string): StringValidator;
    /**
     * In Validator
     *
     * @param {Array} value
     * @param {String} message
     */
    in(value: any[], message?: string): StringValidator;
    /**
     * ISBN Validator
     *
     * @param {String} message
     */
    isbn(message?: string): StringValidator;
    /**
     * Maxlength Validator
     *
     * @param {String} value
     * @param {String} message
     */
    maxlength(value: any, message?: string): StringValidator;
    /**
     * Minlength Validator
     *
     * @param {String} value
     * @param {String} message
     */
    minlength(value: any, message?: string): StringValidator;
    /**
     * Required Validator
     *
     * @param {String} message
     */
    required(message?: string): StringValidator;
    /**
     * URL Validator
     *
     * @param {String} message
     */
    url(message?: string): this;
}
declare const _default: () => StringValidator;
export default _default;
