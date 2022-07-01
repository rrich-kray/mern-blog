import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      first_name
      last_name
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      first_name
      last_name
      email
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      title
      content
      image_url
      category_id
      user_id
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    getPostById(id: $id) {
      id
      title
      content
    }
  }
`;

export const GET_POST_BY_USER_ID = gql`
  query getPostsByUserId($user_id: ID!) {
    getPostsByUserId(user_id: $user_id) {
      id
      title
      content
    }
  }
`;

export const GET_COMMENTS = gql`
  query getComments {
    getComments {
      id
      content
    }
  }
`;

export const GET_COMMENTS_BY_POST = gql`
  query getCommentsByPost($post_id: ID!) {
    getCommentsByPost(post_id: $post_id) {
      id
      content
      user_id
    }
  }
`;

export const GET_COMMENTS_BY_USER = gql`
  query getCommentsByUser($user_id: ID!) {
    getCommentsByUser(user_id: $user_id) {
      id
      content
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      id
      category_name
    }
  }
`;

export const GET_CATEGORY_BY_ID = gql`
  query getCategoryById($category_id: ID!) {
    getCategoryById(category_id: $category_id) {
      id
      category_name
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query getPostByCategory($category_id: ID!) {
    getPostsByCategory(category_id: $category_id) {
      id
      title
      content
    }
  }
`;

export const GET_TAGS = gql`
  query getTags {
    getTags {
      id
      tag_name
    }
  }
`;

export const GET_TAG_BY_ID = gql`
  query getTagById($tag_id: ID!) {
    getTagById(tag_id: $tag_id) {
      id
      tag_name
    }
  }
`;
