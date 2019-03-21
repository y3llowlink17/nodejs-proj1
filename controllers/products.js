const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    console.log('inside add-product..... ');

    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    console.log('inside product..... ', req.body);

    const product = new Product(req.body.title);
    product.save();
    
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    const products = Product.fetchAll()

    res.render('shop', {items: products, docTitle: 'Shop', path: '/'});

    console.log('shop-route_products..... ', products);
};