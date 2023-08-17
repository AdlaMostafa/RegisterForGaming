// ProfilePage.js
import React, { useEffect } from "react";
import { ROLES } from "../../constants";
import { useNavigate } from "react-router-dom";
import SidePar from "../../components/SidePar";
import Header from "../../components/Header";
import Line from "../../Images/leftLine.png";
import "./style.css";
import { PATHS } from "../../router/path";

const ProfilePage = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("name");
  const userPassword = localStorage.getItem("password");
  useEffect(() => {
    if (!role || role === ROLES.GUEST) {
      navigate(PATHS.LOGIN);
    }
  }, [navigate, role]);
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="headprof">
        <Header />
      </div>
      <input value={userName} type="text" placeholder="Enter your name" />
      {role !== ROLES.ADMIN && (
        <input value={userPassword} type="password" readOnly />
      )}
      <div className="col-md-2">
        <SidePar />
      </div>
      <button onClick={handleGoHome}>Back to Home</button>
      <div className="line3">
        <img src={Line} alt="line" />
      </div>
    </div>
  );
};

export default ProfilePage;
