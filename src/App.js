import React from 'react';

import CardType from './components/CardType';
import Footer from "./components/Footer/Footer"
import InscriptionPage from './components/InscriptionPage';
import Navbar from "./components/Navbar.js";
import NoButton from './components/NoButton/NoButton';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css'
import './components/Footer/Footer.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <div className="background">
        <div className="button">
          <SignIn />
          <SignUp />
        </div> */}
      {/* </div>  */}
      {/* <InscriptionPage/> */}
      < NoButton/>
      {/* <CardType /> */}
      {/* <Footer /> */}
    </div>
  );
}


export default App; 