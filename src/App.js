import React from 'react';
import CardType from './components/CardType';
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer/Footer"
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import './App.css'
import './components/Footer/Footer.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="background">
        <div className="button">
          <SignIn />
          <SignUp />
        </div>
      </div> */}
      <CardType />
      <Footer />
    </div>
  );
}


export default App; 