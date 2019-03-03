const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminRoute = require('./admin-route');

const router = express.Router();
const products = adminRoute.products; // acquire value of 'products' passed by admin-route


router.get('/', (req, res, next) => {
    /* 
    "res.render" will search for pug file to render. 
    Since we set it already in the app.js we do not need to specify the path here
    */
    res.render('shop', {
        items: products, 
        docTitle: 'Shop', path: '/', 
        hasItems: products.length > 0,
        shop: true
    });

    console.log('shop-route_products..... ', products);
});

module.exports = router;