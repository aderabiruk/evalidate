import AbstractValidator from "./abstract";
/**
 * Object Validator Class
 *
 */
export declare class ObjectValidator extends AbstractValidator {
    schema: any;
    constructor(schema: any);
}
declare const _default: (schema: any) => ObjectValidator;
export default _default;
