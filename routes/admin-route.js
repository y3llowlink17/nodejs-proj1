const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();    //express.Router() is kind of mini express. Works similar to express.
const products = [];


router.get('/add-product', (req, res, next) => {
    console.log('inside add-product..... ');

    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
});


router.post('/add-product', (req, res, next) => {
    console.log('inside product..... ', req.body);

    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports = {
    router: router,
    products: products
}