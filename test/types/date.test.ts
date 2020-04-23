import date from '../../dist/types/date';
import { date_type_error_message } from '../../dist/utils/errors';
import { DATE_VALIDATOR_TYPES, TYPES } from '../../dist/utils/constants';
import { date_equal_error_message, date_after_error_message, date_before_error_message, date_required_error_message } from '../../dist/messages/date';

describe("DateValidator", () => {
    
    describe("after", () => {
        it("Should add after validator without message", () => {
            let d = new Date();
            let validator = date();
            validator.after(d);
            
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_after_error_message(d), value: d, type: DATE_VALIDATOR_TYPES.AFTER});
        });

        it("Should add after validator with message", () => {
            let d = new Date();
            let validator = date();
            validator.after(d, "After Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: "After Error Message!", value: d, type: DATE_VALIDATOR_TYPES.AFTER});
        });
    });

    describe("before", () => {
        it("Should add before validator without message", () => {
            let d = new Date();
            let validator = date();
            validator.before(d);
            
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_before_error_message(d), value: d, type: DATE_VALIDATOR_TYPES.BEFORE});
        });

        it("Should add before validator with message", () => {
            let d = new Date();
            let validator = date();
            validator.before(d, "Before Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: "Before Error Message!", value: d, type: DATE_VALIDATOR_TYPES.BEFORE});
        });
    });

    describe("equals", () => {
        it("Should add equals validator without message", () => {
            let d = new Date();
            let validator = date();
            validator.equals(d);
            
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_equal_error_message(), value: d, type: DATE_VALIDATOR_TYPES.EQUAL});
        });

        it("Should add equals validator with message", () => {
            let d = new Date();
            let validator = date();
            validator.equals(d, "Date Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: "Date Error Message!", value: d, type: DATE_VALIDATOR_TYPES.EQUAL});
        });
    });

    describe("required", () => {
        it("Should add required validator without message", () => {
            let validator = date();
            validator.required();

            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_required_error_message(), type: DATE_VALIDATOR_TYPES.REQUIRED});
        });

        it("Should add required validator with message", () => {
            let validator = date  ();
            validator.required("Required Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: date_type_error_message("${{}}"), type: DATE_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.DATE, message: "Required Error Message!", type: DATE_VALIDATOR_TYPES.REQUIRED});
        });
    });

});