import React from 'react'
import Profile from "../../Images/ptofile.png";
import ImageComponent from '../ImageComponent';
import './style.css'
const Header = () => {
  return (
    <div className="head">
          <a href=""><ImageComponent src={Profile}/></a>
          <div className="headText">
            <p class="welcome-back">
              Welcome back
              <span class="jenny">Jenny,</span>
            </p>
          </div>
        </div>
  )
}

export default Header