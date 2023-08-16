import { Navigate } from "react-router-dom";
import { PATHS } from "../router/path";
import { lazy } from "react";
import AdminGuard from "../components/Guards/AdminGuard";
import UserGuard from "../components/Guards/UserGuard";
import GuestGuard from "../components/Guards/GuestGuard";
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const SignUpPage = lazy(() => import("../Pages/SignupPage"));
const ProfilePage = lazy(() => import("../../src/Pages/ProfilePage"));
const GamePage = lazy(() => import("../Pages/GamePage"));
const AdminPage = lazy(() => import("../Pages/AdminPage"));

const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <GamePage />,
      },
      {
        path: PATHS.ADMIN.LIST,
        element: <AdminPage />,
      },
    ],
  },
];

const userPages = [
  {
    path: PATHS.USERS.ROOT,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <GamePage />,
      },
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
];

const guestPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    ),
  },
];

const routes = [
  ...guestPages,
  ...adminPages,
  ...userPages,
  {
    index: true,
    element: <GamePage />,
    // element: <LoginPage/>,
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page not found 404</h1>,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
export { adminPages, userPages, guestPages, routes };
