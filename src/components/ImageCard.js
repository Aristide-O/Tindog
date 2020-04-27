import React from 'react';


class ImageCard extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.image ? <img className="img-card" src={this.props.image.url} alt={this.props.image.id} /> : <img src="https://thumbs.gfycat.com/ForcefulImmaterialIndianskimmer-max-1mb.gif" alt="loading" />
                }
            </div>

        )
    }
}


export default ImageCard;
