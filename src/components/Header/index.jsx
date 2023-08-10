import React, { useContext } from 'react'
import Profile from "../../Images/ptofile.png";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import ImageComponent from '../ImageComponent';
import './style.css'
import ProfilePage from '../../Pages/ProfilePage';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="head">
      <div className='contentParent'>
        <div className='contentChild'>
        <h3 className={`text-${themeContext.theme}`}>WelcomeBack</h3>
          <p className={`text-${themeContext.theme}`}>{localStorage.getItem('name')}</p>
        </div>
        <div className='imagediv'>
          <Link to='/profile'>
          <img src={Profile} />
          </Link></div>
        
          </div>
          
        </div>
  )
}

export default Header