import React, { Component } from "react"
import Navbar from "./Navbar";
import SendMessage from "./SendMessage"
import ContactList from "./ContactList"
import Contact from "./Contact"
import Footer from "./Footer/Footer";

class Message extends Component {
    render() {
        return (
            <div className="Message">
                <Navbar />
                <Contact />
                <ContactList />
                <SendMessage />
                <Footer />
            </div>
        )
    }
}

export default Message;
