import array from '../../dist/types/array';
import { array_type_error_message } from '../../dist/utils/errors';
import { ARRAY_VALIDATOR_TYPES, TYPES } from '../../dist/utils/constants';
import { array_equal_error_message, array_size_error_message, array_contains_error_message, array_required_error_message } from '../../dist/messages/array';



describe("ArrayValidator", () => {

    describe("contains", () => {
        it("Should add contains validator without message", () => {
            let validator = array();
            validator.contains(5);
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_type_error_message("${{}}"), type: ARRAY_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_contains_error_message(5), value: 5, type: ARRAY_VALIDATOR_TYPES.CONTAINS});
        });

        it("Should add contains validator with message", () => {
            let validator = array();
            validator.contains(5, "Array Error Message!");
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: "Array Error Message!", value: 5, type: ARRAY_VALIDATOR_TYPES.CONTAINS});
        });
    });

    describe("equals", () => {
        it("Should add equals validator without message", () => {
            let validator = array();
            validator.equals([1,2,3,4,5]);
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_type_error_message("${{}}"), type: ARRAY_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_equal_error_message(), value: [1,2,3,4,5], type: ARRAY_VALIDATOR_TYPES.EQUAL});
        });

        it("Should add equals validator with message", () => {
            let validator = array();
            validator.equals([1,2,3,4,5], "Array Error Message!");
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_type_error_message("${{}}"), type: ARRAY_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: "Array Error Message!", value: [1,2,3,4,5], type: ARRAY_VALIDATOR_TYPES.EQUAL});
        });
    });

    describe("required", () => {
        it("Should add required validator without message", () => {
            let validator = array();
            validator.required();
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_required_error_message(), type: ARRAY_VALIDATOR_TYPES.REQUIRED});
        });

        it("Should add required validator with message", () => {
            let validator = array();
            validator.required("Array Error Message!");
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_type_error_message("${{}}"), type: ARRAY_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: "Array Error Message!", type: ARRAY_VALIDATOR_TYPES.REQUIRED});
        });
    });

    describe("size", () => {
        it("Should add size validator without message", () => {
            let validator = array();
            validator.size(5);
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_type_error_message("${{}}"), type: ARRAY_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_size_error_message(5), value: 5, type: ARRAY_VALIDATOR_TYPES.SIZE});
        });

        it("Should add size validator with message", () => {
            let validator = array();
            validator.size(5, "Array Error Message!");
            
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: array_type_error_message("${{}}"), type: ARRAY_VALIDATOR_TYPES.TYPE});
            expect(validator.validators).toContainEqual({validator: TYPES.ARRAY, message: "Array Error Message!", value: 5, type: ARRAY_VALIDATOR_TYPES.SIZE});
        });
    });

});