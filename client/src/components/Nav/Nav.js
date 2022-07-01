import React from "react";
import "./Nav.css";

const Nav = () => {
  const navLinks = ["Placeholder", "Placeholder", "Placeholder"];
  return (
    <div className="nav">
      <div className="nav-left-panel nav-panel">
        <img src={require("./logo.svg").default}></img>
      </div>
      <div className="nav-center-panel nav-panel">
        {navLinks.map((link) => (
          <a href="#">{link}</a>
        ))}
      </div>
      <div className="nav-right-panel nav-panel">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Nav;
