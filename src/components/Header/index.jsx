import React from "react";
import Profile from "../../Images/ptofile.png";
import { Link } from "react-router-dom";
import { PATHS } from "../../../src/router/path";
import "./style.css";

export const Header = () => {
  const role = localStorage.getItem("role");

  const getProfilePath = () => {
    if (role === "admin") {
      return PATHS.ADMIN.PROFILE;
    } else {
      return PATHS.PROFILE;
    }
  };

  return (
    <div className="head">
      <div className="contentParent">
        <div className="contentChild">
          <h3>Welcome Back</h3>
          <p>{localStorage.getItem("name")}</p>
        </div>
        <div className="imagediv">
          <Link to={getProfilePath()}>
            <img src={Profile} alt="profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
