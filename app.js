const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


/* 
express.set(). Assigns setting name to value. You may store any value that you want, 
but certain names can be used to configure the behavior of the server. You can even set values/params to
be shared globally. https://expressjs.com/en/4x/api.html#app.set
*/
app.set('view engine', 'pug');  // to set the available templating engine
app.set('views', 'views');     // to set the location of the template (views) which is happened to be '/views'


const adminRoute = require('./routes/admin-route');
const shopRoute = require('./routes/shop-route');

/* 
body-parser package is needed in order to parse the incoming request.
this is the same as when we use "req.on('data', (chunk)=>{...})" to listen to incoming chunk.
and regarding to extended property as follows.
- string or array (when extended is false), 
- any type (when extended is true).
http://expressjs.com/en/api.html#express.urlencoded
https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
*/

app.use(bodyParser.urlencoded({extended: false}));

// this is to get path to folder public & make the folder and its content static so it can be access by other resources publicly
// you can set more than one static resource to be accessed publicly
app.use(express.static(path.join(__dirname, 'public')));


/* 
Filter path. Only path that starts from '/admin' will be handled by adminRoute.
if GET request points to ./add-product, the page will NOT be found
only if GET request points to ./admin/add-product, the page will be rendered
 */
app.use('/admin', adminRoute);
app.use(shopRoute);

/* 
add this line to handle unavailable route. Eventually, 
the code will reach here when the rest above DOES NOT
 */
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

//app.listen(3000) is similar to the following 2 lines #ref: expressJS lib: application.js
//const server = http.createServer(app);
//server.listen(3000);

