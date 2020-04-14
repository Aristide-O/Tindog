import React from 'react';

import InscriptionButton from './components/InscriptionButton';
import PersonalInformation from './components/PersonalInformation';
import LogInInformation from './components/LogInInformation';
import ProfilePhoto from './components/ProfilePhoto';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <LogInInformation/>
      <PersonalInformation/>
      <InscriptionButton/>
    </div>
  );
}

export default App;
