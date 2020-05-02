import React, { Component } from "react";
import ContactList from "./ContactList"
import SendMessage from "./SendMessage"
import "./Contact.css"

class Message extends Component {
    render(){
        return(
            <div className="message">
                <ContactList />
                <SendMessage />
            </div>
        )
    }
}

export default Message;