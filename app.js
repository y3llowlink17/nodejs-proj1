const http = require('http');
const express = require('express');

const app = express();

/* 
if you put the path '/' first, it will always load "Hello from ExpressJS". Because '/' is not fullpath, which
means '/middleware' also contains '/'. Therefore, always put '/' at the last 
*/

app.use('/middleware', (req, res, next) => {
    console.log('inside middleware 2..... ');
    res.send('<h5>Hello from Middleware</h5>');
});

app.use('/', (req, res, next) => {
    console.log('inside middleware 1..... ');
    res.send('<h5>Hello from ExpressJS</h5>')
});

app.listen(3000);

//app.listen(3000) is similar to the following 2 lines #ref: expressJS lib: application.js
//const server = http.createServer(app);
//server.listen(3000);

