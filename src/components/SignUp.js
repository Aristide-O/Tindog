import React from 'react'
import { Link } from "react-router-dom"
import './SignUp.css'

class SignUp extends React.Component {


    render(){
    return (
        <Link to ="InscriptionPage">
            <button className="SignUp" type="send">Sign up</button>
        </Link>
    )
    }
}



export default SignUp
