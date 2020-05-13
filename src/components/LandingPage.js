import React from "react"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './LandingPage.css';

const LandingPage = () => {
    return(
        <div className="landingPage">
                <SignIn />
                <SignUp />
        </div>
    )
}

export default LandingPage
