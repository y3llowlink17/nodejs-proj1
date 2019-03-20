const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const productController = require('../controllers/products');

const router = express.Router();    //express.Router() is kind of mini express. Works similar to express.

router.get('/add-product', productController.getAddProduct);


router.post('/add-product', productController.postAddProduct);

module.exports = router;