import React from 'react';
import  '../components/Navbar.css';
import pawprint_navbar from '../icons-navbar/pawprint (1).png';
import home from '../icons-navbar/home.png';
import message from '../icons-navbar/speech-bubble.png';
import like from '../icons-navbar/like.png';
import map from '../icons-navbar/folding-map (1).png';
import profile from '../icons-navbar/user-image-with-black-background (1).png';
import burger from '../icons-navbar/open-menu (1).png'


function Navbar() {
    return (
        <nav className='Navbar'>
          <div className='tinder-navbar'>
           <img className='img-pawprint-navbar' src={pawprint_navbar} alt='logo'/>
           <p className='name-navbar'>Tindog</p>
          </div>

          <div>
          <p className='name-navbar-hidden'>Tindog</p>
          </div>

         <div>

          <div className='icons-navbar'>
           <a href='' ><img className='img-icons-navbar' src={home} alt='home'/></a>
           <a href='' ><img className='img-icons-navbar' src={message} alt='message'/></a>
           <a href='' ><img className='img-icons-navbar' src={like} alt='like'/></a>
           <a href='' ><img className='img-icons-navbar' src={map} alt='map'/></a>
           <a href='' ><img className='img-icons-navbar' src={profile} alt='profile'/></a>
          </div>

          <div className='icons-hidden'>
           <a href='' ><img className='img-burger-navbar' src={burger} alt='menu'/></a>
          </div>
          </div>


         </nav>
    )

}

export default Navbar;
