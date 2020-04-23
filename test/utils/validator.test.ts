import { isArray, isBoolean, isDate, isInteger, isNumber, isString } from '../../dist/utils/validators';

describe("Validator", () => {
    describe("isArray", () => {
        it("Should return true if input is array", () => {
            expect(isArray([])).toBeTruthy();
            expect(isArray([1,2,3,4,5])).toBeTruthy();
        });

        it("Should return false if input is not array", () => {
            expect(isArray("INVALID-DATE")).toBeFalsy();
            expect(isArray(null)).toBeFalsy();
        });
    });

    describe("isBoolean", () => {
        it("Should return true if input is boolean", () => {
            expect(isBoolean(true)).toBeTruthy();
            expect(isBoolean(false)).toBeTruthy();
        });

        it("Should return false if input is not date", () => {
            expect(isBoolean("INVALID-DATE")).toBeFalsy();
            expect(isBoolean(null)).toBeFalsy();
        });
    });

    describe("isDate", () => {
        it("Should return true if input is date", () => {
            expect(isDate(new Date())).toBeTruthy();
            expect(isDate("2019-01-01")).toBeTruthy();
            expect(isDate(10000)).toBeTruthy();
        });

        it("Should return false if input is not date", () => {
            expect(isDate("INVALID-DATE")).toBeFalsy();
            expect(isDate(null)).toBeFalsy();
        });
    });

    describe("isInteger", () => {
        it("Should return true if input is number", () => {
            expect(isInteger(100)).toBeTruthy();
            expect(isInteger(-100)).toBeTruthy();
        });

        it("Should return false if input is not number", () => {
            expect(isInteger("10")).toBeFalsy();
            expect(isInteger(15.5)).toBeFalsy();
            expect(isInteger("15.5")).toBeFalsy();
            expect(isInteger(null)).toBeFalsy();
            expect(isInteger([])).toBeFalsy();
        });
    });

    describe("isNumber", () => {
        it("Should return true if input is number", () => {
            expect(isNumber(100)).toBeTruthy();
            expect(isNumber(15.15)).toBeTruthy();
            expect(isNumber(-100)).toBeTruthy();
        });

        it("Should return false if input is not number", () => {
            expect(isNumber("10")).toBeFalsy();
            expect(isNumber(null)).toBeFalsy();
            expect(isNumber([])).toBeFalsy();
        });
    });

    describe("isString", () => {
        it("Should return true if input is string", () => {
            expect(isString("String")).toBeTruthy();
        });

        it("Should return false if input is not string", () => {
            expect(isString(10)).toBeFalsy();
            expect(isString(null)).toBeFalsy();
            expect(isString([])).toBeFalsy();
        });
    });


});