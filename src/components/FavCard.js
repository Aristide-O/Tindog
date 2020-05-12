import React from "react"

const FavCard = (props) => {
    return(
        <div className="background-card">
            <img className="img-card" src={props.image} alt={props.name} />
            <div className="text-total">
                <p className="textDescription">{props.name}</p>
            </div>
        </div>
    )
}


export default FavCard