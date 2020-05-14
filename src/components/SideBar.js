import React from "react";
import { NavLink } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu";
import logout_navbar from '../icons-navbar/logout.png'
import './SideBar.css'

export default props => {
  return (
    <Menu {...props}>
        <NavLink to="mainpage">Find match</NavLink>
        <NavLink to="/message">Message</NavLink>
        <NavLink to='/favoriteprofile'>Favorite Profiles</NavLink>
        <NavLink to='/myprofile'>My Profile</NavLink>
        <NavLink activeClassName="active" exact to='/'><img className='img-icons-navbar' src={logout_navbar} alt='logo'/></NavLink>
    </Menu>
  );
};
