import React from "react"
import Navbar from "../components/Navbar";

class Message extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <SendMessage />
            </div>
        )
    }
}

export default Message;
