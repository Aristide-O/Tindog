import React from 'react';
import { Route, Switch } from "react-router-dom";

import FavoriteProfile from "./components/FavoriteProfile";
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
        <Route path="/favoriteprofile" component={FavoriteProfile} />
        <Route path="/myprofile" component={MyProfile} />
      </Switch>
    </div>
  );
}


export default App;
