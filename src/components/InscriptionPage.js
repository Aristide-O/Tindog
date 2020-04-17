import React from 'react';
import InscriptionButton from './InscriptionButton';
import LogInInformation from './LogInInformation';
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