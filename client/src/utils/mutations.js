import { gql } from "@apollo/client";
import { lexicographicSortSchema } from "graphql";

export const CREATE_USER = gql`
  mutation createUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
    ) {
      token
      user {
        id
        first_name
        last_name
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        first_name
        last_name
        email
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $content: String!
    $image_url: String!
    $category_id: ID!
    $user_id: ID!
  ) {
    createPost(
      title: $title
      content: $content
      image_url: $image_url
      category_id: $category_id
      user_id: $user_id
    ) {
      id
      title
      content
      user_id
      category_id
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $user_id: ID!, $post_id: ID!) {
    createComment(content: $content, user_id: $user_id, post_id: $post_id) {
      content
      user_id
      post_id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($comment_id: ID!) {
    deleteComment(comment_id: $comment_id) {
      id
    }
  }
`;

export const CREATE_TAG = gql`
  mutation createTag($tag_name: String!) {
    createTag(tag_name: $tag_name) {
      id
      tag_name
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory($category_name: String!) {
    createCategory(category_name: $category_name) {
      id
      category_name
    }
  }
`;
