const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h5>Hello from ExpressJS</h5>');
});

module.exports = router;