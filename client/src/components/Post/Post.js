import React, { useEffect, useState, useContext } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GET_COMMENTS_BY_POST } from "../../utils/queries";
import { AuthContext } from "../../context/authContext";
import "./Post.css";

const Post = ({ post, changeActivePost, currentColor }) => {
  const context = useContext(AuthContext);
  const [formState, setFormState] = useState({
    content: "",
  });

  console.log(formState);

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { data } = useQuery(GET_COMMENTS_BY_POST, {
    variables: { post_id: post.id },
  });

  return (
    <div className="single-post" style={{ background: currentColor }}>
      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="return-container" onClick={() => changeActivePost("")}>
          <ArrowBackIcon />
        </div>
      </div>
      <div
        className="post-image"
        style={{
          backgroundImage: `url(${post.image_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="comments-wrapper">
        <h1>Comments</h1>
        <div className="comments">
          {data &&
            data.getCommentsByPost.map((comment) => (
              <div className="comment">{comment.content}</div>
            ))}
        </div>
        {context.user && (
          <input
            name="add-comment"
            id="add-comment"
            placeholder="Write you comment here"
            onChange={handleChange}
          ></input>
        )}
      </div>
    </div>
  );
};

export default Post;