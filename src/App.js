import React from 'react';
import { Route, Switch } from "react-router-dom"

import Message from "./components/Message"
import LandingPage from './components/LandingPage';
import './App.css'


function App() {
  return (
    <div className="App">
      <Message />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/message" component={Message} />
    </Switch>
    
    </div>
  );
}


export default App;
