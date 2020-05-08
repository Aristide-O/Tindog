import React from "react"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './LandingPage.css';

const LandingPage = () => {
    return(
        <div className="landing">
                <SignIn />
                <SignUp />
        </div>
    )
}

export default LandingPage
