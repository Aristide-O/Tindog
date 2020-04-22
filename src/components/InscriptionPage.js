import React from 'react';
import InscriptionButton from './InscriptionButton';
import LogInInformation from './LogInInformation';
import './InscriptionPage.css';
import { Link} from "react-router-dom";
import Navbar from "/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/Navbar.js";
import Footer from "/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/Footer/Footer.js"
import '/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/Footer/Footer.css'

class InscriptionPage extends React.Component {
    render(){
    return (
        <Link to="MainPage">
        <Navbar/>
        <div className="inscriptionPage">
            <LogInInformation/>
            <InscriptionButton/>
        </div>
        <Footer/>
        </Link>
)
    }
}

export default InscriptionPage