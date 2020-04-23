import { Validator, ErrorMessage } from '../types/abstract';
/**
 * Handle Array Validations
 *
 * @param {String} field
 * @param {Validator} validator
 * @param {Object} value
 */
export declare const handleArrayValidation: (field: string, validator: Validator, value: any) => ErrorMessage[];
