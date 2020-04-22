import React from "react"
import { Link } from "react-router-dom"
import './LoginPage.css';

const LandingPage = () => {
    return(
        <div className="landing">
            <SignIn />
            <Link to="/">
                <SignUp />
            </Link>
        </div>
    )
}

export default LoginPage