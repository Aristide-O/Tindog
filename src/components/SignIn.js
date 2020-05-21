import React from 'react';
import { Link } from "react-router-dom";
import './SignIn.css';


class SignIn extends React.Component {


    render(){
    return (
            <Link to="/loginpage">
                <button className="SignIn" type="send">Sign in</button>
            </Link>
    )
    }
}

export default SignIn;



