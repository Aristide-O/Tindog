import React from "react"
import Navbar from "../components/Navbar";
import ContactList from "./ContactList"
import SendMessage from "./SendMessage"

class Message extends React.Component {
    render(){
        return(
            <div>
            <Navbar />
                Voici mes msgs
            <div className="message">
                <ContactList />
                <SendMessage />
            </div>
            </div>
        )
    }
}

export default Message;
