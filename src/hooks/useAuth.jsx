import { useReducer, useState } from "react";
import { ROLES } from "../constants/index";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "../constants/auth";
import { AUTH_API } from "../config/api";
import axios from "axios";

const initialState = {
  isAuth: localStorage.getItem("isAuth") === "true",
  user: (() => {
    try {
      const userJson = localStorage.getItem("user");
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      console.error("Error parsing user JSON:", error);
      return null;
    }
  })(),
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || ROLES.GUEST,
  error: null,
  isLoading: false,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const token =
        action?.payload?.token || state?.token || localStorage.getItem("token");
      const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        error: null,
        // data:action?.payload,
        isLoading: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      ["token", "role", "user", "isAuth"].forEach((item) =>
        localStorage.removeItem(item)
      );
      return {
        isAuth: false,
        user: null,
        token: null,
        role: ROLES.GUEST,
        error: null,
        isLoading: false,
      };

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
  const token = state.token || localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [delet, setDeletUser] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
      // localStorage.setItem("token",data?.data.token)
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const signup = async (body) => {
    //body heere == email , password
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.SIGNUP, body); //اسمه اللي موجود في الconfig
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };
  const getProfileData = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const apiPath =
        state.role === ROLES.ADMIN
          ? AUTH_API_PATHS.ADMIN_PROFILE
          : AUTH_API_PATHS.USER_PROFILE;
      const { data } = await axios.get(AUTH_API + apiPath, config);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  console.log(state);

  const listUsers = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const res = await axios.get(
        "https://react-tt-api.onrender.com/api/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(res.data.users);
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  const Delete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setDeletUser(userId);
      try {
        await axios.delete(
          AUTH_API + AUTH_API_PATHS.DELETE_USER + `${userId}`,
          config
        );
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } catch (error) {
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
      }
    }
  };
  console.log(state);
  return {
    ...state,
    login,
    signup,
    getProfileData,
    listUsers,
    logout,
    users,
    delet,
    Delete,
  };
};
export default useAuth;
