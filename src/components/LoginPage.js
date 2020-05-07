import React from "react"
import './LoginPage.css';
import LoginButton from "./LoginButton"
import LoginAccess from "./LoginAccess"

const LoginPage=() => {
    return(
        <div className="landing">
            <LoginAccess />
            <LoginButton />
            
        </div>
    )
}

export default LoginPage