import React from "react"

import Footer from "./Footer/Footer"
import Navbar from "../components/Navbar";
import Indicator from './Indicator'
import SideBar from "./SideBar"

import './MyProfile.css'

class MyProfile extends React.Component {
    state = {
        user: null
    }

    saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(this.state))
        console.log('savestate', this.state.user);
      }

      componentDidMount(){
          if(this.props.location.data){
              this.setState({ user: this.props.location.data }, () => {
                  this.saveStateToLocalStorage()
              })
          } else {
              
              const localState = JSON.parse( localStorage.getItem('state'))
              console.log('coucou', localState);
            this.setState({ user : localState.user})
          }
      }

    render(){
        console.log('render', this.state);
        
        return(
            <div className="bg-profile">
                <SideBar right />
                <Navbar />
                <img className="photo" src={this.state.user && this.state.user.avatar} alt={this.props.alt}/>
    
                <div className="profil">
                    <div className="head">
                    
                        <div>
                            <div className="pseudoName">
                                    <Indicator />
                                    <p className="p">{this.state.user && this.state.user.pseudo}</p>
                            </div>
                            <p className="location">{this.state.user ? this.state.user.location : 'paris'}</p>
                        </div>
                    </div>
    
                    <div className="myDescription">
                        <h3 className="hProfile">My description</h3>
                        <p>{this.state.user && this.state.user.description}</p>
                    </div>
                    <div className="myResearch">
                    <h3 className="hProfile">My research</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
      }
}


export default MyProfile;
