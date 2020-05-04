import React from "react"
import { Chat } from 'react-chat-popup';
import Navbar from "../components/Navbar";

const Message = (props) => {
    return(
        <div>
        <Navbar />
        <Chat />
            <p>JE SUIS SUR MES MESSAGES</p>
            <p>Tu as WAAF {props.location.data && props.location.data.dogName.name.title} {props.location.data && props.location.data.dogName.name.first}</p> 
        </div>
    )
}

export default Message;
