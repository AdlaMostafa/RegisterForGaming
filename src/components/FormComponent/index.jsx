import React, { useState } from "react";
import View from "../../Images/eye.png";
import Hide from "../../Images/Hide.png";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const FormComponent = ({ isLoading }) => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    showPassword: false,
    isAuth: false,
  });
  const [error, setError] = useState("");
  const { email, password } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      showPassword: !prevFormData.showPassword,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      login(formData);
      navigate("/");
    } catch (validationError) {
      setError("Please Fix the errors in the form");
    }
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="EmailDev">
        <label htmlFor="email">Your Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="PassWordDev">
        <label htmlFor="password">Your Password</label>
        <input
          required
          type={formData.showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Write your password"
          value={password}
          onChange={handleInputChange}
        />
        <img
          src={formData.showPassword ? Hide : View}
          alt={formData.showPassword ? "Hide" : "View"}
          className="password-toggle"
          onClick={togglePasswordVisibility}
        />
      </div>

      <div className="SubButt">
        <button type="submit">{isLoading ? "Loading ..." : "Login"}</button>
      </div>
      {error && (
        <p className="Error" style={{ color: "red", marginLeft: "-2px" }}>
          {error}
        </p>
      )}
    </form>
  );
};

export default FormComponent;
