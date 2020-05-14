import React from "react"
import './LoginPage.css';
import LoginAccess from "./LoginAccess"
import NavbarLoginPage from "./NavbarLoginPage.js";

const LoginPage=() => {

    
    return(
        <div className="landing">
            <NavbarLoginPage />
            <LoginAccess />   
        </div>
    )
}

export default LoginPage