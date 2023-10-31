const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes); // ROUTE TO /
router.use('/api', apiRoutes); // ROUTE TO /api

module.exports = router;
