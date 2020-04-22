import React from 'react';
import './PseudoName.css';
import axios from 'axios';

class PseudoName extends React.Component {
    state = {
        userName : []
    }

    getName = () => {
        axios
        .get("https://randomuser.me/api/")
        .then(res => this.setState({ userName: res.data.results[0] }));
    }

    componentDidMount() {
        this.getName()
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    render() {
        return(
            <div>
            <p className="name-dog"><b>{this.state.userName.name && this.state.userName.name.first}</b>, {this.getRandomInt(15)}yo</p>
            </div>
        )
    }
}

export default PseudoName;