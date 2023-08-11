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