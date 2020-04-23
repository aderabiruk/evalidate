import { Validator, ErrorMessage } from "../types/abstract";
/**
 * Handle Number Validations
 *
 * @param {String} field
 * @param {Object} validator
 * @param {Object} value
 */
export declare const handleNumberValidation: (field: string, validator: Validator, value: any) => ErrorMessage[];
