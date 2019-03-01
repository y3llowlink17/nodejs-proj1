const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    /* 
    "res.render" will search for pug file to render. 
    Since we set it already in the app.js we do not need to specify the path here
    */
    res.render('shop');
});

module.exports = router;