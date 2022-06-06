const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Category = require("./Category");
const Tag = require("./Tag");

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Post, {
  foreignKey: "category_id",
});

Post.belongsToMany(Tag, {
  through: "PostTag",
  foreignKey: "post_id",
});

Tag.belongsToMany(Post, {
  through: "PostTag",
  foreignKey: "tag_id",
});

module.exports = { Post, Comment, User, Category, Tag };
