/**
 * Alphanumeric Error Message
 */
export const string_alphanumeric_error_message = (): string => {
    return "${{}} must be alphanumeric";
};

/**
 * Credit card Error Message
 */
export const string_credit_card_error_message = (): string => {
    return "Credit card number is invalid";
};

/**
 * Email Error Message
 */
export const string_email_error_message = (): string => {
    return "Email address is invalid";
};

/**
 * Equal Error Message
 * 
 */
export const string_equal_error_message = (): string => {
    return `Invalid value provided for \${{}}`;
};

/**
 * FQDN Error Message
 */
export const string_fqdn_error_message = (): string => {
    return "Invalid fully qualified domain name provided for ${{}}";
};

/**
 * In Error Message
 *  
 */
export const string_in_error_message = (): string => {
    return `Invalid value provided for \${{}}`;
};

/**
 * ISBN Error Message
 *  
 */
export const string_isbn_error_message = (): string => {
    return "Invalid ISBN value provided for ${{}}";
};

/**
 * Maxlength Error Message
 * 
 * @param {String} value 
 */
export const string_maxlength_error_message = (value: any): string => {
    return `\${{}} must have at most ${value} characters`;
};

/**
 * Minlength Error Message
 * 
 * @param {String} value 
 */
export const string_minlength_error_message = (value: any): string => {
    return `\${{}} must have at least ${value} characters`;
};

/**
 * Numeric Error Message
 * 
 * @param {String} value 
 */
export const string_numeric_error_message = (): string => {
    return `\${{}} must only have numeric characters`;
};

/**
 * Required Error Message
 * 
 */
export const string_required_error_message = (): string => {
    return `\${{}} is required`;
};

/**
 * URL Error Message
 *  
 */
export const string_url_error_message = (): string => {
    return "Invalid url value provided for ${{}}";
};