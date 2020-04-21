import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Footer from './Footer/Footer'
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing">
            <SignIn />
            <SignUp />
            <Footer />
        </div>
    )
}

export default LandingPage
