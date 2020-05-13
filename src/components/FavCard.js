import React from "react"
import Indicator from "./Indicator"

const FavCard = (props) => {
    return(
        <div className="background-card">
            <img className="img-card" src={props.image} alt={props.name} />
            <div className="co-pseudo">
                <Indicator />
                <p className="textDescription">{props.name}</p>
            </div>
        </div>
    )
}


export default FavCard