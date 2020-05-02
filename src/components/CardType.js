import React from 'react';

import ConnectionPseudo from './ConnectionPseudo';
import ImageCard from './ImageCard';

import './CardType.css'


const CardType = (props) => {
    return(
        <div className="background-card">
                <ImageCard className="img-card" image={props.dogData.image}/>
                <div className="text-total">
                <ConnectionPseudo pseudo={props.dogData.userName}/>
                <p className="textDescription">Hi ! I am a sweet doggy and i am here to make friends and more if affinities</p>
                </div>
            </div>
    )
}

export default CardType;