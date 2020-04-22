import React from 'react';

import Footer from "/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/Footer/Footer.js"
import InscriptionButton from './InscriptionButton';
import LogInInformation from './LogInInformation';
import Navbar from "/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/Navbar.js";

import './InscriptionPage.css';
import '/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/Footer/Footer.css'

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