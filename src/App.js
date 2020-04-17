import React from 'react';
import Logo from './components/LogoTindog.png'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css'
import Navbar from "./components/Navbar.js"
import './components/Footer/Footer.css';
import Footer from  "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <img className='logo-homepage' src={Logo} alt='Logo'/>
      <SignIn/>
      <SignUp/>
      <Footer />
    </div>
  );
}


export default App; 