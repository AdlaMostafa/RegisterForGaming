import React, { useState } from "react";
import FormComponent from "../../components/FormComponent";
import ImageComponent from "../../components/ImageComponent";
import Logo from "../../Images/BlueLogo.png";
import Quote from "../../Images/quote.png";
import Stamp from "../../Images/stamp.png";
import Google from "../../Images/google icon.png";
import Twitter from "../../Images/twitter Logo.png";
import Linked from "../../Images/linkedin Logo.png";
import Git from "../../Images/github Logo.png";
import Signup from "../../Pages/SignupPage";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./style.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { AUTH_API } from "../../config/api";
import { ROLES } from "../../constants";
import { PATHS } from "../../router/path";

const Login = () => {
  const navigate = useNavigate()
  const {signup,isLoading }= useAuthContext();
  const [formData,setFormData]=useState({
username:'',
email:'',
number:'',
password:'',
repassword:'',
  })
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleRegisterButtonClick = () => {
    navigate(PATHS.SIGNUP)
  };
  // const handleSubmit = async (e)=>{
  //   e.preventDefault();
  //   signup(formData);
  //   try {
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  /********************************************************** */

 const handleSubmit = async (e)=>{
    e.preventDefault();
    if (formData.password===formData.repassword) {
      signup({
      name : formData.username ,
      email :formData.email,
      number:formData.number,
      password:formData.password
    });
    }else{
      alert ('Passwords do not match')
    }
    console.log('Submit');
  }
  // Redirect to Login page if redirectToLogin is true
  if (redirectToLogin) {
    return <Signup />;
  }

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
          <FormComponent handleSubmit={handleSubmit} />
        </div>
        <div className="Ques">
          <p>Don’t have an account? </p>
          {/* <Link to={PATHS.SIGNUP}>Register</Link> */}
          <Link to={PATHS.SIGNUP}>
          <button>Register</button>
        </Link>
          {/* <button onClick={handleRegisterButtonClick} >Register </button> */}
        </div>
      </div>
    </div>
  );

}
export default Login;
