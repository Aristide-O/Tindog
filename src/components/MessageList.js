import React from 'react'
import PropTypes from 'prop-types'
import UserMessage from './UserMessage'
import './MessageList.css'

class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    messages: [],
  }


 render() {
    return (
        <div className="MessageList">
          <p className="msg-send">Be the first to send a message to {this.props.name} !</p> 
          {this.props.messages.map((message, i) => (
          <UserMessage key={i} {...message} />
        ))}
      </div>)
  }

}


export default MessageList