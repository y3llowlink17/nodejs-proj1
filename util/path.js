const path = require('path');

//console.log('(test)process.mainModule.filename..... ', process.mainModule.filename);
//console.log('(test)dirname of process.mainModule.filename..... ', path.dirname(process.mainModule.filename));

/* 
"process.mainModule.filename" 
..... this points to the mainModule that serve the whole app (in this case it is "app.js")

"path.dirname(process.mainModule.filename)"
..... this gives the directory path of the mainModule above (in this case directory path of "app.js"),
which points to root directory of the app
 */

module.exports = path.dirname(process.mainModule.filename);