import React from 'react';
import './CardType.css'
import ConnectionPseudo from './ConnectionPseudo';
import TextDescriptionUser from './TextDescriptionUser'

const CardType = () => {
    return(
        <div className="background-card">
            <div className="textGlobal-card">
            <ConnectionPseudo />
            <TextDescriptionUser />
            </div>
        </div>
    )
}

export default CardType;