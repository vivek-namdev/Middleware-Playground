/*
Assignment #3 - Create a middleware that counts total number of requests sent to a server. 
Also create an endpoint that exposes it
*/


// Import the express module and store it in a variable called express
const express = require('express');

// Create an express application instance and store it in a variable called app
const app = express();

let requestCount = 0;

function countRequests(req, res, next) {
    requestCount++;

    next();
}

app.use(countRequests);

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.get("/requestCount", (req, res) => {
    res.send({
        totalRequests: requestCount
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});