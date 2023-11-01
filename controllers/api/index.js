const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// SERVER PATH /api

router.use('/users', userRoutes); // ROUTE TO /api/users
router.use('/posts', postRoutes); // ROUTE TO /api/posts
router.use('/comments', commentRoutes); // ROUTE TO /api/comments

module.exports = router;
