import React from 'react'
import DatePicker from 'react-date-picker'
import './LogInInformation.css'

class LogInInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pseudo: '',
      email: '',
      password: '',
      sex: '',
      dateOfBirth: new Date(),
      description: '',
      location: '',
    }

    this.handleChangePseudo = this.handleChangePseudo.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeSex = this.handleChangeSex.bind(this)
    this.handleChangeDateOfBirth = this.handleChangeDateOfBirth.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleChangePseudo(event) {
    this.setState({ pseudo: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleChangeSex(event) {
    this.setState({ sex: event.target.value });
  }
  handleChangeDateOfBirth(event) {
    this.setState({ dateOfBirth: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  //selact date from DatePicker
  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="blockLogInInformation">
        <label htmlFor="pseudo">Pseudo: </label>
        <input
          id="pseudo"
          type="text"
          value={this.state.pseudo}
          onChange={this.handleChangePseudo}
        />
        <label htmlFor="email">Email address: </label>
        <input
          id="email"
          type="text"
          value={this.state.email}
          onChange={this.handleChangeEmail}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
        />
        <label htmlFor="sex">Sex: </label>
        <select value={this.state.value}
          onChange={this.handleChangeSex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="dateOfBirth">Date of Birth: </label>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
        <label htmlFor="description">Description:</label>
        <textarea value={this.state.description} onChange={this.handleChangeDescription} />
      </div>
    )
  }
}

export default LogInInformation


