const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // path must be absolute or specify root to res.sendFile
    // "__dirname" points to absolute path of "routes"
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;