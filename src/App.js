import './App.css';
import SignUp from '../src/Pages/SignupPage';
import Login from '../src/Pages/LoginPage'
import GamePage from './Pages/GamePage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider><GamePage/></ThemeProvider>
       {/* <div className={`light ${theme === dark ? "dark":'light'} `}>
        text
       </div> */}
      {/* <SignUp/> */}
       {/* <Login/> */}
    </div>
  );
}

export default App;