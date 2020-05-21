import React from 'react';

import Footer from "./Footer/Footer.js"
import LogInInformation from './LogInInformation';
import NavbarInscriptionPage from "./NavbarInscriptionPage.js";

import './InscriptionPage.css';

class InscriptionPage extends React.Component {

    render(){
    return (
        <div>
        <NavbarInscriptionPage/>
        <div className="inscriptionPage">
            <LogInInformation/>
        </div>
            <Footer/>
        </div>
      )

    }
    }

export default InscriptionPage;


