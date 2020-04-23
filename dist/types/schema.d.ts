import { ErrorMessage, Validator } from "./abstract";
/**
 * Schema Wrapper
 */
export default class Schema {
    schema: any;
    parent: string;
    errors: ErrorMessage[];
    constructor(schema: any, parent?: string);
    /**
     * Validate data against schema
     *
     * @param {Object} data
     */
    validate(data: any): {
        isValid: boolean;
        errors: ErrorMessage[];
    };
    /**
     * Initialize Schema
     */
    init(data: any): void;
    /**
     * Process data against schema
     *
     * @param {Object} data
     */
    process(data: any): {
        isValid: boolean;
        errors: ErrorMessage[];
    };
    /**
     * Sanitize Error Messages
     *
     * @param {String} field
     * @param {Object} validators
     */
    sanitizeMessages(field: string, validators: Validator[]): void;
    /**
     * Populate Placeholder
     *
     * @param {String} field
     * @param {Object} validator
     */
    populatePlaceholders(field: string, validator: Validator): void;
    /**
     * Handle Validation
     *
     * @param {String} field
     * @param {Object} validator
     * @param {Object} data
     */
    handleValidation(field: string, validator: Validator, data: any): ErrorMessage[];
}
