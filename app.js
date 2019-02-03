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


/*
moving this line at the top now is OK. App works fine. Since we limit 
the middleware execution with GET. Now, the path is fixed to "/". Therefore,
It won't effect other line path as before
*/
app.get('/', (req, res, next) => {
    res.send('<h5>Hello from ExpressJS</h5>');
});


app.get('/add-product', (req, res, next) => {
    console.log('inside add-product..... ');
    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="product-name"></input>
            <button type="submit">Submit</button>
        </form>`);
});


/*
limit the middleware execution only to POST request (this code only executed by POST) & 
ALSO, limit the path e.g: "/product" ONLY TO that path only.
** when you use app.use, this DOES NOT limit the middleware execution. GET, POST, etc. can
execute this.
*/
app.post('/product', (req, res, next) => {
    console.log('inside product..... ', req.body);
    res.redirect('/');
});


app.listen(3000);

//app.listen(3000) is similar to the following 2 lines #ref: expressJS lib: application.js
//const server = http.createServer(app);
//server.listen(3000);

