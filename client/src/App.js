import "./App.css";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS, GET_COMMENTS_BY_POST } from "./utils/queries";

// import Nav from "./components/Nav/Nav";
// import Hero from "./components/Hero/Hero";
// import Articles from "./components/Articles/Articles";
import Main from "./components/Main/Main";
import Post from "./components/Post/Post";
import Dashboard from "./components/Dashboard/Dashboard";

// spotty useQuery hooks probably due to conditional rendering on state change
// Let's test and see what happens when I move the apollo hooks outside of conditional rendering patterns
// Or, could use a left join at the resolver to query both posts and its comments simultaneously

function App() {
  const [activePost, changeActivePost] = useState();
  const [currentColor, changeCurrentColor] = useState("");
  const [activeSection, changeActiveSection] = useState("main");

  const renderSection = () => {
    if (activeSection === "main") {
      return (
        <Main
          activePost={activePost}
          changeActivePost={changeActivePost}
          currentColor={currentColor}
          changeCurrentColor={changeCurrentColor}
          activeSection={activeSection}
          changeActiveSection={changeActiveSection}
        />
      );
    } else if (activeSection === "dash") {
      return <Dashboard />;
    }
  };

  return (
    <div className="app">
      {activePost ? (
        <Post
          post={activePost}
          changeActivePost={changeActivePost}
          currentColor={currentColor}
        />
      ) : (
        renderSection()
      )}
    </div>
  );
}

export default App;
