import React from 'react'
import './LogInInformation.css'

class LogInInformation extends React.Component{
    constructor(props){
    super(props)
    this.state = {
                    email : '',
                    password: '',
                    repeatpassword: ''
                   }

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
     }

    handleChangeEmail(event) {
        this.setState({email: event.target.value} );
      }
    handleChangePassword(event) {
        this.setState({password: event.target.value} );
      }
    handleChangeRepeatPassword(event) {
        this.setState({repeatpassword: event.target.value} );
      }


    // handleSubmitEmail(event) {
    //     alert('E\' stato inserito un nome: ' + this.state.email);
    //     event.preventDefault();
    //   }

    render() {
    return (
        <div className = "blockLogInInformation">
            <div id="email">
            <label htmlFor="email">Email address: </label>
            <input 
            id = "email" 
            type="text" 
            value ={this.state.email} 
            onChange = {this.handleChangeEmail}
            />
            </div>
            <div id="password">
            <label htmlFor="password">Password: </label>
            <input 
            id = "password" 
            type="password" 
            value ={this.state.password} 
            onChange = {this.handleChangePassword}
            />
            </div>
            <div id="repeatPassword">
             <label htmlFor="repeatpassword">Reapeat password: </label>
            <input 
            id = "repeatpassword" 
            type="password" 
            value ={this.state.repeatpassword} 
            onChange = {this.handleChangeRepeatPassword}
            />
            </div>
        </div>
    )

}
}

export default LogInInformation


