import React from "react"
import { Link } from "react-router-dom"
import Indicator from "./Indicator"
import bubble from "../icons-navbar/speech-bubble.png"
import "./FavCard.css"

const FavCard = (props) => {
    return(
        <div className="background-card">
            <img className="img-card" src={props.image} alt={props.name} />
            <div className="pseudo-fav">
                <div className="pseudo-fav-name">
                    <Indicator />
                    <p className="textDescription">{props.name}</p>
                </div>
                <Link to={{
                    pathname:"/message",
                    data:{
                        nameDog: props.name,
                    }
                }}>
                    <img className="icon-bubble" src="https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_message-512.png" alt="envoyer un message" title="Envoyer un message" />
                </Link>
            </div>
        </div>
    )
}


export default FavCard