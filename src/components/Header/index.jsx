import React from 'react'
import Profile from "../../Images/ptofile.png";
import { Link } from 'react-router-dom';
import { PATHS } from '../../../src/router/path';
import './style.css'

const Header = () => {
  return (
    <div className="head">
      <div className='contentParent'>
        <div className='contentChild'>
        <h3 >WelcomeBack</h3>
          <p >{localStorage.getItem('name')}</p>
        </div>
        <div className='imagediv'>
          <Link to={PATHS.PROFILE}
          ><img src={Profile}  alt='profile'/></Link>
          </div>
          </div>
        </div>
  )
}

export default Header