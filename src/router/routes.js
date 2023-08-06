import { Navigate } from 'react-router-dom';
import AdminGuard from '../components/Guards/AdminGuard';
import UserGuard from '../components/Guards/UserGaurd';
import GuestGuard from '../components/Guards/GuestGuard';
import LoginPage from '../Pages/Login';
import SignUpPage from '../Pages/Signup';
import HomePage from '../Pages/Home'; // Import the home page component
import ProfilePage from '../Pages/Profile'; // Import the profile page component
import { PATHS } from './path';

const userPages =  [
  {
    path: PATHS.HOME,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <HomePage />, // Render the home page component here
      },
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />, // Render the profile page component here
      }
    ]
  }
];

const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    )
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    )
  }
];

const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <h1>Admin</h1>
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <h1>Users</h1>
      }
    ]
  }
];

const guestPages = [
  ...authPages
];

export const routes = (role) => [
  ...guestPages,
  ...adminPages,
  ...userPages,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page not found 404</h1>
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />
  }
];
