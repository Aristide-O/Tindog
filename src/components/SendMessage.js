import React from 'react'
import MessageText from './MessageText'


const TextareaPage = () => {

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className="fas fa-pencil-alt prefix"></i>
        </span>
      </div>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"><MessageText /></textarea>

      <button>Envoyer</button>
    </div>
  )
}

export default TextareaPage;