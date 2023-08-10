import './App.css';
import { Route,Routes } from 'react-router-dom';
import SignUp from '../src/Pages/SignupPage';
import Login from '../src/Pages/LoginPage'
import GamePage from './Pages/GamePage';
import { ThemeProvider } from './contexts/ThemeContext';
import ProfilePage from '../src/Pages/ProfilePage'
import HomePage from '../src/Pages/HomePage'
import UserPage from '../src/Pages/UserPage'
// import { Router } from 'react-router-dom';
import Router from "./router";
import AuthProvider from './contexts/AuthContext';
import AdminPage from './Pages/AdminPage';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <ThemeProvider>
        {/* <GamePage/> */}
      {/* <ProfilePage/>    */}
       {/* <div className={`light ${theme === dark ? "dark":'light'} `}>
        text
       </div> */}
       {/* <UserPage/> */}
       {/* <AdminPage/> */}
       {/* <HomePage/> */}
      {/* <SignUp/> */}
       {/* <Login/> */}
       <Router/>
       </ThemeProvider>
       </AuthProvider>
    </div>
  );
}

export default App;