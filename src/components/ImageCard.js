import React from 'react';
import axios from 'axios';

class ImageCard extends React.Component {
    state = {
        image: null
    }

    getImage() {
        axios({
            method: "get",
            url: 'https://api.thedogapi.com/v1/images/search',
            headers: { 'x-api-key': "c05c2be9-d216-4f53-95de-6a5a06f0ae71" }
        })
            .then(res => this.setState({ image: res.data[0] }))
    }

    componentDidMount() {
        this.getImage()
    }

    render() {
        return (
            <div>
                {
                    this.state.image ? <img className="img-card" src={this.state.image.url} alt={this.state.image.id} /> : <p>loading</p>
                }
            </div>

        )
    }
}









export default ImageCard;
