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
        .then(res => this.setState({ userName: res.data }));
    }

    componentDidMount() {
        this.getName()
    }

    render() {
        console.log(this.state.userName.results);
        return(
            <div>
                <p>{this.state.userName.name}</p>
            </div>
        )
    }
}

export default PseudoName;