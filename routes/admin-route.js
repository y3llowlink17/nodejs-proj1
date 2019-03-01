const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();    //express.Router() is kind of mini express. Works similar to express.

router.get('/add-product', (req, res, next) => {
    console.log('inside add-product..... ');

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


router.post('/add-product', (req, res, next) => {
    console.log('inside product..... ', req.body);
    res.redirect('/');
});

module.exports = router;