const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

// PATH /

router.use('/', homeRoutes); // ROUTE TO /

module.exports = router;
