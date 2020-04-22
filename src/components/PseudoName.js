import React from 'react';
import './PseudoName.css';
class PseudoName extends React.Component {

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    render() {
        return(
            <div>
            <p className="name-dog"><b>{this.props.userName && this.props.userName.name.first}</b>, {this.getRandomInt(15)}yo</p>
            </div>
        )
    }
}

export default PseudoName;