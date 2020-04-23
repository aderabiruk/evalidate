import { Validator, ErrorMessage } from "../types/abstract";
/**
 * Handle Boolean Validations
 *
 * @param {String} field
 * @param {Validator} validator
 * @param {Object} value
 */
export declare const handleBooleanValidation: (field: string, validator: Validator, value: any) => ErrorMessage[];
