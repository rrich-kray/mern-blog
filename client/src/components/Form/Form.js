import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation } from "@apollo/client";
import { LOGIN, CREATE_USER, CREATE_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./Form.css";

// Login workflow:
// LOGIN mutation accepts formState content
// login resolver is invoked, which finds user and creates JWT with signToken method
// user and token is returned from graphql query in mutationResponse
// Auth.login saves token in local storage

const Form = ({ formType, categories }) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    title: "",
    content: "",
    image_url: "",
    category_id: "",
    user_id: "",
  });

  // login and createUser mutations return same data, which is passed into context.login().

  // Login workflow: LOGIN mutation is run, resolver returns token and user objects, login function callback saves token in localstorage and updates state
  const [login] = useMutation(LOGIN, {
    update(proxy, { data: { login } }) {
      // login is what's returned
      console.log(login); // same data as signup is returned
      context.login(login); // this saves the token to localStorage, updates state
      console.log(context); // this logs correct context
      // window.location.replace("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
  });

  const [signup] = useMutation(CREATE_USER, {
    // is signup function being properly destructured from useMutation?
    // Does component have access to the context?
    update(proxy, { data: { createUser } }) {
      console.log(createUser);
      // userData is what's returned. login will save token in localStorage and update the user state with the data returned
      context.login(createUser);
      console.log(context);
      window.location.replace("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
  });

  const [createPost, { createPostError }] = useMutation(CREATE_POST);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        variables: { email: formState.email, password: formState.password },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleCreatePostFormSubmit = async (e) => {
    console.log(context.user.data[2]);
    console.log(context);
    e.preventDefault();
    try {
      await createPost({
        variables: {
          title: formState.title,
          content: formState.title,
          image_url: formState.image_url,
          category_id: formState.category_id,
          user_id: context.user.data.id, // this is not correct. It should be correct
        },
      });
      window.location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        variables: {
          first_name: formState.first_name,
          last_name: formState.last_name,
          email: formState.email,
          password: formState.password,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const renderForm = () => {
    if (formType === "login") {
      return (
        <form className="login-form form">
          <input
            name="email"
            placeholder="email"
            onChange={handleChange}
          ></input>
          <input
            name="password"
            placeholder="password"
            onChange={handleChange}
          ></input>
          <button onClick={handleLoginFormSubmit}>Login!</button>
        </form>
      );
    } else if (formType === "signup") {
      return (
        <form className="signup-form form">
          <input
            name="first_name"
            placeholder="first_name"
            onChange={handleChange}
          ></input>
          <input
            name="last_name"
            placeholder="last_name"
            onChange={handleChange}
          ></input>
          <input
            name="email"
            placeholder="email"
            onChange={handleChange}
          ></input>
          <input
            name="password"
            placeholder="password"
            onChange={handleChange}
          ></input>
          <button onClick={handleSignupFormSubmit}>Signup!</button>
        </form>
      );
    } else if (formType === "add-post") {
      return (
        <form className="create-post-form form">
          <input
            name="title"
            placeholder="Post title"
            onChange={handleChange}
          ></input>
          <input
            name="content"
            placeholder="Post content"
            onChange={handleChange}
          ></input>
          <input
            name="image_url"
            placeholder="Post image url"
            onChange={handleChange}
          ></input>
          <select
            name="category_id"
            id="categories"
            placeholder="Please select a category"
            onChange={handleChange}
          >
            {categories.data.getCategories.map((category) => (
              <option value={category.id}>{category.category_name}</option>
            ))}
          </select>
          <button onClick={handleCreatePostFormSubmit}>Create Post!</button>
        </form>
      );
    }
  };

  return <div className="form-container">{renderForm()}</div>;
};

export default Form;
