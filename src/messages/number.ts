/**
 * Equal Error Message
 */
export const number_equal_error_message = (): string => {
    return "Invalid value provided for ${{}}";
};

/**
 * In Error Message
 */
export const number_in_error_message = (): string => {
    return "Invalid value provided for ${{}}";
};

/**
 * Integer Error Message
 */
export const number_integer_error_message = (): string => {
    return "${{}} must be an integer";
};

/**
 * Max Error Message
 */
export const number_max_error_message = (value: any): string => {
    return `\${{}} must be less than ${value}`;
};

/**
 * Min Error Message
 */
export const number_min_error_message = (value: any): string => {
    return `\${{}} must be greater than ${value}`;
};

/**
 * Required Error Message
 */
export const number_required_error_message = (): string => {
    return `\${{}} is required`;
};