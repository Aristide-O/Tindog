import React from "react"
import MembreType from "./MembreType";
import AudreyImage from "equipe-tindog5.jpg";
import AristideImage from "equipe-tindog2.jpg";
import GretaImage from "equipe-tindog1.jpg";
import JubaImage from "equipe-tindog3.jpg";
import TristanImage from "equipe-tindog4.jpg";

import './AboutUs.css';


const members = [
    {
        name : 'Greta',
        image : {GretaImage},
        alt : "Avatar de Greta Mezzina"
    },
    {
        name : 'Aristide',
        image : {AristideImage},
        alt : "Avatar de Aristide"
    },
    {
        name : 'Juba',
        image : {JubaImage},
        alt : "Avatar de Juba Garidi"
    },
    {
        name : 'Tristan',
        image : {TristanImage},
        alt : "Avatar de Tristan Manaut"
    },
    {
        name : 'Audrey',
        image : {AudreyImage},
        alt : "Avatar de Audrey Ritzenthaler"
    },
]


const AboutUs = () => {
    return(
        <div className="equipe">
            <h2 className="title-aboutus">About Us</h2>
            {members.map((member, index) =>
                 <MembreType key={index} image={member.image} name={member.name} alt={member.alt} />
            )}
        </div>
    )
}

export default AboutUs