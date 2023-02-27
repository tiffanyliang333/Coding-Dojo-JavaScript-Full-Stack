const {faker} = require("@faker-js/faker");

const express = require("express");
const app = express();
const port = 8000;

const userObj = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const companyObj =() => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
})

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
    const newUser = userObj();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = companyObj();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = userObj();
    const newCompany = companyObj();
    const responseObj = {
        user: newUser,
        company: newCompany,
    };
    res.json(responseObj);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );