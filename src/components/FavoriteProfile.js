import React from "react"
import Navbar from "../components/Navbar";
import SideBar from "./SideBar"

const FavoriteProfile = () => {
    return(
        <div>
            <SideBar right/>
        <Navbar />
            <p>
                Voici mes profil favoris
            </p>
        </div>
    )
}

export default FavoriteProfile
