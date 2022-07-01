import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_POSTS } from "../../utils/queries";
import "./Articles.css";

const Articles = () => {
  const [postData, setPostData] = useState({});
  const { data, loading, error } = useQuery(GET_POSTS);
  const { categories, categoriesError, categoriesLoading } =
    useQuery(GET_CATEGORIES);

  console.log(data);
  console.log(categories);

  return (
    <div className="articles">
      <div className="articles-left-panel">
        <div className="items-container">
          <span style={{ "--i": 5 }}>Commentary</span>
          <span style={{ "--i": 4 }}>Tech News</span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 1 }}></span>
        </div>
      </div>
      <div className="articles-right-panel">
        {loading && <div>Loading...</div>}
        {error && <div>Something went wrong</div>}
        {data &&
          data.getPosts.map((post) => (
            <div
              className="tile"
              style={{
                backgroundImage: `url(${post.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1>{post.title}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Articles;
