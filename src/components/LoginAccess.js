import React from 'react'
import './LoginAccess.css'



class LoginAccess extends React.Component {
    constructor(props) {
      super(props)
         this.state = {email: '', password:''}
           
    
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
      }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
      }


    render() { 
        return (
            <form classeName="form-loginAcces"> 
                <label className="label-loginAcces" htmlFor="email">Email </label>
                <input id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail} required/>
                <label className="label-loginAcces" htmlFor="password">Password </label>
                <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} required/>
            </form>
        )
    }
}
export default LoginAccess