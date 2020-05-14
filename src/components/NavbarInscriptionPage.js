import React from 'react';
import { NavLink } from 'react-router-dom'
import '../components/Navbar.css';
import pawprint_navbar from '../icons-navbar/pawprint (1).png';
import logout_navbar from '../icons-navbar/logout.png';


function NavbarInscriptionPage() {
    return (
        <nav className='NavbarLoginPage'>
            <div className='tinder-navbar'>
                <NavLink activeClassName="active" exact to='/'><img className='img-pawprint-navbar' src={pawprint_navbar} alt='logo' /></NavLink>
            </div>

            <div className="center-logo">
                <p className='name-navbar-hidden'>Tindog</p>
            </div>

            <div className="p-navbarLoginPage">
                <NavLink activeClassName="active" to='/loginpage'><p className="name-navbar-hidden-inscriptionPage">Sign in</p></NavLink>
            </div>

                <div className='icons-navbar'>
                    <NavLink activeClassName="active" exact to='/'><img className='img-icons-navbar' src={logout_navbar} alt='logo' /></NavLink>
                </div>
        </nav>
    )

}

export default NavbarInscriptionPage;
