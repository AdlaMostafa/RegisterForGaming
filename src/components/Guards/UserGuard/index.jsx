// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const UserGuard = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userRoutes = {
//     '/home': true,
//     '/profile': true,
//   };

//   const isUserRoute = userRoutes[location.pathname];

//   if (!isUserRoute) {
//     navigate('/home');
//   }

//   return <>{children}</>;
// };

// export default UserGuard;




import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import { PATHS } from "../../../router/path";
import { useAuthContext } from "../../../contexts/AuthContext";
import { ROLES } from "../../../constants";

const UserGuard = () =>{
    const {role} = useAuthContext();
    if (role === ROLES.USER|| role===ROLES.ADMIN) return <Outlet/>;//Outlet هو عبارة عن placeholder  بييجي مكانه متغير
    return <Navigate to={PATHS.LOGIN} replace={true}/>
};
export default UserGuard;