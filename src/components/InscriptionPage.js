import React from 'react';
import InscriptionButton from '/Users/gretamezzina/Desktop/WCS/paris-0320-prject2-tindog/src/components/InscriptionButton.js';
import LogInInformation from '/Users/gretamezzina/Desktop/WCS/paris-0320-prject2-tindog/src/components/LogInInformation.js';
import './InscriptionPage.css';

class InscriptionPage extends React.Component {
    render(){
    return (
        <div className="inscriptionPage">
            <LogInInformation/>
            <InscriptionButton/>
        </div>
    )
    }
}

export default InscriptionPage