import React from "react"
import Navbar from "../components/Navbar";

const MyProfile = (props) => {
    
    
    return(
        <div>
        <Navbar />
            <p>Tu as WAAF {props.location.data.dogName.name.title} {props.location.data.dogName.name.first}</p> 
            <p>JE SUIS SUR MON PROFIL</p>
        </div>
    )
}

export default MyProfile;
