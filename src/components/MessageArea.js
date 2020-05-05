import React, { Component } from 'react';
import { Chat } from 'react-chat-popup';
 
class MessageArea extends Component {
  render() {
    return (
      <div className="App">
        <Chat fullScreenMode={true} />
      </div>
    );
  }
}
 
export default MessageArea ;