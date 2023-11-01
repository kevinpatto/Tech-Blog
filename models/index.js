const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// one to many user to post
User.hasMany(Post, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

Post.belongsTo(User, {
	foreignKey: 'user_id'
});

// one to many user to comment
User.hasMany(Comment, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
	foreignKey: 'user_id'
});

// one to many post to comment
Post.hasMany(Comment, {
	foreignKey: 'post_id',
	onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
	foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
