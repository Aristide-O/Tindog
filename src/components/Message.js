import React from "react"
import Navbar from "../components/Navbar";

const Message = (props) => {
    return(
        <div>
        <Navbar />
            <p>JE SUIS SUR MES MESSAGES</p>
            <p>Tu as WAAF {props.location.data.dogName.name.title} {props.location.data.dogName.name.first}</p> 
        </div>
    )
}

export default Message;
