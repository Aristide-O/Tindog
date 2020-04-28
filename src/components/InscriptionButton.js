import React from 'react';

import {Link} from "react-router-dom";

import './InscriptionButton.css';


const InscriptionButton = (props) => {
    
    return (
        <Link to={{
            pathname : "/myprofile",
            data:{
              pseudo: props.pseudo,
              location: props.location,
              gender: props.gender,
              description: props.description
            }
          }}>
              <button className="inscriptionButton" type="send" onClick={(e) =>(window.confirm("Congrats! You are now on Tindog"))}>Sign-up</button>
          </Link>
    )
    }





export default InscriptionButton