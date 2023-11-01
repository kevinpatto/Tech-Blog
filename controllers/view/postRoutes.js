const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const auth = require('../../utils/auth'); // auth middleware helper
// SERVER PATH /post

router.get('/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [{	model: Comment }]
		});

		const post = postData.get({ plain: true }); // serialize

		res.render('blogPost', {
			...post,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
