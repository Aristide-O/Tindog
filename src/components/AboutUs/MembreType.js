import React from "react"

const MembreType = (props) => {
    return(
        <div>
            <img src={props.image} alt={props.alt}/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default MembreType