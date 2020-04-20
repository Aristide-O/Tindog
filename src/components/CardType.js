import React from 'react';
import './CardType.css'
import ConnectionPseudo from './ConnectionPseudo';

const CardType = () => {
    return(
        <div className="background-card">
                <img className="img-card" src="https://tractive.com/static/images/menu/Tractive-DOG-navigation.jpg" alt="test"></img>
                <div className="text-total">
                <ConnectionPseudo />
                <p className="textDescription">Hi ! I am a sweet doggy and i am here to make friends and more if affinities</p>
                </div>
            </div>
    )
}

export default CardType;