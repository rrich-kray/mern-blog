const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Category = require("../models/Category");
const Tag = require("../models/Tag");
const sequelize = require("../config/connection");
const { signToken } = require("../utils/auth");

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
        include: [
          {
            model: "comment",
            where: {
              post_id: args.id,
            },
          },
        ],
      });
    },

    getPostsByUserId: async (parent, args, conntext) => {
      return await Post.findAll({
        where: {
          user_id: args.user_id,
        },
        include: [
          {
            model: "user",
          },
        ],
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

    getLikesByPost: async (parent, args, context) => {
      return await Likes.findAll({
        where: {
          post_id: args.post_id,
        },
      });
    },
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },

    createCategory: async (parent, args, context) => {
      return await Category.create(args);
    },

    login: async (parent, args, context) => {
      const user = await User.findOne({
        where: {
          email: args.email,
          password: args.password,
        },
      });
      // This returns the correct user
      console.log(user);

      // if (!user) {
      //   throw new AuthenticationError("Incorrect credentials provided");
      // }

      const token = signToken(user);
      console.log(token);
      return { token, user };
      // this returns a token in the response, but when decoded, null values are returned. Not so with createUser
    },

    createPost: async (parent, args, context) => {
      // args will need to contain user id of user who created it
      return await Post.create(args);
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

    createLike: async (parent, args, context) => {
      return await Likes.create(args);
    },
  },
};

module.exports = resolvers;
