import React, { Fragment } from 'react'
import MessageText from "./MessageText"
import "./SendMessage.css"


const TextareaPage = () => {

  return (

    <div className="MessageText">

      <div className="MessageTextLeft">
        <MessageText />
      </div>
      <div className="MessageTextRight">
        <MessageText />
      </div>
      <div className="MessageTextLeft">
        <MessageText />
      </div>
      <div className="MessageTextRight">
        <MessageText />
      </div>
      <div className="MessageTextLeft">
        <MessageText />
      </div>
      <div className="MessageTextRight">
        <MessageText />
      </div>
      <div className="MessageTextLeft">
        <MessageText />
      </div>
      <div className="MessageTextRight">
        <MessageText />
      </div>
    </div>
  )
}

export default TextareaPage;