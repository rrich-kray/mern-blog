import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_USER_ID } from "../../utils/queries";
import { AuthContext } from "../../context/authContext";
import "./Dashboard.css";

const Dashboard = () => {
  // dash -> sidebar + main
  // main -> nav + body
  // body -> various tile components.
  const context = useContext(AuthContext);
  console.log(context); // this is inconsistent

  const { data } = useQuery(GET_POST_BY_USER_ID, {
    variables: { user_id: context.user.id },
    fetchPolicy: "no-cache",
  }); // which leads this to be inconsistent

  console.log(data);

  const [mainSection, changeMainSection] = useState("main");

  return (
    <div className="dash">
      <div className="main-section"></div>
      <div className="user-projects-section"></div>
    </div>
  );
};

export default Dashboard;
