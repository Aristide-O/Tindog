import React from "react"
import ContactList from "./ContactList"
import Footer from "./Footer/Footer";
import MessageForm from './MessageForm'
import MessageList from "./MessageList"
import Navbar from "./Navbar";
import SideBar from "./SideBar"
import "./Message.css"

class MessageWB extends React.Component {
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
        const match = "your match"
        return (
            <div>
              <SideBar right/>
              <Navbar />
              <div className="Message-Page">
              <div className="Message">
              <ContactList />
              </div>
              <div className="main-message-area">
                <MessageList  messages={this.state.messages} name={match}/>
                <MessageForm onMessageSend={this.handleNewMessage} />
              </div>    
             </div>
             <Footer />
            </div>
        )
    }
}

export default MessageWB;