// HomePage.js
import React from "react";
import Header from "../../components/Header";
import SidePar from "../../components/SidePar";
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <SidePar/>
      <div>
        <Header/>
        <button>Logout</button>
        <button>Toggle Theme</button>
      </div>
    </div>
  );
};

export default HomePage;
