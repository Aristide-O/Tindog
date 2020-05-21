import React from 'react';

import './ProfilePhoto.css';

class ProfilePhoto extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          profilePhoto: 'https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png'
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          profilePhoto: URL.createObjectURL(event.target.files[0])
        })
      }
      render() {
        return (
          <div className="profilePhoto">
            <img className="photo" src={this.state.profilePhoto}/>
            <input className="file" type="file" onChange={this.handleChange}/>
          </div>
        );
      }
}


   

export default ProfilePhoto;