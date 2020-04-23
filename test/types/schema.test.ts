import * as moment from 'moment';

import date from '../../dist/types/date';
import array from '../../dist/types/array';
import object from '../../dist/types/object';
import Schema from '../../dist/types/schema';
import number from '../../dist/types/number';
import string from '../../dist/types/string';
import boolean from '../../dist/types/boolean';
import { boolean_equal_error_message, boolean_required_error_message } from '../../dist/messages/boolean';
import { date_after_error_message, date_before_error_message, date_equal_error_message, date_required_error_message } from '../../dist/messages/date';
import { array_equal_error_message, array_required_error_message, array_contains_error_message, array_size_error_message } from '../../dist/messages/array';
import { STRING_VALIDATOR_TYPES, NUMBER_VALIDATOR_TYPES, DATE_VALIDATOR_TYPES, BOOLEAN_VALIDATOR_TYPES, TYPES, ARRAY_VALIDATOR_TYPES } from '../../dist/utils/constants';
import {  number_equal_error_message,  number_in_error_message,  number_integer_error_message,  number_max_error_message,  number_min_error_message,  number_required_error_message  } from '../../dist/messages/number';
import {  string_email_error_message,  string_maxlength_error_message,  string_minlength_error_message,  string_required_error_message,  string_equal_error_message, string_in_error_message } from '../../dist/messages/string';


describe("Schema", () => {
    
    describe("Array Schemas", () => {
        it("Should create schema for equals", () => {
            let schema = new Schema({
                list: array().equals([1,2,3])
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                value: [1,2,3],
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.EQUAL,
                message: array_equal_error_message()
            });
        });

        it("Should create schema for equals with message", () => {
            let schema = new Schema({
                list: array().equals([1,2,3], "Array Error Message!")
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                value: [1,2,3],
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.EQUAL,
                message: "Array Error Message!"
            });
        });

        it("Should create schema for contains", () => {
            let schema = new Schema({
                list: array().contains(5)
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                validator: TYPES.ARRAY,
                value: 5,
                type: ARRAY_VALIDATOR_TYPES.CONTAINS,
                message: array_contains_error_message(5)
            });
        });

        it("Should create schema for contains with message", () => {
            let schema = new Schema({
                list: array().contains(5, "Array Error Message!")
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                value: 5,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.CONTAINS,
                message: "Array Error Message!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                list: array().required()
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.REQUIRED,
                message: array_required_error_message()
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                list: array().required("Array Error Message!")
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.REQUIRED,
                message: "Array Error Message!"
            });
        });

        it("Should create schema for size", () => {
            let schema = new Schema({
                list: array().size(5)
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                value: 5,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.SIZE,
                message: array_size_error_message(5)
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                list: array().size(5, "Array Error Message!")
            });
            
            expect(schema.schema["list"]).toBeTruthy();
            expect(schema.schema["list"].validators).toContainEqual({
                value: 5,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.SIZE,
                message: "Array Error Message!"
            });
        });
    
    });

    describe("String Schemas", () => {
        it("Should create schema for email", () => {
            let schema = new Schema({
                email: string().email()
            });
            
            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: string_email_error_message()
            });
        });

        it("Should create schema for email with message", () => {
            let schema = new Schema({
                email: string().email('Email Error!')
            });

            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: 'Email Error!'
            });
        });

        it("Should create schema for equal", () => {
            let schema = new Schema({
                status: string().equals("Active")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: "Active",
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.EQUAL,
                message: string_equal_error_message()
            });
        });

        it("Should create schema for equal with message", () => {
            let schema = new Schema({
                status: string().equals("Active", "String Equal Error Message!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: "Active",
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.EQUAL,
                message: "String Equal Error Message!"
            });
        });

        it("Should create schema for in", () => {
            let schema = new Schema({
                status: string().in(["Active", "Deactive"])
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.IN,
                message: string_in_error_message()
            });
        });

        it("Should create schema for in with message", () => {
            let schema = new Schema({
                status: string().in(["Active", "Deactive"], "String In Error Message!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.IN,
                message: "String In Error Message!"
            });
        });

        it("Should create schema for minlength", () => {
            let schema = new Schema({
                status: string().minlength(10)
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.MINLENGTH,
                message: string_minlength_error_message(10)
            });
        });
        
        it("Should create schema for minlength with message", () => {
            let schema = new Schema({
                status: string().minlength(10, "String Minlength Error!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.MINLENGTH,
                message: "String Minlength Error!"
            });
        });

        it("Should create schema for maxlength", () => {
            let schema = new Schema({
                status: string().maxlength(10)
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.MAXLENGTH,
                message: string_maxlength_error_message(10)
            });
        });
        
        it("Should create schema for maxlength with message", () => {
            let schema = new Schema({
                status: string().maxlength(10, "String Maxlength Error!")
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                value: 10,
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.MAXLENGTH,
                message: "String Maxlength Error!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                name: string().required()
            });
            
            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: string_required_error_message()
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                name: string().required('Required Error Message!')
            });

            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: 'Required Error Message!'
            });
        });

        it("Should create schema with mixed", () => {
            let schema = new Schema({
                name: string().required('Name is required!'),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
            });

            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: 'Name is required!'
            });

            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: string_email_error_message()
            });
            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Email is required!"
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Status is required!"
            });
            expect(schema.schema["status"].validators).toContainEqual({
                value: ["Active", "Deactive"],
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.IN,
                message: string_in_error_message()
            });
        });
    });

    describe("Number Schemas", () => {
        it("Should create schema for equals", () => {
            let schema = new Schema({
                code: number().equals(10)
            });
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.EQUAL,
                message: number_equal_error_message()
            });
        });

        it("Should create schema for equals with message", () => {
            let schema = new Schema({
                code: number().equals(10, "Number Equals Error!")
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.EQUAL,
                message: "Number Equals Error!"
            });
        });

        it("Should create schema for in", () => {
            let schema = new Schema({
                code: number().in([10, 20])
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: [10, 20],
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.IN,
                message: number_in_error_message()
            });
        });

        it("Should create schema for in with message", () => {
            let schema = new Schema({
                code: number().in([10, 20], "Number In Error!")
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                value: [10, 20],
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.IN,
                message: "Number In Error!"
            });
        });

        it("Should create schema for integer", () => {
            let schema = new Schema({
                code: number().integer()
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.INTEGER,
                message: number_integer_error_message()
            });
        });

        it("Should create schema for integer with message", () => {
            let schema = new Schema({
                code: number().integer("Number Integer Error!")
            });
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.INTEGER,
                message: "Number Integer Error!"
            });
        });

        it("Should create schema for max", () => {
            let schema = new Schema({
                age: number().max(10)
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: number_max_error_message(10)
            });
        });

        it("Should create schema for max with message", () => {
            let schema = new Schema({
                age: number().max(10, "Number Max Error!")
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: "Number Max Error!"
            });
        });

        it("Should create schema for min", () => {
            let schema = new Schema({
                age: number().min(10)
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: number_min_error_message(10)
            });
        });

        it("Should create schema for min with message", () => {
            let schema = new Schema({
                age: number().min(10, "Number Min Error!")
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: "Number Min Error!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                age: number().required()
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: number_required_error_message()
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                age: number().required("Number Required Error!")
            });
            
            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: "Number Required Error!"
            });
        });
    });

    describe("Date Schemas", () => {
        it("Should create schema for after", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().after(input)
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.AFTER,
                message: date_after_error_message(input)
            });
        });

        it("Should create schema for after with message", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().after(input, "Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.AFTER,
                message: "Date Error Message!"
            });
        });

        it("Should create schema for before", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().before(input)
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.BEFORE,
                message: date_before_error_message(input)
            });
        });

        it("Should create schema for before with message", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().before(input, "Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.BEFORE,
                message: "Date Error Message!"
            });
        });

        it("Should create schema for equal", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().equals(input)
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.EQUAL,
                message: date_equal_error_message()
            });
        });

        it("Should create schema for equal with message", () => {
            let input = new Date();
            let schema = new Schema({
                date: date().equals(input, "Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                value: input,
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.EQUAL,
                message: "Date Error Message!"
            });
        });

        it("Should create schema for requried", () => {
            let schema = new Schema({
                date: date().required()
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: date_required_error_message()
            });
        });

        it("Should create schema for requried with message", () => {
            let schema = new Schema({
                date: date().required("Date Error Message!")
            });
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: "Date Error Message!"
            });
        });

    });

    describe("Boolean Schemas", () => {
        it("Should create schema for equals", () => {
            let schema = new Schema({
                isActive: boolean().equals(true)
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                value: true,
                validator: TYPES.BOOLEAN,
                type: BOOLEAN_VALIDATOR_TYPES.EQUAL,
                message: boolean_equal_error_message()
            });
        });

        it("Should create schema for equals with message", () => {
            let schema = new Schema({
                isActive: boolean().equals(true, "Boolean Error Message!")
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                value: true,
                validator: TYPES.BOOLEAN,
                type: BOOLEAN_VALIDATOR_TYPES.EQUAL,
                message: "Boolean Error Message!"
            });
        });

        it("Should create schema for required", () => {
            let schema = new Schema({
                isActive: boolean().required()
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                validator: TYPES.BOOLEAN,
                type: BOOLEAN_VALIDATOR_TYPES.REQUIRED,
                message: boolean_required_error_message()
            });
        });

        it("Should create schema for required with message", () => {
            let schema = new Schema({
                isActive: boolean().required("Boolean Error Message!")
            });
            
            expect(schema.schema["isActive"]).toBeTruthy();
            expect(schema.schema["isActive"].validators).toContainEqual({
                validator: TYPES.BOOLEAN,
                type: BOOLEAN_VALIDATOR_TYPES.REQUIRED,
                message: "Boolean Error Message!"
            });
        });
    
    });

    describe("validate (String)", () => {
        it("Should Generate Schema", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });

            expect(schema.schema["name"]).toBeTruthy();
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: 'Name is required!'
            });
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: 3,
                type: STRING_VALIDATOR_TYPES.MINLENGTH,
                message: string_minlength_error_message(3)
            });
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: 10,
                type: STRING_VALIDATOR_TYPES.MAXLENGTH,
                message: string_maxlength_error_message(10)
            });

            expect(schema.schema["email"]).toBeTruthy();
            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.EMAIL,
                message: string_email_error_message()
            });
            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Email is required!"
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Status is required!"
            });
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: string_in_error_message()
            });

            expect(schema.schema["type"]).toBeTruthy();
            expect(schema.schema["type"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: string_required_error_message()
            });
            expect(schema.schema["type"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: "Admin",
                type: STRING_VALIDATOR_TYPES.EQUAL,
                message: string_equal_error_message()
            });
        });

        it("Should Replace Fields", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });
            schema.init({});
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: 3,
                type: STRING_VALIDATOR_TYPES.MINLENGTH,
                message: 'name must have at least 3 characters'
            });
            expect(schema.schema["name"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: 10,
                type: STRING_VALIDATOR_TYPES.MAXLENGTH,
                message: 'name must have at most 10 characters'
            });

            expect(schema.schema["email"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: "Email is required!"
            });

            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: ["Active", "Deactive"],
                type: STRING_VALIDATOR_TYPES.IN,
                message: 'Invalid value provided for status'
            });

            expect(schema.schema["type"]).toBeTruthy();
            expect(schema.schema["type"].validators).toContainEqual({
                validator: TYPES.STRING,
                type: STRING_VALIDATOR_TYPES.REQUIRED,
                message: `type is required`
            });
            expect(schema.schema["type"].validators).toContainEqual({
                validator: TYPES.STRING,
                value: "Admin",
                type: STRING_VALIDATOR_TYPES.EQUAL,
                message: 'Invalid value provided for type'
            });
        });

        it("validate Case #1", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });
            let result = schema.validate({});

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'name', message: "Name is required!"
            });
            expect(result.errors).toContainEqual({
                field: 'email', message: "Email is required!"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Status is required!"
            });
            expect(result.errors).toContainEqual({
                field: 'type', message: "type is required"
            });
        });

        it("validate Case #2", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });
            let result = schema.validate({
                name: "A",
                email: "invalid",
                status: "invalid",
                type: "invalid"
            });
            
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'name', message: "name must have at least 3 characters"
            });
            expect(result.errors).toContainEqual({
                field: 'email', message: "Email address is invalid"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value provided for status"
            });
            expect(result.errors).toContainEqual({
                field: 'type', message: "Invalid value provided for type"
            });
        });

        it("validate Case #3", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });
            let result = schema.validate({
                name: "12345678901234567890",
                email: "invalid",
                status: "invalid",
                type: "invalid"
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'name', message: "name must have at most 10 characters"
            });
            expect(result.errors).toContainEqual({
                field: 'email', message: "Email address is invalid"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value provided for status"
            });
            expect(result.errors).toContainEqual({
                field: 'type', message: "Invalid value provided for type"
            });
        });

        it("validate Case #4", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });
            let result = schema.validate({
                name: [],
                email: "invalid",
                status: "invalid",
                type: "invalid"
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'name', message: "name must be a string"
            });
            expect(result.errors).toContainEqual({
                field: 'email', message: "Email address is invalid"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value provided for status"
            });
            expect(result.errors).toContainEqual({
                field: 'type', message: "Invalid value provided for type"
            });
        });

        it("validate Case #5", () => {
            let schema = new Schema({
                name: string().required('Name is required!').minlength(3).maxlength(10),
                email: string().required("Email is required!").email(),
                status: string().required("Status is required!").in(["Active", "Deactive"]),
                type: string().required().equals("Admin")
            });
            let result = schema.validate({
                name: "Biruk",
                email: "aderabiruk@gmail.com",
                status: "Active",
                type: "Admin"
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

    });

    describe("validate (Number)", () => {
        it("Should Generate Schema", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });

            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: number_required_error_message()
            });
            expect(schema.schema["code"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.EQUAL,
                message: number_equal_error_message()
            });

            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: number_required_error_message()
            });
            expect(schema.schema["age"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.INTEGER,
                message: number_integer_error_message()
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 100,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: number_max_error_message(100)
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 0,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: number_min_error_message(0)
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: number_required_error_message()
            });
            expect(schema.schema["status"].validators).toContainEqual({
                value: [1, 2, 3, 4, 5],
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.IN,
                message: number_in_error_message()
            });
        });

        it("Should Replace Fields", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            schema.init({});
            
            expect(schema.schema["code"]).toBeTruthy();
            expect(schema.schema["code"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: "code is required"
            });
            expect(schema.schema["code"].validators).toContainEqual({
                value: 10,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.EQUAL,
                message: "Invalid value provided for code"
            });

            expect(schema.schema["age"]).toBeTruthy();
            expect(schema.schema["age"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: "age is required"
            });
            expect(schema.schema["age"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.INTEGER,
                message: "age must be an integer"
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 100,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MAX,
                message: "age must be less than 100"
            });
            expect(schema.schema["age"].validators).toContainEqual({
                value: 0,
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.MIN,
                message: "age must be greater than 0"
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.REQUIRED,
                message: "status is required"
            });
            expect(schema.schema["status"].validators).toContainEqual({
                value: [1, 2, 3, 4, 5],
                validator: TYPES.NUMBER,
                type: NUMBER_VALIDATOR_TYPES.IN,
                message: "Invalid value provided for status"
            });
        });

        it("validate Case #1", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            let result = schema.validate({});

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'code', message: "code is required"
            });
            expect(result.errors).toContainEqual({
                field: 'age', message: "age is required"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "status is required"
            });
        });

        it("validate Case #2", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            let result = schema.validate({
                code: 5,
                age: 1.5,
                status: 0
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'code', message: "Invalid value provided for code"
            });
            expect(result.errors).toContainEqual({
                field: 'age', message: "age must be an integer"
            });
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value provided for status"
            });
        });

        it("validate Case #3", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            let result = schema.validate({
                code: 10,
                age: -5,
                status: 1
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'age', message: "age must be greater than 0"
            });
        });

        it("validate Case #4", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            let result = schema.validate({
                code: 10,
                age: 101,
                status: 1
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'age', message: "age must be less than 100"
            });
        });

        it("validate Case #5", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            let result = schema.validate({
                code: "invalid",
                age: 101,
                status: 1
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'code', message: "code must be a number"
            });
            expect(result.errors).toContainEqual({
                field: 'age', message: "age must be less than 100"
            });
        });

        it("validate Case #6", () => {
            let schema = new Schema({
                code: number().required().equals(10),
                age: number().required().integer().min(0).max(100),
                status: number().required().in([1, 2, 3, 4, 5])
            });
            let result = schema.validate({
                code: 10,
                age: 100,
                status: 1
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });

    describe("validate (Date)", () => {
        let today = moment(), 
            yesterday = moment().subtract(1, 'days'), 
            tomorrow = moment().add(1, 'days');

        it("Should Generate Schema", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });

            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: date_required_error_message()
            });
            expect(schema.schema["date"].validators).toContainEqual({
                validator: TYPES.DATE,
                value: today,
                type: DATE_VALIDATOR_TYPES.EQUAL,
                message: date_equal_error_message()
            });

            expect(schema.schema["birthday"]).toBeTruthy();
            expect(schema.schema["birthday"].validators).toContainEqual({
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: date_required_error_message()
            });
            expect(schema.schema["birthday"].validators).toContainEqual({
                validator: TYPES.DATE,
                value: yesterday,
                type: DATE_VALIDATOR_TYPES.AFTER,
                message: date_after_error_message(yesterday)
            });
            expect(schema.schema["birthday"].validators).toContainEqual({
                validator: TYPES.DATE,
                value: tomorrow,
                type: DATE_VALIDATOR_TYPES.BEFORE,
                message: date_before_error_message(tomorrow)
            });
        });

        it("Should Replace Fields", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });
            schema.init({});
            
            expect(schema.schema["date"]).toBeTruthy();
            expect(schema.schema["date"].validators).toContainEqual({
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: 'date is required'
            });
            expect(schema.schema["date"].validators).toContainEqual({
                validator: TYPES.DATE,
                value: today,
                type: DATE_VALIDATOR_TYPES.EQUAL,
                message: 'Invalid value provided for date'
            });

            expect(schema.schema["birthday"]).toBeTruthy();
            expect(schema.schema["birthday"].validators).toContainEqual({
                validator: TYPES.DATE,
                type: DATE_VALIDATOR_TYPES.REQUIRED,
                message: 'birthday is required'
            });
            expect(schema.schema["birthday"].validators).toContainEqual({
                validator: TYPES.DATE,
                value: yesterday,
                type: DATE_VALIDATOR_TYPES.AFTER,
                message: `birthday must be after ${yesterday}`
            });
            expect(schema.schema["birthday"].validators).toContainEqual({
                validator: TYPES.DATE,
                value: tomorrow,
                type: DATE_VALIDATOR_TYPES.BEFORE,
                message: `birthday must be before ${tomorrow}`
            });
        });

        it("validate Case #1", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });
            let result = schema.validate({});

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'date', message: "date is required"
            });
            expect(result.errors).toContainEqual({
                field: 'birthday', message: "birthday is required"
            });
        });

        it("validate Case #2", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });
            let result = schema.validate({
                date: tomorrow,
                birthday: moment().subtract(2, 'day')
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'date', message: "Invalid value provided for date"
            });
            expect(result.errors).toContainEqual({
                field: 'birthday', message: `birthday must be after ${yesterday}`
            });
        });

        it("validate Case #3", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });
            let result = schema.validate({
                date: today,
                birthday: moment().add(2, 'day')
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'birthday', message: `birthday must be before ${tomorrow}`
            });
        });

        it("validate Case #4", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });
            let result = schema.validate({
                date: "invalid-date",
                birthday: moment()
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'date', message: `date must be a date`
            });
        });

        it("validate Case #5", () => {
            let schema = new Schema({
                date: date().required().equals(today),
                birthday: date().required().after(yesterday).before(tomorrow)
            });
            let result = schema.validate({
                date: today,
                birthday: moment()
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

    });

    describe("validate (Boolean)", () => {
        it("Should Generate Schema", () => {
            let schema = new Schema({
                status: boolean().required().equals(false)
            });

            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.BOOLEAN,
                type: BOOLEAN_VALIDATOR_TYPES.REQUIRED,
                message: boolean_required_error_message()
            });
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.BOOLEAN,
                value: false,
                type: BOOLEAN_VALIDATOR_TYPES.EQUAL,
                message: boolean_equal_error_message()
            });
        });

        it("Should Replace Fields", () => {
            let schema = new Schema({
                status: boolean().required().equals(false)
            });
            schema.init({});
            
            expect(schema.schema["status"]).toBeTruthy();
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.BOOLEAN,
                type: BOOLEAN_VALIDATOR_TYPES.REQUIRED,
                message: 'status is required'
            });
            expect(schema.schema["status"].validators).toContainEqual({
                validator: TYPES.BOOLEAN,
                value: false,
                type: BOOLEAN_VALIDATOR_TYPES.EQUAL,
                message: 'Invalid value provided for status'
            });
        });

        it("validate Case #1", () => {
            let schema = new Schema({
                status: boolean().required().equals(false)
            });
            let result = schema.validate({});

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'status', message: "status is required"
            });
        });

        it("validate Case #2", () => {
            let schema = new Schema({
                status: boolean().required().equals(false)
            });
            let result = schema.validate({
                status: true
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'status', message: "Invalid value provided for status"
            });
        });

        it("validate Case #3", () => {
            let schema = new Schema({
                status: boolean().required().equals(false)
            });
            let result = schema.validate({
                status: "invalid"
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'status', message: "status must be a boolean"
            });
        });

        it("validate Case #4", () => {
            let schema = new Schema({
                status: boolean().required().equals(false)
            });
            let result = schema.validate({
                status: false
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

    });

    describe("validate (Array)", () => {
        it("Should Generate Schema", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });

            expect(schema.schema["list1"]).toBeTruthy();
            expect(schema.schema["list1"].validators).toContainEqual({
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.REQUIRED,
                message: array_required_error_message()
            });
            expect(schema.schema["list1"].validators).toContainEqual({
                value: 1,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.CONTAINS,
                message: array_contains_error_message(1)
            });
            expect(schema.schema["list1"].validators).toContainEqual({
                value: 5,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.SIZE,
                message: array_size_error_message(5)
            });

            expect(schema.schema["list2"]).toBeTruthy();
            expect(schema.schema["list2"].validators).toContainEqual({
                value: [1,2,3,4,5],
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.EQUAL,
                message: array_equal_error_message()
            });
        });

        it("Should Replace Fields", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });
            schema.init({});
            
            expect(schema.schema["list1"]).toBeTruthy();
            expect(schema.schema["list1"].validators).toContainEqual({
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.REQUIRED,
                message: `list1 is required`
            });
            expect(schema.schema["list1"].validators).toContainEqual({
                value: 1,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.CONTAINS,
                message: `list1 must contain 1`
            });
            expect(schema.schema["list1"].validators).toContainEqual({
                value: 5,
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.SIZE,
                message: `list1 must have 5 elements`
            });

            expect(schema.schema["list2"]).toBeTruthy();
            expect(schema.schema["list2"].validators).toContainEqual({
                value: [1,2,3,4,5],
                validator: TYPES.ARRAY,
                type: ARRAY_VALIDATOR_TYPES.EQUAL,
                message: `Invalid value provided for list2`
            });
        });

        it("validate Case #1", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });
            let result = schema.validate({});

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 is required"
            });
        });

        it("validate Case #2", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });
            let result = schema.validate({
                list1: [2,3,4,5],
                list2: [1,2,3,4]
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 must contain 1"
            });
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 must have 5 elements"
            });
            expect(result.errors).toContainEqual({
                field: 'list2', message: "Invalid value provided for list2"
            });
        });

        it("validate Case #3", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });
            let result = schema.validate({
                list1: [1,2,3,4],
                list2: [1,2,3,4,5]
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 must have 5 elements"
            });
        });

        it("validate Case #4", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });
            let result = schema.validate({
                list1: [1,2,3,4],
                list2: "invalid-2"
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: 'list1', message: "list1 must have 5 elements"
            });
            expect(result.errors).toContainEqual({
                field: 'list2', message: "list2 must be an array"
            });
        });

        it("validate Case #5", () => {
            let schema = new Schema({
                list1: array().required().contains(1).size(5),
                list2: array().equals([1,2,3,4,5])
            });
            let result = schema.validate({
                list1: [1,2,3,4,5],
                list2: [1,2,3,4,5]
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

    });

    describe('validate (Object)', () => {
        it("Case #1", () => {
            let schema = new Schema({
                name: array().size(10),
                location: object({
                    latitude: number().required(),
                    longitude: number().required()
                })
            });
            let result = schema.validate({});
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "location.latitude",
                message: "latitude is required"
            });
            expect(result.errors).toContainEqual({
                field: "location.longitude",
                message: "longitude is required"
            }); 
        });

        it("Case #2", () => {
            let schema = new Schema({
                name: array().size(10),
                location: object({
                    latitude: number().required(),
                    longitude: number().required()
                })
            });
            let result = schema.validate({
                name: "invalid",
                location: {
                    latitude: "invalid",
                    longitude: 250
                }
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "location.latitude",
                message: "latitude must be a number"
            });
            expect(result.errors).toContainEqual({
                field: "name",
                message: "name must be an array"
            }); 
        });

        it("Case #3", () => {
            let schema = new Schema({
                name: array().size(10),
                location: object({
                    latitude: number().required().min(0),
                    longitude: number().required().min(0)
                })
            });
            let result = schema.validate({
                name: [1,2,3,4,5,6,7,8,9,0],
                location: {
                    latitude: -1,
                    longitude: -1
                }
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "location.latitude",
                message: "latitude must be greater than 0"
            });
            expect(result.errors).toContainEqual({
                field: "location.longitude",
                message: "longitude must be greater than 0"
            });
        });

        it("Case #4", () => {
            let schema = new Schema({
                name: array().size(10),
                location: object({
                    latitude: number().required().min(0),
                    longitude: number().required().min(0)
                })
            });
            let result = schema.validate({
                name: [1,2,3,4,5,6,7,8,9,0],
                location: {
                    latitude: 0,
                    longitude: 0
                }
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });

        it("Case #5", () => {
            let schema = new Schema({
                name: string().required("Name is required"),
                address: object({
                    city: object({
                        name: string().required("City is required")
                    }),
                    country: object({
                        name: string().required("Country is required"),
                        code: object({
                            name: number().required("Code is required").integer()
                        })
                    })
                })
            });
            let result = schema.validate({});
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "name",
                message: "Name is required"
            });
            expect(result.errors).toContainEqual({
                field: "address.city.name",
                message: "City is required"
            });
            expect(result.errors).toContainEqual({
                field: "address.country.name",
                message: "Country is required"
            });
            expect(result.errors).toContainEqual({
                field: "address.country.code.name",
                message: "Code is required"
            });
        });

        it("Case #6", () => {
            let schema = new Schema({
                name: string().required("Name is required"),
                address: object({
                    city: object({
                        name: string().required("City is required")
                    }),
                    country: object({
                        name: string().required("Country is required"),
                        code: object({
                            name: number().required("Code is required").integer()
                        })
                    })
                })
            });
            let result = schema.validate({
                name: "Biruk",
                address: {
                    city: {
                        name: []
                    },
                    country: {
                        name: "Ethiopia",
                        code: {
                            name: 1.25
                        }
                    }
                }
            });
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "address.city.name",
                message: "name must be a string"
            });
            expect(result.errors).toContainEqual({
                field: "address.country.code.name",
                message: "name must be an integer"
            });
        });

        it("Case #7", () => {
            let schema = new Schema({
                name: string().required("Name is required"),
                address: object({
                    city: object({
                        name: string().required("City is required")
                    }),
                    country: object({
                        name: string().required("Country is required"),
                        code: object({
                            name: number().required("Code is required").integer()
                        })
                    })
                })
            });
            let result = schema.validate({
                name: "Biruk",
                address: {
                    city: {
                        name:"Addis Ababa"
                    },
                    country: {
                        name: "Ethiopia",
                        code: {
                            name: 251
                        }
                    }
                }
            });
            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });

    describe("validate", () => {
        it("validate Case #1", () => {
            let schema = new Schema({
                name: string().required(),
                email: string().required().email(),
                phone_number: string().minlength(10),
                age: number().min(18),
                birthday: date().required(),
                status: boolean().equals(true)
            });
            let result = schema.validate({});
            
            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "name", message: `name is required`
            });
            expect(result.errors).toContainEqual({
                field: "email", message: `email is required`
            });
            expect(result.errors).toContainEqual({
                field: "birthday", message: `birthday is required`
            });
        });

        it("validate Case #2", () => {
            let schema = new Schema({
                name: string().required(),
                email: string().required().email(),
                phone_number: string().minlength(10),
                age: number().min(18),
                birthday: date().required(),
                status: boolean().equals(true)
            });
            let result = schema.validate({
                name: "Biruk",
                email: "invalid",
                birthday: new Date()
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "email", message: `Email address is invalid`
            });
        });

        it("validate Case #3", () => {
            let schema = new Schema({
                name: string().required(),
                email: string().required().email(),
                phone_number: string().minlength(10),
                age: number().min(18),
                birthday: date().required(),
                status: boolean().equals(true)
            });
            let result = schema.validate({
                name: "Biruk",
                email: "aderabiruk@gmail.com",
                phone_number: "123456789",
                birthday: new Date()
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "phone_number", message: `phone_number must have at least 10 characters`
            });
        });

        it("validate Case #4", () => {
            let schema = new Schema({
                name: string().required(),
                email: string().required().email(),
                phone_number: string().minlength(10),
                age: number().min(18),
                birthday: date().required(),
                status: boolean().equals(true)
            });
            let result = schema.validate({
                name: "Biruk",
                email: "aderabiruk@gmail.com",
                phone_number: "0912365120",
                age: 17,
                birthday: new Date(),
                status: false
            });

            expect(result.isValid).toBeFalsy();
            expect(result.errors).toContainEqual({
                field: "age", message: `age must be greater than 18`
            });
            expect(result.errors).toContainEqual({
                field: "status", message: `Invalid value provided for status`
            });
        });

        it("validate Case #5", () => {
            let schema = new Schema({
                name: string().required(),
                email: string().required().email(),
                phone_number: string().minlength(10),
                age: number().min(18),
                birthday: date().required(),
                status: boolean().equals(true)
            });
            let result = schema.validate({
                name: "Biruk",
                email: "aderabiruk@gmail.com",
                phone_number: "0912365120",
                age: 18,
                birthday: new Date()
            });

            expect(result.isValid).toBeTruthy();
            expect(result.errors.length).toBe(0);
        });
    });

});