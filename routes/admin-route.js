const express = require('express');

const router = express.Router();    //express.Router() is kind of mini express. Works similar to express.

router.get('/add-product', (req, res, next) => {
    console.log('inside add-product..... ');
    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="product-name"></input>
            <button type="submit">Submit</button>
        </form>`);
});

router.post('/product', (req, res, next) => {
    console.log('inside product..... ', req.body);
    res.redirect('/');
});

module.exports = router;