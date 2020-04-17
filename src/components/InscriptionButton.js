import React from 'react'
import './InscriptionButton.css'

class InscriptionButton extends React.Component {
    render(){
    return (
        <button className="inscriptionButton" type="send" onclick="alertmessage">Sign-up</button>
    )
    }
}

export default InscriptionButton