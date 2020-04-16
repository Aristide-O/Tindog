import React from 'react';
import Logo from '/home/wilder/paris-0320-prject2-tindog/src/components/LogoTindog.png'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css'



function App() {
  return (
    <div className="App">
      <img className='logo-homepage' src={Logo} alt='Logo'/>
      <SignIn/>
      <SignUp/>
    </div>
  );
}


export default App; 