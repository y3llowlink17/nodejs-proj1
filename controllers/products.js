const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {  // fetchAll() calls readFile() which is asynchronous func, that's why we need to register callback into it
        res.render('shop', {
            items: products, 
            docTitle: 'Shop', 
            path: '/'
        });
    })
};