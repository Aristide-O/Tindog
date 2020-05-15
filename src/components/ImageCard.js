import React from 'react';


class ImageCard extends React.Component {
    state = {
        caption: null 
    }

    handleError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
        this.setState({ caption : "Image non contractuelle" })
    }

    componentDidUpdate(prevProps) {
        if (this.props.image !== prevProps.image) {
            this.setState({ caption : null })
        }
    }

    render() {
        return (
            <div>
                <figure>
                    {
                        this.props.image ? <img className="img-card" onError={this.handleError} src={this.props.image.url} alt="Ce chien est trop timide pour montrer sa truffe !" /> : <img src="https://thumbs.gfycat.com/ForcefulImmaterialIndianskimmer-max-1mb.gif" alt="loading" />
                    }
                    <figcaption>
                        {this.state.caption}
                    </figcaption>
                </figure>
            </div>

        )
    }
}


export default ImageCard;
