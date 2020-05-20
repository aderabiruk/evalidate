import Number from '../../dist/types/number';
import { number_type_error_message } from '../../dist/utils/errors';
import { NUMBER_VALIDATOR_TYPES, TYPES } from '../../dist/utils/constants';
import { number_equal_error_message, number_in_error_message, number_integer_error_message, number_max_error_message, number_min_error_message, number_required_error_message, number_latitude_error_message, number_longitude_error_message } from '../../dist/messages/number';

describe("NumberValidator", () => {
    
    describe("equals", () => {
        it("Should add equals validator without message", () => {
            let validator = Number();
            validator.equals(10);

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_equal_error_message(), value: 10, type: NUMBER_VALIDATOR_TYPES.EQUAL});
        });

        it("Should add equals validator with message", () => {
            let validator = Number();
            validator.equals(10, "Equal Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Equal Error Message!", value: 10, type: NUMBER_VALIDATOR_TYPES.EQUAL});
        });
    });

    describe("in", () => {
        it("Should add in validator without message", () => {
            let validator = Number();
            validator.in([1, 2]);

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_in_error_message(), value: [1, 2], type: NUMBER_VALIDATOR_TYPES.IN});
        });

        it("Should add in validator with message", () => {
            let validator = Number();
            validator.in([1, 2], "Equal Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Equal Error Message!", value: [1, 2], type: NUMBER_VALIDATOR_TYPES.IN});
        });
    });

    describe("integer", () => {
        it("Should add integer validator without message", () => {
            let validator = Number();
            validator.integer();

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_integer_error_message(), type: NUMBER_VALIDATOR_TYPES.INTEGER});
        });

        it("Should add integer validator with message", () => {
            let validator = Number();
            validator.integer("Integer Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Integer Error Message!", type: NUMBER_VALIDATOR_TYPES.INTEGER});
        });
    });

    describe("latitude", () => {
        it("Should add latitude validator without message", () => {
            let validator = Number();
            validator.latitude();

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_latitude_error_message(), type: NUMBER_VALIDATOR_TYPES.LATITUDE});
        });

        it("Should add latitude validator with message", () => {
            let validator = Number();
            validator.latitude("Latitude Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Latitude Error Message!", type: NUMBER_VALIDATOR_TYPES.LATITUDE});
        });
    });

    describe("longitude", () => {
        it("Should add longitude validator without message", () => {
            let validator = Number();
            validator.longitude();

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_longitude_error_message(), type: NUMBER_VALIDATOR_TYPES.LONGITUDE});
        });

        it("Should add longitude validator with message", () => {
            let validator = Number();
            validator.longitude("Longitude Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Longitude Error Message!", type: NUMBER_VALIDATOR_TYPES.LONGITUDE});
        });
    });

    describe("max", () => {
        it("Should add max validator without message", () => {
            let validator = Number();
            validator.max(10);

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_max_error_message(10), value: 10, type: NUMBER_VALIDATOR_TYPES.MAX});
        });

        it("Should add max validator with message", () => {
            let validator = Number();
            validator.max(10, "Max Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Max Error Message!", value: 10, type: NUMBER_VALIDATOR_TYPES.MAX});
        });
    });

    describe("min", () => {
        it("Should add min validator without message", () => {
            let validator = Number();
            validator.min(10);

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_min_error_message(10), value: 10, type: NUMBER_VALIDATOR_TYPES.MIN});
        });

        it("Should add min validator with message", () => {
            let validator = Number();
            validator.min(10, "Min Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Min Error Message!", value: 10, type: NUMBER_VALIDATOR_TYPES.MIN});
        });
    });

    describe("required", () => {
        it("Should add required validator without message", () => {
            let validator = Number();
            validator.required();

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_required_error_message(), type: NUMBER_VALIDATOR_TYPES.REQUIRED});
        });

        it("Should add required validator with message", () => {
            let validator = Number  ();
            validator.required("Required Error Message!");

            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: number_type_error_message("${{}}"), type: NUMBER_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.NUMBER, message: "Required Error Message!", type: NUMBER_VALIDATOR_TYPES.REQUIRED});
        });
    });

});