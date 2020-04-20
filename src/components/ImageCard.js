import React from 'react';
import axios from 'axios';

class ImageCard extends React.Component {
    state = {
        image : null
    }

getImage() {
    axios
    .get("")
    .then(res => this.setState({ image : res.data}))
}

    render() {
        return (
            <img src={this.state.image} alt={this.state}/>
        )
    }
}









export default ImageCard;
