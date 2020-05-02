import React from "react";
import { NavLink } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu";
import './SideBar.css'

export default props => {
  return (
    <Menu {...props}>
        <NavLink to="mainpage">Find match</NavLink>
        <NavLink to="/message">Message</NavLink>
        <NavLink to='/favoriteprofile'>Favorite Profile</NavLink>
        {/* <a href='' >Walk</a> */}
        <NavLink to='/myprofile'>My Profile</NavLink>
    </Menu>
  );
};
