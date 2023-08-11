import React, { useState} from "react";
import Play from "../../Images/play hand.png";
import WhiteLogo from "../../Images/whiteLogo.png";
import Dots from "../../Images/Dots.png";
import Qoute from "../../Images/quote.png";
import Vector from "../../Images/vector.png";
import Arrow from "../../Images/arrow_back.png";
import ButtonComponent from "../../components/ButtonComponent";
import "./style.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { PATHS } from "../../router/path";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().min(3).max(20),
  email: yup.string().email().required(),
  repeatPassword: yup.string().required().oneOf([yup.ref("password")]),
  agreeTerms: yup.boolean().required(),
});

const Signup = () => {
  const { signup, isLoading } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    agreeTerms: false,
    error: "",
    passwordStrength: "",
    showSignUp: false,
  });

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      password,
      passwordStrength: getPasswordStrength(password),
    }));
  };
  const handleRepeatPasswordChange = (event) => {
    setFormData({ ...formData, repeatPassword: event.target.value });
  };

  const handleLoginButtonClick = () => {
    setFormData((prevState) => ({
      ...prevState,
      showSignUp: true,
    }));
    navigate(PATHS.LOGIN);
  };

  const handelChangeInput = ({ target: { value, name, type, checked } }) => {
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: inputValue }));
  };
  
  const getPasswordStrength = async (password) => {
    try {
      await schema.validate({ password });
      return "strong"; 
    } catch (error) {
      if (error.inner.some((e) => e.path === "password")) {
        if (error.inner.some((e) => e.message.includes("at least 8 characters"))) {
          return "weak";
        } else if (error.inner.some((e) => e.message.includes("at least 13 characters"))) {
          return "medium";
        }
      }
    }
  };
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (validationError) {
      const errorMessage = validationError.errors.join(" ");
      setFormData((prevState) => ({ ...prevState, error: errorMessage }));
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      setFormData((prevState) => ({
        ...prevState,
        error: "Passwords do not match",
      }));
      return;
    }

    if (
      !formData.password ||
      !formData.repeatPassword ||
      !formData.agreeTerms
    ) {
      setFormData((prevState) => ({
        ...prevState,
        error: "Please complete all fields",
      }));
      return;
    }

    try {
      await signup({
        email: formData.email,
        password: formData.password,
        name: formData.username,
      });
      setFormData((prevState) => ({
        ...prevState,
        error: "Successfully Registering",
      }));
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      setFormData((prevState) => ({
        ...prevState,
        error: "Registration failed",
      }));
    }
  };

  const { agreeTerms, error, passwordStrength } = formData;
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
                  <label htmlFor="username">userName*</label>
                  <input
                    required
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    placeholder="Write your name"
                    onChange={handelChangeInput}
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
                    onChange={handelChangeInput}
                  />
                </div>
                < div className="PassWordDev">
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
                  </div>
                  <div className={`strenght ${passwordStrength}`}>
                 <div className={`PasswordStrength ${passwordStrength}`}>
                   {passwordStrength === "high" && "StrongPassword"}
                   {passwordStrength === "medium" && "MediumPassword"}
                   {passwordStrength === "low" && "WeakPassword"}
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
                    onChange={handelChangeInput}
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
                  <ButtonComponent 
                  text={ isLoading ? 'Loading ...':"Register Account"  } type="submit" />
                </div>
                <div className="OR">
                  <p>Or</p>
                </div>
                <div className="LogButt2">
                  <ButtonComponent
                    text={ 'Login ' }
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
    