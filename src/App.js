import React from 'react';
import { Route, Switch } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/Faq"
import FavoriteProfile from "./components/FavoriteProfile";
import InscriptionPage from './components/InscriptionPage';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import MyProfile from "./components/MyProfile";

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/message" component={Message} />
        <Route path="/favoriteprofile" component={FavoriteProfile} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/inscriptionpage" component={InscriptionPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/faq" component={Faq} />
      </Switch>
    </div>
  );
}


export default App;
