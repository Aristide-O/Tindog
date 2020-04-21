import React from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'

class SignUp extends React.Component {

    render() {
        return (
            <Link to={'/MainPage'}>
                <button className="SignUp" type="send" onclick="alertmessage">Sign up</button>
            </Link>
        )
    }
}

export default SignUp