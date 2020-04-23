import React from 'react';
import { Route, Switch } from "react-router-dom";

import FavoriteProfile from "./components/FavoriteProfile";
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import MyProfile from "./components/MyProfile";
import InscriptionPage from './components/InscriptionPage';
import SideBar from './components/SideBar'


import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/favoriteprofile" component={FavoriteProfile} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/inscriptionpage" component={InscriptionPage} />
      </Switch>
    </div>
  );
}


export default App;
