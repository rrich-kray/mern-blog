const Comment = require("../models/Comment");

const commentData = [
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 1,
    post_id: 1,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 2,
    post_id: 2,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 3,
    post_id: 3,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 4,
    post_id: 4,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 5,
    post_id: 5,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 6,
    post_id: 6,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 7,
    post_id: 7,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 8,
    post_id: 8,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 9,
    post_id: 9,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 10,
    post_id: 10,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 1,
    post_id: 11,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 2,
    post_id: 12,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 3,
    post_id: 13,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 4,
    post_id: 14,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 5,
    post_id: 15,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 6,
    post_id: 1,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 7,
    post_id: 2,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 8,
    post_id: 3,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 9,
    post_id: 4,
  },
  {
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 10,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
