import React, { useState } from "react";
import Play from "../../Images/play hand.png";
import WhiteLogo from "../../Images/whiteLogo.png";
import Dots from "../../Images/Dots.png";
import Qoute from "../../Images/quote.png";
import Vector from "../../Images/vector.png";
import Arrow from "../../Images/arrow_back.png";
import Login from "../../Pages/LoginPage";
import ButtonComponent from "../../components/ButtonComponent";
import "./style.css";
import useAuth from '../../hooks/useAuth'
import { useAuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { AUTH_API } from "../../config/api";

// const initialState = {
//   userName: "",
//   email: "",
//   phone: "",
//   password: "",
//   repeatPassword: "",
//   agreeTerms: false,
//   error: "",
//   passwordStrength: "",
//   showSignUp: false,
//   loading: false
// };

const Signup = () => {
  const {login,isLoading} = useAuthContext();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    agreeTerms: false,
    error: "",
    passwordStrength: "",
    showSignUp: false,
  });

  const handleUserNameChange = (event) => {
    setFormData({ ...formData, userName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordStrength = getPasswordStrength(password);
    setFormData({ ...formData, password, passwordStrength });
  };

  const handleRepeatPasswordChange = (event) => {
    setFormData({ ...formData, repeatPassword: event.target.value });
  };

  const handleLoginButtonClick = () => {
    setFormData({ ...formData, showSignUp: true });
  };

  const handleAgreeTermsChange = (event) => {
    setFormData({ ...formData, agreeTerms: event.target.checked });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (formData.password===formData.repeatPassword) 
     login({
      email : formData.email,
      password:formData.password,
      name:formData.userName
    }) 
    else{
      alert("passwords don't match")
    }
    
    
  }
  /****************************************** */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    login(FormData)
    const { password, repeatPassword, agreeTerms } = formData;

    // Check if password and repeated password match
    if (password !== repeatPassword) {
      setFormData({ ...formData, error: "Passwords do not match" });
      return;
    }

    // Check if all fields are completed
    if (!password || !repeatPassword || !agreeTerms) {
      setFormData({ ...formData, error: "Please complete all fields" });
      return;
    }

    // Clear error state if validation passes
    setFormData({ ...formData, error: "Successfully Registering" });
  };

  const getPasswordStrength = (password) => {
    if (
      password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/)
      || (password.length >= 8 && /\d/.test(password))
    ) {
      return "high";
    } else if (
      password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      || (password.length <= 8 && /\d/.test(password))
    ) {
      return "medium";
    }
    return "low";
  };

  const {
    userName,
    email,
    phone,
    password,
    repeatPassword,
    agreeTerms,
    error,
    showSignUp,
    passwordStrength,
  } =formData;

  // Render the SignUpPage component if showSignUp is true
  if (showSignUp) {
    return <Login />;
  }
  
  return (
    <div className="Parent2">
      <div className="BlueDiv">
        <div className="WLogo">
          <img src={WhiteLogo} alt="" />
        </div>
        <div className="Dots">
          <img src={Dots} alt="" />
        </div>
        <div className="Qoute2">
          <img src={Qoute} alt="" />
        </div>
        <div className="Para">
          <p>
            I always observe the people who pass by when I <br />
            ride an escalator. I'll never see most of them <br />
            again, so I imagine a lot of things about their
            <br />
            lives... about the day ahead of them.
          </p>
        </div>
        <div className="text2">
          <p>Hideo Kojima</p>
        </div>
        <div className="Vector2">
          <img src={Vector} alt="" />
        </div>
        <div className="Back">
          <ButtonComponent
            text="Back"
            type="submit"
            onClick={handleLoginButtonClick}
          />
        </div>
        <div className="Arrow">
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="LeftContent">
        <img src={Play} alt="" />
      </div>
      <div className="RightContent2">
        <h1>Register Individual Account!</h1>
        <div className="RightTitle">
          <p>
            For the purpose of gamers regulation, your <br />
            details are required.{" "}
          </p>
        </div>
        <div className="Form2">
          <form onSubmit={handleFormSubmit}>
            <div className="NameDev">
              <label htmlFor="userName">userName*</label>
              <input
                required
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                placeholder="Write your name"
                onChange={handleUserNameChange}
              />
            </div>
            <div className="EmailDev">
              <label htmlFor="email">Email address*</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Write your email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="PhoneDev">
              <label htmlFor="phone">Phone*</label>
              <input
                required
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Write your phone number"
                onChange={handlePhoneChange}
              />
            </div>
            <div className="PassWordDev">
              <label htmlFor="password">Create Password</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Write your password"
                onChange={handlePasswordChange}
              />
              <div className={`strenght ${passwordStrength}`}>
                <div className={`PasswordStrength ${passwordStrength}`}>
                  {passwordStrength === "high" && "StrongPassword"}
                  {passwordStrength === "medium" && "MediumPassword"}
                  {passwordStrength === "low" && "WeakPassword"}
                </div>
              </div>
            </div>
            <div className="PassWordRep">
              <label htmlFor="repeatPassword">Repeat Password</label>
              <input
                required
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                value={formData.repeatPassword}
                placeholder="Repeat Password"
                onChange={handleRepeatPasswordChange}
              />
            </div>
            <div className="Check">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={agreeTerms}
                onChange={handleAgreeTermsChange}
              />
              <label htmlFor="agreeTerms">
                I agree to terms & conditions
              </label>
            </div>
            {/* Error message */}
            {error && (
              <p className="Error" style={{ color: "red", marginLeft: "-2px" }}>
                {error}
              </p>
            )}
            <div className="SubButt2"> 
              <ButtonComponent text={ isLoading ? 'Loading ...':"Register Account"  } type="submit" />
            </div>
            <div className="OR">
              <p>Or</p>
            </div>
            <div className="LogButt2">
              <ButtonComponent
                text={ isLoading ? 'Loading ...':'Login ' }
                type="submit"
                onClick={handleLoginButtonClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
