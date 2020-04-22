import React from 'react';

import {Link} from "react-router-dom";

import './InscriptionButton.css';


class InscriptionButton extends React.Component {
    render(){
    return (
        <Link to="MainPage">
        <button className="inscriptionButton" type="send" onClick={(e) =>(window.confirm("Congrats! You are now on Tindog"))}>Sign-up</button>
        </Link>
    )
    }
}



export default InscriptionButton