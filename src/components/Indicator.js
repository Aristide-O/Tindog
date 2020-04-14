import React from 'react';
import './Indicator.css'

class Indicator extends React.Component {
    state ={
        isOnline : true
    }

    render() {
        return(
            <div>
                <div className={this.state.isOnline ? "online" : "offline" }></div>
            </div>
        )
    }
}

export default Indicator;