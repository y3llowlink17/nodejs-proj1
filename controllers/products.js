const products = [];

exports.getAddProduct = (req, res, next) => {
    console.log('inside add-product..... ');

    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {
    console.log('inside product..... ', req.body);

    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    res.render('shop', {items: products, docTitle: 'Shop', path: '/'});

    console.log('shop-route_products..... ', products);
};