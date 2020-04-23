import { Validator, ErrorMessage } from "../types/abstract";
/**
 * Handle Date Validations
 *
 * @param {String} field
 * @param {Object} validator
 * @param {Object} value
 */
export declare const handleDateValidation: (field: string, validator: Validator, value: any) => ErrorMessage[];
