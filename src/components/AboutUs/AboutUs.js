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
        name: 'Greta',
        image: { url: GretaImage },
        alt: "Avatar de Greta Mezzina"
    },
    {
        name: 'Aristide',
        image: { url: AristideImage },
        alt: "Avatar de Aristide"
    },
    {
        name: 'Juba',
        image: { url: JubaImage },
        alt: "Avatar de Juba Garidi"
    },
    {
        name: 'Tristan',
        image: { url: TristanImage },
        alt: "Avatar de Tristan Manaut"
    },
    {
        name: 'Audrey',
        image: { url: AudreyImage },
        alt: "Avatar de Audrey Ritzenthaler"
    },
]


const AboutUs = () => {
    return (
        <div>
            <SideBar right />
            <Navbar />
            <h1 className="title-aboutus">About Us</h1>
            <h2 className="team">Team Members</h2>
            <div className="equipe">
                {members.map((member, index) =>
                    <MembreType key={index} image={member.image.url} name={member.name} alt={member.alt} />
                )}
            </div>
            <div>
                <p className="description">
                    Once upon a Time, there were five aspiring web developers with a challenging idea: creating a mobile application for dog owners and their little furry companions, the goal was to ease finding their pets a friend in the busy city life.
                    The five of them were enrolled in an intensive program to learn Full-stack JavaScript Development, which started in March 2020 and would end in July, covering some of the most used web development technologies: HTML/CSS, JS, ReactJS, NodeJS and SQL.
                <br />
                    <br />
                The project rose in a moment we all remember, quarantine, the group could do nothing but coding, and so they did. They had four weeks for the development and some days for the wireframing and mockups.
                The idea was simple, to reproduce wildly understandable UX with a sexy interface, and so they decided to code in ReactJS, putting into practice all the knowledge they had acquired in two months of coding school: classes, sates, lifting states, axios etc...The UI easily remembers other meeting apps, with bright colors and an intuitive design, it is possible to like a dog, to write to his owner and finally to keep all the liked dog profiles in a specific page
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs