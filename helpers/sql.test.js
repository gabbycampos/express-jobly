"use strict";

const { sqlForPartialUpdate } = require('./sql');

describe("Test the helper update function", function() {
    test("Returns object with key value data", function() {
        let jsToSql = {
            firstName: "first_name",
            lastName: "last_name",
            age: "age"
        };
        const dataToUpdate = { firstName: "Aliya", lastName: "Smith", age: 33 };
        const resp = sqlForPartialUpdate(dataToUpdate, jsToSql);
        expect(resp).toEqual({
            setCols: '"first_name"=$1, "last_name"=$2, "age"=$3',
            values: Object.values(dataToUpdate)
        })
    });

    test("BadRequestError if no data", function() {
        let jsToSql;
        const dataToUpdate = {};
        expect(() => {
            sqlForPartialUpdate(dataToUpdate, jsToSql)
        }).toThrow("No data")
    });
})
