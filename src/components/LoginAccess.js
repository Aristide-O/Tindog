import React from 'react';
import './LoginAccess.css';
import LoginButton from './LoginButton';



class LoginAccess extends React.Component {
    constructor(props) {
      super(props)
         this.state = {
          email: '',
          password:''
        
        }
         
           
    
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
      }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
      }

      onSubmit = e => {
        e.preventDefault();
    }


    render() { 
        return (
            <form className="formloginAccess" onSubmit={this.onSubmit}
            noValidate > 
             <div classname="labelloginAccess">
              <label className="labelloginAccess" htmlFor="email">Email </label>
              <input className="input-loginAccess" id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail} required/>
              <label className="labelloginAccess" htmlFor="password">Password </label>
              <input className="input-loginAccess" id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} required/>
             </div>
             <LoginButton email={this.state.email} password={this.state.password}/>
            </form>
        )
    }
}
export default LoginAccess;