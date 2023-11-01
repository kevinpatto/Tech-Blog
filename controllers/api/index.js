const router = require('express').Router();
const userRoutes = require('./userRoutes');
// SERVER PATH /api

router.use('/users', userRoutes); // ROUTE TO /api/users

module.exports = router;
