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

