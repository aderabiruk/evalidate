import { ErrorMessage, Validator } from "./abstract";
import { TYPES } from "../utils/constants";
import { ObjectValidator } from './object';
import { handleDateValidation } from "../validators/date";
import { handleArrayValidation } from "../validators/array";
import { handleNumberValidation } from "../validators/number";
import { handleStringValidation } from "../validators/string";
import { handleBooleanValidation } from "../validators/boolean";


/**
 * Schema Wrapper
 */
export default class Schema {
    schema: any;
    parent: string;
    errors: ErrorMessage[];

    constructor(schema: any, parent?: string) {
        this.errors = [];
        this.schema = schema;
        this.parent = parent || "";
    }

    /**
     * Validate data against schema
     * 
     * @param {Object} data 
     */
    validate(data: any) {
        data = data || {};
        this.init(data);
        return this.process(data);
    }

    /**
     * Initialize Schema
     */
    init(data: any) {
        let keys = Object.keys(this.schema);
        for (const key of keys) {
            if (this.schema[key] instanceof ObjectValidator) {
                let parentSchema = this.parent ? `${this.parent}.${key}` : key;
                this.errors = [
                    ...this.errors,
                    ...new Schema(this.schema[key].schema, parentSchema).validate(data[`${key}`]).errors
                ];
            }
            else {
                this.sanitizeMessages(key, this.schema[key].validators);
            }
        }
    }

    /**
     * Process data against schema
     * 
     * @param {Object} data 
     */
    process(data: any) {
        let keys = Object.keys(this.schema);
        for (const field of keys) {
            for (const validator of this.schema[field].validators) {
                this.errors = [
                    ...this.errors,
                    ...this.handleValidation(field, validator, data)
                ];
            }
        }
        return {
            isValid: this.errors.length == 0,
            errors: this.errors
        };
    }

    /**
     * Sanitize Error Messages
     * 
     * @param {String} field 
     * @param {Object} validators 
     */
    sanitizeMessages(field: string, validators: Validator[]) {
        for (const validator of validators) {
            if (validator.message) {
                this.populatePlaceholders(field, validator);
            }
        }
    }

    /**
     * Populate Placeholder
     * 
     * @param {String} field 
     * @param {Object} validator 
     */
    populatePlaceholders(field: string, validator: Validator) {
        validator.message = validator.message.replace("${{}}", field);
    }

    /**
     * Handle Validation
     * 
     * @param {String} field 
     * @param {Object} validator 
     * @param {Object} data
     */
    handleValidation(field: string, validator: Validator, data: any) {
        let fieldName = this.parent ? `${this.parent}.${field}` : field;

        if (validator.validator === TYPES.ARRAY) {
            return handleArrayValidation(fieldName, validator, data[`${field}`]);
        }
        if (validator.validator === TYPES.BOOLEAN) {
            return handleBooleanValidation(fieldName, validator, data[`${field}`]);
        }
        else if (validator.validator === TYPES.DATE) {
            return handleDateValidation(fieldName, validator, data[`${field}`]);
        }
        else if (validator.validator === TYPES.NUMBER) {
            return handleNumberValidation(fieldName, validator, data[`${field}`]);
        }
        else if (validator.validator === TYPES.STRING) {
            return handleStringValidation(fieldName, validator, data[`${field}`]);
        }
        else {
            return [];
        }
    }

}