import React from "react"
import { Link } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './LandingPage.css';

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

export default LandingPage