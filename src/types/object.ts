import AbstractValidator from "./abstract";

/**
 * Object Validator Class
 * 
 */
export class ObjectValidator extends AbstractValidator {
    schema: any;

    constructor(schema: any) {
        super();
        this.schema = schema;
    }

}

export default (schema: any): ObjectValidator => {
    return new ObjectValidator(schema);
};

