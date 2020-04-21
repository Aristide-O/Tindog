import React from 'react'
import './InscriptionButton.css'


class InscriptionButton extends React.Component {
    render(){
    return (
        <button className="inscriptionButton" type="send" onClick={(e) =>(window.confirm("Congrats! You are now on Tindog"))}>Sign-up</button>
    

    )
    }
}



export default InscriptionButton