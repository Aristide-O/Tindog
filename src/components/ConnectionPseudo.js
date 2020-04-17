import React from "react";
import Indicator from './Indicator';
import PseudoName from './PseudoName';
import './ConnectionPseudo.css';


const ConnectionPseudo = () => {
    return(
        <div className="co-pseudo">
            <Indicator />
            <PseudoName />
        </div>
    )
}

export default ConnectionPseudo;