const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');

// PATH /

router.use('/', homeRoutes); // ROUTE TO /
router.use('/profile', postRoutes); // ROUTE TO /post

module.exports = router;
