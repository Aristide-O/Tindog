import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Navbar.css';
import pawprint_navbar from '../icons-navbar/pawprint (1).png';
import logout_navbar from '../icons-navbar/logout.png';
import burger from '../icons-navbar/open-menu (1).png';



function NavbarInscriptionPage() {
    return (
        <nav className='Navbar'>
            <div className='tinder-navbar'>
                <NavLink activeClassName="active" exact to='/'><img className='img-pawprint-navbar-intro' src={pawprint_navbar} alt='logo' /></NavLink>
                <p className='name-navbar'>Tindog</p>
            </div>

            <div>
                <p className="name-navbar-hidden-tindog">Tindog</p>
            </div>

            <div className='icons-hidden'>
                <a href='' ><img className='img-burger-navbar' src={burger} alt='menu' /></a>
            </div>

            <div className="p-navbarInscriptionPage">
                <NavLink activeClassName="active" to='/loginpage'><p className="name-navbar-hidden-signIn">Sign in</p></NavLink>
            </div>
            
            <div className='icons-navbar'>
                <NavLink activeClassName="active" exact to='/'><img className='img-icons-navbar' src={logout_navbar} alt='logo' /></NavLink>
            </div>
        </nav>
    )

}

export default NavbarInscriptionPage;
