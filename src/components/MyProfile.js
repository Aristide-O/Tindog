import React from "react"

import Footer from "./Footer/Footer"
import Navbar from "../components/Navbar";
import ProfilePhoto from "./ProfilePhoto";
import Indicator from './Indicator'
import SideBar from "./SideBar"

import './MyProfile.css'

const MyProfile = (props) => {
    
    return(
        <div className="bg-profile">
            <SideBar right />
            <Navbar />
            <ProfilePhoto />

            <div className="profil">
                <div className="head">
                
                    <div>
                        <div className="pseudoName">
                                <Indicator />
                                <p className="p">{props.location.data && props.location.data.pseudo}</p>
                        </div>

                        <p className="location">{props.location.data && props.location.data.location}</p>
                    </div>
                </div>

                <div className="myDescription">
                    <h3 className="hProfile">My description</h3>
                    <p>{props.location.data && props.location.data.description}</p>
                </div>
                <div className="myResearch">
                <h3 className="hProfile">My research</h3>
                    <p>{props.location.data && props.location.data.description}"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyProfile;
