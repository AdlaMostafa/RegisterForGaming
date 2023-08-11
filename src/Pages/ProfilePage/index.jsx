// ProfilePage.js
import React , {useEffect} from "react";
import { ROLES } from "../../constants";
import { useNavigate } from "react-router-dom";
import SidePar from '../../components/SidePar'
import Header from '../../components/Header'
import Line from '../../Images/leftLine.png'
import './style.css'
import { PATHS } from "../../router/path";
const ProfilePage = () => {
 const navigate = useNavigate();
 useEffect(() => {
  const role = localStorage.getItem('role');

  if (!role || role === ROLES.GUEST) {
    navigate(PATHS.LOGIN);
  }else{
    navigate('/')
  }
});
const handleGoHome = () => {
  navigate('/');
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
      <div className="line3"><img src={Line} alt="line"/></div>      
    </div>
  );
};

export default ProfilePage;
