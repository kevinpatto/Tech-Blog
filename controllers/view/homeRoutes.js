const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const auth = require('../../utils/auth'); // auth middleware helper
// SERVER PATH /

router.get('/', async (req, res) => {
	try {
		// get all posts and sort by date_created descending (most recent to least recent (i hope))
		const postsData = await Post.findAll({
			order: [
				['date_created', 'DESC'],
			],
		});

		// serialize data
		const posts = postsData.map((post) => post.get({ plain: true }));

		res.render('homepage', {
			posts,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/profile');
		return;
	}

	res.render('login');
});

router.get('/signup', (req, res) => {
	if (req.session.logged_in) { // why are you trying to sign up if you're already logged in? dumbo
		res.redirect('/profile');
		return;
	}

	res.render('signup');
});

// page for own profile
router.get('/profile', auth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ['password'] },
			include: [{ model: Post }],
		});

		const user = userData.get({ plain: true });

		res.render('dashBoard', {
			...user,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/post/:id', auth, async (req, res) => {
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
