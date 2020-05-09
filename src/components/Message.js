import React, { Component } from "react"
import ContactList from "./ContactList"
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import SendMessage from "./SendMessage"

import "./Message.css"

class Message extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="Message">
                    <ContactList />
                    <SendMessage />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Message;
