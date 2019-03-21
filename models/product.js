const fs = require('fs');
const path = require ('path');

const savePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getDataFrmFile = (cb) => {
    fs.readFile(savePath, (err, content) => {   // this is asynchronous func
        if(!err) {
            if(content.length > 0) {
                return cb(JSON.parse(content));
            }
        }
    
        return cb([]);
    });
}


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getDataFrmFile(products => {
            products.push(this);
            fs.writeFile(savePath, JSON.stringify(products), (err) => {
                console.log('save()_writeFile_err..... ', err);
            });
        })
    }

    static fetchAll(cb) {
        getDataFrmFile(cb);
    }
}