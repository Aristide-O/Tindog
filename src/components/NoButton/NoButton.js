import React from 'react';
import './NoButton.css';


class NoButton extends React.Component {

  render(){ 
    return (
          <button className="noButton" type="" onClick={() => this.props.fetch()}>
          </button> 
        )
  }
}



export default NoButton;