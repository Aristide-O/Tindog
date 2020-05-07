import React from 'react';

const MessageText = () => {
    return (
        <div className="MessageTextInput">
        <form>
          <input
            className="form-control"
            id="exampleFormControlTextarea1" rows="5"
            placeholder="Enter your message..."
          />
        </form>
      </div>
    )
}

export default MessageText