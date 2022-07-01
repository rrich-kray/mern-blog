import React, { useState, useEfect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_BY_ID } from "../../utils/queries";
import "./Tile.css";

const Tile = ({ post, changeActivePost, currentColor }) => {
  console.log(post.category_id);
  const { data } = useQuery(GET_CATEGORY_BY_ID, {
    variables: { category_id: post.category_id },
  });
  console.log(data);
  console.log(currentColor);

  return (
    <div className="post-tile" key={post.title}>
      <div className="post-tile" onClick={() => changeActivePost(post)}>
        <div
          className="tile-image-container"
          style={{
            backgroundImage: `url(${post.image_url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="category" style={{ background: currentColor }}>
            {data && data.getCategoryById.category_name}
          </span>
        </div>
        <div className="tile-description-container">
          <h1>{post.title}</h1>
          <p>
            {post.content.split(" ").length > 20
              ? `${post.content.split(" ").slice(0, 5).join(" ")}...`
              : post.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tile;
