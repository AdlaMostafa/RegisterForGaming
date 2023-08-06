import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import { useAuthContext } from "../../../contexts/AuthContext";
import { ROLES } from "../../../constants";

const AdminGuard = () =>{
    const {role}= useAuthContext();
    if (role === ROLES.ADMIN) return <Outlet/>;
    return <Navigate to={PATHS.LOGIN} replace={true}/>
};
export default AdminGuard;
