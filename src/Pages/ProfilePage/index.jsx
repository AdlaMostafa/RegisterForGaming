// ProfilePage.js
import React , {useContext,useEffect} from "react";
import { ROLES } from "../../constants";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import SidePar from '../../components/SidePar'
import Header from '../../components/Header'
import Line from '../../Images/leftLine.png'
import './style.css'
import { PATHS } from "../../router/path";
const ProfilePage = () => {
 const navigate = useNavigate();
 const themeContext = useContext(ThemeContext);

 useEffect(() => {
  const role = localStorage.getItem('role');

  if (!role || role === ROLES.GUEST) {
    navigate('/login');
    setTimeout(() => {
      alert('Hey Guest, sign in before!');
    }, 1000);
  }
});
const handleGoHome = () => {
  navigate(PATHS.HOME);
};
const userName = localStorage.getItem('name');
return (
    <div>
      <div className="headprof">
        <Header/>
        </div>
      <input
          value={userName}
          type="text"
          placeholder="Enter your name"
        />
      <div className="col-md-2">
          <SidePar/>
        </div>
        <button onClick={handleGoHome} >
          Back to Home
        </button>
      <div className="line3"><img src={Line}/></div>
      {/* User Info */}
      
    </div>
  );
};

export default ProfilePage;
