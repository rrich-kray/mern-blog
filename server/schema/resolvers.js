const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Category = require("../models/Category");
const { Tag } = require("../models");
const sequelize = require("../config/connection");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      return await User.findOne({
        where: {
          id: context.id,
        },
      });
    },

    getUsers: async () => {
      return await User.findAll();
    },

    getUserById: async (parent, args, context) => {
      return await User.findOne({
        where: {
          id: args.id,
        },
      });
    },

    getPosts: async () => {
      return await Post.findAll();
    },

    getPostById: async (parent, args, context) => {
      return await Post.findOne({
        where: {
          id: args.id,
        },
      });
    },

    getPostsByUserId: async (parent, args, conntext) => {
      return await Post.findAll({
        where: {
          user_id: args.user_id,
        },
      });
    },

    getPostsByCategory: async (parent, args, context) => {
      return await Post.findAll({
        where: {
          category_id: args.category_id,
        },
      });
    },

    getComments: async (parent, args, context) => {
      return await Comment.findAll();
    },

    getCommentsByUser: async (parent, args, context) => {
      return await Comment.findAll({
        where: {
          user_id: args.user_id,
        },
      });
    },

    getCommentsByPost: async (parent, args, context) => {
      return await Comment.findAll({
        where: {
          post_id: args.post_id,
        },
      });
    },

    getCategories: async (parent, args, context) => {
      return await Category.findAll();
    },

    getCategoryById: async (parent, args, context) => {
      return await Category.findOne({
        where: {
          id: args.category_id,
        },
      });
    },

    getTags: async (parent, args, context) => {
      return await Tag.findAll();
    },

    getTagById: async (parent, args, context) => {
      return await Tag.findOne({
        where: {
          id: args.tag_id,
        },
      });
    },
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      return await User.create(args);
    },

    createPost: async (parent, args, context) => {
      return await Post.create(args); // args will include user ID, which will come from context object
    },

    deletePost: async (parent, args, context) => {
      return await Post.destroy({
        where: {
          id: args.post_id,
        },
      });
    },

    createComment: async (parent, args, context) => {
      return await Comment.create(args);
    },

    deleteComment: async (parent, args, context) => {
      // must ensure only owner can delete comment
      return await Comment.destroy({
        where: {
          id: args.comment_id,
        },
      });
    },

    createTag: async (parent, args, context) => {
      return await Tag.create(args);
    },
  },
};

module.exports = resolvers;
