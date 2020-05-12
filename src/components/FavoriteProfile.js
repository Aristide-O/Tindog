import React from "react"
import Navbar from "../components/Navbar";
import FavCard from "./FavCard";

const fakeCard = []

const FavoriteProfile = (props) => {
    const data = props.location.data 
    return(
        <div>
        <Navbar />
            <h1>Retrouve ici tes profils favoris !</h1>
            <div>
                <FavCard image={data && data.dogImage.url} name={data && data.dogName.name.first}/>
            </div>
        </div>
    )
}
export default FavoriteProfile
