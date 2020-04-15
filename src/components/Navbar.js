import React from 'react';
import  '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/components/Navbar.css';
import pawprint from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/pawprint (1).png';
import home from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/home.png';
import message from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/speech-bubble.png';
import like from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/like.png';
import map from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/folding-map (1).png';
import profile from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/user-image-with-black-background (1).png';
import burger from '/Users/ariomega/Desktop/Tindog/paris-0320-prject2-tindog/src/icons-navbar/open-menu (1).png'

function Navbar() {
    return (
        <nav className='Navbar'>
        <div className='tinder-navbar'>
        <img className='img-pawprint-navbar' src={pawprint} alt='logo'/>
        <p className='name-navbar'>Tindog</p>
        </div>
        <div className='icons-navbar'>
        <a href='' ><img className='img-pawprint-navbar' src={home} alt='logo'/></a>
        <a href='' ><img className='img-pawprint-navbar' src={message} alt='logo'/></a>
        <a href='' ><img className='img-pawprint-navbar' src={like} alt='logo'/></a>
        <a href='' ><img className='img-pawprint-navbar' src={map} alt='logo'/></a>
        <a href='' ><img className='img-pawprint-navbar' src={profile} alt='logo'/></a>
        </div>
        <div className='icons-hidden'>
        <a href='' ><img className='img-burger-navbar' src={burger} alt='logo'/></a>
        </div>
</nav>
    )

}

export default Navbar;
