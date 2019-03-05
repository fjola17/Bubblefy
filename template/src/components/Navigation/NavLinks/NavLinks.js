import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = () =>{
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/Bubbles" className="navLinks">Bubbles</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/Bundles" className="navLinks">Bundles</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/About" className="navLinks">About us</NavLink>
            </li>
            <li className="nav-item"><NavLink to="/Cart" className="navLinks">Cart</NavLink></li>
        </ul>
    )
}

export default NavLinks;