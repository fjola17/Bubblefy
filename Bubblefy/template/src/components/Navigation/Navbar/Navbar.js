import React from 'react';
import NavLinks from '../NavLinks/NavLinks'
import Logo from '../Logo/Logo';

const Navbar = () =>{
    return(        
        <nav className="navbar navbar-expand-lg navs">
            <Logo />
            <NavLinks />
        </nav>

    )
}
export default Navbar;