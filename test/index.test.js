import evalidate from '../dist/index';
const evalidate2 = require("../dist/index");

describe("Main File", () => {
    
    describe("String", () => {
        describe('Import', () => {
            it("Scenario #1", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate.string().required("Email is required!").email(),
                    status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate.string().required().equals("Admin"),
                    credit: evalidate.string().alphanumeric().credit_card(),
                    website: evalidate.string().url(),
                    age: evalidate.string().numeric('Age must be numeric')
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
    
            it("Scenario #2", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate.string().required("Email is required!").email(),
                    status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate.string().required().equals("Admin"),
                    credit: evalidate.string().alphanumeric().credit_card(),
                    website: evalidate.string().url(),
                    age: evalidate.string().numeric('Age must be numeric')
                });
                let result = schema.validate({
                    name: "jo",
                    email: "aderabiruk",
                    status: "Unknown",
                    type: "User",
                    age: 'qwerty'
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
                expect(result.errors).toContainEqual({
                    field: 'age', message: "Age must be numeric"
                });
            });

            it("Scenario #3", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate.string().required("Email is required!").email(),
                    status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate.string().required().equals("Admin"),
                    credit: evalidate.string().alphanumeric().credit_card(),
                    website: evalidate.string().url(),
                    age: evalidate.string().numeric()
                });
                let result = schema.validate({
                    name: "jo",
                    email: "aderabiruk",
                    status: "Unknown",
                    type: "User",
                    credit: "!@#$%%^&*(()",
                    website: 'invalid-website',
                    age: "qwerty"
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
                expect(result.errors).toContainEqual({
                    field: 'credit', message: "credit must be alphanumeric"
                });
                expect(result.errors).toContainEqual({
                    field: 'credit', message: "Credit card number is invalid"
                });
                expect(result.errors).toContainEqual({
                    field: 'website', message: "Invalid url value provided for website"
                });
                expect(result.errors).toContainEqual({
                    field: 'age', message: "age must only have numeric characters"
                });
            });

            it("Scenario #4", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate.string().required("Email is required!").email(),
                    status: evalidate.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate.string().required().equals("Admin"),
                    credit: evalidate.string().alphanumeric().credit_card(),
                    website: evalidate.string().url(),
                    age: evalidate.string().numeric()
                });
                let result = schema.validate({
                    name: "aderabiruk",
                    email: "aderabiruk@gmail.com",
                    status: "Active",
                    type: "Admin",
                    age: "23"
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });

        describe('Required', () => {
            it("Scenario #1", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate2.string().required("Email is required!").email(),
                    status: evalidate2.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate2.string().required().equals("Admin"),
                    credit: evalidate2.string().alphanumeric().credit_card(),
                    website: evalidate2.string().url(),
                    age: evalidate.string().numeric('Age must be numeric')
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
    
            it("Scenario #2", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate2.string().required("Email is required!").email(),
                    status: evalidate2.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate2.string().required().equals("Admin"),
                    credit: evalidate2.string().alphanumeric().credit_card(),
                    website: evalidate2.string().url(),
                    age: evalidate.string().numeric('Age must be numeric')
                });
                let result = schema.validate({
                    name: "jo",
                    email: "aderabiruk",
                    status: "Unknown",
                    type: "User",
                    age: "querty"
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
                expect(result.errors).toContainEqual({
                    field: 'age', message: "Age must be numeric"
                });
            });

            it("Scenario #3", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate2.string().required("Email is required!").email(),
                    status: evalidate2.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate2.string().required().equals("Admin"),
                    credit: evalidate2.string().alphanumeric().credit_card(),
                    website: evalidate2.string().url(),
                    age: evalidate.string().numeric()
                });
                let result = schema.validate({
                    name: "jo",
                    email: "aderabiruk",
                    status: "Unknown",
                    type: "User",
                    credit: "!@#$%%^&*(()",
                    website: 'invalid-website',
                    age: "querty"
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
                expect(result.errors).toContainEqual({
                    field: 'credit', message: "credit must be alphanumeric"
                });
                expect(result.errors).toContainEqual({
                    field: 'credit', message: "Credit card number is invalid"
                });
                expect(result.errors).toContainEqual({
                    field: 'website', message: "Invalid url value provided for website"
                });
                expect(result.errors).toContainEqual({
                    field: 'age', message: "age must only have numeric characters"
                });
            });

            it("Scenario #4", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required('Name is required!').minlength(3).maxlength(10),
                    email: evalidate2.string().required("Email is required!").email(),
                    status: evalidate2.string().required("Status is required!").in(["Active", "Deactive"]),
                    type: evalidate2.string().required().equals("Admin"),
                    credit: evalidate2.string().alphanumeric().credit_card(),
                    website: evalidate2.string().url(),
                    age: evalidate.string().numeric()
                });
                let result = schema.validate({
                    name: "aderabiruk",
                    email: "aderabiruk@gmail.com",
                    status: "Active",
                    type: "Admin",
                    age: "23"
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });
    });

    describe('Number', () => {
        describe('Import', () => {
            it("Scenario #1", () => {
                let schema = new evalidate.schema({
                    code: evalidate.number().equals(10),
                    age: evalidate.number().integer().min(0).max(100, "Max Error"),
                    status: evalidate.number().in([1, 2, 3, 4, 5], "In Error"),
                    latitude: evalidate.number().latitude(),
                    longitude: evalidate.number().longitude()
                });
                let result = schema.validate({});
    
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
    
            it("Scenario #2", () => {
                let schema = new evalidate.schema({
                    code: evalidate.number().equals(10),
                    age: evalidate.number().integer().min(0).max(100, "Max Error"),
                    status: evalidate.number().in([1, 2, 3, 4, 5], "In Error"),
                    latitude: evalidate.number().latitude(),
                    longitude: evalidate.number().longitude()
                });
                let result = schema.validate({
                    code: 9,
                    age: 101.5,
                    status: 6,
                    latitude: -91,
                    longitude: 181
                });
    
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'code', message: "Invalid value provided for code"
                });
                expect(result.errors).toContainEqual({
                    field: 'age', message: "Max Error"
                });
                expect(result.errors).toContainEqual({
                    field: 'age', message: "age must be an integer"
                });
                expect(result.errors).toContainEqual({
                    field: 'status', message: "In Error"
                });
                expect(result.errors).toContainEqual({
                    field: 'latitude', message: "latitude must be between -90 and 90 degrees"
                });
                expect(result.errors).toContainEqual({
                    field: 'longitude', message: "longitude must be between -180 and 180 degrees"
                });
            });
    
            it("Scenario #3", () => {
                let schema = new evalidate.schema({
                    code: evalidate.number().equals(10),
                    age: evalidate.number().integer().min(0).max(100, "Max Error"),
                    status: evalidate.number().in([1, 2, 3, 4, 5], "In Error")
                });
                let result = schema.validate({
                    code: 10,
                    age: 100,
                    status: 5,
                    latitude: 90,
                    longitude: -180
                });
    
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });

        describe('Require', () => {
            it("Scenario #1", () => {
                let schema = new evalidate2.schema({
                    code: evalidate2.number().equals(10),
                    age: evalidate2.number().integer().min(0).max(100, "Max Error"),
                    status: evalidate2.number().in([1, 2, 3, 4, 5], "In Error"),
                    latitude: evalidate.number().latitude(),
                    longitude: evalidate.number().longitude()
                });
                let result = schema.validate({});
    
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
    
            it("Scenario #2", () => {
                let schema = new evalidate2.schema({
                    code: evalidate2.number().equals(10),
                    age: evalidate2.number().integer().min(0).max(100, "Max Error"),
                    status: evalidate2.number().in([1, 2, 3, 4, 5], "In Error"),
                    latitude: evalidate.number().latitude(),
                    longitude: evalidate.number().longitude()
                });
                let result = schema.validate({
                    code: 9,
                    age: 101.5,
                    status: 6,
                    latitude: -91,
                    longitude: 181
                });
    
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'code', message: "Invalid value provided for code"
                });
                expect(result.errors).toContainEqual({
                    field: 'age', message: "Max Error"
                });
                expect(result.errors).toContainEqual({
                    field: 'age', message: "age must be an integer"
                });
                expect(result.errors).toContainEqual({
                    field: 'status', message: "In Error"
                });
                expect(result.errors).toContainEqual({
                    field: 'latitude', message: "latitude must be between -90 and 90 degrees"
                });
                expect(result.errors).toContainEqual({
                    field: 'longitude', message: "longitude must be between -180 and 180 degrees"
                });
            });
    
            it("Scenario #3", () => {
                let schema = new evalidate2.schema({
                    code: evalidate2.number().equals(10),
                    age: evalidate2.number().integer().min(0).max(100, "Max Error"),
                    status: evalidate2.number().in([1, 2, 3, 4, 5], "In Error"),
                    latitude: evalidate.number().latitude(),
                    longitude: evalidate.number().longitude()
                });
                let result = schema.validate({
                    code: 10,
                    age: 100,
                    status: 5,
                    latitude: 90,
                    longitude: -180
                });
    
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });
    });

    describe('Date', () => {
        describe('Import', () => {
            it("Scenario #1", () => {
                let schema = new evalidate.schema({
                    date: evalidate.date().required().equals("2019-01-01"),
                    birthday: evalidate.date().required().after("2010-01-01").before("2020-01-01")
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
    
            it("Scenario #2", () => {
                let schema = new evalidate.schema({
                    date: evalidate.date().required().equals("2019-01-01"),
                    birthday: evalidate.date().required().after("2010-01-01").before("2020-01-01")
                });
    
                let result = schema.validate({
                    date: "2019-01-02",
                    birthday: "2009-01-01"
                });
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'date', message: "Invalid value provided for date"
                });
                expect(result.errors).toContainEqual({
                    field: 'birthday', message: "birthday must be after 2010-01-01"
                });
            });
    
            it("Scenario #3", () => {
                let schema = new evalidate.schema({
                    date: evalidate.date().required().equals("2019-01-01"),
                    birthday: evalidate.date().required().after("2010-01-01").before("2020-01-01")
                });
    
                let result = schema.validate({
                    date: "2019-01-01",
                    birthday: "2010-01-01"
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });

        describe('Require', () => {
            it("Scenario #1", () => {
                let schema = new evalidate2.schema({
                    date: evalidate2.date().required().equals("2019-01-01"),
                    birthday: evalidate2.date().required().after("2010-01-01").before("2020-01-01")
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
    
            it("Scenario #2", () => {
                let schema = new evalidate2.schema({
                    date: evalidate2.date().required().equals("2019-01-01"),
                    birthday: evalidate2.date().required().after("2010-01-01").before("2020-01-01")
                });
    
                let result = schema.validate({
                    date: "2019-01-02",
                    birthday: "2009-01-01"
                });
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'date', message: "Invalid value provided for date"
                });
                expect(result.errors).toContainEqual({
                    field: 'birthday', message: "birthday must be after 2010-01-01"
                });
            });
    
            it("Scenario #3", () => {
                let schema = new evalidate2.schema({
                    date: evalidate2.date().required().equals("2019-01-01"),
                    birthday: evalidate2.date().required().after("2010-01-01").before("2020-01-01")
                });
    
                let result = schema.validate({
                    date: "2019-01-01",
                    birthday: "2010-01-01"
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });
    });

    describe('Boolean', () => {
        describe('Import', () => {
            it("Scenario #1", () => {
                let schema = new evalidate.schema({
                    status: evalidate.boolean().required().equals(false, "Invalid value")
                });
    
                let result = schema.validate({});
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'status', message: "status is required"
                });
            });
    
            it("Scenario #2", () => {
                let schema = new evalidate.schema({
                    status: evalidate.boolean().required().equals(false, "Invalid value")
                });
    
                let result = schema.validate({
                    status: true
                });
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'status', message: "Invalid value"
                });
            });
    
            it("Scenario #3", () => {
                let schema = new evalidate.schema({
                    status: evalidate.boolean().required().equals(false, "Invalid value")
                });
    
                let result = schema.validate({
                    status: false
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });

        describe('Require', () => {
            it("Scenario #1", () => {
                let schema = new evalidate2.schema({
                    status: evalidate2.boolean().required().equals(false, "Invalid value")
                });
    
                let result = schema.validate({});
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'status', message: "status is required"
                });
            });
    
            it("Scenario #2", () => {
                let schema = new evalidate2.schema({
                    status: evalidate2.boolean().required().equals(false, "Invalid value")
                });
    
                let result = schema.validate({
                    status: true
                });
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'status', message: "Invalid value"
                });
            });
    
            it("Scenario #3", () => {
                let schema = new evalidate2.schema({
                    status: evalidate2.boolean().required().equals(false, "Invalid value")
                });
    
                let result = schema.validate({
                    status: false
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });
    });

    describe('Array', () => {
        describe('Import', () => {
            it("Scenario #1", () => {
                let schema = new evalidate.schema({
                    list1: evalidate.array().required().contains(1).size(5),
                    list2: evalidate.array().equals([1,2,3,4,5])
                });
                let result = schema.validate({});
    
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'list1', message: "list1 is required"
                });
            }); 
    
            it("Scenario #2", () => {
                let schema = new evalidate.schema({
                    list1: evalidate.array().required().contains(1).size(5),
                    list2: evalidate.array().equals([1,2,3,4,5])
                });
                let result = schema.validate({
                    list1: [1,2,3,4],
                    list2: [1,2,3,4]
                });
    
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'list1', message: "list1 must have 5 elements"
                });
                expect(result.errors).toContainEqual({
                    field: 'list2', message: "Invalid value provided for list2"
                });
            }); 
    
            it("Scenario #3", () => {
                let schema = new evalidate.schema({
                    list1: evalidate.array().required().contains(1).size(5),
                    list2: evalidate.array().equals([1,2,3,4,5])
                });
                let result = schema.validate({
                    list1: [1,2,3,4,5],
                    list2: [1,2,3,4,5]
                });
    
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            }); 
        });

        describe('Require', () => {
            it("Scenario #1", () => {
                let schema = new evalidate2.schema({
                    list1: evalidate2.array().required().contains(1).size(5),
                    list2: evalidate2.array().equals([1,2,3,4,5])
                });
                let result = schema.validate({});
    
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'list1', message: "list1 is required"
                });
            }); 
    
            it("Scenario #2", () => {
                let schema = new evalidate2.schema({
                    list1: evalidate2.array().required().contains(1).size(5),
                    list2: evalidate2.array().equals([1,2,3,4,5])
                });
                let result = schema.validate({
                    list1: [1,2,3,4],
                    list2: [1,2,3,4]
                });
    
                expect(result.isValid).toBeFalsy();
                expect(result.errors).toContainEqual({
                    field: 'list1', message: "list1 must have 5 elements"
                });
                expect(result.errors).toContainEqual({
                    field: 'list2', message: "Invalid value provided for list2"
                });
            }); 
    
            it("Scenario #3", () => {
                let schema = new evalidate2.schema({
                    list1: evalidate2.array().required().contains(1).size(5),
                    list2: evalidate2.array().equals([1,2,3,4,5])
                });
                let result = schema.validate({
                    list1: [1,2,3,4,5],
                    list2: [1,2,3,4,5]
                });
    
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            }); 
        });
    });

    describe('Object', () => {
        describe('Import', () => {
            it("Scenario #1", () => {
                let schema = new evalidate.schema({
                    name: evalidate.array().size(10),
                    location: evalidate.object({
                        latitude: evalidate.number().required(),
                        longitude: evalidate.number().required()
                    })
                });
                let result = schema.validate();
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
    
            it("Scenario #2", () => {
                let schema = new evalidate.schema({
                    name: evalidate.array().size(10),
                    location: evalidate.object({
                        latitude: evalidate.number().required(),
                        longitude: evalidate.number().required()
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
    
            it("Scenario #3", () => {
                let schema = new evalidate.schema({
                    name: evalidate.array().size(10),
                    location: evalidate.object({
                        latitude: evalidate.number().required().min(0),
                        longitude: evalidate.number().required().min(0)
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
    
            it("Scenario #4", () => {
                let schema = new evalidate.schema({
                    name: evalidate.array().size(10),
                    location: evalidate.object({
                        latitude: evalidate.number().required().min(0),
                        longitude: evalidate.number().required().min(0)
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
    
            it("Scenario #5", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required("Name is required"),
                    address: evalidate.object({
                        city: evalidate.object({
                            name: evalidate.string().required("City is required")
                        }),
                        country: evalidate.object({
                            name: evalidate.string().required("Country is required"),
                            code: evalidate.object({
                                name: evalidate.number().required("Code is required").integer()
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
    
            it("Scenario #6", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required("Name is required"),
                    address: evalidate.object({
                        city: evalidate.object({
                            name: evalidate.string().required("City is required")
                        }),
                        country: evalidate.object({
                            name: evalidate.string().required("Country is required"),
                            code: evalidate.object({
                                name: evalidate.number().required("Code is required").integer()
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
    
            it("Scenario #7", () => {
                let schema = new evalidate.schema({
                    name: evalidate.string().required("Name is required"),
                    address: evalidate.object({
                        city: evalidate.object({
                            name: evalidate.string().required("City is required")
                        }),
                        country: evalidate.object({
                            name: evalidate.string().required("Country is required"),
                            code: evalidate.object({
                                name: evalidate.number().required("Code is required").integer()
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
    
            it("Scenario #8 (require)", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string(),
                    email: evalidate2.string().required().email(),
                    age: evalidate2.number().min(18).max(150),
                    status: evalidate2.string().required().in(["Active", "Deacive"]),
                    address: evalidate2.object({
                        city: evalidate2.string(),
                        country: evalidate2.string().required(),
                    })
                });
    
                let result = schema.validate({
                    name: "xxxx-xxxx",
                    email: "xxxx@gmail.com",
                    age: 18,
                    status: "Active",
                    address: {
                        city: "xxxx",
                        country: "xxxx"
                    }
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });

        describe('Require', () => {
            it("Scenario #1", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.array().size(10),
                    location: evalidate2.object({
                        latitude: evalidate2.number().required(),
                        longitude: evalidate2.number().required()
                    })
                });
                let result = schema.validate();
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
    
            it("Scenario #2", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.array().size(10),
                    location: evalidate2.object({
                        latitude: evalidate2.number().required(),
                        longitude: evalidate2.number().required()
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
    
            it("Scenario #3", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.array().size(10),
                    location: evalidate2.object({
                        latitude: evalidate2.number().required().min(0),
                        longitude: evalidate2.number().required().min(0)
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
    
            it("Scenario #4", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.array().size(10),
                    location: evalidate2.object({
                        latitude: evalidate2.number().required().min(0),
                        longitude: evalidate2.number().required().min(0)
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
    
            it("Scenario #5", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required("Name is required"),
                    address: evalidate2.object({
                        city: evalidate2.object({
                            name: evalidate2.string().required("City is required")
                        }),
                        country: evalidate2.object({
                            name: evalidate2.string().required("Country is required"),
                            code: evalidate2.object({
                                name: evalidate2.number().required("Code is required").integer()
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
    
            it("Scenario #6", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required("Name is required"),
                    address: evalidate2.object({
                        city: evalidate2.object({
                            name: evalidate2.string().required("City is required")
                        }),
                        country: evalidate2.object({
                            name: evalidate2.string().required("Country is required"),
                            code: evalidate2.object({
                                name: evalidate2.number().required("Code is required").integer()
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
    
            it("Scenario #7", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string().required("Name is required"),
                    address: evalidate2.object({
                        city: evalidate2.object({
                            name: evalidate2.string().required("City is required")
                        }),
                        country: evalidate2.object({
                            name: evalidate2.string().required("Country is required"),
                            code: evalidate2.object({
                                name: evalidate2.number().required("Code is required").integer()
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
    
            it("Scenario #8 (require)", () => {
                let schema = new evalidate2.schema({
                    name: evalidate2.string(),
                    email: evalidate2.string().required().email(),
                    age: evalidate2.number().min(18).max(150),
                    status: evalidate2.string().required().in(["Active", "Deacive"]),
                    address: evalidate2.object({
                        city: evalidate2.string(),
                        country: evalidate2.string().required(),
                    })
                });
    
                let result = schema.validate({
                    name: "xxxx-xxxx",
                    email: "xxxx@gmail.com",
                    age: 18,
                    status: "Active",
                    address: {
                        city: "xxxx",
                        country: "xxxx"
                    }
                });
                expect(result.isValid).toBeTruthy();
                expect(result.errors.length).toBe(0);
            });
        });
    });
    
});