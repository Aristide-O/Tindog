import React from 'react'
import './LoginButton.css'
import { Link } from 'react-router-dom'


class LoginButton extends React.Component {


    render(){
    return (
       <Link to="/MainPage" >
        <button className="Login" type="send">Log in</button>
       </Link> 
    )
    }
}



export default LoginButton
