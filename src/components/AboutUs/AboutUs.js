import React from "react"
import GretaImage from "./equipe-tingog1.jpg";
import AristideImage from "./equipe-tingog2.jpg";
import JubaImage from "./equipe-tingog3.jpg";
import TristanImage from "./equipe-tingog4.jpg";
import AudreyImage from "./equipe-tingog5.jpg";


members = [
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
            {members.map(member, index => <MembreType />)}
        </div>
    )
}

export default AboutUs