import React from 'react';
import { Switch, Route } from "react-router-dom"
import { NavLink } from "react-router-dom";
import CardType from './components/CardType';
import Footer from "./components/Footer/Footer"
import InscriptionPage from './components/InscriptionPage';
import Navbar from "./components/Navbar.js"
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage'

import './App.css'
import './components/Footer/Footer.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Landing Page</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/MainPage" component={MainPage} />
      </Switch>






      {/* <Navbar /> */}
      {/* <div className="background">
        <div className="button">
          <SignIn />
          <SignUp />
        </div> */}
      {/* </div>  */}
      {/* <InscriptionPage/> */}
      <CardType />
      {/* <Footer /> */}
    </div >
  );
}


export default App; 