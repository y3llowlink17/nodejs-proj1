const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* 
body-parser package is needed in order to parse the incoming request.
this is the same as when we use "req.on('data', (chunk)=>{...})" to listen to incoming chunk.
and regarding to extended property as follows.
- string or array (when extended is false), 
- any type (when extended is true).
http://expressjs.com/en/api.html#express.urlencoded
https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
*/

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('inside add-product..... ');
    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="product-name"></input>
            <button type="submit">Submit</button>
        </form>`);
});

app.use('/product', (req, res, next) => {
    console.log('inside product..... ', req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h5>Hello from ExpressJS</h5>');
});

app.listen(3000);

//app.listen(3000) is similar to the following 2 lines #ref: expressJS lib: application.js
//const server = http.createServer(app);
//server.listen(3000);

