import React, { Component } from "react"
import Navbar from "./Navbar";
import SendMessage from "./SendMessage"
import ContactList from "./ContactList"
import Footer from "./Footer/Footer";
import MessageArea from "./MessageArea"

import "./Message.css"


class Message extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="Message">
                    <ContactList />
                    <MessageArea />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Message;
