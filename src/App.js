import './App.css';
// import { Route,Routes } from 'react-router-dom';
// import SignUp from '../src/Pages/SignupPage';
// import Login from '../src/Pages/LoginPage'
// import GamePage from './Pages/GamePage';
import { ThemeProvider } from './contexts/ThemeContext';
// import ProfilePage from '../src/Pages/ProfilePage'
// import UserPage from '../src/Pages/UserPage'
// import { Router } from 'react-router-dom';
import Router from "./router";
import AuthProvider from './contexts/AuthContext';
import { Suspense } from 'react';
import Login from './Pages/LoginPage';
// import AdminPage from './Pages/AdminPage';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <ThemeProvider>
       <Suspense fallback={<h1>Loading....</h1>} >
       <Router/>
       {/* <Login/> */}
       </Suspense>
       </ThemeProvider>
       </AuthProvider>
    </div>
  );
}

export default App;



{/* <GamePage/> */}
      {/* <ProfilePage/>    */}
       {/* <UserPage/> */}
       {/* <AdminPage/> */}
      {/* <SignUp/> */}
       {/* <Login/> */}