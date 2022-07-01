import React, { useContext } from "react";
import "./Menu.css";
import Auth from "../../utils/auth";
import { AuthContext } from "../../context/authContext";

const Menu = ({
  toggleLoginVisibility,
  toggleSignupVisibility,
  toggleAddPostVisibility,
  activeSection,
  changeActiveSection,
}) => {
  // console.log(AuthContext);
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <div className="menu">
      {context.user ? (
        <>
          <button className="btn" onClick={() => toggleAddPostVisibility()}>
            Add Post
          </button>
          {/* <button className="btn" onClick={() => changeActiveSection("dash")}>
            Dashboard
          </button> */}
          <button className="btn" onClick={() => context.logout()}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            className="login-btn btn"
            onClick={() => toggleLoginVisibility()}
          >
            Log in
          </button>
          <button
            className="signup-btn btn"
            onClick={() => toggleSignupVisibility()}
          >
            Signup
          </button>
        </>
      )}
    </div>
  );
};

export default Menu;
