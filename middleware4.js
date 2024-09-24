/*
Assignment #1 - Try converting the calculator assignment to use POST endpoints. 
Check if it works with/without the express.json middleware

1. http://localhost:3000/sum
2. http://localhost:3000/subtract
3. http://localhost:3000/multiply
4. http://localhost:3000/divide

request body:
{
    "a": 10,
    "b": 5
}
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// use the express.json middleware to parse the request body
app.use(express.json()); // comment this line to see the error

/**
 * This is a middleware function that validates the input values
 * 
 * I am using this from my side to validate the input values - This is optional, which is not mentioned in the assignment
 */

function validateInput(req, res, next) {
    const a = req.body.a;
    const b = req.body.b;

    console.log(isNaN(a), isNaN(b));

    if(!a || !b) {
        res.status(400).send({
            error: "Please provide values for a and b",
        })
    }

    else if (isNaN(a) || isNaN(b)) {
        res.status(400).send({
            error: "Please provide valid numbers for a and b",
        })
    } else {
        next();
    }
}

app.use(validateInput);

app.post("/sum", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a + b,
    })
})

app.post("/subtract", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a - b,
    })
})

app.post("/multiply", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a * b,
    })
})

app.post("/divide", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a / b,
    })
})

app.listen(3000);