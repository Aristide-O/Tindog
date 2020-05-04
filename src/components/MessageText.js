import React from 'react';

const MessageText = () => {
    return (
        <div className="chatInputWrapper">
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