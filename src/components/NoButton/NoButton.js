import React from 'react'
import './NoButton.css'
import redPaw from '/Users/gretamezzina/Desktop/paris-0320-prject2-tindog/src/components/NoButton/redPaw.png'


class NoButton extends React.Component {
    render(){
    return (
        <div className="noButtonContainer">
        <a href=''><img className="noButton" src={redPaw} onClick={(e) =>(window.confirm("I wanna see an other dog"))}/></a>
        </div>
    )
    }
}

export default NoButton