import { Validator, ErrorMessage } from '../types/abstract';
/**
 * Handle String Validations
 *
 * @param {String} field
 * @param {Object} validator
 * @param {Object} value
 */
export declare const handleStringValidation: (field: string, validator: Validator, value: any) => ErrorMessage[];
