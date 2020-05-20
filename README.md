# evalidate

[![CircleCI](https://circleci.com/gh/aderabiruk/evalidate.svg?style=svg)](https://circleci.com/gh/aderabiruk/evalidate)
[![Known Vulnerabilities](https://snyk.io/test/github/aderabiruk/evalidate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/aderabiruk/evalidate?targetFile=package.json)
[![codecov](https://codecov.io/gh/aderabiruk/evalidate/branch/master/graph/badge.svg)](https://codecov.io/gh/aderabiruk/evalidate)
[![codebeat badge](https://codebeat.co/badges/b13cb69f-03d8-4cc9-bad3-c09d2d8d6f3b)](https://codebeat.co/projects/github-com-aderabiruk-evalidate-master)
[![HitCount](http://hits.dwyl.com/aderabiruk/evalidate.svg)](http://hits.dwyl.com/aderabiruk/evalidate)
[![npm version](https://badge.fury.io/js/evalidate.svg)](https://badge.fury.io/js/evalidate)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/aderabiruk/evalidate)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/aderabiruk/evalidate/issues)
[![Gitter](https://badges.gitter.im/evalidate-community/community.svg)](https://gitter.im/evalidate-community/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

A fast and easy to use Object Schema Validator

## Index

* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Install

```bash

npm install --save evalidate

```

## Usage

### Importing

```js
// Using require()
const evalidate = require("evalidate");

// Using ES6 import
import evalidate from "evalidate"
```

### Defining a Schema

```js
let schema = new evalidate.schema({
    name: evalidate.string(),
    email: evalidate.string().required().email(),
    age: evalidate.number().min(18).max(150),
    status: evalidate.string().required().in(["Active", "Deacive"]),
    address: evalidate.object({
        city: evalidate.string(),
        country: evalidate.string().required(),
    }),
    birthday: evalidate.date().required().before(new Date())
});
```

### Custom Error Message

```js
let schema = new evalidate.schema({
    email: evalidate.string().required("email is required!").email("Please enter a valid email address!"),
    age: evalidate.number().min(18, "Too young!").max(150, "Too old!"),
});
```

### Validating Data

```js
let result = schema.validate({
    name: "xxxx-xxxx",
    email: "xxxx@gmail.com",
    age: 18,
    status: "Active",
    address: {
        city: "xxxx",
        country: "xxxx"
    },
    birthday: "2019-01-01"
});

if (!result.isValid) {
    console.log(result.errors);
}
```

## Validators

### Array: evalidate.array()

* contains(value, message)  
  * must contain **value**
  * (Optional) Custom error message

* equals(value, message)
  * must have the same content as **value**
  * **value** must be an array
  * (Optional) Custom error message

* required(message)
  * (Optional) Custom error message

* size(value, message)
  * Checks the number of items in the array
  * (Optional) Custom error message

### Boolean: evalidate.boolean()

* equals(value, message)
  * must be the same as **value** 
  * **value** must be boolean
  * (Optional) Custom error message

* required(message)
  * (Optional) Custom error message

### Date: evalidate.date()

* after(value, message)
  * must be after **value**
  * **value** can be a date object, an integer value representing the number of milliseconds since January 1, 1970 or string value representing a date, specified in a format recognized by the Date.parse() method.
  * (Optional) Custom error message

* before(value, message)
  * must be before **value**
  * **value** can be a date object, an integer value representing the number of milliseconds since January 1, 1970 or string value representing a date, specified in a format recognized by the Date.parse() method.
  * (Optional) Custom error message

* equals(value, message)
  * must be the same as **value**
  * **value** can be a date object, an integer value representing the number of milliseconds since January 1, 1970 or string value representing a date, specified in a format recognized by the Date.parse() method.
  * (Optional) Custom error message

* required(message)
  * (Optional) Custom error message

### Number: evalidate.number()

* equals(value, message)
  * must be the same as **value**
  * **value** must be a number
  * (Optional) Custom error message

* integer(message)
  * must be an integer
  * (Optional) Custom error message

* latitude(message)
  * must be a valid latitude (Between -90 and 90)
  * (Optional) Custom error message

* longitude(message)
  * must be a valid longitude (Between -180 and 180)
  * (Optional) Custom error message

* min(value, message)
  * must be greater than or equal to **value**
  * **value** must be a number
  * (Optional) Custom error message

* max(value, message)
  * must be less than or equal to **value**
  * **value** must be a number
  * (Optional) Custom error message

* required(message)
  * (Optional) Custom error message

### String: evalidate.string()

* alphanumeric(message)
  * must contain only alphanumeric characters
  * (Optional) Custom error message

* credit_card(message)
  * must be a valid credit card number
  * (Optional) Custom error message

* email(message)
  * must be a valid email address
  * (Optional) Custom error message

* equals(value, message)
  * must be equalt to **value**
  * **value** must be a string
  * (Optional) Custom error message

* fqdn(message)
  * must be a valid fully qualified domain name
  * (Optional) Custom error message

* in(value, message)
  * must be in **value**
  * **value** must be an array
  * (Optional) Custom error message

* isbn(message)
  * must be a valid ISBN
  * (Optional) Custom error message

* maxlength(value, message)
  * number of characters in the input string must be less than or equal to **value**
  * **value** must be a number
  * (Optional) Custom error message

* milength(value, message)
  * number of characters in the input string must be greater than or equal to **value**
  * **value** must be a number
  * (Optional) Custom error message

* numeric(message)
  * must contain only numeric characters
  * (Optional) Custom error message

* required(message)
  * (Optional) Custom error message

* url(message)
  * must be a valid url
  * (Optional) Custom error message

## License

MIT © aderabiruk
