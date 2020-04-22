import React from 'react';
import ConnectionPseudo from './ConnectionPseudo';
import ImageCard from './ImageCard';
import MatchButton from '../components/MatchButton'
import './CardType.css'


const CardType = () => {
    return(
        <div className="background-card">
                <ImageCard className="img-card" />
                <div className="text-total">
                <ConnectionPseudo />
                <p className="textDescription">Hi ! I am a sweet doggy and i am here to make friends and more if affinities</p>
                </div>
                <div>
                <MatchButton />
                </div>
            </div>

    )
}

export default CardType;
