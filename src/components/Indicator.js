import React from 'react';
import './Indicator.css';

class Indicator extends React.Component {
    state ={
        isOnline : true
    }

    render() {
        return(
            <div className={this.state.isOnline ? "online" : "offline" }></div>
        )
    }
}

export default Indicator;