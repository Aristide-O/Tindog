import React from 'react';
import './PseudoName.css'
import { render } from '@testing-library/react';

class PseudoName extends React.Component {
    state = {
        userName : []
    }

    getName = () => {
        url = "https://api.namefake.com/";
        axios.get(url);
        .then()
    }

    render() {
        return(
            <div>
                <p>{this.state.userName}</p>
            </div>
        )
    }
}

export default PseudoName;