import React from "react";
import "./Contact.css";



class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            online: props.online
        }
    }

    render() {
        return (
            <div className="Contact">
                
                    <img className="avatar" alt={this.props.nameavatar} src={this.props.image}></img>
              
                <div>
                    <div>
                        <h4 className="name">{this.props.nameavatar}</h4>
                    </div>
                    <div className="status">
                        <div className={this.state.online ? "status-online" : "status-offline"}></div>
                        <span className="status-text" onClick={event => {
                            const newStateOnline = !this.state.online;
                            this.setState({ online: newStateOnline })
                        }}>{this.state.online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;