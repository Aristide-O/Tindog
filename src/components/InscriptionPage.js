import React from 'react';

import Footer from "./Footer/Footer.js"
import InscriptionButton from './InscriptionButton';
import LogInInformation from './LogInInformation';
import Navbar from "./Navbar.js";

import './InscriptionPage.css';
<<<<<<< HEAD

=======
>>>>>>> dev

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


