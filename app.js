const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('inside middleware 1..... ');
    next();
});

app.use((req, res, next) => {
    console.log('inside middleware 2..... ');
    res.send('<h5>Hello from ExpressJS</h5>');
});

app.listen(3000);

//app.listen(3000) is similar to the following 2 lines #ref: expressJS lib: application.js
//const server = http.createServer(app);
//server.listen(3000);

