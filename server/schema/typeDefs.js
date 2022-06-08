const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type Post {
    id: ID
    title: String
    content: String
    image_url: String
    category_id: ID!
    user_id: ID
  }

  type Comment {
    id: ID
    content: String
    user_id: ID
    post_id: ID
  }

  type Category {
    id: ID
    category_name: String!
  }

  type Tag {
    id: ID
    tag_name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getMe(id: ID!): User
    getUsers: [User]
    getUserById(id: ID!): User

    getPosts: [Post]
    getPostById(id: ID!): Post
    getPostsByUserId(user_id: ID!): [Post]
    getPostsByCategory(category_id: ID!): [Post]

    getComments: [Comment]
    getCommentsByPost(post_id: ID!): [Comment]
    getCommentsByUser(user_id: ID!): [Comment]

    getCategories: [Category]
    getCategoryById(category_id: ID!): Category

    getTags: [Tag]
    getTagById(tag_id: ID!): Tag
  }

  type Mutation {
    createUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Auth

    createPost(
      title: String!
      content: String!
      image_url: String!
      user_id: ID!
    ): Post

    deletePost(post_id: ID!): Post

    createComment(content: String!, user_id: ID!, post_id: ID!): Comment
    deleteComment(comment_id: ID!): Comment

    createTag(tag_name: String!): Tag
  }
`;

module.exports = typeDefs;
