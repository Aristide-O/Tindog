import React from 'react'
import { NavLink } from 'react-router-dom'

import burger from '../icons-navbar/open-menu (1).png'
import home from '../icons-navbar/home.png'
import like from '../icons-navbar/like.png'
import message from '../icons-navbar/speech-bubble.png'
import logout_navbar from '../icons-navbar/logout.png'
import pawprint_navbar from '../icons-navbar/pawprint (1).png'
import profile from '../icons-navbar/user-image-with-black-background (1).png'

import '../components/Navbar.css'



function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='tinder-navbar'>
                <NavLink activeClassName="active" exact to='/'><img className='img-pawprint-navbar' src={pawprint_navbar} alt='logo' /></NavLink>
                <p className='name-navbar'>Tindog</p>
            </div>

            <div>
                <p className='name-navbar-hidden'>Tindog</p>
            </div>

            <div>
                <div className='icons-navbar'>
                    <NavLink activeClassName="active" exact to='/mainpage'><img className='img-icons-navbar' src={home} alt='home' /></NavLink>
                    <NavLink activeClassName="active" exact to='/message'><img className='img-icons-navbar' src={message} alt='message' /></NavLink>
                    <NavLink activeClassName="active" to='/favoriteprofile'><img className='img-icons-navbar' src={like} alt='like' /></NavLink>
                    <NavLink activeClassName="active" to='/myprofile'><img className='img-icons-navbar' src={profile} alt='profile' /></NavLink>
                    <NavLink activeClassName="active" exact to='/'><img className='img-icons-navbar' src={logout_navbar} alt='logo' /></NavLink>
                </div>

                <div className='icons-hidden'>
                    <a href='' ><img className='img-burger-navbar' src={burger} alt='menu' /></a>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;
