import React from "react"
import Navbar from "../components/Navbar";
import ProfilePhoto from "./ProfilePhoto";

const MyProfile = (props) => {
    return(
        <div>
        <Navbar />
        <ProfilePhoto />
        <p>{props.location.data && props.location.data.pseudo}</p>
        </div>
    )
}

export default MyProfile;
