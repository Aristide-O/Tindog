import React from 'react';
import { NavLink } from 'react-router-dom'
import '../components/Navbar.css';
import pawprint_navbar from '../icons-navbar/pawprint (1).png';
import logout_navbar from '../icons-navbar/logout.png';
import burger from '../icons-navbar/open-menu (1).png'



function NavbarLoginPage() {
    return (
        <nav className='NavbarLoginPage'>
            <div className='tinder-navbar'>
                <NavLink activeClassName="active" exact to='/'><img className='img-pawprint-navbar' src={pawprint_navbar} alt='logo' /></NavLink>
                <p className='name-navbar'>Tindog</p>
            </div>

            <div>
                <p className='name-navbar-hidden'>Tindog</p>
            </div>

            <div className="p-navbarLoginPage">
                <NavLink activeClassName="active" to='/inscriptionPage'><p className="name-navbar-hidden-loginPage">Sign up</p></NavLink>
            </div>

            <div>
                <div className='icons-navbar'>
                    <NavLink activeClassName="active" exact to='/'><img className='img-icons-navbar' src={logout_navbar} alt='logo' /></NavLink>
                </div>

                <div className='icons-hidden'>
                    <a href='' ><img className='img-burger-navbar' src={burger} alt='menu' /></a>
                </div>
            </div>
        </nav>
    )

}

export default NavbarLoginPage;