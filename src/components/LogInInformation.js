import React from 'react'

import DatePicker from 'react-date-picker'

import ProfilePhoto from './ProfilePhoto'

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
  }

  handleChangePseudo = (event) => {
    this.setState({ pseudo: event.target.value });
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  handleChangeSex = (event) => {
    this.setState({ sex: event.target.value });
  }
  handleChangeDateOfBirth = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  }
  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  }
  handleChangeLocation = (event) => {
    this.setState({ location: event.target.value });
  }

  //selact date from DatePicker
  onChange = date => this.setState({ date })

  render() {
    return (
      <form className="blockLogInInformation">
        <h1>Create your account</h1>
        <div className="leftblock">
          <ProfilePhoto />
          <div className="block1">
            <label htmlFor="pseudo">Pseudo: </label>
            <input
              id="pseudo"
              type="text"
              value={this.state.pseudo}
              onChange={this.handleChangePseudo}
              required
            />
            <label htmlFor="email">Email address: </label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              required
            />
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            />
          </div>
        </div>
        <div className="block2">
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
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea value={this.state.description} onChange={this.handleChangeDescription} />
          <label htmlFor="location">Location: </label>
          <input
            id="location"
            type="text"
            value={this.state.location}
            onChange={this.handleChangeLocation}
          />
        </div>
      </form>
    )
  }
}

export default LogInInformation


