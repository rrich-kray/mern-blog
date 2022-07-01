import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Main.css";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_POSTS } from "../../utils/queries";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { GET_CATEGORIES } from "../../utils/queries";
import Menu from "../Menu/Menu";
import Form from "../Form/Form";
import Tile from "../Tile/Tile";
import { color } from "@mui/system";

const Main = ({
  activePost,
  changeActivePost,
  currentColor,
  changeCurrentColor,
  activeSection,
  changeActiveSection,
}) => {
  const [currentIndex, changeCurrentIndex] = useState(0);
  const [isVisible, changeVisibility] = useState(false);
  const [isLoginVisible, changeLoginVisibility] = useState(false);
  const [isSignupVisible, changeSignupVisibility] = useState(false);
  const [isAddPostVisible, changeAddPostVisibility] = useState(false);
  const [currentWidth, changeCurrentWidth] = useState("30%");
  const categories = useQuery(GET_CATEGORIES, {
    fetchPolicy: "no-cache",
  });

  console.log(currentColor);

  const context = useContext(AuthContext);

  const toggleMenuVisibility = () => {
    changeVisibility(!isVisible);
  };

  const toggleLoginVisibility = () => {
    if (!isSignupVisible && !isAddPostVisible) {
      changeLoginVisibility(!isLoginVisible);
    }
  };

  const toggleSignupVisibility = () => {
    if (!isLoginVisible && !isAddPostVisible) {
      changeSignupVisibility(!isSignupVisible);
    }
  };

  const toggleAddPostVisibility = () => {
    if (!isLoginVisible && !isSignupVisible) {
      changeAddPostVisibility(!isAddPostVisible);
    }
  };

  const { data, isLoading, error } = useQuery(GET_POSTS, {
    fetchPolicy: "no-cache",
  });

  console.log(data);

  const toggleWidth = () => {
    if (currentWidth === "100%") {
      changeCurrentWidth("30%");
      return;
    }
    changeCurrentWidth("100%");
  };

  const colors = [
    "rgba(217, 177, 17, 0.5)",
    "rgba(99, 42, 214, 0.5)",
    "rgba(42, 65, 214, 0.5)",
  ];

  const randomizeColor = (colorArr) =>
    changeCurrentColor(
      () => colors[Math.floor(Math.random() * colorArr.length - 1)]
    );

  const selectRandomSentence = () => {
    const sentenceArrLength =
      data.getPosts[currentIndex].content.split(".").length;

    return sentenceArrLength > 1
      ? data.getPosts[currentIndex].content.split(".")[
          Math.floor(Math.random() * sentenceArrLength - 1)
        ]
      : data.getPosts[currentIndex].content;
    // Will generate a different sentence every time... can solve this by moving this logic to the backend, into the sequelize model?
  };

  if (!data) {
    return <div>No data found</div>;
  }

  if (error) {
    console.log(error);
    return "error";
  }

  const changeIndexWrapper = (direction, data) => {
    // function does more than one thing.
    // Can refactor this out into a seperate file by adding a data input parameter
    randomizeColor(colors);
    if (direction === "right") {
      if (currentIndex === data.length - 1) {
        changeCurrentIndex(0);
        return;
      }
      changeCurrentIndex(() => currentIndex + 1);
    }

    if (direction === "left") {
      if (currentIndex === 0) {
        changeCurrentIndex(() => data.length - 1);
        return;
      }

      changeCurrentIndex(() => currentIndex - 1);
    }
  };

  return (
    <div className="main">
      {isVisible && (
        <Menu
          isLoginVisible={isLoginVisible}
          isSignupVisible={isSignupVisible}
          toggleLoginVisibility={toggleLoginVisibility}
          toggleSignupVisibility={toggleSignupVisibility}
          toggleAddPostVisibility={toggleAddPostVisibility}
          activeSection={activeSection}
          changeActiveSection={changeActiveSection}
        />
      )}
      {isLoginVisible && <Form formType={"login"} />}
      {isSignupVisible && <Form formType={"signup"} />}
      {isAddPostVisible && (
        <Form formType={"add-post"} categories={categories} />
      )}
      <span className="expand-menu" onClick={() => toggleMenuVisibility()}>
        <img
          src="https://www.svgrepo.com/show/40915/menu.svg"
          alt="toggle-menu-icon"
        ></img>
      </span>
      <div
        className="main-left"
        style={{
          backgroundImage: `url(${data.getPosts[currentIndex].image_url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {error && <div>No data found</div>}
        {isLoading && <div>Loading...</div>}
        <div className="overlay"></div>
        <h1 style={{ color: currentColor }}>
          {data.getPosts[currentIndex].title}
        </h1>
        <p style={{ color: currentColor }}>{selectRandomSentence()}</p>
        <div className="main-arrows-container">
          <div
            className="left-arrow arrow"
            style={{ background: currentColor }}
            onClick={() => changeIndexWrapper("left", data.getPosts)}
          >
            <ArrowBackIosNewIcon />
          </div>
          <div
            className="right-arrow arrow"
            style={{ background: currentColor }}
            onClick={() => changeIndexWrapper("right", data.getPosts)}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
        <span className="expand-btn" onClick={() => toggleWidth()}></span>
      </div>

      <div
        className="main-right"
        style={{ width: window.innerWidth <= 768 ? "100%" : currentWidth }}
      >
        <div
          className="right-panel-overlay"
          style={{ background: currentColor }}
        >
          {data.getPosts.map((post) => (
            <Tile
              post={post}
              changeActivePost={changeActivePost}
              acitvePost={activePost}
              currentColor={currentColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
