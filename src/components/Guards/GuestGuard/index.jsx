// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const GuestGuard = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const guestRoutes = {
//     '/login': true,
//     '/signup': true,
//   };

//   const isGuestRoute = guestRoutes[location.pathname];

//   if (!isGuestRoute) {
//     navigate('/login');
//   }

//   return <>{children}</>;
// };

// export default GuestGuard;



import React from "react";
import { Navigate} from "react-router-dom";
import { PATHS } from "../../../../src/router/path"
import { useAuthContext } from "../../../contexts/AuthContext";
import { ROLES } from "../../../constants";

const GuestGuard = ({children}) =>{
    const {role} = useAuthContext();
    if (role===ROLES.USER)    
     return <Navigate to={PATHS.USERS.ROOT} replace={true}/>
     if (role===ROLES.ADMIN )    
     return <Navigate to={PATHS.ADMIN.ROOT} replace={true}/>
    return children;//Children here is HomePage
};
export default GuestGuard;

