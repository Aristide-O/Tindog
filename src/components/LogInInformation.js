import React from 'react'

import DatePicker from 'react-date-picker'


import ProfilePhoto from './ProfilePhoto'
import GetLocation from './GetLocation'

import './LogInInformation.css'
import './ProfilePhoto.css'
import InscriptionButton from './InscriptionButton'


class LogInInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pseudo: '',
      email: '',
      password: '',
      gender: '',
      dateOfBirth: new Date(),
      description: '',
      location: '',
      profilePhoto: 'https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChangePseudo = (event) => {
    this.setState({ pseudo: event.target.value });
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
      }


  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  handleChangeGender = (event) => {
    this.setState({ gender: event.target.value });
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

  handleChange(event) {
    this.setState({
      profilePhoto: URL.createObjectURL(event.target.files[0])
    })
  }

  //selact date from DatePicker
  onChange = date => this.setState({ date })


  render() {
    return (
      <form className="blockLogInInformationL">
        <h1>Create your account</h1>
        <div className="leftblockL">
          <div className="profilePhoto">
            <img className="photo" src={this.state.profilePhoto} alt="user-avatar" />
            <input className="file" type="file" onChange={this.handleChange} />
          </div>
          <div className="block1L">
            <label className="LogInLabel" htmlFor="pseudo">Pseudo: </label>
            <input
            className="inputL"
              id="pseudo"
              type="text"
              value={this.state.pseudo}
              onChange={this.handleChangePseudo}
            />
            <label className="LogInLabel" htmlFor="email">Email address: </label>
            <input
            className="inputL"
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label className="LogInLabel" htmlFor="password">Password: </label>
            <input
            className="inputL"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
        </div>
        <div className="block2L">
          <label  className="LogInLabel" htmlFor="sex">Gender: </label>
          <select
          className="selectL"
            value={this.state.value}
            onChange={this.handleChangeGender}>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label className="LogInLabel" htmlFor="dateOfBirth">Date of Birth: </label>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
          />
          <label  className="LogInLabel" htmlFor="description">Description:</label>
          <textarea className="textareaL" value={this.state.description} onChange={this.handleChangeDescription} />
          <label className="LogInLabel" htmlFor="location">Location: </label>
          <GetLocation />
        </div>
        <InscriptionButton onClick={() => this.saveStateToLocalStorage} avatar={this.state.profilePhoto} pseudo={this.state.pseudo} location={this.state.location} description={this.state.description} gender={this.state.gender} />
      </form>
    )
  }
}


export default LogInInformation


