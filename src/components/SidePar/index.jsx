import React from 'react'
import ImageComponent from '../ImageComponent'
import plus from "../../Images/plus.png";
import Setting from "../../Images/Setting.png";
import Line from "../../Images/leftLine.png";
import Sun from "../../Images/Sun.png";
import moon from "../../Images/moon.png";
import Logout from "../../Images/logout.png";
import { useThemeContext } from "../../contexts/ThemeContext";
import "./style.css";
import { useAuthContext } from "../../contexts/AuthContext";
const SidePar = () => {
    const {toggleTheme} = useThemeContext();
  const {logout} = useAuthContext()

  const handleLogout = ()=>{
    logout();
  }
  return (
    <div>
        <div className="leftSide">
          <div className="leftIcon">
            <div className="plus"><ImageComponent src={plus}/></div>
            <button className="Setting" >
          <ImageComponent src={Setting} alt="Setting" />
        </button>
           
            <button className="logoutIcon" onClick={handleLogout} >
          <img src={Logout} alt="logout" />
        </button>
           
            <div className="themeIcon">
            <button className="moon" onClick={toggleTheme}>
          <ImageComponent src={moon} alt="Moon" />
        </button>
        <button className="sun" onClick={toggleTheme}>
          <ImageComponent src={Sun} alt="Sun" />
        </button>
            </div>
          </div>
        </div>
        <div className="line"><ImageComponent src={Line}/></div>
    </div>
  )
}

export default SidePar