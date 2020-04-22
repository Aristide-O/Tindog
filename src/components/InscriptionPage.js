import React from 'react';

import Footer from "./components/Footer/Footer.js"
import InscriptionButton from './InscriptionButton';
import LogInInformation from './LogInInformation';
import Navbar from "./components/Navbar.js";

import './InscriptionPage.css';
import './components/Footer/Footer.css'

class InscriptionPage extends React.Component {
    render(){
    return (
        <div>
        <Navbar/>
        <div className="inscriptionPage">
            <LogInInformation/>
            <InscriptionButton/>
        </div>
        <Footer/>
        </div>
)
    }
}

export default InscriptionPage