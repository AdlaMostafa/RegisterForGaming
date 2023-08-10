import { useReducer } from "react";
import { ROLES } from "../constants/index";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "../constants/auth";
import {AUTH_API} from '../config/api'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  isAuth: false,
  user: null,
  token: null,
  role: ROLES.GUEST,
  error: null,
  isLoading: false,
};
const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      }

      case AUTH_ACTIONS.LOGIN:
        const token = action.payload?.token || state?.token;
        const isAdmin = action.payload?.isAdmin || false; 
        const role = isAdmin ? ROLES.ADMIN : ROLES.USER;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
      
        return {
          ...state,
          isAuth: true,
          token: token,
          role: role,
          error: null,
          isLoading: false,
        };
      
    case AUTH_ACTIONS.LOGOUT:
      ["token", "role","user"].forEach((item) => localStorage.removeItem(item));
      return initialState;

    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};
const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const navigate = useNavigate('');
//   const token = state.token || localStorage.getItem('token')
//   const config ={
//     headers:{
//         Authorization:`Bearer ${token}`,
// },
//   }

const login = async (body) => {
  dispatch({ type: AUTH_ACTIONS.SET_LOADING });
  try {
    const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
    let username = data.name;
    let id= data._id;
    localStorage.setItem("name",username);
    localStorage.setItem("id",id);

    navigate("/")
    dispatch({ type: AUTH_ACTIONS.LOGIN, payload: data });
  } catch (error) {
    dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    alert("you have entered a wrong password or email!");
  }
};

   const signup = async (body) =>{//body heere == email , password
    dispatch({type:AUTH_ACTIONS.SET_LOADING});
   try {
    const {data} = await axios.post(AUTH_API+AUTH_API_PATHS.SIGNUP,body)//اسمه اللي موجود في الconfig
    dispatch({type:AUTH_ACTIONS.LOGIN,payload:data?.data||data})
   } catch (error) {
    dispatch({type:AUTH_ACTIONS.SET_ERROR,payload:error.message});
   }
   }
   const logout=()=>{
    dispatch({ type :  AUTH_ACTIONS.LOGOUT });

};
const getProfileData = async ()=>{
  dispatch({type:AUTH_ACTIONS.SET_LOADING});    

  try {
      const token =  state.token ||localStorage.getItem("token");
      const {data}= await axios.get(AUTH_API+AUTH_API_PATHS.PROFILE,{
          headers:{
              "Authorization":`Bearer ${token}`
          }
      });
      dispatch({type:AUTH_ACTIONS.LOGIN,payload:data?.data || data });    
  } catch (error) {

      dispatch({type:AUTH_ACTIONS.SET_ERROR,payload:error.message});          
  }
}  
return{
    ...state,
    login,
    signup,
    logout,
    getProfileData
}}
export default useAuth;