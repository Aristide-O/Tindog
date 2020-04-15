import React from 'react'

class ProfilePhoto extends React.Component{
    // constructor (props){
    //     super (props)
    //     this.state = {
    //         profilePhoto: '',
    //     }
    // this.handleChangeProfilePhoto = this.handleChangeProfilePhoto.bind(this);
    // }

    // handleChangeProfilePhoto(event) {
    //     this.setState({ profilePhoto: event.target.value });
    //   }


    // render(){
    //     return (
    //         <div>
    //         <label htmlFor="profilePhoto">Your Photo </label>
    //         <input type="file" ref={this.state.profilePhoto} />
    //         <img onSubmit={this.handleChangeProfilePhoto} scr={this.state.profilePhoto} alt = "Your pic"/>
    //         </div>
    //     )
    // }

    constructor(props){
        super(props)
        this.state = {
          profilePhoto: ''
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
          <div>
            <input type="file" onChange={this.handleChange}/>
            <img src={this.state.profilePhoto}/>
          </div>
        );
      }

}


   

export default ProfilePhoto