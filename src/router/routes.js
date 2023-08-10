import { Navigate } from 'react-router-dom';
import AdminGuard from '../components/Guards/AdminGuard';
import UserGuard from '../components/Guards/UserGuard';
import GuestGuard from '../components/Guards/GuestGuard';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignupPage';
// import HomePage from '../Pages/Home'; // Import the home page component
import ProfilePage from '../../src/Pages/ProfilePage'; // Import the profile page component
import { PATHS } from '../router/path';
import GamePage from '../Pages/GamePage';
import UserPage from '../Pages/UserPage';

const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <GamePage />
      },
      {
        path: PATHS.ADMIN.LIST,
        element: <UserPage />
      }
    ]
  }
];

const userPages = [
  {
    path: PATHS.USERS.ROOT,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <GamePage />, // Render the home page component here
      },
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />, // Render the profile page component here
      }
    ]
  }
];

const guestPages = [
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
      // <GuestGuard>
        <SignUpPage />
      // </GuestGuard>
    )
  }
];

export const routes = [
  ...guestPages,
  ...adminPages,
  ...userPages,
  {
    index: true,
    element: <GamePage />
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page not found 404</h1>
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />
  }
];














// import { Navigate } from 'react-router-dom';
// import AdminGuard from '../components/Guards/AdminGuard';
// import UserGuard from '../components/Guards/UserGuard';
// import GuestGuard from '../components/Guards/GuestGuard';
// import LoginPage from '../Pages/LoginPage';
// import SignUpPage from '../Pages/SignupPage';
// // import HomePage from '../Pages/Home'; // Import the home page component
// import ProfilePage from '../../src/Pages/ProfilePage'; // Import the profile page component
// import { PATHS } from '../router/path';
// import GamePage from '../Pages/GamePage';
// import  UserPage  from '../Pages/UserPage';

// const adminPages = [
//   {
//     path: PATHS.ADMIN.ROOT,
//     element: <AdminGuard />,
//     children: [
//       {
//         index: true, 
//         element: <GamePage/>
//       },
//       {
//         path: PATHS.ADMIN.LIST,
//         element: <UserPage/>
//       }
//     ]
//   }
// ];

// const userPages =  [
//   {
//     path: PATHS.USERS.ROOT,
//     element: <UserGuard />,
//     children: [
//       {
//         index: true,
//         element:<GamePage/>, // Render the home page component here
//       }
//       ,
//       {
//         path: PATHS.PROFILE,
//         element: <ProfilePage />, // Render the profile page component here
//       }
//     ]
//   }
// ];

// const authPages = [
//   {
//     path: PATHS.LOGIN,
//     element: (
//       <GuestGuard>
//         <LoginPage />
//       </GuestGuard>
//     )
//   },
//   {
//     path: PATHS.SIGNUP,
//     element: (
//       <GuestGuard>
//         <SignUpPage />
//       </GuestGuard>
//     )
//   }
// ];

// const guestPages = [
//   {
//     path: PATHS.LOGIN,
//     element: (
//       <GuestGuard>
//         <LoginPage />
//       </GuestGuard>
//     )
//   },
//   {
//     path: PATHS.SIGNUP,
//     element: (
//       <GuestGuard>
//         <SignUpPage />
//        </GuestGuard>
//     )
//   },
//   ...authPages,
// ];


// export const routes  =   [
//   ...guestPages,
//   ...adminPages,
//   ...userPages,
//   {
//     index: true,
//     // element:<LoginPage/>
//     element: <GamePage/>
//   },
//   {
//     path: PATHS.ERRORS.NOT_FOUND,
//     element: <h1>Page not found 404</h1>
//   },
//   {
//     path: "*",
//     element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />
//   }
// ];
