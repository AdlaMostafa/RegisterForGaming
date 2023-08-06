import { createContext ,useContext} from "react";
import useAuth from '../hooks/useAuth'

export const AuthContext = createContext(null); //عن طريقها بقدر احدد اي context بدي اياه و بعمل الها اكسبورت 

export const useAuthContext  = ()=> useContext(AuthContext);

const AuthProvider = ({children})=>{
    const data = useAuth();
    return <AuthContext.Provider value={data}> 
                                                  {/**data ===> login,signup,logout,getprofilestate,state*/} 
            {children}
    </AuthContext.Provider>
}
export default AuthProvider
