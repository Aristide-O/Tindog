import React from "react";

import Indicator from './Indicator';
import PseudoName from './PseudoName';

import './ConnectionPseudo.css';


const ConnectionPseudo = (props) => {
    return(
        <div className="co-pseudo">
            <Indicator />
            <PseudoName userName={props.pseudo}/>
        </div>
    )
}

export default ConnectionPseudo;