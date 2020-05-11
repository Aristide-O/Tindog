import React, { Component } from 'react'
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

  componentDidUpdate = () => {
    this.node.scrollTop = this.node.scrollHeight
  }

 render() {
    return (
        <div className="MessageList">
        {this.props.messages.map((message, i) => (
          <UserMessage key={i} {...message} />
        ))}
      </div>)
  }

}


export default MessageList