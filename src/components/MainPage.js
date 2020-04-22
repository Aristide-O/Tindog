import React from "react";
import { NavLink } from "react-router-dom"
import CardType from './CardType';
import Navbar from "../components/Navbar";
import home from '../icons-navbar/home.png';
import message from '../icons-navbar/speech-bubble.png';
import like from '../icons-navbar/like.png';
// import map from '../icons-navbar/folding-map (1).png';
import profile from '../icons-navbar/user-image-with-black-background (1).png';
import  '../components/Navbar.css';

const MainPage = () => {
    return(
        <div>
        <Navbar />
            <nav>
                <ul className="icons-navbar">
                    <li>
                        <NavLink activeClassName="active" exact to='/'><img className='img-icons-navbar' src={home} alt='home'/></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/favoriteprofile'><img className='img-icons-navbar' src={like} alt='like'/></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/myprofile'><img className='img-icons-navbar' src={profile} alt='profile'/></NavLink>
                    </li>
                </ul>
            </nav>
            <CardType />
        </div>

    )
}

export default MainPage;
