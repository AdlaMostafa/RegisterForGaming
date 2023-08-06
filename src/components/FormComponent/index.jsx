import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import View from '../../Images/eye.png';
import Hide from '../../Images/Hide.png';
import { useAuthContext } from "../../contexts/AuthContext";

const FormComponent = () => {
  const {isLoading} = useAuthContext();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    error: '',
    showPassword: false,
  });

  const { userName, email, phone, password, error, showPassword } = formData;

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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are completed
    if (!password || !userName || !email || !phone) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        error: 'Please complete all fields',
      }));
      return;
    }

    // Clear error state if validation passes
    setFormData((prevFormData) => ({
      ...prevFormData,
      error: '',
    }));
  };

  return (
    <form action='' onSubmit={handleFormSubmit}>
      <div className='NameDev'>
        <label htmlFor='name'>Your Name</label>
        <input
          required
          type='text'
          id='name'
          name='userName'
          placeholder='Write your name'
          value={userName}
          onChange={handleInputChange}
        />
      </div>
      <div className='EmailDev'>
        <label htmlFor='email'>Your Email</label>
        <input
          required
          type='email'
          id='email'
          name='email'
          placeholder='Write your email'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className='PhoneDev'>
        <label htmlFor='phone'>Your Phone Number</label>
        <input
          required
          type='number'
          id='phone'
          name='phone'
          placeholder='Write your phone number'
          value={phone}
          onChange={handleInputChange}
        />
      </div>
      <div className='PassWordDev'>
        <label htmlFor='password'>Your Password</label>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          id='password'
          name='password'
          placeholder='Write your password'
          value={password}
          onChange={handleInputChange}
        />
        <img
          src={showPassword ? Hide : View}
          alt={showPassword ? 'Hide' : 'View'}
          className='password-toggle'
          onClick={togglePasswordVisibility}
        />
      </div>

      <div className='SubButt'>
        <ButtonComponent text={ isLoading ? 'Loading ...':'Login' } type='submit' />
      </div>
      {error && <p className='Error' style={{ color: 'red', marginLeft: '-2px' }}>{error}</p>}
    </form>
  );
};

export default FormComponent;
