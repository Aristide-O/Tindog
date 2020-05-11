import React, { Component } from "react"
import Navbar from "./Navbar";
import ContactList from "./ContactList"
import Footer from "./Footer/Footer";
import MessageForm from './MessageForm'
import MessageList from "./MessageList"


import "./Message.css"


class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
        }
      } 

      handleNewMessage = (text) => {
        this.setState({
          messages: [...this.state.messages, { me: true, author: "Me", body: text }],
        })
      }

    render() {
        return (
            <div>
                <Navbar />
                <div className="Message">
                    <ContactList />
                    <MessageList messages={this.state.messages} />
                    <MessageForm onMessageSend={this.handleNewMessage} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Message;
