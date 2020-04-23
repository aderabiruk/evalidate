/**
 * Validator Type
 */
export declare type Validator = {
    validator: string;
    type: string;
    message: string;
    value?: any;
};
/**
 * Error Type
 */
export declare type ErrorMessage = {
    field: string;
    message: string;
};
/**
 * Abstract Validator Class
 */
export default class AbstractValidator {
    validators: Validator[];
    constructor();
}
