const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./view');

router.use('/', viewRoutes); // ROUTE TO /
router.use('/api', apiRoutes); // ROUTE TO /api

module.exports = router;
