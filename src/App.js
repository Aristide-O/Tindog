import React from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from './components/LandingPage';
import './App.css';
import MainPage from './components/MainPage';
import FavoriteProfile from "./components/FavoriteProfile";
import MyProfile from "./components/MyProfile";

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
