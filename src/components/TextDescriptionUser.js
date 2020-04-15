import React from 'react';
import axios from 'axios';

class TextDescriptionUser extends React.Component {
    state = {
        descriptionUser : []
    }

    getDescription() {
        axios
        .get(" http://www.randomtext.me/api/")
        .then(res => {this.setState({descriptionUser : res.data})})
    }

    componentDidMount() {
        this.getDescription()
    }

    render() {
        return(
            <div>
              {this.state.descriptionUser.text_out}
            </div>
        )
    }
}

export default TextDescriptionUser;