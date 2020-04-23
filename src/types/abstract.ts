/**
 * Validator Type
 */
export type Validator = {
    validator: string;
    type: string;
    message: string;
    value?: any;
};

/**
 * Error Type
 */
export type ErrorMessage = {
    field: string;
    message: string;
};

/**
 * Abstract Validator Class
 */
export default class AbstractValidator {
    validators: Validator[];

    constructor() {
        this.validators = [];
    }
}