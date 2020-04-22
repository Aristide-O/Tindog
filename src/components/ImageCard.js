import React from 'react';


class ImageCard extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.image ? <img className="img-card" src={this.props.image.url} alt={this.props.image.id} /> : <p>loading</p>
                }
            </div>

        )
    }
}









export default ImageCard;
