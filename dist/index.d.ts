import schema from "./types/schema";
declare const _default: {
    date: () => import("./types/date").DateValidator;
    array: () => import("./types/array").ArrayValidator;
    number: () => import("./types/number").NumberValidator;
    object: (schema: any) => import("./types/object").ObjectValidator;
    schema: typeof schema;
    string: () => import("./types/string").StringValidator;
    boolean: () => import("./types/boolean").BooleanValidator;
};
export = _default;
