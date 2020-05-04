import React from "react"
import Footer from "../Footer/Footer"
import MembreType from "./MembreType";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import AudreyImage from "./equipe-tindog3.png";
import AristideImage from "./equipe-tindog2.png";
import GretaImage from "./equipe-tindog1.png";
import JubaImage from "./equipe-tindog.png";
import TristanImage from "./equipe-tindog4.png";

import './AboutUs.css';


const members = [
    {
        name : 'Greta',
        image : {url : GretaImage},
        alt : "Avatar de Greta Mezzina"
    },
    {
        name : 'Aristide',
        image : {url :AristideImage},
        alt : "Avatar de Aristide"
    },
    {
        name : 'Juba',
        image : {url :JubaImage},
        alt : "Avatar de Juba Garidi"
    },
    {
        name : 'Tristan',
        image : {url : TristanImage},
        alt : "Avatar de Tristan Manaut"
    },
    {
        name : 'Audrey',
        image : {url : AudreyImage},
        alt : "Avatar de Audrey Ritzenthaler"
    },
]


const AboutUs = () => {
    return(
        <div>
            <SideBar right/>
            <Navbar />
            <h1 className="title-aboutus">About Us</h1>
            <h2 className="team">Member's team</h2>
            <div className="equipe">
                {members.map((member, index) =>
                    <MembreType key={index} image={member.image.url} name={member.name} alt={member.alt} />
                )}
            </div>
            <div>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum !
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs