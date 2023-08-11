import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../../../src/router/path"
import { useAuthContext } from "../../../contexts/AuthContext";
import { ROLES } from "../../../constants";

const AdminGuard = () =>{
    const {role}= useAuthContext();
    if (role === ROLES.ADMIN) 
    return <Outlet/>;
    else 
    return <Navigate to={PATHS.LOGIN} replace={true}/>
};
export default AdminGuard;
