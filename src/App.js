import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css'
import Navbar from "./components/Navbar.js"
import './components/Footer/Footer.css';
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <div className="button">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App; 