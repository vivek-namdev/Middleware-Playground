/*
  Create a backend server in node.js, that returns the sum endpoint
*/


// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// use the express.json middleware to parse the request body
app.use(express.json());

function validateInput(a, b) {
    if((!a || !b) || (isNaN(a) || isNaN(b))) {
        return false;
    }

    return true;
}

app.post("/sum", (req,res) => {
    const a = req.body.a;
    const b = req.body.b;

    if(!validateInput(a, b)) {
        res.status(400).send({
            error: "Plaese provide values for a and b and must be integers",
        })
    }

    res.send({
        result: parseInt(a) + parseInt(b),
    })
})

app.listen(3000);