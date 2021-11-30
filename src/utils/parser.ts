import { isNumber, toString } from 'lodash';

export function parseStringValidationValue (value: any) {
    if (isNumber(value)) {
        return toString(value)
    }
    return value
}
