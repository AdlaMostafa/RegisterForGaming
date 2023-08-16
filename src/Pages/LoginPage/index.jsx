import React, { useState } from "react";
import FormComponent from "../../components/FormComponent";
import ImageComponent from "../../components/ImageComponent";
import Logo from "../../Images/BlueLogo.png";
import Stamp from "../../Images/stamp.png";
import Google from "../../Images/google icon.png";
import Twitter from "../../Images/twitter Logo.png";
import Linked from "../../Images/linkedin Logo.png";
import Git from "../../Images/github Logo.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { PATHS } from "../../router/path";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading } = useAuthContext();
  const handleSignup = () => {
    navigate(PATHS.SIGNUP);
  };

  return (
    <div className="Parent">
      <div className="LeftContent">
        <div className="Logo">
          <ImageComponent src={Logo} alt="" />
        </div>
        <div className="Quote1">
          <p>“</p>
        </div>
        <div className="LeftPar">
          <p>
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </p>
          <p className="par2">Hideo Kojima</p>
        </div>
        <div className="Stamp">
          <ImageComponent src={Stamp} alt="" />
        </div>
      </div>
      <div className="RightContent">
        <h1>Join the game!</h1>
        <div className="RightTitle">
          <p>Go inside the best gamers social network! </p>
        </div>
        <div className="Icons">
          <div className="Google">
            <ImageComponent src={Google} alt="" />
          </div>
          <div className="Twitter">
            <ImageComponent src={Twitter} alt="" />
          </div>
          <div className="Linked">
            <ImageComponent src={Linked} alt="" />
          </div>
          <div className="Git">
            <ImageComponent src={Git} alt="" />
          </div>
        </div>
        <div className="OR">
          <div className="line1"></div>
          <p>Or</p>
          <div className="line2"></div>
        </div>
        <div className="FormParent">
          <FormComponent isLoading={isLoading} />
        </div>
        <div className="Ques">
          <p>Don’t have an account? </p>
          <button onClick={handleSignup}>Register</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
