import React from "react";
import ContactList from "./ContactList"
import SendMessage from "./SendMessage"

class Message extends React.Component {
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