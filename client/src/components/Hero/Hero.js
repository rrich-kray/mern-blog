import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_POSTS } from "../../utils/queries";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Hero.css";

const Hero = () => {
  const [activeSlide, changeActiveSlide] = useState();
  const [featuredPosts, setFeaturedPosts] = useState({});
  const [getData] = useLazyQuery(GET_POSTS);

  return (
    <div className="hero">
      <div className="hero-content-container">
        <h1>Ryan's Blog</h1>
        <p>Place that hold's all my ramblings</p>
        <div className="subscribe-container">
          <input
            name="subscribe"
            id="subscribe"
            placeholder="subscribe"
          ></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
