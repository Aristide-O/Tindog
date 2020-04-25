import React from "react"

const MembreType = (props) => {
    return(
        <div className="member">
            <img className="member-img" src={props.image} alt={props.alt}/>
            <h3 className="name-equipe">{props.name}</h3>
        </div>
    )
}

export default MembreType