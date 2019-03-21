const fs = require('fs');
const path = require ('path');

const savePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        fs.readFile(savePath,(err, content) => {
            let products = [];

            if (!err) {     // error occurs when the file doesn't exist
                console.log('save()_readFile_err..... ', err);
                console.log('save()_readFile_content..... ', content, '\nlength..... ', content.length);

                if(content.length > 0) {
                    products = JSON.parse(content);
                }
            }

            products.push(this);
            fs.writeFile(savePath, JSON.stringify(products), (err) => {
                console.log('save()_writeFile_err..... ', err);
            });
        });
    }

    static fetchAll() {
        return [];      // will fix on next commit
    }
}